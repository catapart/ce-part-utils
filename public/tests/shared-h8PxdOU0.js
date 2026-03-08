function reset() {
  document.querySelector("custom-element")?.remove();
  const customElement = document.createElement("custom-element");
  document.querySelector("test-runner").append(customElement);
}
async function elementIsDefined(tagName) {
  const customElement = customElements.get(tagName);
  if (customElement == null) {
    return customElements.whenDefined("custom-element");
  }
  return customElement;
}
export {
  elementIsDefined as e,
  reset as r
};
