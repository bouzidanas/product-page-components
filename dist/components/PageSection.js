import { jsx as o } from "react/jsx-runtime";
import { forwardRef as D, useContext as O } from "react";
import { PageContext as q } from "./Page.js";
import '../css/PageSection.css';const G = D(({ height: n, gap: i, padding: s, bgColor: e, scrollBottom: u, scrollTop: c, vertical: m, light: r, dark: v, centerText: y, clip: A, maxWidth: f, maxHeight: a, minHeight: l, z: _, fontScale: d, radius: N, top: j, bottom: k, className: p, style: x, id: w, children: z }, I) => {
  const t = O(q);
  Object.keys(t).length !== 0 && (n = n ?? t.height, i = i ?? t.gap, s = s ?? t.padding, e = e ?? t.bgColor, u = u ?? t.scrollBottom, c = c ?? t.scrollTop, m = m ?? t.vertical, r = r ?? t.light, v = v ?? t.dark, y = y ?? t.centerText, f = f ?? t.maxWidth, a = a ?? t.maxHeight, l = l ?? t.minHeight, d = d ?? t.fontScale, p = p ?? t.className, x = x ?? t.style);
  const M = t.className ?? "", P = t.style ?? {};
  typeof e == "number" ? e = t.bgColorSet ? t.bgColorSet[e] : void 0 : Array.isArray(e) && (e = e.map((S) => typeof S == "number" ? t.bgColorSet ? t.bgColorSet[S] : "undefined" : S), e.includes("undefined") && (e = void 0)), n = n ?? "fit", i = i ?? "1.3rem", s = s ?? "0", e = e ?? "transparent";
  const R = {
    minHeight: l ?? n === "full" ? "100dvh" : n === "fit" ? "fit-content" : "unset",
    height: typeof n == "number" ? `${n}px` : n !== "full" && n !== "fit" ? n : void 0,
    fontSize: d ? `calc(100% * ${d})` : void 0,
    background: Array.isArray(e) ? e.length === 2 ? "linear-gradient( to bottom," + e[0] + " 0%, " + e[0] + " 50%, " + e[1] + " 50%, " + e[1] + " 100%)" : e.length === 3 ? "linear-gradient( to bottom," + e[1] + " 0%, " + e[1] + " " + e[0] + ", " + e[2] + " " + e[0] + ", " + e[2] + " 100%)" : void 0 : e,
    padding: s,
    scrollMarginTop: c,
    alignItems: j ? "flex-start" : k ? "flex-end" : void 0,
    scrollMarginBottom: u,
    borderRadius: N,
    zIndex: _,
    overflow: A ? "hidden" : void 0
  }, $ = {
    maxHeight: a === "full" ? "100%" : a,
    maxWidth: f === "full" ? void 0 : f,
    flexDirection: m ? "column" : void 0,
    gap: i,
    textAlign: y ? "center" : void 0,
    ...x,
    ...P
  };
  return /* @__PURE__ */ o("section", { id: w, ref: I, className: "page__section " + M + " " + (p ?? ""), style: R, "data-theme": r ? "light" : v ? "dark" : void 0, children: /* @__PURE__ */ o("div", { className: "section__content", style: $, children: z }) });
});
export {
  G as default
};
