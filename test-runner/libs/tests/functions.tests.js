import { e as t } from "../test-runner-C5iXFQ_j.js";
import { g as s, a as o, b as n, c as m, d as a, e as c, f as u, h as l } from "../ce-part-utils-t71hqNPY.js";
const i = {
  "should assign from ids": async () => {
    await customElements.whenDefined("custom-element");
    const e = document.querySelector("custom-element");
    l(e.shadowRoot), t(e).toBeDefined();
  },
  "should assign from classes": async () => {
    await customElements.whenDefined("custom-element");
    const e = document.querySelector("custom-element");
    u(e.shadowRoot), t(e).toBeDefined();
  },
  "should assign from ids and classes at the same time": async () => {
    await customElements.whenDefined("custom-element");
    const e = document.querySelector("custom-element");
    c(e.shadowRoot), t(e).toBeDefined();
  },
  "should assign from element tag": async () => {
    await customElements.whenDefined("custom-element");
    const e = document.querySelector("custom-element");
    a(e.shadowRoot), t(e).toBeDefined();
  },
  "should assign from input type": async () => {
    await customElements.whenDefined("custom-element");
    const e = document.querySelector("custom-element");
    m(e.shadowRoot), t(e).toBeDefined();
  },
  "should assign from field part": async () => {
    await customElements.whenDefined("custom-element");
    const e = document.querySelector("custom-element");
    n(e.shadowRoot), t(e).toBeDefined();
  },
  "should export all parts of shadow root children": async () => {
    await customElements.whenDefined("custom-element");
    const e = document.querySelector("custom-element");
    o(e.shadowRoot), t(e).toBeDefined();
  },
  "should get valid exporparts string from shadow root children": async () => {
    await customElements.whenDefined("custom-element");
    const e = document.querySelector("custom-element");
    s(e.shadowRoot), t(e).toBeDefined();
  }
};
export {
  i as default
};
