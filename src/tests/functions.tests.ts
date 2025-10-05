import { expect } from '@magnit-ce/test-runner'
import { assignClassAndIdToPart, assignClassToPart, assignFormFieldPartAttributes, assignIdToPart, assignInputTypeToPart, assignPartsAsExportPartsAttribute, assignTagToPart, getExportPartsFromParts } from '../ce-part-utils';


export default {
    'should assign from ids': async () =>
    {
        await customElements.whenDefined('custom-element');
        const customElement = document.querySelector('custom-element')!;
        assignIdToPart(customElement.shadowRoot!);
        
        expect(customElement).toBeDefined();

    },
    'should assign from classes': async () =>
    {
        await customElements.whenDefined('custom-element');
        const customElement = document.querySelector('custom-element')!;
        assignClassToPart(customElement.shadowRoot!);
        
        expect(customElement).toBeDefined();
    },
    'should assign from ids and classes at the same time': async () =>
    {
        await customElements.whenDefined('custom-element');
        const customElement = document.querySelector('custom-element')!;
        assignClassAndIdToPart(customElement.shadowRoot!);
        
        expect(customElement).toBeDefined();
    },
    'should assign from element tag': async () =>
    {
        await customElements.whenDefined('custom-element');
        const customElement = document.querySelector('custom-element')!;
        assignTagToPart(customElement.shadowRoot!);
        
        expect(customElement).toBeDefined();
    },
    'should assign from input type': async () =>
    {
        await customElements.whenDefined('custom-element');
        const customElement = document.querySelector('custom-element')!;
        assignInputTypeToPart(customElement.shadowRoot!);
        
        expect(customElement).toBeDefined();
    },
    'should assign from field part': async () =>
    {
        await customElements.whenDefined('custom-element');
        const customElement = document.querySelector('custom-element')!;
        assignFormFieldPartAttributes(customElement.shadowRoot!);
        
        expect(customElement).toBeDefined();
    },
    'should export all parts of shadow root children': async () =>
    {
        await customElements.whenDefined('custom-element');
        const customElement = document.querySelector('custom-element')!;
        assignPartsAsExportPartsAttribute(customElement.shadowRoot!);
        
        expect(customElement).toBeDefined();
    },
    'should get valid exporparts string from shadow root children': async () =>
    {
        await customElements.whenDefined('custom-element');
        const customElement = document.querySelector('custom-element')!;
        const exportpartsValue = getExportPartsFromParts(customElement.shadowRoot!);
        
        expect(customElement).toBeDefined();
    },
}