const c = ":not(slot,defs,g,rect,path,circle,ellipse,line,polygon,text,tspan,use,svg image,svg title,desc,template,template *)";
function m(e) {
  u(e), d(e);
}
function u(e) {
  const s = [...e.querySelectorAll(`${c}[id]`)];
  for (let t = 0; t < s.length; t++)
    s[t].part.add(s[t].id);
}
function d(e) {
  const s = [...e.querySelectorAll(`${c}[class]`)];
  for (let t = 0; t < s.length; t++)
    s[t].part.add(...s[t].classList);
}
function x(e, s) {
  const t = [...e.querySelectorAll(`${c}`)];
  for (let r = 0; r < t.length; r++) {
    const a = t[r].tagName.toLowerCase();
    t[r].part.add(s?.[a] ?? a);
  }
}
class g {
  button;
  checkbox;
  color;
  date;
  "datetime-local";
  email;
  file;
  hidden;
  image;
  month;
  number;
  password;
  radio;
  range;
  reset;
  search;
  submit;
  tel;
  text;
  time;
  url;
  week;
  "text-numeric" = "number";
}
function P(e, s = new g()) {
  const t = [...e.querySelectorAll("input")];
  for (let r = 0; r < t.length; r++) {
    const a = t[r].type;
    a == "text" && t[r].inputMode == "numeric" && t[r].part.add(s["text-numeric"]), t[r].part.add(s[a] ?? a);
  }
}
function f(e, s = !1, t) {
  const r = new Set([...e.querySelectorAll("[part]")].map((o) => {
    let i = [...o.part.values()].filter((n) => n != null).map((n) => {
      const l = t?.[n];
      return l != null ? `${n}:${l}` : n;
    });
    const p = o.getAttribute("exportparts");
    if (p != null) {
      const n = p.replaceAll(/[\s\n]/g, "").split(",").map((l) => l.indexOf(":") == -1 ? l : l.split(":")[1]);
      i = i.concat(...n);
    }
    return i;
  }).flat().filter((o) => o.length > 0));
  return Array.from(r).join(`,${s == !0 ? `
` : ""}`);
}
function A(e, s = !1, t) {
  const r = f(e, s, t), a = e.host.getAttribute("exportparts");
  e.host.setAttribute("exportparts", `${a == null ? "" : `${a},`}${r}`);
}
export {
  m as a,
  x as b,
  P as c,
  A as d,
  d as e,
  u as f,
  f as g
};
