import { C as u, a as i, b as d, H as r, T as p, e as E, p as h } from "../test-runner-C5iXFQ_j.js";
const t = "custom-element";
class o extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" }), this.shadowRoot.innerHTML = `<form id="user" class="card interactive">
            <input type="text" name="name" placeholder="Name" id="user-name" class="alpha value" />
            <input type="text" name="age" placeholder="Age" inputmode="numeric" id="user-age" class="number value" />
            <input type="checkbox" name="active" id="is-active" class="toggle value" />
            <input type="submit" disabled id="user-submit" class="ok" />
        </form>`;
  }
}
customElements.get(t) == null && customElements.define(t, o);
const s = "custom-element-a", n = "custom-element-b";
class a extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" }), this.shadowRoot.innerHTML = "<custom-element-b></custom-element-b>";
  }
}
class m extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" }), this.shadowRoot.innerHTML = '<div part="exported-part-name unsanitized-part">Nested Element</div>';
  }
}
customElements.get(s) == null && customElements.define(s, a);
customElements.get(n) == null && customElements.define(n, m);
export {
  u as CodeTestEventType,
  i as CodeTests,
  d as CodeTestsElement,
  r as HookType,
  o as MyCustomElement,
  a as MyCustomElementA,
  m as MyCustomElementB,
  p as TestRunnerElement,
  E as expect,
  h as prompt
};
