
export function reset()
{
    document.querySelector('custom-element')?.remove();
    const customElement = document.createElement('custom-element');
    document.querySelector('test-runner')!.append(customElement);
}

export async function elementIsDefined(tagName: string)
{
    const customElement = customElements.get(tagName);
    if(customElement == null)
    {
        return customElements.whenDefined('custom-element');
    }
    return customElement;
}