import { jsx as x } from "react/jsx-runtime";
import { forwardRef as P, useContext as $ } from "react";
import { PageContext as z } from "./Page.js";
import '../css/PageSection.css';const q = P(({ height: n, gap: i, padding: s, bgColor: e, scrollBottom: c, scrollTop: m, vertical: u, light: r, dark: y, centerText: v, clip: A, maxWidth: f, maxHeight: a, fontScale: d, className: p, style: S, id: _, children: o }, N) => {
  const t = $(z);
  Object.keys(t).length !== 0 && (n = n ?? t.height, i = i ?? t.gap, s = s ?? t.padding, e = e ?? t.bgColor, c = c ?? t.scrollBottom, m = m ?? t.scrollTop, u = u ?? t.vertical, r = r ?? t.light, y = y ?? t.dark, v = v ?? t.centerText, f = f ?? t.maxWidth, a = a ?? t.maxHeight, d = d ?? t.fontScale, p = p ?? t.className, S = S ?? t.style);
  const j = t.className ?? "", k = t.style ?? {};
  typeof e == "number" ? e = t.bgColorSet ? t.bgColorSet[e] : void 0 : Array.isArray(e) && (e = e.map((l) => typeof l == "number" ? t.bgColorSet ? t.bgColorSet[l] : "undefined" : l), e.includes("undefined") && (e = void 0)), n = n ?? "fit", i = i ?? "1.3rem", s = s ?? "0", e = e ?? "transparent";
  const w = {
    minHeight: n === "full" ? "100dvh" : n === "fit" ? "fit-content" : "unset",
    height: typeof n == "number" ? `${n}px` : n !== "full" && n !== "fit" ? n : void 0,
    fontSize: d ? `calc(100% * ${d})` : void 0,
    background: Array.isArray(e) ? e.length === 2 ? "linear-gradient( to bottom," + e[0] + " 0%, " + e[0] + " 50%, " + e[1] + " 50%, " + e[1] + " 100%)" : e.length === 3 ? "linear-gradient( to bottom," + e[1] + " 0%, " + e[1] + " " + e[0] + ", " + e[2] + " " + e[0] + ", " + e[2] + " 100%)" : void 0 : e,
    padding: s,
    scrollMarginTop: m,
    scrollMarginBottom: c,
    overflow: A ? "hidden" : void 0
  }, M = {
    maxHeight: a === "full" ? "100%" : a,
    maxWidth: f === "full" ? void 0 : f,
    flexDirection: u ? "column" : void 0,
    gap: i,
    textAlign: v ? "center" : void 0,
    ...S,
    ...k
  };
  return /* @__PURE__ */ x("section", { id: _, ref: N, className: "page__section " + j + " " + (p ?? ""), style: w, "data-theme": r ? "light" : y ? "dark" : void 0, children: /* @__PURE__ */ x("div", { className: "section__content", style: M, children: o }) });
});
export {
  q as default
};
