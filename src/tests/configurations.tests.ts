import { expect } from '@magnit-ce/test-runner'
import { assignClassAndIdToPart, assignInputTypeToPart, assignPartsAsExportPartsAttribute, assignTagToPart } from '../ce-part-utils';
import { reset } from './tests';


export default {
    'should map element tags to part values': async () =>
    {
        await customElements.whenDefined('custom-element');
        reset();
        const customElement = document.querySelector<HTMLElement>('custom-element')!;
        assignTagToPart(customElement.shadowRoot!, {
            'div': 'divider',
            'form': 'form-substitute',
            'input': 'value'
        });
        
        const tags = [];
        const parts = [];
        const results = [];
        const targetElements = [...customElement.shadowRoot!.querySelectorAll<HTMLElement>(`*`)];
        for(let i = 0; i < targetElements.length; i++)
        {
            const tag = targetElements[i].tagName.toLowerCase();
            const substitute = (tag == 'div')
            ? 'divider'
            : (tag == 'form') 
            ? 'form-substitute'
            : (tag == 'input')
            ? 'value'
            : null;
            const hasTag = (substitute == null) ? false : targetElements[i].part.contains(substitute);
            tags.push(substitute);
            parts.push(...[...targetElements[i].part]);
            results.push(hasTag);
        }

        const success = results.indexOf(false) == -1;
        return { success, expected: tags, value: parts };

    },
    'should map input types to part values': async () =>
    {
        await customElements.whenDefined('custom-element');
        reset();
        const customElement = document.querySelector<HTMLElement>('custom-element')!;
        assignInputTypeToPart(customElement.shadowRoot!, {
            'text': 'alpha',
            'number': 'num',
            'text-numeric': 'tnum'
        });
        
        const inputTypes = [];
        const parts = [];
        const results = [];
        const targetElements = [...customElement.shadowRoot!.querySelectorAll<HTMLInputElement>(`input`)];
        for(let i = 0; i < targetElements.length; i++)
        {
            const inputType = targetElements[i].type;
            const substitute = (inputType == 'number')
            ? 'num'
            : (inputType == 'text')
            ? (targetElements[i].inputMode == 'numeric') ? 'tnum' : 'alpha'
            : inputType;
            const hasType = (substitute == null) 
            ? false
            : (substitute == 'tnum')
            ? targetElements[i].part.contains(substitute) && targetElements[i].part.contains('alpha')
            : targetElements[i].part.contains(substitute);
            inputTypes.push(substitute);
            parts.push(...[...targetElements[i].part]);
            if(substitute == 'tnum')
            {
                inputTypes.push('alpha');
            }
            results.push(hasType);
        }

        const success = results.indexOf(false) == -1;
        return { success, expected: inputTypes, value: parts };
    },
    'should map part values to exportparts values': async () =>
    {        
        await customElements.whenDefined('custom-element');
        reset();
        const customElement = document.querySelector<HTMLElement>('custom-element')!;
        assignClassAndIdToPart(customElement.shadowRoot!);
        assignTagToPart(customElement.shadowRoot!);
        assignInputTypeToPart(customElement.shadowRoot!);
        assignPartsAsExportPartsAttribute(customElement.shadowRoot!, false, {
            'user': 'guest',
            'card': 'component-card',
            'div': 'inner-div',
        });

        const parts = [];
        const targetElements = [...customElement.shadowRoot!.querySelectorAll(`[part]`)];
        for(let i = 0; i < targetElements.length; i++)
        {
            parts.push(...[...targetElements[i].part]);
        }

        const exportParts = customElement.getAttribute('exportparts');
        if(exportParts == null) { throw new Error("Subject has no exportparts attribute."); }

        const exportPartsSet = new Set(exportParts.split(',').map(item => {
            const target = item.trim();
            return (target == 'user')
            ? 'guest'
            : (target == 'card')
            ? 'component-card'
            : (target == 'div')
            ? 'inner-div'
            : item.trim()
        }));
        let hasAllParts = parts.reduce((accumulation, value, index) =>
        {
            const mappedValue = (value == 'user')
            ? 'guest'
            : (value == 'card')
            ? 'component-card'
            : (value == 'div')
            ? 'inner-div'
            : null;
            
            return accumulation == false ? false : (mappedValue == null) 
            ? exportPartsSet.has(value)
            : exportPartsSet.has(`${value}:${mappedValue}`)
        }, true);

        return { success: hasAllParts, expected: Array.from(new Set(parts)), value: Array.from(exportPartsSet) };
    },
}