import { g as get, s as set, a as appendErrors } from "./react-hook-form.mjs";
import { p as parse, a as parseAsync, $ as $ZodError } from "./zod.mjs";
const r = (t2, r2, o2) => {
  if (t2 && "reportValidity" in t2) {
    const s2 = get(o2, r2);
    t2.setCustomValidity(s2 && s2.message || ""), t2.reportValidity();
  }
}, o = (e, t2) => {
  for (const o2 in t2.fields) {
    const s2 = t2.fields[o2];
    s2 && s2.ref && "reportValidity" in s2.ref ? r(s2.ref, o2, e) : s2 && s2.refs && s2.refs.forEach((t3) => r(t3, o2, e));
  }
}, s$1 = (r2, s2) => {
  s2.shouldUseNativeValidation && o(r2, s2);
  const n2 = {};
  for (const o2 in r2) {
    const c = get(s2.fields, o2), f = Object.assign(r2[o2] || {}, { ref: c && c.ref });
    if (i$1(s2.names || Object.keys(r2), o2)) {
      const r3 = Object.assign({}, get(n2, o2));
      set(r3, "root", f), set(n2, o2, r3);
    } else set(n2, o2, f);
  }
  return n2;
}, i$1 = (e, t2) => {
  const r2 = n(t2).replace(/[.*+?^${}()|\\]/g, "\\$&");
  return e.some((e2) => n(e2).match(`^${r2}\\.\\d+`));
};
function n(e) {
  return e.replace(/[\[\]]/g, "");
}
function t() {
  return t = Object.assign ? Object.assign.bind() : function(r2) {
    for (var e = 1; e < arguments.length; e++) {
      var n2 = arguments[e];
      for (var o2 in n2) ({}).hasOwnProperty.call(n2, o2) && (r2[o2] = n2[o2]);
    }
    return r2;
  }, t.apply(null, arguments);
}
function s(r2, e) {
  try {
    var n2 = r2();
  } catch (r3) {
    return e(r3);
  }
  return n2 && n2.then ? n2.then(void 0, e) : n2;
}
function i(r2, e) {
  for (var o2 = {}; r2.length; ) {
    var t2 = r2[0], s2 = t2.code, i2 = t2.message, a2 = t2.path.join(".");
    if (!o2[a2]) if ("unionErrors" in t2) {
      var u2 = t2.unionErrors[0].errors[0];
      o2[a2] = { message: u2.message, type: u2.code };
    } else o2[a2] = { message: i2, type: s2 };
    if ("unionErrors" in t2 && t2.unionErrors.forEach(function(e2) {
      return e2.errors.forEach(function(e3) {
        return r2.push(e3);
      });
    }), e) {
      var c = o2[a2].types, f = c && c[t2.code];
      o2[a2] = appendErrors(a2, e, o2, s2, f ? [].concat(f, t2.message) : t2.message);
    }
    r2.shift();
  }
  return o2;
}
function a(r2, e) {
  for (var o2 = {}, s2 = function() {
    var s3 = r2[0], i2 = s3.code, a2 = s3.message, u2 = s3.path.join(".");
    if (!o2[u2]) if ("invalid_union" === s3.code && s3.errors.length > 0) {
      var c = s3.errors[0][0];
      o2[u2] = { message: c.message, type: c.code };
    } else o2[u2] = { message: a2, type: i2 };
    if ("invalid_union" === s3.code && s3.errors.forEach(function(e2) {
      return e2.forEach(function(e3) {
        return r2.push(t({}, e3, { path: [].concat(s3.path, e3.path) }));
      });
    }), e) {
      var f = o2[u2].types, l = f && f[s3.code];
      o2[u2] = appendErrors(u2, e, o2, i2, l ? [].concat(l, s3.message) : s3.message);
    }
    r2.shift();
  }; r2.length; ) s2();
  return o2;
}
function u(n2, t2, u2) {
  if (void 0 === u2 && (u2 = {}), (function(r2) {
    return "_def" in r2 && "object" == typeof r2._def && "typeName" in r2._def;
  })(n2)) return function(o$1, a2, c) {
    try {
      return Promise.resolve(s(function() {
        return Promise.resolve(n2["sync" === u2.mode ? "parse" : "parseAsync"](o$1, t2)).then(function(e) {
          return c.shouldUseNativeValidation && o({}, c), { errors: {}, values: u2.raw ? Object.assign({}, o$1) : e };
        });
      }, function(r2) {
        if ((function(r3) {
          return Array.isArray(null == r3 ? void 0 : r3.issues);
        })(r2)) return { values: {}, errors: s$1(i(r2.errors, !c.shouldUseNativeValidation && "all" === c.criteriaMode), c) };
        throw r2;
      }));
    } catch (r2) {
      return Promise.reject(r2);
    }
  };
  if ((function(r2) {
    return "_zod" in r2 && "object" == typeof r2._zod;
  })(n2)) return function(i2, c, f) {
    try {
      return Promise.resolve(s(function() {
        return Promise.resolve(("sync" === u2.mode ? parse : parseAsync)(n2, i2, t2)).then(function(e) {
          return f.shouldUseNativeValidation && o({}, f), { errors: {}, values: u2.raw ? Object.assign({}, i2) : e };
        });
      }, function(r2) {
        if ((function(r3) {
          return r3 instanceof $ZodError;
        })(r2)) return { values: {}, errors: s$1(a(r2.issues, !f.shouldUseNativeValidation && "all" === f.criteriaMode), f) };
        throw r2;
      }));
    } catch (r2) {
      return Promise.reject(r2);
    }
  };
  throw new Error("Invalid input: not a Zod schema");
}
export {
  u
};
