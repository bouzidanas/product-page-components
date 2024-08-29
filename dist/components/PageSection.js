import { jsx as S } from "react/jsx-runtime";
import { forwardRef as z, useContext as D } from "react";
import { PageContext as I } from "./Page.js";
import '../css/PageSection.css';const E = z(({ height: n, gap: i, padding: s, bgColor: e, scrollBottom: m, scrollTop: u, vertical: c, light: r, dark: v, centerText: y, clip: o, maxWidth: f, maxHeight: a, fontScale: d, radius: A, top: _, bottom: N, className: l, style: p, id: j, children: k }, w) => {
  const t = D(I);
  Object.keys(t).length !== 0 && (n = n ?? t.height, i = i ?? t.gap, s = s ?? t.padding, e = e ?? t.bgColor, m = m ?? t.scrollBottom, u = u ?? t.scrollTop, c = c ?? t.vertical, r = r ?? t.light, v = v ?? t.dark, y = y ?? t.centerText, f = f ?? t.maxWidth, a = a ?? t.maxHeight, d = d ?? t.fontScale, l = l ?? t.className, p = p ?? t.style);
  const M = t.className ?? "", P = t.style ?? {};
  typeof e == "number" ? e = t.bgColorSet ? t.bgColorSet[e] : void 0 : Array.isArray(e) && (e = e.map((x) => typeof x == "number" ? t.bgColorSet ? t.bgColorSet[x] : "undefined" : x), e.includes("undefined") && (e = void 0)), n = n ?? "fit", i = i ?? "1.3rem", s = s ?? "0", e = e ?? "transparent";
  const R = {
    minHeight: n === "full" ? "100dvh" : n === "fit" ? "fit-content" : "unset",
    height: typeof n == "number" ? `${n}px` : n !== "full" && n !== "fit" ? n : void 0,
    fontSize: d ? `calc(100% * ${d})` : void 0,
    background: Array.isArray(e) ? e.length === 2 ? "linear-gradient( to bottom," + e[0] + " 0%, " + e[0] + " 50%, " + e[1] + " 50%, " + e[1] + " 100%)" : e.length === 3 ? "linear-gradient( to bottom," + e[1] + " 0%, " + e[1] + " " + e[0] + ", " + e[2] + " " + e[0] + ", " + e[2] + " 100%)" : void 0 : e,
    padding: s,
    scrollMarginTop: u,
    alignItems: _ ? "flex-start" : N ? "flex-end" : void 0,
    scrollMarginBottom: m,
    borderRadius: A,
    overflow: o ? "hidden" : void 0
  }, $ = {
    maxHeight: a === "full" ? "100%" : a,
    maxWidth: f === "full" ? void 0 : f,
    flexDirection: c ? "column" : void 0,
    gap: i,
    textAlign: y ? "center" : void 0,
    ...p,
    ...P
  };
  return /* @__PURE__ */ S("section", { id: j, ref: w, className: "page__section " + M + " " + (l ?? ""), style: R, "data-theme": r ? "light" : v ? "dark" : void 0, children: /* @__PURE__ */ S("div", { className: "section__content", style: $, children: k }) });
});
export {
  E as default
};
