import { jsx as A } from "react/jsx-runtime";
import { forwardRef as D, useContext as O } from "react";
import { PageContext as q } from "./Page.js";
import '../css/PageSection.css';const G = D(({ height: n, gap: i, padding: s, bgColor: e, scrollBottom: u, scrollTop: c, vertical: m, light: v, dark: y, centerText: l, clip: _, maxWidth: f, maxHeight: a, minHeight: d, z: S, fontScale: r, radius: N, top: j, bottom: k, className: p, style: o, id: w, children: I }, M) => {
  const t = O(q);
  Object.keys(t).length !== 0 && (n = n ?? t.height, i = i ?? t.gap, s = s ?? t.padding, e = e ?? t.bgColor, u = u ?? t.scrollBottom, c = c ?? t.scrollTop, m = m ?? t.vertical, v = v ?? t.light, y = y ?? t.dark, l = l ?? t.centerText, f = f ?? t.maxWidth, a = a ?? t.maxHeight, d = d ?? t.minHeight, r = r ?? t.fontScale, p = p ?? t.className, o = o ?? t.style);
  const P = t.className ?? "", R = t.style ?? {};
  typeof e == "number" ? e = t.bgColorSet ? t.bgColorSet[e] : void 0 : Array.isArray(e) && (e = e.map((x) => typeof x == "number" ? t.bgColorSet ? t.bgColorSet[x] : "undefined" : x), e.includes("undefined") && (e = void 0)), n = n ?? "fit", i = i ?? "1.3rem", s = s ?? "0", e = e ?? "transparent";
  const $ = {
    position: S ? "relative" : void 0,
    minHeight: d || (n === "full" ? "100dvh" : n === "fit" ? "fit-content" : "unset"),
    height: typeof n == "number" ? `${n}px` : n !== "full" && n !== "fit" ? n : void 0,
    fontSize: r ? `calc(100% * ${r})` : void 0,
    background: Array.isArray(e) ? e.length === 2 ? "linear-gradient( to bottom," + e[0] + " 0%, " + e[0] + " 50%, " + e[1] + " 50%, " + e[1] + " 100%)" : e.length === 3 ? "linear-gradient( to bottom," + e[1] + " 0%, " + e[1] + " " + e[0] + ", " + e[2] + " " + e[0] + ", " + e[2] + " 100%)" : void 0 : e,
    padding: s,
    scrollMarginTop: c,
    alignItems: j ? "flex-start" : k ? "flex-end" : void 0,
    scrollMarginBottom: u,
    borderRadius: N,
    zIndex: S,
    overflow: _ ? "hidden" : void 0
  }, z = {
    maxHeight: a === "full" ? "100%" : a,
    maxWidth: f === "full" ? void 0 : f,
    flexDirection: m ? "column" : void 0,
    gap: i,
    textAlign: l ? "center" : void 0,
    ...o,
    ...R
  };
  return /* @__PURE__ */ A("section", { id: w, ref: M, className: "page__section " + P + " " + (p ?? ""), style: $, "data-theme": v ? "light" : y ? "dark" : void 0, children: /* @__PURE__ */ A("div", { className: "section__content", style: z, children: I }) });
});
export {
  G as default
};
