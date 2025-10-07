import "../test-runner-C5iXFQ_j.js";
import { a as m, b as d, c as i, d as w, g as y, e as g, f as x } from "../ce-part-utils-ptBXdpX4.js";
function u() {
  document.querySelector("custom-element")?.remove();
  const t = document.createElement("custom-element");
  document.querySelector("test-runner").append(t);
}
function p(t) {
  const n = [], o = [], a = [], s = [...t.shadowRoot.querySelectorAll("[id]")];
  for (let r = 0; r < s.length; r++) {
    const e = s[r].id, c = s[r].part.contains(e);
    n.push(e), o.push(...s[r].part), a.push(c);
  }
  return [n, o, a];
}
function h(t) {
  const n = [], o = [], a = [], s = [...t.shadowRoot.querySelectorAll("[id]")];
  for (let r = 0; r < s.length; r++) {
    const e = [...s[r].classList];
    let c = e.reduce((l, f, E) => l == !1 ? !1 : s[r].part.contains(f), !0);
    n.push(...e), o.push(...s[r].part), a.push(c);
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
    g(t.shadowRoot);
    const [n, o, a] = h(t);
    return { success: a.indexOf(!1) == -1, expected: n, value: o };
  },
  "should assign from ids and classes at the same time": async () => {
    await customElements.whenDefined("custom-element"), u();
    const t = document.querySelector("custom-element");
    m(t.shadowRoot);
    const [n, o, a] = p(t), [s, r, e] = h(t);
    return { success: a.concat(...e).indexOf(!1) == -1, expected: [n, s], value: [o, r] };
  },
  "should assign from element tag": async () => {
    await customElements.whenDefined("custom-element"), u();
    const t = document.querySelector("custom-element");
    d(t.shadowRoot);
    const n = [], o = [], a = [], s = [...t.shadowRoot.querySelectorAll("*")];
    for (let e = 0; e < s.length; e++) {
      const c = s[e].tagName.toLowerCase(), l = s[e].part.contains(c);
      n.push(c), o.push(...s[e].part), a.push(l);
    }
    return { success: a.indexOf(!1) == -1, expected: n, value: o };
  },
  "should assign from input type": async () => {
    await customElements.whenDefined("custom-element");
    const t = document.querySelector("custom-element");
    i(t.shadowRoot);
    const n = [], o = [], a = [], s = [...t.shadowRoot.querySelectorAll("input[type]")];
    for (let e = 0; e < s.length; e++) {
      const c = s[e].type, l = s[e].part.contains(c);
      n.push(c), o.push(...s[e].part), a.push(l);
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
    const n = y(t.shadowRoot), o = [], a = [...t.shadowRoot.querySelectorAll("[part]")];
    for (let e = 0; e < a.length; e++)
      o.push(...a[e].part);
    const s = new Set(n.split(",").map((e) => e.trim()));
    return { success: o.reduce((e, c, l) => e == !1 ? !1 : s.has(c), !0), expected: Array.from(new Set(o)), value: Array.from(s) };
  },
  "should export all parts of shadow root children": async () => {
    await customElements.whenDefined("custom-element");
    const t = document.querySelector("custom-element");
    m(t.shadowRoot), d(t.shadowRoot), i(t.shadowRoot), w(t.shadowRoot);
    const n = [], o = [...t.shadowRoot.querySelectorAll("[part]")];
    for (let e = 0; e < o.length; e++)
      n.push(...o[e].part);
    const a = t.getAttribute("exportparts");
    if (a == null)
      throw new Error("Subject has no exportparts attribute.");
    const s = new Set(a.split(",").map((e) => e.trim()));
    return { success: n.reduce((e, c, l) => e == !1 ? !1 : s.has(c), !0), expected: Array.from(new Set(n)), value: Array.from(s) };
  }
};
export {
  A as default
};
