import { reset as l } from "./tests.js";
import { a as d, b as m, c as i, d as h } from "../ce-part-utils-DLZ00oTS.js";
const w = {
  "should map element tags to part values": async () => {
    await customElements.whenDefined("custom-element"), l();
    const o = document.querySelector("custom-element");
    m(o.shadowRoot, {
      div: "divider",
      form: "form-substitute",
      input: "value"
    });
    const a = [], r = [], u = [], s = [...o.shadowRoot.querySelectorAll("*")];
    for (let t = 0; t < s.length; t++) {
      const e = s[t].tagName.toLowerCase(), n = e == "div" ? "divider" : e == "form" ? "form-substitute" : e == "input" ? "value" : null, c = n == null ? !1 : s[t].part.contains(n);
      a.push(n), r.push(...s[t].part), u.push(c);
    }
    return { success: u.indexOf(!1) == -1, expected: a, value: r };
  },
  "should map input types to part values": async () => {
    await customElements.whenDefined("custom-element"), l();
    const o = document.querySelector("custom-element");
    i(o.shadowRoot, {
      text: "alpha",
      number: "num",
      "text-numeric": "tnum"
    });
    const a = [], r = [], u = [], s = [...o.shadowRoot.querySelectorAll("input")];
    for (let t = 0; t < s.length; t++) {
      const e = s[t].type, n = e == "number" ? "num" : e == "text" ? s[t].inputMode == "numeric" ? "tnum" : "alpha" : e, c = n == null ? !1 : n == "tnum" ? s[t].part.contains(n) && s[t].part.contains("alpha") : s[t].part.contains(n);
      a.push(n), r.push(...s[t].part), n == "tnum" && a.push("alpha"), u.push(c);
    }
    return { success: u.indexOf(!1) == -1, expected: a, value: r };
  },
  "should map part values to exportparts values": async () => {
    await customElements.whenDefined("custom-element"), l();
    const o = document.querySelector("custom-element");
    d(o.shadowRoot), m(o.shadowRoot), i(o.shadowRoot), h(o.shadowRoot, !1, {
      user: "guest",
      card: "component-card",
      div: "inner-div"
    });
    const a = [], r = [...o.shadowRoot.querySelectorAll("[part]")];
    for (let t = 0; t < r.length; t++)
      a.push(...r[t].part);
    const u = o.getAttribute("exportparts");
    if (u == null)
      throw new Error("Subject has no exportparts attribute.");
    const s = new Set(u.split(",").map((t) => {
      const e = t.trim();
      return e == "user" ? "guest" : e == "card" ? "component-card" : e == "div" ? "inner-div" : t.trim();
    }));
    return { success: a.reduce((t, e, n) => {
      const c = e == "user" ? "guest" : e == "card" ? "component-card" : e == "div" ? "inner-div" : null;
      return t == !1 ? !1 : c == null ? s.has(e) : s.has(`${e}:${c}`);
    }, !0), expected: Array.from(new Set(a)), value: Array.from(s) };
  }
};
export {
  w as default
};
