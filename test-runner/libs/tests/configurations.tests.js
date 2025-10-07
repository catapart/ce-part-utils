import { e as t } from "../test-runner-C5iXFQ_j.js";
import { d as s, b as o } from "../ce-part-utils-ptBXdpX4.js";
const m = {
  "should map element tags to part values": async () => {
    await customElements.whenDefined("custom-element");
    const e = document.querySelector("custom-element");
    o(e.shadowRoot, {}), t(e).toBeDefined();
  },
  "should map input types to part values": async () => {
    await customElements.whenDefined("custom-element");
    const e = document.querySelector("custom-element");
    t(e).toBeDefined();
  },
  "should map part values to exportparts values": async () => {
    await customElements.whenDefined("custom-element");
    const e = document.querySelector("custom-element");
    s(e.shadowRoot, !1, {}), t(e).toBeDefined();
  }
};
export {
  m as default
};
