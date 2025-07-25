// collection-browser.css?raw
var collection_browser_default = ':host\r\n{\r\n    --border-color: rgb(205 205 205);\r\n\r\n    display: grid;\r\n    border: solid 1px var(--border-color);\r\n}\r\n@media (prefers-color-scheme: dark) \r\n{\r\n    :host\r\n    {\r\n        --border-color: rgb(81 81 81);\r\n    }\r\n}\r\n\r\n[part="navigation"]\r\n{\r\n    border-right: solid 1px var(--border-color);\r\n}\r\n[part="categories"] > ::slotted(*)\r\n{\r\n    padding: var(--category-padding, 5px 15px);\r\n}\r\n\r\n[part="gallery"]\r\n{\r\n    margin: 0;\r\n    display: grid;\r\n    grid-template-rows: auto 1fr;\r\n    /* gap: 1em; */\r\n    user-select: none;\r\n    overflow: auto;\r\n}\r\n\r\n[part="header"]\r\n{\r\n    display: grid;\r\n    grid-template-columns: 1fr auto;\r\n    align-items: center;\r\n\r\n    border-bottom: solid 1px var(--border-color);\r\n}\r\n\r\n[part="items"]\r\n{\r\n    padding: 0;\r\n    margin: 0;\r\n    list-style: none;\r\n\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fill, var(--item-width, minmax(0, 100px)));\r\n    /* grid-column-gap: var(--column-gap, 1em);\r\n    grid-row-gap: var(--row-gap, 1em); */\r\n}\r\n\r\n\r\n::slotted(:not([slot]))\r\n{\r\n    border: solid 1px transparent;\r\n    margin: 3px 7px;\r\n}\r\n\r\n::slotted(:not([slot]):focus)\r\n{\r\n    border-color: rgb(205 205 205);\r\n}\r\n::slotted(:not([slot]):hover)\r\n{\r\n    background-color: var(--background-color-hover, rgb(221, 221, 221));\r\n}\r\n::slotted(:not([slot]).selected)\r\n{\r\n    background-color: var(--background-color-selected, highlight);\r\n    color: var(--color-selected, highlighttext);\r\n}\r\n@media (prefers-color-scheme: dark) \r\n{\r\n    ::slotted(:not([slot]):hover)\r\n    {\r\n        --background-color-hover: rgb(197, 197, 197);\r\n    }\r\n}\r\n\r\n[part="add-button"]\r\n{\r\n    align-self: center;\r\n    justify-self: flex-end;\r\n    margin: .5em 1em;\r\n}\r\n\r\n\r\n@media (max-width: 800px) \r\n{\r\n    \r\n}\r\n@media (min-width: 800px) \r\n{\r\n    :host\r\n    {\r\n        display: grid;\r\n        grid-template-columns: auto 1fr;\r\n    }\r\n}';

// collection-browser.html?raw
var collection_browser_default2 = '<nav id="navigation">\r\n    <slot name="navigation-header">\r\n        <header id="navigation-header" class="header">\r\n            <slot name="navigation-header-content"></slot>\r\n        </header>\r\n    </slot>\r\n    <selectable-items id="categories"><slot name="category"></slot></selectable-items>\r\n</nav>\r\n<div id="gallery">\r\n    <slot name="header">\r\n        <header id="gallery-header" class="header">\r\n            <slot name="header-content"></slot>\r\n            <slot name="add-button">\r\n                <button id="add-button" class="button">\r\n                    <slot name="add-button-content">\r\n                        <span id="add-button-icon" class="icon">+</span>\r\n                        <span id="add-button-label">Add Item</span>\r\n                    </slot>\r\n                </button>\r\n            </slot>\r\n        </header>\r\n    </slot>\r\n    <div id="items">\r\n        <slot></slot>\r\n    </div>\r\n</div>';

