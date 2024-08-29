import { jsx as v } from "react/jsx-runtime";
import { createContext as C } from "react";
const j = C({}), k = ({ height: t = "fit", gap: e = "1.3rem", padding: r = "0", bgColor: o = "transparent", vertical: a, light: n, dark: m, bgColorSet: s, centerText: f, maxHeight: i, minHeight: p, maxWidth: x, scrollTop: c, scrollBottom: u, fontScale: P, className: d, style: g, children: l }) => /* @__PURE__ */ v(j.Provider, { value: { height: t, vertical: a, light: n, dark: m, centerText: f, maxHeight: i, minHeight: p, maxWidth: x, gap: e, padding: r, scrollTop: c, scrollBottom: u, fontScale: P, bgColor: o, bgColorSet: s, className: d, style: g }, children: l });
export {
  j as PageContext,
  k as default
};
