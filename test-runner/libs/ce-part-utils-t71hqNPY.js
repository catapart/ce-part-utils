const p = ":not(slot,defs,g,rect,path,circle,ellipse,line,polygon,text,tspan,use,svg image,svg title,desc,template,template *)";
function b(r) {
  d(r), f(r);
}
function d(r) {
  const l = [...r.querySelectorAll(`${p}[id]`)];
  for (let e = 0; e < l.length; e++)
    l[e].part.add(l[e].id);
}
function f(r) {
  const l = [...r.querySelectorAll(`${p}[class]`)];
  for (let e = 0; e < l.length; e++)
    l[e].part.add(...l[e].classList);
}
function m(r, l) {
  const e = [...r.querySelectorAll(`${p}`)];
  for (let t = 0; t < e.length; t++) {
    const n = e[t].tagName.toLowerCase();
    e[t].part.add(l?.[n] ?? n);
  }
}
class u {
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
function g(r, l = new u()) {
  const e = [...r.querySelectorAll("input")];
  for (let t = 0; t < e.length; t++) {
    const n = e[t].type;
    n == "text" && e[t].inputMode == "numeric" && e[t].part.add(l["text-numeric"]), e[t].part.add(l[n] ?? n);
  }
}
function h(r) {
  const l = [...r.querySelectorAll("form-field")];
  for (let e = 0; e < l.length; e++) {
    const t = l[e], n = t.id;
    t.querySelector(".container")?.part.add("container", "field-container", `${n}-container`), t.querySelector(".field-label")?.part.add("label", "field-label", `${n}-label`), t.querySelector(".prefix")?.part.add("prefix", "field-prefix", `${n}-prefix`), t.querySelector(".postfix")?.part.add("postfix", "field-postfix", `${n}-postfix`), t.querySelector(".enabled-checkbox")?.part.add("enabled-checkbox", "field-enabled-checkbox", `${n}-enabled-checkbox`);
  }
}
function x(r, l = !1, e) {
  const t = new Set([...r.querySelectorAll("[part]")].map((o) => {
    let i = [...o.part.values()].filter((a) => a != null).map((a) => {
      const s = e?.[a];
      return s != null ? `${a}:${s}` : a;
    });
    const c = o.getAttribute("exportparts");
    if (c != null) {
      const a = c.replaceAll(/[\s\n]/g, "").split(",").map((s) => s.indexOf(":") == -1 ? s : s.split(":")[1]);
      i = i.concat(...a);
    }
    return i;
  }).flat().filter((o) => o.length > 0));
  return Array.from(t).join(`,${l == !0 ? `
` : ""}`);
}
function y(r, l = !1, e) {
  const t = x(r, l, e), n = r.host.getAttribute("exportparts");
  r.host.setAttribute("exportparts", `${n == null ? "" : `${n},`}${t}`);
}
export {
  y as a,
  h as b,
  g as c,
  m as d,
  b as e,
  f,
  x as g,
  d as h
};