// node_modules/.pnpm/@magnit-ce+selectable-items@0.1.3/node_modules/@magnit-ce/selectable-items/dist/selectable-items.js
var selectable_items_default = ":host { user-select: none; }\n::slotted(*)\n{\n    user-select: none;\n    cursor: pointer;\n}\n::slotted(:hover)\n{\n    background-color: var(--background-color-hover, rgb(221, 221, 221));\n}\n::slotted([aria-selected])\n{\n    background-color: var(--background-color-selected, highlight);\n    color: var(--color-selected, highlighttext);\n}\n@media (prefers-color-scheme: dark) \n{\n    ::slotted(:hover)\n    {\n        --background-color-hover: rgb(197, 197, 197);\n    }\n}";
var COMPONENT_STYLESHEET = new CSSStyleSheet();
COMPONENT_STYLESHEET.replaceSync(selectable_items_default);
document.addEventListener("keydown", (event) => {
  if (SelectableItemsElement.multipleModifierKeys.indexOf(event.code) > -1) {
    SelectableItemsElement._multipleModifierActive = true;
    return;
  }
});
document.addEventListener("keyup", (event) => {
  if (SelectableItemsElement.multipleModifierKeys.indexOf(event.code) > -1) {
    SelectableItemsElement._multipleModifierActive = SelectableItemsElement.multipleModifierActive;
  }
});
function getSelectableItem(event, reference) {
  const pathItems = event.composedPath();
  let selectableItem = void 0;
  for (let i = 0; i < pathItems.length; i++) {
    let pathItem = pathItems[i];
    if (pathItem == reference) {
      break;
    }
    if (pathItem instanceof HTMLElement && pathItem instanceof HTMLSlotElement == false) {
      selectableItem = pathItem;
    }
  }
  return selectableItem;
}
var COMPONENT_TAG_NAME = "selectable-items";
var SelectableItemsElement = class _SelectableItemsElement extends HTMLElement {
  static observedAttributes = [];
  // internal
  static _multipleModifierActive = false;
  // externally available to define when multiples are selected
  static multipleModifierKeys = ["ShiftLeft", "ShiftRight", "ControlLeft", "ControlRight"];
  static multipleModifierActive = false;
  static selectKeys = ["Enter", "Space"];
  static selectedClassName = "selected";
  selected = () => {
    let slot = this.querySelector("slot");
    let target = this;
    while (slot != null) {
      target = slot;
      slot = slot.querySelector("slot");
    }
    const targetChildren = target instanceof HTMLSlotElement ? target.assignedElements() : [...target.children];
    return targetChildren.filter((item) => item instanceof HTMLElement && item.hasAttribute("aria-selected"));
  };
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `<slot></slot>`;
    this.shadowRoot.adoptedStyleSheets.push(COMPONENT_STYLESHEET);
    this.addEventListener("keydown", (event) => {
      if (_SelectableItemsElement.selectKeys.indexOf(event.code) > -1) {
        const selectedChild = getSelectableItem(event, this);
        if (selectedChild == void 0) {
          return;
        }
        const defaultAllowed = this.#dispatchChange(selectedChild);
        if (defaultAllowed == false) {
          return;
        }
        event.preventDefault();
        this.selectItem(selectedChild);
      }
    });
    this.addEventListener("click", (event) => {
      const selectedChild = getSelectableItem(event, this);
      if (selectedChild == null) {
        return;
      }
      const defaultAllowed = this.#dispatchChange(selectedChild);
      if (defaultAllowed == false) {
        return;
      }
      this.selectItem(selectedChild);
    });
    this.shadowRoot.querySelector("slot").addEventListener("slotchange", (event) => {
      const children = event.target.assignedElements();
      for (let i = 0; i < children.length; i++) {
        if (children[i].hasAttribute("tabIndex") == false) {
          children[i].setAttribute("tabIndex", "0");
        }
      }
    });
  }
  selectItem(item) {
    const allowMultipleAttribute = this.getAttribute("multiple") ?? this.getAttribute("multi");
    if (_SelectableItemsElement._multipleModifierActive == false || allowMultipleAttribute == null) {
      const currentlySelected = [...(item.parentElement ?? this).children].reduce((selected, currentItem, _index) => {
        if (currentItem.hasAttribute("aria-selected")) {
          selected.push(currentItem);
        }
        return selected;
      }, new Array());
      currentlySelected.forEach((currentItem) => this.#deselectItem(currentItem));
    }
    this.#selectItem(item);
    return this.selected();
  }
  #selectItem(item) {
    item.classList.add(this.getAttribute("selected-class-name") ?? _SelectableItemsElement.selectedClassName);
    item.setAttribute("aria-selected", "option");
  }
  #deselectItem(item) {
    item.classList.remove(this.getAttribute("selected-class-name") ?? _SelectableItemsElement.selectedClassName);
    item.removeAttribute("aria-selected");
  }
  #dispatchChange(selectedItem) {
    const selected = /* @__PURE__ */ new Set([selectedItem]);
    const allowMultipleAttribute = this.hasAttribute("multiple") || this.hasAttribute("multi");
    if (_SelectableItemsElement._multipleModifierActive == true && allowMultipleAttribute == true) {
      for (const element of this.selected()) {
        selected.add(element);
      }
    }
    const defaultAllowed = this.dispatchEvent(new CustomEvent("change", {
      bubbles: true,
      composed: true,
      cancelable: true,
      detail: { selected: Array.from(selected) }
    }));
    return defaultAllowed;
  }
};
if (customElements.get(COMPONENT_TAG_NAME) == null) {
  customElements.define(COMPONENT_TAG_NAME, SelectableItemsElement);
}

