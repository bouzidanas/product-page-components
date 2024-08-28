import { useState as s, useEffect as o } from "react";
const d = (e = 800) => {
  const [n, t] = s(window.innerWidth <= e);
  return o(() => {
    const i = () => {
      t(window.innerWidth <= e);
    };
    return window.addEventListener("resize", i), () => {
      window.removeEventListener("resize", i);
    };
  }, [e]), n;
};
export {
  d as useIsMobileWidth
};
