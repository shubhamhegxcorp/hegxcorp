import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { cn } from "@/lib/utils";

export interface ShaderCardProps {
  width?: string | number;
  height?: string | number;
  borderRadius?: string;
  speed?: number;
  color?: string;
  positionY?: number;
  scale?: number;
  effectRadius?: number;
  effectBoost?: number;
  edgeMin?: number;
  edgeMax?: number;
  falloffPower?: number;
  noiseScale?: number;
  widthFactor?: number;
  waveAmount?: number;
  branchIntensity?: number;
  verticalExtent?: number;
  horizontalExtent?: number;
  blur?: number;
  opacity?: number;
  children?: React.ReactNode;
  className?: string;
  fragmentShader?: string;
  autoPlay?: boolean;
  hoverOnly?: boolean;
  isHovered?: boolean;
}

const vertexShader = `
  void main() {
    gl_Position = vec4(position, 1.0);
  }
`;

const defaultFragmentShader = `
  uniform float iTime;
  uniform vec3 iResolution;
  uniform vec3 uColor;
  uniform float uPositionY;
  uniform float uScale;
  uniform float uEffectRadius;
  uniform float uEffectBoost;
  uniform float uEdgeMin;
  uniform float uEdgeMax;
  uniform float uFalloffPower;
  uniform float uNoiseScale;
  uniform float uWidthFactor;
  uniform float uWaveAmount;
  uniform float uBranchIntensity;
  uniform float uVerticalExtent;
  uniform float uHorizontalExtent;

  vec3 random3(vec3 c) {
    float j = 4096.0*sin(dot(c,vec3(17.0, 59.4, 15.0)));
    vec3 r;
    r.z = fract(512.0*j);
    j *= .125;
    r.x = fract(512.0*j);
    j *= .125;
    r.y = fract(512.0*j);
    return r-0.5;
  }

  const float F3 =  0.3333333;
  const float G3 =  0.1666667;

  float simplex3d(vec3 p) {
    vec3 s = floor(p + dot(p, vec3(F3)));
    vec3 x = p - s + dot(s, vec3(G3));

    vec3 e = step(vec3(0.0), x - x.yzx);
    vec3 i1 = e*(1.0 - e.zxy);
    vec3 i2 = 1.0 - e.zxy*(1.0 - e);

    vec3 x1 = x - i1 + G3;
    vec3 x2 = x - i2 + 2.0*G3;
    vec3 x3 = x - 1.0 + 3.0*G3;

    vec4 w, d;

    w.x = dot(x, x);
    w.y = dot(x1, x1);
    w.z = dot(x2, x2);
    w.w = dot(x3, x3);

    w = max(0.6 - w, 0.0);

    d.x = dot(random3(s), x);
    d.y = dot(random3(s + i1), x1);
    d.z = dot(random3(s + i2), x2);
    d.w = dot(random3(s + 1.0), x3);

    w *= w;
    w *= w;
    d *= w;

    return dot(d, vec4(52.0));
  }

  #define NIGHTSPEEDBONUS 1.25
  #define SHAPE 0
  #define BREATHWILDNESS 1
  #define PI 3.14159265359

  void mainImage( out vec4 fragColor, in vec2 fragCoord ) {
    float time = 28.22 + NIGHTSPEEDBONUS * iTime;
    float bignessScale = 1.0 / uNoiseScale;

    vec2 uv = (fragCoord.xy / iResolution.xy) * 2.0 - 1.0;
    float aspect = iResolution.x / iResolution.y;
    uv.x *= aspect;

    float effectiveScale = max(uScale, 0.5);
    uv = uv / effectiveScale;

    float yOffset = mix(-0.3, 0.8, uPositionY);
    uv.y -= yOffset;

    uv.y *= uVerticalExtent;
    uv.x *= uHorizontalExtent;

    vec2 p = (uv / aspect + 1.0) * 0.5;
    p.x *= aspect;

    vec2 positionFromCenter = uv;
    positionFromCenter /= uEffectRadius;
    positionFromCenter.x /= uWidthFactor;
    float positionFromBottom = 0.5 * (positionFromCenter.y + 1.0);

    vec2 waveOffset = vec2(0.0);
    waveOffset.x += positionFromBottom * sin(4.0 * positionFromCenter.y - 4.0 * time);
    waveOffset.x += 0.1 * positionFromBottom * sin(4.0 * positionFromCenter.x - 1.561 * time);

    waveOffset.x += uBranchIntensity * 0.15 * sin(8.0 * positionFromCenter.y + time * 2.0);
    waveOffset.x += uBranchIntensity * 0.1 * sin(12.0 * positionFromCenter.y - time * 1.5);
    waveOffset.y += uBranchIntensity * 0.08 * sin(6.0 * positionFromCenter.x + time * 1.8);

    positionFromCenter += uWaveAmount * waveOffset;

    if (SHAPE == 0) {
      positionFromCenter.x += positionFromCenter.x / max(0.001, (1.0 - (positionFromCenter.y)));
    } else if (SHAPE == 1) {
      positionFromCenter.x += positionFromCenter.x * positionFromBottom;
    } else if (SHAPE == 2) {
      positionFromCenter.x += sign(positionFromCenter.x) * positionFromBottom;
    }

    float effectMask = clamp(1.0 - length(positionFromCenter), 0.0, 1.0);
    effectMask = 1.0 - pow(1.0 - effectMask, uFalloffPower);

    vec3 p3 = bignessScale * 0.25 * vec3(p.x, p.y, 0.0) + vec3(0.0, -time * 0.1, time * 0.025);
    float noise = simplex3d(p3 * 32.0);

    noise += 0.3 * simplex3d(p3 * 64.0 + vec3(time * 0.05, time * 0.03, 0.0));
    noise += 0.15 * simplex3d(p3 * 128.0 - vec3(time * 0.08, 0.0, time * 0.04));

    noise = 0.5 + 0.5 * noise;

    vec3 finalColor = vec3(0.0);
    float finalAlpha = 0.0;

    float value = effectMask * noise;
    value += uEffectBoost * effectMask;

    if (BREATHWILDNESS == 1) {
      float edge = mix(uEdgeMin, uEdgeMax, pow(max(0.0, 0.5 * (positionFromCenter.y + 1.0)), 1.2));
      float edgedValue = clamp(value - edge, 0.0, 1.0);
      float steppedValue = smoothstep(edge, edge + 0.1, value);
      float highlight = 1.0 - edgedValue;
      float repeatedValue = highlight;

      p3 = bignessScale * 0.1 * vec3(p.x, p.y, 0.0) + vec3(0.0, -time * 0.01, time * 0.025);
      noise = simplex3d(p3 * 32.0);
      noise = 0.5 + 0.5 * noise;
      repeatedValue = mix(repeatedValue, noise, 0.65);

      repeatedValue = 0.5 * sin(6.0 * PI * (1.0 - pow(max(0.0, 1.0 - repeatedValue), 1.8)) - 0.5 * PI) + 0.5;
      float steppedLines = smoothstep(0.95, 1.0, pow(repeatedValue, 8.0));
      steppedLines = mix(steppedLines, 0.0, max(0.0, 0.8 - noise));
      highlight = max(steppedLines, highlight);

      highlight = pow(highlight, 2.0);

      vec3 fireCore = vec3(1.0, 0.95, 0.7);
      vec3 effectHighlightColor = mix(uColor * 1.1, fireCore, highlight);

      float whiteFlash = sin(time * 3.0);
      whiteFlash = pow(max(0.0, whiteFlash), 4.0);
      effectHighlightColor += vec3(0.4, 0.25, 0.1) * whiteFlash;

      vec3 effectBodyColor = mix(vec3(0.95, 0.3, 0.05), uColor * 1.3, p.y);

      finalColor = effectHighlightColor * (steppedValue * highlight * 1.5);
      finalColor += effectBodyColor * steppedValue * 1.25;

      float brightness = dot(finalColor, vec3(0.299, 0.587, 0.114));
      float alphaBoost = smoothstep(0.0, 0.3, brightness);
      finalAlpha = steppedValue * mix(0.6, 1.0, alphaBoost);
    }

    fragColor = vec4(finalColor, finalAlpha);
  }

  void main() {
    vec4 color = vec4(0.0);
    mainImage(color, gl_FragCoord.xy);
    gl_FragColor = color;
  }
`;

