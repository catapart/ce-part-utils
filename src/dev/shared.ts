
export function reset()
{
    document.querySelector('custom-element')?.remove();
    const customElement = document.createElement('custom-element');
    document.querySelector('test-runner')!.append(customElement);
}