import { expect } from '@magnit-ce/test-runner'
import { assignClassAndIdToPart, assignClassToPart, assignFormFieldPartAttributes, assignIdToPart, assignInputTypeToPart, assignPartsAsExportPartsAttribute, assignTagToPart, getExportPartsFromParts } from '../ce-part-utils';

const SuccessValues = {
    'ids': `<div id="component" part="component">
    <form id="user" class="card interactive" part="user">
        <input type="text" name="name" placeholder="Name" id="user-name" class="alpha value" part="user-name">
        <input type="text" name="age" placeholder="Age" inputmode="numeric" id="user-age" class="number value" part="user-age">
        <input type="checkbox" name="active" id="is-active" class="toggle value" part="is-active">
        <input type="submit" disabled="" id="user-submit" class="ok" part="user-submit">
    </form>
</div>`,
    'classes': ``,
    'idsAndClasses': ``,
    'tags': ``,
    'inputs': ``,
    'fields': ``,
    'getexportparts': ``,
    'exportparts': ``,

}

function reset()
{
    document.querySelector('custom-element')?.remove();
    const customElement = document.createElement('custom-element');
    document.querySelector('test-runner')!.append(customElement);
}

function testIds(customElement: HTMLElement)
{
    const ids = [];
    const parts = [];
    const results = [];
    const idElements = [...customElement.shadowRoot!.querySelectorAll<HTMLElement>(`[id]`)];
    for(let i = 0; i < idElements.length; i++)
    {
        const id = idElements[i].id;
        const hasId = idElements[i].part.contains(id);
        ids.push(id);
        parts.push(...[...idElements[i].part]);
        results.push(hasId);
    }
    return [ids, parts, results] as [string[], string[], boolean[]];
}
function testClasses(customElement: HTMLElement)
{
    const classes: string[] = [];
    const parts = [];
    const results = [];
    const classElements = [...customElement.shadowRoot!.querySelectorAll<HTMLElement>(`[id]`)];
    for(let i = 0; i < classElements.length; i++)
    {        
        const elementClasses: string[] = [...classElements[i].classList];
        let hasAllClasses = elementClasses.reduce((accumulation, value, index) =>
        {
            return accumulation == false ? false : classElements[i].part.contains(value);
        }, true);

        classes.push(...elementClasses);
        parts.push(...[...classElements[i].part]);
        results.push(hasAllClasses);
    }
    return [classes, parts, results] as [string[], string[], boolean[]];
}

