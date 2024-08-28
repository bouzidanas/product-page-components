import { jsx as l } from "react/jsx-runtime";
import { createContext as v } from "react";
const C = v({}), h = ({ height: t = "fit", gap: e = "1.3rem", padding: r = "0", bgColor: o = "transparent", vertical: a, light: n, dark: m, bgColorSet: s, centerText: f, maxHeight: i, maxWidth: p, scrollTop: x, scrollBottom: c, fontScale: u, className: P, style: d, children: g }) => /* @__PURE__ */ l(C.Provider, { value: { height: t, vertical: a, light: n, dark: m, centerText: f, maxHeight: i, maxWidth: p, gap: e, padding: r, scrollTop: x, scrollBottom: c, fontScale: u, bgColor: o, bgColorSet: s, className: P, style: d }, children: g });
export {
  C as PageContext,
  h as default
};
