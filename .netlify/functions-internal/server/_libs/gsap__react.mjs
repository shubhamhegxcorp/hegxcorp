import { r as reactExports } from "./react.mjs";
import { g as gsapWithCSS } from "./gsap.mjs";
let useIsomorphicLayoutEffect = typeof document !== "undefined" ? reactExports.useLayoutEffect : reactExports.useEffect, isConfig = (value) => value && !Array.isArray(value) && typeof value === "object", emptyArray = [], defaultConfig = {}, _gsap = gsapWithCSS;
const useGSAP = (callback, dependencies = emptyArray) => {
  let config = defaultConfig;
  if (isConfig(callback)) {
    config = callback;
    callback = null;
    dependencies = "dependencies" in config ? config.dependencies : emptyArray;
  } else if (isConfig(dependencies)) {
    config = dependencies;
    dependencies = "dependencies" in config ? config.dependencies : emptyArray;
  }
  callback && typeof callback !== "function" && console.warn("First parameter must be a function or config object");
  const { scope, revertOnUpdate } = config, mounted = reactExports.useRef(false), context = reactExports.useRef(_gsap.context(() => {
  }, scope)), contextSafe = reactExports.useRef((func) => context.current.add(null, func)), deferCleanup = dependencies && dependencies.length && !revertOnUpdate;
  deferCleanup && useIsomorphicLayoutEffect(() => {
    mounted.current = true;
    return () => context.current.revert();
  }, emptyArray);
  useIsomorphicLayoutEffect(() => {
    callback && context.current.add(callback, scope);
    if (!deferCleanup || !mounted.current) {
      return () => context.current.revert();
    }
  }, dependencies);
  return { context: context.current, contextSafe: contextSafe.current };
};
useGSAP.register = (core) => {
  _gsap = core;
};
useGSAP.headless = true;
export {
  useGSAP as u
};
