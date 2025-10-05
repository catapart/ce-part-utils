export * from '@magnit-ce/test-runner';

const COMPONENT_TAG_NAME = 'custom-element';
export class MyCustomElement extends HTMLElement     
{ 
    constructor()
    {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot!.innerHTML = `<form id="user" class="card interactive">
            <input type="text" name="name" placeholder="Name" id="user-name" class="alpha value" />
            <input type="text" name="age" placeholder="Age" inputmode="numeric" id="user-age" class="number value" />
            <input type="checkbox" name="active" id="is-active" class="toggle value" />
            <input type="submit" disabled id="user-submit" class="ok" />
        </form>`
    }
}

if(customElements.get(COMPONENT_TAG_NAME) == null)
{
    customElements.define(COMPONENT_TAG_NAME, MyCustomElement);
}

const COMPONENT_TAG_NAME_A = 'custom-element-a';
const COMPONENT_TAG_NAME_B = 'custom-element-b';
export class MyCustomElementA extends HTMLElement     
{ 
    constructor()
    {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot!.innerHTML = `<custom-element-b></custom-element-b>`
    }
}
export class MyCustomElementB extends HTMLElement     
{ 
    constructor()
    {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot!.innerHTML = `<div part="exported-part-name unsanitized-part">Nested Element</div>`
    }
}

if(customElements.get(COMPONENT_TAG_NAME_A) == null)
{
    customElements.define(COMPONENT_TAG_NAME_A, MyCustomElementA);
}
if(customElements.get(COMPONENT_TAG_NAME_B) == null)
{
    customElements.define(COMPONENT_TAG_NAME_B, MyCustomElementB);
}