// collection-browser.ts
var CollectionBrowserParts = /* @__PURE__ */ ((CollectionBrowserParts2) => {
  return CollectionBrowserParts2;
})(CollectionBrowserParts || {});
var COMPONENT_STYLESHEET2 = new CSSStyleSheet();
COMPONENT_STYLESHEET2.replaceSync(collection_browser_default);
var COMPONENT_TAG_NAME2 = "collection-browser";
var CollectionBrowserElement = class _CollectionBrowserElement extends HTMLElement {
  static selectedClassName = "selected";
  componentParts = /* @__PURE__ */ new Map();
  getElement(id) {
    if (this.componentParts.get(id) == null) {
      const part = this.findElement(id);
      if (part != null) {
        this.componentParts.set(id, part);
      }
    }
    return this.componentParts.get(id);
  }
  findElement(id) {
    return this.shadowRoot.getElementById(id);
  }
  // get selected()
  // {
  //     return this.#getSelected();
  // }
  get allowMultiSelect() {
    return this.hasAttribute("multi") || this.hasAttribute("multiple");
  }
  // handledItems: WeakSet<Element> = new WeakSet();
  #defaultSlot;
  #boundSlotChange;
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = collection_browser_default2;
    this.shadowRoot.adoptedStyleSheets.push(COMPONENT_STYLESHEET2);
    this.#boundSlotChange = ((_event) => {
      const children = this.#defaultSlot.assignedElements();
      if (children.length == 1 && children[0] instanceof HTMLSlotElement) {
        let descendantSlot = children[0];
        let descendantSlotChildren = descendantSlot.assignedElements();
        while (descendantSlot instanceof HTMLSlotElement && descendantSlotChildren[0] instanceof HTMLSlotElement) {
          descendantSlot = descendantSlotChildren[0];
          if (descendantSlot instanceof HTMLSlotElement) {
            descendantSlotChildren = descendantSlot.assignedElements();
          }
        }
        this.#registerSlot("default", descendantSlot);
        return;
      }
    }).bind(this);
    this.#defaultSlot = this.shadowRoot.querySelector("slot:not([name])");
    this.#defaultSlot.addEventListener("slotchange", this.#boundSlotChange);
    this.shadowRoot.querySelector("selectable-items").addEventListener("change", (event) => {
      event.preventDefault();
      event.stopPropagation();
      const { selected } = event.detail;
      const selectedCategoryItem = selected[0];
      const changeEvent = new CustomEvent("category", { cancelable: true, detail: { selected: selectedCategoryItem } });
      const allowDefault = this.dispatchEvent(changeEvent);
      if (allowDefault == false || selectedCategoryItem == null) {
        return;
      }
      event.target.selectItem(selectedCategoryItem);
      const category = selectedCategoryItem.dataset.category;
      if (category == null || category.trim() == "") {
        return;
      }
      this.dataset.category = category;
      const items = [...this.querySelectorAll(":not([slot])")];
      for (let i = 0; i < items.length; i++) {
        const item = items[i];
        item.classList.remove("has-category");
        if (item.dataset.category == null || item.dataset.category.trim() == "") {
          continue;
        }
        if (item.dataset.category == category) {
          item.classList.add("has-category");
        } else {
          const categoriesArray = item.dataset.category.split(",");
          for (let j = 0; j < categoriesArray.length; j++) {
            const currentCategory = categoriesArray[j];
            if (currentCategory == category) {
              item.classList.add("has-category");
              break;
            }
          }
        }
      }
    });
    this.findElement("gallery").addEventListener("click", (event) => {
      event.stopPropagation();
      const children = this.#defaultSlot.assignedElements();
      const target = event.composedPath().find((item) => item instanceof Element && children.indexOf(item) != -1);
      if (target == null || !(target instanceof HTMLElement)) {
        return;
      }
      const currentlySelected = this.getSelected();
      const shift = event.getModifierState("Shift");
      const ctrl = event.getModifierState("Control");
      const alt = event.getModifierState("Alt");
      const changeEvent = new CustomEvent("change", { cancelable: true, detail: { newSelection: target, previousSelection: currentlySelected, shift, ctrl, alt } });
      const value = this.dispatchEvent(changeEvent);
      if (value == false) {
        return;
      }
      if (this.allowMultiSelect == false) {
        for (let i = 0; i < currentlySelected.length; i++) {
          const selectedItem = currentlySelected[i];
          this.#deselectItem(selectedItem);
        }
      }
      this.#toggleSelection(target);
    });
  }
  #registerSlot(slotIdentifier, slot) {
    if (slotIdentifier == "default") {
      if (this.#defaultSlot != null) {
        this.#defaultSlot.removeEventListener("slotchange", this.#boundSlotChange);
      }
      this.#defaultSlot = slot;
      this.#defaultSlot.addEventListener("slotchange", this.#boundSlotChange);
      const children = this.#defaultSlot.assignedElements();
      this.toggleAttribute("empty", children.length == 0);
    }
  }
  // #applyPartAttributes()
  // {
  //     const identifiedElements = [...this.shadowRoot!.querySelectorAll('[id]')];
  //     for(let i = 0; i < identifiedElements.length; i++)
  //     {
  //         identifiedElements[i].part.add(identifiedElements[i].id);
  //     }
  //     const classedElements = [...this.shadowRoot!.querySelectorAll('[class]')];
  //     for(let i = 0; i < classedElements.length; i++)
  //     {
  //         classedElements[i].part.add(...classedElements[i].classList);
  //     }
  // }
  getSelected() {
    const selected = this.#defaultSlot.assignedElements().reduce((selected2, item, _index) => {
      if (item.hasAttribute("aria-selected")) {
        selected2.push(item);
      }
      return selected2;
    }, new Array());
    return selected;
  }
  selectItems(...items) {
    const children = this.#defaultSlot.assignedElements();
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      if (children.indexOf(item) == -1) {
        continue;
      }
      this.#selectItem(item);
    }
  }
  #selectItem(item) {
    item.setAttribute("aria-selected", "option");
    item.classList.add(_CollectionBrowserElement.selectedClassName);
  }
  deselectItems(...items) {
    const children = this.#defaultSlot.assignedElements();
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      if (children.indexOf(item) == -1) {
        continue;
      }
      this.#deselectItem(item);
    }
  }
  #deselectItem(item) {
    item.removeAttribute("aria-selected");
    item.classList.remove(_CollectionBrowserElement.selectedClassName);
  }
  #toggleSelection(item) {
    if (item.hasAttribute("aria-selected")) {
      this.#deselectItem(item);
    } else {
      this.#selectItem(item);
    }
  }
  // static create(props?: CollectionBrowserProperties)
  // {
  //     const element = document.createElement(COMPONENT_TAG_NAME) as CollectionBrowserElement;
  //     if(props != null)
  //     {
  //         for(const [key, value] of Object.entries(props))
  //         {
  //             if(key == 'open')
  //             {
  //                 element.findPart<HTMLDialogElement>('dialog').open = value as boolean;
  //             }
  //             // else if(key == 'key')
  //             // {
  //             //     element.dataset.key = value as string;
  //             // }
  //             else if(key.startsWith('on'))
  //             {
  //                 // const eventName = key.substring(2).toLowerCase();
  //                 // element.addEventListener(eventName, value as any);
  //             }
  //         }
  //     }
  //     return element;
  // }
  // attributeChangedCallback(attributeName: string, _oldValue: string, newValue: string) 
  // {
  // }
  clearSelection() {
    this.dispatchEvent(new CustomEvent("change", { detail: { newSelection: null, previousSelection: this.getSelected(), shift: false, ctrl: false, alt: false } }));
  }
};
if (customElements.get(COMPONENT_TAG_NAME2) == null) {
  customElements.define(COMPONENT_TAG_NAME2, CollectionBrowserElement);
}
export {
  CollectionBrowserElement,
  CollectionBrowserParts
};