export function ShaderCard({
  width = "100%",
  height = "100%",
  borderRadius = "16px",
  speed = 0.65,
  color = "#FC9C44",
  positionY = 0.2,
  scale = 3.2,
  effectRadius = 0.9,
  effectBoost = 0.5,
  edgeMin = 0.0,
  edgeMax = 0.85,
  falloffPower = 2.2,
  noiseScale = 1.5,
  widthFactor = 1.4,
  waveAmount = 0.2,
  branchIntensity = 1.8,
  verticalExtent = 1.4,
  horizontalExtent = 1.4,
  blur = 0,
  opacity = 0.95,
  children,
  className,
  fragmentShader,
  autoPlay = true,
  hoverOnly = false,
  isHovered: controlledHovered,
}: ShaderCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const [internalHovered, setInternalHovered] = useState(false);

  const isHovered = controlledHovered !== undefined ? controlledHovered : internalHovered;
  const shouldAnimate = hoverOnly ? isHovered : autoPlay;

  const isAnimatingRef = useRef(shouldAnimate);
  isAnimatingRef.current = shouldAnimate;

  const animationFrameRef = useRef<number>(0);
  const startTimeRef = useRef<number>(0);

  useEffect(() => {
    const container = canvasContainerRef.current;
    if (!container) return;

    const threeColor = new THREE.Color(color);
    const rect = container.getBoundingClientRect();
    const w = rect.width || 300;
    const h = rect.height || 200;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      });
    } catch {
      return;
    }

    renderer.setSize(w, h, false);
    renderer.setPixelRatio(dpr);
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    renderer.domElement.style.display = "block";
    renderer.domElement.style.pointerEvents = "none";
    container.appendChild(renderer.domElement);

    const uniforms = {
      iTime: { value: 0 },
      iResolution: { value: new THREE.Vector3(w * dpr, h * dpr, 1) },
      uColor: { value: new THREE.Vector3(threeColor.r, threeColor.g, threeColor.b) },
      uPositionY: { value: positionY },
      uScale: { value: scale },
      uEffectRadius: { value: effectRadius },
      uEffectBoost: { value: effectBoost },
      uEdgeMin: { value: edgeMin },
      uEdgeMax: { value: edgeMax },
      uFalloffPower: { value: falloffPower },
      uNoiseScale: { value: noiseScale },
      uWidthFactor: { value: widthFactor },
      uWaveAmount: { value: waveAmount },
      uBranchIntensity: { value: branchIntensity },
      uVerticalExtent: { value: verticalExtent },
      uHorizontalExtent: { value: horizontalExtent },
    };

    const material = new THREE.ShaderMaterial({
      uniforms,
      vertexShader,
      fragmentShader: fragmentShader || defaultFragmentShader,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthTest: false,
      depthWrite: false,
    });

    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    startTimeRef.current = performance.now();

    const render = () => {
      animationFrameRef.current = requestAnimationFrame(render);
      if (isAnimatingRef.current) {
        const elapsed = (performance.now() - startTimeRef.current) / 1000;
        uniforms.iTime.value = elapsed * speed;
        renderer.render(scene, camera);
      }
    };

    render();

    const handleResize = () => {
      if (!container) return;
      const currentRect = container.getBoundingClientRect();
      const currentW = currentRect.width || 300;
      const currentH = currentRect.height || 200;
      renderer.setSize(currentW, currentH, false);
      uniforms.iResolution.value.set(currentW * dpr, currentH * dpr, 1);
      renderer.render(scene, camera);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameRef.current);
      scene.remove(mesh);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      if (renderer.domElement && renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [
    color,
    speed,
    positionY,
    scale,
    effectRadius,
    effectBoost,
    edgeMin,
    edgeMax,
    falloffPower,
    noiseScale,
    widthFactor,
    waveAmount,
    branchIntensity,
    verticalExtent,
    horizontalExtent,
    fragmentShader,
  ]);

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setInternalHovered(true)}
      onMouseLeave={() => setInternalHovered(false)}
      className={cn("relative overflow-hidden transition-all duration-300", className)}
      style={{
        width,
        height,
        borderRadius,
      }}
    >
      {/* WebGL Shader Canvas background */}
      <div
        ref={canvasContainerRef}
        className="pointer-events-none absolute inset-0 transition-opacity duration-500 ease-out"
        style={{
          filter: blur > 0 ? `blur(${blur}px)` : undefined,
          opacity: hoverOnly ? (isHovered ? opacity : 0) : opacity,
        }}
      />

      {/* Children content */}
      {children && <div className="relative z-10 w-full h-full flex flex-col">{children}</div>}
    </div>
  );
}

export default ShaderCard;
