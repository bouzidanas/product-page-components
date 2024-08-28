import { jsx as r } from "react/jsx-runtime";
import '../css/SubSection.css';const i = ({ horizontal: t, vertical: o, style: n, className: s, children: c }) => {
  const e = "content__cont " + (t ? "hor " : o ? "vert " : "");
  return /* @__PURE__ */ r("section", { className: e + (s ?? ""), style: n, children: c });
};
export {
  i as default
};
