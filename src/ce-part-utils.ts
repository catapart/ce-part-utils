// #region parts

export const DEFAULT_ELEMENT_SELECTOR = ':not(slot,defs,g,rect,path,circle,ellipse,line,polygon,text,tspan,use,svg image,svg title,desc,template,template *)';

export function assignClassAndIdToPart(shadowRoot: ShadowRoot)
{
    assignIdToPart(shadowRoot);
    assignClassToPart(shadowRoot);
}
export function assignIdToPart(shadowRoot: ShadowRoot)
{
    const identifiedElements = [...shadowRoot.querySelectorAll(`${DEFAULT_ELEMENT_SELECTOR}[id]`)];
    for(let i = 0; i < identifiedElements.length; i++)
    {
        identifiedElements[i].part.add(identifiedElements[i].id);
    }
}
export function assignClassToPart(shadowRoot: ShadowRoot)
{
    const classedElements = [...shadowRoot.querySelectorAll(`${DEFAULT_ELEMENT_SELECTOR}[class]`)];
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
    const elements = [...shadowRoot.querySelectorAll(`${DEFAULT_ELEMENT_SELECTOR}`)];
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
        let parts = [...item.part.values()]
        .filter(item => item != null)
        .map(part => {
            const replacement = (replacements as any)?.[part];
            return (replacement != null) ? `${part}:${replacement}` : part;
        });

        const childExports = item.getAttribute('exportparts');
        if(childExports != null)
        {
            const childParts = childExports
            .replaceAll(/[\s\n]/g, "")
            .split(",")
            .map(item => item.indexOf(':') == -1 ? item : item.split(':')[1]);
            // if(childExports.indexOf(':') != -1)
            // {
            //     console.log(childParts);
            // }
            parts = parts.concat(...childParts);
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