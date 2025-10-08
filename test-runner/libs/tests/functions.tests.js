import { reset as u } from "./tests.js";
import { a as m, b as d, c as i, d as w, g, e as y, f as x } from "../ce-part-utils-DLZ00oTS.js";
function p(t) {
  const n = [], o = [], a = [], e = [...t.shadowRoot.querySelectorAll("[id]")];
  for (let r = 0; r < e.length; r++) {
    const s = e[r].id, c = e[r].part.contains(s);
    n.push(s), o.push(...e[r].part), a.push(c);
  }
  return [n, o, a];
}
function h(t) {
  const n = [], o = [], a = [], e = [...t.shadowRoot.querySelectorAll("[id]")];
  for (let r = 0; r < e.length; r++) {
    const s = [...e[r].classList];
    let c = s.reduce((l, f, E) => l == !1 ? !1 : e[r].part.contains(f), !0);
    n.push(...s), o.push(...e[r].part), a.push(c);
  }
  return [n, o, a];
}
const A = {
  "should assign from ids": async () => {
    await customElements.whenDefined("custom-element"), u();
    const t = document.querySelector("custom-element");
    x(t.shadowRoot);
    const [n, o, a] = p(t);
    return { success: a.indexOf(!1) == -1, expected: n, value: o };
  },
  "should assign from classes": async () => {
    await customElements.whenDefined("custom-element"), u();
    const t = document.querySelector("custom-element");
    y(t.shadowRoot);
    const [n, o, a] = h(t);
    return { success: a.indexOf(!1) == -1, expected: n, value: o };
  },
  "should assign from ids and classes at the same time": async () => {
    await customElements.whenDefined("custom-element"), u();
    const t = document.querySelector("custom-element");
    m(t.shadowRoot);
    const [n, o, a] = p(t), [e, r, s] = h(t);
    return { success: a.concat(...s).indexOf(!1) == -1, expected: [n, e], value: [o, r] };
  },
  "should assign from element tag": async () => {
    await customElements.whenDefined("custom-element"), u();
    const t = document.querySelector("custom-element");
    d(t.shadowRoot);
    const n = [], o = [], a = [], e = [...t.shadowRoot.querySelectorAll("*")];
    for (let s = 0; s < e.length; s++) {
      const c = e[s].tagName.toLowerCase(), l = e[s].part.contains(c);
      n.push(c), o.push(...e[s].part), a.push(l);
    }
    return { success: a.indexOf(!1) == -1, expected: n, value: o };
  },
  "should assign from input type": async () => {
    await customElements.whenDefined("custom-element");
    const t = document.querySelector("custom-element");
    i(t.shadowRoot);
    const n = [], o = [], a = [], e = [...t.shadowRoot.querySelectorAll("input[type]")];
    for (let s = 0; s < e.length; s++) {
      const c = e[s].type, l = e[s].part.contains(c);
      n.push(c), o.push(...e[s].part), a.push(l);
    }
    return { success: a.indexOf(!1) == -1, expected: n, value: o };
  },
  // 'should assign from field part': async () =>
  // {
  //     await customElements.whenDefined('custom-element');
  //     const customElement = document.querySelector('custom-element')!;
  //     assignFormFieldPartAttributes(customElement.shadowRoot!);
  //     expect(customElement.shadowRoot!.firstElementChild?.outerHTML).toBe(SuccessValues.fields);
  // },
  "should get valid exportparts string from shadow root children": async () => {
    await customElements.whenDefined("custom-element");
    const t = document.querySelector("custom-element");
    m(t.shadowRoot), d(t.shadowRoot), i(t.shadowRoot);
    const n = g(t.shadowRoot), o = [], a = [...t.shadowRoot.querySelectorAll("[part]")];
    for (let s = 0; s < a.length; s++)
      o.push(...a[s].part);
    const e = new Set(n.split(",").map((s) => s.trim()));
    return { success: o.reduce((s, c, l) => s == !1 ? !1 : e.has(c), !0), expected: Array.from(new Set(o)), value: Array.from(e) };
  },
  "should export all parts of shadow root children": async () => {
    await customElements.whenDefined("custom-element");
    const t = document.querySelector("custom-element");
    m(t.shadowRoot), d(t.shadowRoot), i(t.shadowRoot), w(t.shadowRoot);
    const n = [], o = [...t.shadowRoot.querySelectorAll("[part]")];
    for (let s = 0; s < o.length; s++)
      n.push(...o[s].part);
    const a = t.getAttribute("exportparts");
    if (a == null)
      throw new Error("Subject has no exportparts attribute.");
    const e = new Set(a.split(",").map((s) => s.trim()));
    return { success: n.reduce((s, c, l) => s == !1 ? !1 : e.has(c), !0), expected: Array.from(new Set(n)), value: Array.from(e) };
  }
};
export {
  A as default
};
