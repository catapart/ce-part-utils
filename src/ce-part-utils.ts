// #region parts

const htmlElementsSelector = ':not(slot,defs,g,rect,path,circle,ellipse,line,polygon,text,tspan,use,svg image,svg title,desc)';

export function assignClassAndIdToPart(shadowRoot: ShadowRoot)
{
    const identifiedElements = [...shadowRoot.querySelectorAll(`${htmlElementsSelector}[id]`)];
    for(let i = 0; i < identifiedElements.length; i++)
    {
        identifiedElements[i].part.add(identifiedElements[i].id);
    }
    const classedElements = [...shadowRoot.querySelectorAll(`${htmlElementsSelector}[class]`)];
    for(let i = 0; i < classedElements.length; i++)
    {
        classedElements[i].part.add(...classedElements[i].classList);
    }
}

export type TagPartMap = Partial<{
    [key in keyof HTMLElementTagNameMap]: string;
}>;
export function assignTagToPart(shadowRoot: ShadowRoot, config?: TagPartMap)
{
    const elements = [...shadowRoot.querySelectorAll(`${htmlElementsSelector}`)];
    for(let i = 0; i < elements.length; i++)
    {
        const tagName = elements[i].tagName.toLowerCase() as keyof HTMLElementTagNameMap;
        elements[i].part.add(config?.[tagName] ?? tagName);
    }
}
export class InputTypePartMap{
    button?:string;
    checkbox?:string;
    color?:string;
    date?:string;
    ["datetime-local"]?:string;
    email?:string;
    file?:string;
    hidden?:string;
    image?:string;
    month?:string;
    number?:string;
    password?:string;
    radio?:string;
    range?:string;
    reset?:string;
    search?:string;
    submit?:string;
    tel?:string;
    text?:string;
    time?:string;
    url?:string;
    week?:string;
    ["text-numeric"]:string = "number";
};
export function assignInputTypeToPart(shadowRoot: ShadowRoot, config: InputTypePartMap = new InputTypePartMap())
{
    const elements = [...shadowRoot.querySelectorAll('input')];
    for(let i = 0; i < elements.length; i++)
    {
        const inputType = elements[i].type as keyof InputTypePartMap;
        if(inputType == 'text')
        {
            if(elements[i].inputMode == "numeric")
            {
                elements[i].part.add(config["text-numeric"]);
            }
        }
        elements[i].part.add(config[inputType] ?? inputType);
    }
}

export function assignFormFieldPartAttributes(shadowRoot: ShadowRoot)
{
    const formFieldElements = [...shadowRoot.querySelectorAll('form-field')];
    for(let i = 0; i < formFieldElements.length; i++)
    {
        const formFieldElement = formFieldElements[i];
        const fieldId = formFieldElement.id;
        
        const container = formFieldElement.querySelector('.container');
        container?.part.add('container', 'field-container', `${fieldId}-container`);
        const label = formFieldElement.querySelector('.field-label');
        label?.part.add('label', 'field-label', `${fieldId}-label`);
        const prefix = formFieldElement.querySelector('.prefix');
        prefix?.part.add('prefix', 'field-prefix', `${fieldId}-prefix`);
        const postfix = formFieldElement.querySelector('.postfix');
        postfix?.part.add('postfix', 'field-postfix', `${fieldId}-postfix`);
        const enabledCheckbox = formFieldElement.querySelector('.enabled-checkbox');
        enabledCheckbox?.part.add('enabled-checkbox', 'field-enabled-checkbox', `${fieldId}-enabled-checkbox`);
    }
}

// #region exportparts

export type PartExportPartMap = { [key: string]: string };
export function getExportPartsFromParts(shadowRoot: ShadowRoot, addNewlines: boolean = false, replacements?: PartExportPartMap)
{
    const exportPartsSet = new Set(([...shadowRoot.querySelectorAll('[part]')] as HTMLElement[])
    .map(item =>
    {
        const parts = [...item.part.values()]
        .map(part => {
            const replacement = (replacements as any)?.[part];
            return (replacement != null) ? `${part}:${replacement}` : part;
        });

        const childExports = item.getAttribute('exportparts');
        if(childExports != null)
        {
            const childParts = childExports.replaceAll(/[\s\n]/g, '').split(',');
            parts.concat(...childParts);
        }

        return parts;
    })
    .flat()
    .filter(item => item.length > 0));

    const exportParts = Array.from(exportPartsSet).join(`,${(addNewlines == true) ? '\n': '' }`);
    return exportParts;
}
export function assignPartsAsExportPartsAttribute(shadowRoot: ShadowRoot, addNewlines: boolean = false, replacements?: PartExportPartMap)
{
    const exportParts = getExportPartsFromParts(shadowRoot, addNewlines, replacements);
    const existingExports = shadowRoot.host.getAttribute('exportparts');
    shadowRoot.host.setAttribute('exportparts', `${existingExports == null ? '' : `${existingExports},`}${exportParts}`);
}