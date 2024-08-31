import { jsx as A } from "react/jsx-runtime";
import { forwardRef as D, useContext as O } from "react";
import { PageContext as q } from "./Page.js";
import '../css/PageSection.css';const G = D(({ height: n, gap: i, padding: s, bgColor: e, scrollBottom: v, scrollTop: m, vertical: y, light: d, dark: f, centerText: o, clip: _, maxWidth: a, maxHeight: u, minHeight: c, z: S, fontScale: r, radius: N, top: j, bottom: w, className: p, style: l, id: I, children: M }, P) => {
  const t = O(q);
  Object.keys(t).length !== 0 && (n = n ?? t.height, i = i ?? t.gap, s = s ?? t.padding, e = e ?? t.bgColor, v = v ?? t.scrollBottom, m = m ?? t.scrollTop, y = y ?? t.vertical, d = d ?? f ? void 0 : t.light, f = f ?? d ? void 0 : t.dark, o = o ?? t.centerText, a = a ?? t.maxWidth, u = u ?? t.maxHeight, c = c ?? t.minHeight, r = r ?? t.fontScale, p = p ?? t.className, l = l ?? t.style);
  const R = t.className ?? "", $ = t.style ?? {};
  typeof e == "number" ? e = t.bgColorSet ? t.bgColorSet[e] : void 0 : Array.isArray(e) && (e = e.map((x) => typeof x == "number" ? t.bgColorSet ? t.bgColorSet[x] : "undefined" : x), e.includes("undefined") && (e = void 0)), n = n ?? "fit", i = i ?? "1.3rem", s = s ?? "0", e = e ?? "transparent";
  const k = {
    position: S ? "relative" : void 0,
    minHeight: c || (n === "full" ? "100dvh" : n === "fit" ? "fit-content" : "unset"),
    height: typeof n == "number" ? `${n}px` : n !== "full" && n !== "fit" ? n : void 0,
    fontSize: r ? `calc(100% * ${r})` : void 0,
    background: Array.isArray(e) ? e.length === 2 ? "linear-gradient( to bottom," + e[0] + " 0%, " + e[0] + " 50%, " + e[1] + " 50%, " + e[1] + " 100%)" : e.length === 3 ? "linear-gradient( to bottom," + e[1] + " 0%, " + e[1] + " " + e[0] + ", " + e[2] + " " + e[0] + ", " + e[2] + " 100%)" : void 0 : e,
    padding: s,
    scrollMarginTop: m,
    alignItems: j ? "flex-start" : w ? "flex-end" : void 0,
    scrollMarginBottom: v,
    borderRadius: N,
    zIndex: S,
    overflow: _ ? "hidden" : void 0
  }, z = {
    maxHeight: u === "full" ? "100%" : u,
    maxWidth: a === "full" ? void 0 : a,
    flexDirection: y ? "column" : void 0,
    gap: i,
    textAlign: o ? "center" : void 0,
    ...l,
    ...$
  };
  return /* @__PURE__ */ A("section", { id: I, ref: P, className: "page__section " + R + " " + (p ?? ""), style: k, "data-theme": d ? "light" : f ? "dark" : void 0, children: /* @__PURE__ */ A("div", { className: "section__content", style: z, children: M }) });
});
export {
  G as default
};