export default {
    'should assign from ids': async () =>
    {
        await customElements.whenDefined('custom-element');
        reset();
        const customElement = document.querySelector<HTMLElement>('custom-element')!;
        assignIdToPart(customElement.shadowRoot!);

        const [ids, parts, results] = testIds(customElement);
        
        const success = results.indexOf(false) == -1;
        return { success, expected: ids, value: parts };
    },
    'should assign from classes': async () =>
    {
        await customElements.whenDefined('custom-element');
        reset();
        const customElement = document.querySelector<HTMLElement>('custom-element')!;
        assignClassToPart(customElement.shadowRoot!);

        const [classes, parts, results] = testClasses(customElement);
        
        const success = results.indexOf(false) == -1;
        return { success, expected: classes, value: parts };
    },
    'should assign from ids and classes at the same time': async () =>
    {
        await customElements.whenDefined('custom-element');
        reset();
        const customElement = document.querySelector<HTMLElement>('custom-element')!;
        assignClassAndIdToPart(customElement.shadowRoot!);

        const [ids, idParts, idResults] = testIds(customElement);
        const [classes, classParts, classResults] = testClasses(customElement);
        
        const results = idResults.concat(...classResults);
        const success = results.indexOf(false) == -1;
        return { success, expected:  [ ids, classes ], value: [ idParts, classParts ] };
    },
    'should assign from element tag': async () =>
    {
        await customElements.whenDefined('custom-element');
        reset();
        const customElement = document.querySelector<HTMLElement>('custom-element')!;
        assignTagToPart(customElement.shadowRoot!);
        
        const tags = [];
        const parts = [];
        const results = [];
        const targetElements = [...customElement.shadowRoot!.querySelectorAll<HTMLElement>(`*`)];
        for(let i = 0; i < targetElements.length; i++)
        {
            const tag = targetElements[i].tagName.toLowerCase();
            const hasTag = targetElements[i].part.contains(tag);
            tags.push(tag);
            parts.push(...[...targetElements[i].part]);
            results.push(hasTag);
        }

        const success = results.indexOf(false) == -1;
        return { success, expected: tags, value: parts };
    },
    'should assign from input type': async () =>
    {
        await customElements.whenDefined('custom-element');
        const customElement = document.querySelector<HTMLElement>('custom-element')!;
        assignInputTypeToPart(customElement.shadowRoot!);
        
        const inputTypes = [];
        const parts = [];
        const results = [];
        const targetElements = [...customElement.shadowRoot!.querySelectorAll<HTMLInputElement>(`input[type]`)];
        for(let i = 0; i < targetElements.length; i++)
        {
            const inputType = targetElements[i].type;
            const hasType = targetElements[i].part.contains(inputType);
            inputTypes.push(inputType);
            parts.push(...[...targetElements[i].part]);
            results.push(hasType);
        }

        const success = results.indexOf(false) == -1;
        return { success, expected: inputTypes, value: parts };
    },
    // 'should assign from field part': async () =>
    // {
    //     await customElements.whenDefined('custom-element');
    //     const customElement = document.querySelector('custom-element')!;
    //     assignFormFieldPartAttributes(customElement.shadowRoot!);
    //     expect(customElement.shadowRoot!.firstElementChild?.outerHTML).toBe(SuccessValues.fields);
    // },
    'should get valid exportparts string from shadow root children': async () =>
    {
        await customElements.whenDefined('custom-element');
        const customElement = document.querySelector<HTMLElement>('custom-element')!;

        assignClassAndIdToPart(customElement.shadowRoot!);
        assignTagToPart(customElement.shadowRoot!);
        assignInputTypeToPart(customElement.shadowRoot!);
        const exportpartsValue = getExportPartsFromParts(customElement.shadowRoot!);
        
        const parts = [];
        const targetElements = [...customElement.shadowRoot!.querySelectorAll(`[part]`)];
        for(let i = 0; i < targetElements.length; i++)
        {
            parts.push(...[...targetElements[i].part]);
        }
        
        const exportPartsSet = new Set(exportpartsValue.split(',').map(item => item.trim()));
        let hasAllParts = parts.reduce((accumulation, value, index) =>
        {
            return accumulation == false ? false : exportPartsSet.has(value);
        }, true);
        
        // convert parts to set and back to array to clear duplicate and make the expected and value actually match.
        return { success: hasAllParts, expected: Array.from(new Set(parts)), value: Array.from(exportPartsSet) };
    },
    'should export all parts of shadow root children': async () =>
    {
        await customElements.whenDefined('custom-element');
        const customElement = document.querySelector<HTMLElement>('custom-element')!;
        assignClassAndIdToPart(customElement.shadowRoot!);
        assignTagToPart(customElement.shadowRoot!);
        assignInputTypeToPart(customElement.shadowRoot!);
        assignPartsAsExportPartsAttribute(customElement.shadowRoot!);
        
        const parts = [];
        const targetElements = [...customElement.shadowRoot!.querySelectorAll(`[part]`)];
        for(let i = 0; i < targetElements.length; i++)
        {
            parts.push(...[...targetElements[i].part]);
        }

        const exportParts = customElement.getAttribute('exportparts');
        if(exportParts == null) { throw new Error("Subject has no exportparts attribute."); }

        const exportPartsSet = new Set(exportParts.split(',').map(item => item.trim()));
        let hasAllParts = parts.reduce((accumulation, value, index) =>
        {
            return accumulation == false ? false : exportPartsSet.has(value);
        }, true);

        // convert parts to set and back to array to clear duplicate and make the expected and value actually match.
        return { success: hasAllParts, expected: Array.from(new Set(parts)), value: Array.from(exportPartsSet) };
    },
}