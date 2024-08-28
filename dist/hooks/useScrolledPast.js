import { useState as l, useEffect as n } from "react";
const d = (e, o = !1) => {
  const [r, s] = l(o);
  return n(() => {
    const t = () => {
      s(window.scrollY > e);
    };
    return window.addEventListener("scroll", t), () => {
      window.removeEventListener("scroll", t);
    };
  }, [e]), r;
};
export {
  d as useScrolledPast
};
