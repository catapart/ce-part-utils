import { expect } from '@magnit-ce/test-runner'
import { assignClassAndIdToPart, assignInputTypeToPart, assignPartsAsExportPartsAttribute, assignTagToPart } from '../ce-part-utils';


export default {
    'should map element tags to part values': async () =>
    {
        await customElements.whenDefined('custom-element');
        const customElement = document.querySelector('custom-element')!;
        assignTagToPart(customElement.shadowRoot!, {

        });
        
        expect(customElement).toBeDefined();

    },
    'should map input types to part values': async () =>
    {
        await customElements.whenDefined('custom-element');
        const customElement = document.querySelector('custom-element')!;
        // assignInputTypeToPart(customElement.shadowRoot!, {
            
        // });
        
        expect(customElement).toBeDefined();
    },
    'should map part values to exportparts values': async () =>
    {
        await customElements.whenDefined('custom-element');
        const customElement = document.querySelector('custom-element')!;
        assignPartsAsExportPartsAttribute(customElement.shadowRoot!, false, {
            
        });
        
        expect(customElement).toBeDefined();
    },
}