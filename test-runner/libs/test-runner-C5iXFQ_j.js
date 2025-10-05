var $ = `:host
{
    
    --gap-small: 7px;
    --gap: 14px;

    --surface-menu: oklch(99.4% 0 0);
    --surface-button: oklch(62.39% 0.181 258.33);
    --surface-button-hover: oklch(68.39% 0.181 258.33);
    --surface-button-active: oklch(50.39% 0.181 258.33);

    --surface-success: oklch(93.96% 0.05 148.74);
    --surface-fail: oklch(88.98% 0.052 3.28);
    --surface-process: oklch(89.66% 0.046 260.67);

    --text-surface: oklch(14.38% 0.007 256.88);
    --text-button: oklch(99.4% 0 0);

    --border-test: solid 1px oklch(63.12% 0.004 219.55);
    --border-success: solid 1px oklch(58.83% 0.158 145.05);
    --border-fail: solid 1px oklch(45.8% 0.177 17.7);
    --border-process: solid 1px oklch(43.48% 0.17 260.2);

    --border-button: solid 1px oklch(62.39% 0.181 258.33);

    --info-icon: url('data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%2022.812714%2022.814663%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Asvg%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20style%3D%22fill%3Atransparent%3Bstroke%3Atransparent%3Bstroke-width%3A0.999999%3Bstroke-linejoin%3Around%3Bstroke-miterlimit%3A6.3%3Bstroke-dasharray%3Anone%3Bstroke-dashoffset%3A29.2913%3Bstroke-opacity%3A1%22%20d%3D%22M%2022.295505%2C11.407332%20A%2010.889144%2C10.889144%200%200%201%2011.406424%2C22.296479%2010.889144%2C10.889144%200%200%201%200.51720881%2C11.407332%2010.889144%2C10.889144%200%200%201%2011.406424%2C0.51818382%2010.889144%2C10.889144%200%200%201%2022.295505%2C11.407332%20Z%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22m%2013.945668%2C4.3053761%20c%200.150778%2C-0.96462%20-0.30687%2C-1.43709%20-1.36997%2C-1.43709%20-1.063%2C0%20-1.668452%2C0.47247%20-1.81923%2C1.43709%20-0.150779%2C0.96462%200.306971%2C1.43708%201.369971%2C1.43708%201.004%2C0%201.66845%2C-0.47246%201.819229%2C-1.43708%20z%20M%2011.693889%2C17.829726%2013.373994%2C7.0811161%20h%20-2.9333%20L%208.7605887%2C17.829726%20Z%22%20style%3D%22font-size%3A19.6861px%3Bfont-family%3APassageway%3B-inkscape-font-specification%3APassageway%3Bfill%3A%23a30d30%3Bstroke-width%3A2.5%3Bstroke-linejoin%3Around%3Bstroke-miterlimit%3A6.3%3Bstroke-dashoffset%3A29.2913%22%20aria-label%3D%22i%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E');

    --font-size: 12px;
    --font-text: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    

    color-scheme: light dark;
    display: grid;
    grid-template-columns: 400px 1fr;
    overflow: hidden;
    font-size: var(--font-size);
    font-family: var(--font-text);
}
@media (prefers-color-scheme: dark) 
{
    :host
    {
        --surface-menu: oklch(25.11% 0.006 258.36);

        --text-surface: oklch(99.4% 0 0);
        /* --text-result: oklch(99.4% 0 0); */

        /* --surface-test: oklch(25.11% 0.006 258.36);
        --surface-test-summary: oklch(35.02% 0.005 236.66); */
    }
}

#app-menu
{
    background-color: var(--surface-menu);
    display: grid;
    grid-template-rows: auto auto 1fr auto;
    margin: 0;
    padding: 0;
    overflow: hidden;
}

#app-header
{
    display: grid;
    grid-template-columns: auto 1fr auto;
    gap: var(--gap-small);
    padding: var(--gap-small);
}

#title
{
    font-size: 16px;
    font-weight: bold;
}

#test-groups
{
    overflow: hidden;
    display: grid;
    grid-template-rows: auto 1fr;
}

#test-groups-header
,#analyst-queue-summary
{
    padding: var(--gap-small);
    font-weight: bold;
}

#test-groups-header
{
    border-bottom: solid 1px;
}

#test-group-items
,#analyst-queue-items
{
    margin: 0;
    padding: 0;
    overflow: auto;
}

summary
{
    display: grid;
    grid-template-columns: auto auto auto 1fr auto;
    gap: var(--gap-small);
    padding: var(--gap-small);
    align-items: center;
    user-select: none;
}
summary::before
{
    content: '';
    width: 12px;
    height: 12px;
    background: url("data:image/svg+xml,%3Csvg%20viewBox%3D'0%200%2020%2020'%20width%3D'14px'%20height%3D'14px'%20fill%3D'none'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%3E%3Cg%20stroke-width%3D'0'%3E%3C%2Fg%3E%3Cg%20stroke-linecap%3D'round'%20stroke-linejoin%3D'round'%3E%3C%2Fg%3E%3Cg%3E%3Cpath%20d%3D'M8.72798%2015.795L3.72798%207.795C3.10356%206.79593%203.82183%205.5%204.99998%205.5L15%205.5C16.1781%205.5%2016.8964%206.79593%2016.272%207.795L11.272%2015.795C10.6845%2016.735%209.31549%2016.735%208.72798%2015.795Z'%20fill%3D'%23878a8b'%3E%3C%2Fpath%3E%3C%2Fg%3E%3C%2Fsvg%3E");
    transform: rotate(-90deg);
    transition: transform ease-out 200ms;
}
[open] > summary::before
{
    transform: rotate(0);
}


code-tests::part(result-icon)
{
    --background-size: 16px;
    --icon-size: 12px;
}
code-tests::part(result-icon running)
{
    --icon-size: 10px;
}
code-tests::part(result-icon)::before
{
    font-size: 10px;
}

/* .running::part(result-icon running)::before
{
    --size: 12px;
} */


#run-all
{
    width: auto;
    min-width: auto;
    max-width: auto;
    appearance: none;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 3px 10px 3px 7px;
    font-size: 11px;
    gap: var(--gap-small);
    background: var(--surface-button);
    border: solid 1px var(--surface-button);
    border-radius: 4px;
    text-shadow: 1px 1px rgb(0 0 0 / .2);
    color: var(--text-button);
}
#run-all:hover
{
    background: var(--surface-button-hover);
}
#run-all:active
{
    background: var(--surface-button-active);
}
#run-all::before
{
    content: '';
    display: block;
    width: 16px;
    height: 16px;
    transform: rotate(-90deg);
    background: 
    url("data:image/svg+xml,%3Csvg%20viewBox%3D'0%200%2020%2020'%20width%3D'16px'%20height%3D'16px'%20fill%3D'none'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%3E%3Cg%20stroke-width%3D'0'%3E%3C%2Fg%3E%3Cg%20stroke-linecap%3D'round'%20stroke-linejoin%3D'round'%3E%3C%2Fg%3E%3Cg%3E%3Cpath%20d%3D'M8.72798%2015.795L3.72798%207.795C3.10356%206.79593%203.82183%205.5%204.99998%205.5L15%205.5C16.1781%205.5%2016.8964%206.79593%2016.272%207.795L11.272%2015.795C10.6845%2016.735%209.31549%2016.735%208.72798%2015.795Z'%20fill%3D'%23fdfdfd'%3E%3C%2Fpath%3E%3C%2Fg%3E%3C%2Fsvg%3E");
}

#app-footer
{
    padding: var(--gap-small);
}

#subject
{
    overflow: auto;
}

@media (max-width: 665px) 
{
    :host
    {
        grid-template-columns: 1fr;
    }
}`, j = `<menu id="app-menu" class="menu">
    <header id="app-header">
        <div id="title">Test Runner</div>
        <div id="app-options" class="options">

        </div>
        <button type="button" id="run-all">
            <span id="run-button-label" class="button-label label icon">Run All Tests</span>
        </button>
    </header>
    <details id="analyst-queue">
        <summary id="analyst-queue-summary">Analyst Queue</summary>
        <ul id="analyst-queue-items" class="items"></ul>
    </details>
    <div id="test-groups">
        <header id="test-groups-header">Test Groups</header>
        <ul id="test-group-items" class="items"></ul>
    </div>
    <footer id="app-footer">
        <div id="app-results" class="results">
            <div id="passing-results" class="pill">
                <div id="passing-title" class="title">
                    <span id="passing-color" class="color"></span>
                    <span id="passing-label" class="label">Passing</span>
                </div>
                <div class="value"></div>
            </div>
            <div id="percentage">
                <div class="pass"></div>
                <div class="fail"></div>
                <div class="skip"></div>
                <div class="running"></div>
            </div>
        </div>
    </footer>
</menu>
<div id="subject">
    <slot id="subject-slot"></slot>
</div>`, y = ":not(slot,defs,g,rect,path,circle,ellipse,line,polygon,text,tspan,use,svg image,svg title,desc,template,template *)";
function A(e) {
  const r = [...e.querySelectorAll(`${y}[id]`)];
  for (let t = 0; t < r.length; t++)
    r[t].part.add(r[t].id);
  const s = [...e.querySelectorAll(`${y}[class]`)];
  for (let t = 0; t < s.length; t++)
    s[t].part.add(...s[t].classList);
}
function T(e, r) {
  const s = [...e.querySelectorAll(`${y}`)];
  for (let t = 0; t < s.length; t++) {
    const a = s[t].tagName.toLowerCase();
    s[t].part.add(a);
  }
}
function z(e, r = !1, s) {
  const t = new Set([...e.querySelectorAll("[part]")].map((o) => {
    let i = [...o.part.values()].filter((n) => n != null).map((n) => n);
    const l = o.getAttribute("exportparts");
    if (l != null) {
      const n = l.replaceAll(/[\s\n]/g, "").split(",").map((u) => u.indexOf(":") == -1 ? u : u.split(":")[1]);
      i = i.concat(...n);
    }
    return i;
  }).flat().filter((o) => o.length > 0));
  return Array.from(t).join(`,${r == !0 ? `
` : ""}`);
}
function S(e, r = !1, s) {
  const t = z(e, r), a = e.host.getAttribute("exportparts");
  e.host.setAttribute("exportparts", `${a == null ? "" : `${a},`}${t}`);
}
var N = `:host
{
    
    /* color-scheme: light dark; */
    display: grid;
    color: var(--text-surface); 
    padding: var(--gap-small);
    /* font-family: var(--font-text); */
}

::slotted(code-tests)
{
    /* background-color: var(--surface-test); */
}


summary
{
    display: grid;
    grid-template-columns: auto auto auto 1fr auto;
    gap: var(--gap-small);
    padding: var(--gap-small);
    align-items: center;
    user-select: none;
}
summary::before
{
    content: '';
    width: 12px;
    height: 12px;
    background: url("data:image/svg+xml,%3Csvg%20viewBox%3D'0%200%2020%2020'%20width%3D'14px'%20height%3D'14px'%20fill%3D'none'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%3E%3Cg%20stroke-width%3D'0'%3E%3C%2Fg%3E%3Cg%20stroke-linecap%3D'round'%20stroke-linejoin%3D'round'%3E%3C%2Fg%3E%3Cg%3E%3Cpath%20d%3D'M8.72798%2015.795L3.72798%207.795C3.10356%206.79593%203.82183%205.5%204.99998%205.5L15%205.5C16.1781%205.5%2016.8964%206.79593%2016.272%207.795L11.272%2015.795C10.6845%2016.735%209.31549%2016.735%208.72798%2015.795Z'%20fill%3D'%23878a8b'%3E%3C%2Fpath%3E%3C%2Fg%3E%3C%2Fsvg%3E");
    transform: rotate(-90deg);
    transition: transform ease-out 200ms;
}
[open] > summary::before
{
    transform: rotate(0);
    /* background: var(--surface-test-summary); */
}

:host(.running) .run[data-all]
{
    color: var(--text-surface);
    background-color: oklch(89.68% 0.002 197.12);
    border-color: oklch(63.12% 0.004 219.55);
}
:host(.running) .run[data-all]:hover
{
    background-color: oklch(95.57% 0.003 286.35);
    border-color: oklch(63.12% 0.004 219.55);
}
:host(.running) .run[data-all]:active
{
    background-color: oklch(63.12% 0.004 219.55);
    border-color: oklch(53.12% 0.004 219.55);
}
:host(.running) .run[data-all]::before
{
    display: none;
}

.result-icon
{
    --background-size: 16px;
    --icon-size: 12px;

    width: var(--background-size);
    height: var(--background-size);

    display: flex;
    align-items: center;
    justify-content: center;

    border: solid 1px currentColor;
    border-radius: 50%;
}
.result-icon::before
{
    content: '⋯';
    font-size: 10px;
    --icon-size: 10px;
}
:host(.running) .result-icon
{
    border: var(--border-process);
    background: var(--surface-process);
}
:host(.success) .result-icon
{
    border: var(--border-success);
    background: var(--surface-success)
    url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"><path fill="%232e943a" d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg>');
    background-repeat: no-repeat;
    background-position: center;
    background-size: var(--icon-size) var(--icon-size);
}
:host(.fail) .result-icon
{
    border: var(--border-fail);
    background: var(--surface-fail)
    var(--info-icon);
    background-repeat: no-repeat;
    background-position: center;
    transform: rotate(175deg);
}
:host(:is(.success,.fail)) .result-icon::before
{
    display: none;
}
:host(.running) .result-icon::before
{
    content: '';
    --animation-timing-function: linear;
    --animation-duration: 2s;
    width: var(--icon-size, 10px);
    height: var(--icon-size, 10px);
    mask-image: radial-gradient(circle at 50% 50%, transparent calc(var(--icon-size, 10px) / 3), black calc(var(--icon-size, 10px) / 3));
    background-image: conic-gradient(transparent, transparent 135deg, var(--color, oklch(43.48% 0.17 260.2)));
    border-radius: 50%;
    animation: var(--animation-timing-function) var(--animation-duration) infinite spin;
    margin: 2px;
}
@keyframes spin
{
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}
@media (prefers-color-scheme: dark) 
{
    :host(.running) .run[data-all]
    {
        background-color: oklch(35.02% 0.005 236.66);
        border-color: oklch(35.02% 0.005 236.66);
    }
    :host(.running) .run[data-all]:hover
    {
        background-color: oklch(63.12% 0.004 219.55);
        border-color:oklch(63.12% 0.004 219.55);
    }
    :host(.running) .run[data-all]:active
    {
        background-color: oklch(25.11% 0.006 258.36);
        border-color: oklch(25.11% 0.006 258.36);
    }
}

/* tooltip copied from https://blog.logrocket.com/creating-beautiful-tooltips-with-only-css/ */
.tooltip {
  position:relative; /* making the .tooltip span a container for the tooltip text */
  border-bottom:1px dashed #000; /* little indicater to indicate it's hoverable */
}
.tooltip:before {
  content: attr(data-text); /* here's the magic */
  position:absolute;
  
  /* vertically center */
  top:50%;
  transform:translateY(-50%);
  
  /* move to right */
  left:100%;
  margin-left:15px; /* and add a small left margin */
  
  /* basic styles */
  width:max-content;
  max-width: 300px;
  padding:10px;
  border-radius:10px;
  background:#000;
  color: #fff;
  text-align:center;

  opacity:0;
  transition:.3s opacity; 
  pointer-events: none;
}
.tooltip:after {
  content: "";
  position:absolute;
  
  /* position tooltip correctly */
  left:100%;
  margin-left:-5px;
 
  /* vertically center */
  top:50%;
  transform:translateY(-50%);
 
  /* the arrow */
  border:10px solid #000;
  border-color: transparent black transparent transparent;
  
  opacity:0;
  transition:.3s; 
  pointer-events: none;
}
.tooltip:hover:before,.tooltip:hover:after{
  display:block;
  opacity:1;
}


.run
{
    width: auto;
    min-width: auto;
    max-width: auto;
    appearance: none;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 3px 10px 3px 7px;
    font-size: 11px;
    gap: var(--gap-small);
    background: var(--surface-button);
    border: solid 1px var(--surface-button);
    border-radius: 4px;
    text-shadow: 1px 1px rgb(0 0 0 / .2);
    color: var(--text-button);
}
.run:hover
{
    background: var(--surface-button-hover);
}
.run:active
{
    background: var(--surface-button-active);
}
.run::before
{
    content: '';
    display: block;
    width: 16px;
    height: 16px;
    transform: rotate(-90deg);
    background: 
    url("data:image/svg+xml,%3Csvg%20viewBox%3D'0%200%2020%2020'%20width%3D'16px'%20height%3D'16px'%20fill%3D'none'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%3E%3Cg%20stroke-width%3D'0'%3E%3C%2Fg%3E%3Cg%20stroke-linecap%3D'round'%20stroke-linejoin%3D'round'%3E%3C%2Fg%3E%3Cg%3E%3Cpath%20d%3D'M8.72798%2015.795L3.72798%207.795C3.10356%206.79593%203.82183%205.5%204.99998%205.5L15%205.5C16.1781%205.5%2016.8964%206.79593%2016.272%207.795L11.272%2015.795C10.6845%2016.735%209.31549%2016.735%208.72798%2015.795Z'%20fill%3D'%23fdfdfd'%3E%3C%2Fpath%3E%3C%2Fg%3E%3C%2Fsvg%3E");
}`, _ = `<details id="details">
    <summary id="summary">
        <div class="result-icon"></div>
        <span id="enable-container" class="tooltip" data-text="Enable Tests?">
            <input type="checkbox" id="enable-value" title="Enable Tests?" class="value" checked />
        </span>
        <span id="group-title" class="title"></span>
    </summary>
    <div id="content">
        <slot id="groups-slot"></slot>
    </div>
</details>`, I = `:host
{
    /*** gray ***/
    --uchu-light-gray-raw: 95.57% 0.003 286.35;
    --uchu-light-gray: oklch(var(--uchu-light-gray-raw));

    --uchu-gray-raw: 84.68% 0.002 197.12;
    --uchu-gray: oklch(var(--uchu-gray-raw));

    --uchu-dark-gray-raw: 63.12% 0.004 219.55;
    --uchu-dark-gray: oklch(var(--uchu-dark-gray-raw));

    /*** red ***/
    --uchu-light-red-raw: 88.98% 0.052 3.28;
    --uchu-light-red: oklch(var(--uchu-light-red-raw));

    --uchu-dark-red-raw: 45.8% 0.177 17.7;
    --uchu-dark-red: oklch(var(--uchu-dark-red-raw));

    /*** purple ***/
    --uchu-light-purple-raw: 89.1% 0.046 305.24;
    --uchu-light-purple: oklch(var(--uchu-light-purple-raw));

    --uchu-dark-purple-raw: 39.46% 0.164 298.29;
    --uchu-dark-purple: oklch(var(--uchu-dark-purple-raw));

    /*** blue ***/
    --uchu-light-blue-raw: 89.66% 0.046 260.67;
    --uchu-light-blue: oklch(var(--uchu-light-blue-raw));

    --uchu-blue-raw: 62.39% 0.181 258.33;
    --uchu-blue: oklch(var(--uchu-blue-raw));

    --uchu-dark-blue-raw: 43.48% 0.17 260.2;
    --uchu-dark-blue: oklch(var(--uchu-dark-blue-raw));

    /*** green ***/
    --uchu-light-green-raw: 93.96% 0.05 148.74;
    --uchu-light-green: oklch(var(--uchu-light-green-raw));

    --uchu-green-raw: 79.33% 0.179 145.62;
    --uchu-green: oklch(var(--uchu-green-raw));

    --uchu-dark-green-raw: 58.83% 0.158 145.05;
    --uchu-dark-green: oklch(var(--uchu-dark-green-raw));

    /*** general ***/
    --uchu-yang-raw: 99.4% 0 0;
    --uchu-yang: oklch(var(--uchu-yang-raw));

    --uchu-yin-raw: 14.38% 0.007 256.88;
    --uchu-yin: oklch(var(--uchu-yin-raw));

    /*** code-tests vars ***/

    --spacer: calc(1em - 7px);
    --small-spacer: calc(var(--spacer) / 2);

    --color-success: var(--uchu-green);
    --color-fail: var(--uchu-red);
    --color-process: var(--uchu-blue);

    --text-surface: var(--uchu-yin);
    --text-result: var(--uchu-yang); /* --uchu-yang: #fdfdfd; */
    --text-collapse-icon: var(--uchu-dark-gray);  /* --uchu-dark-gray: #878a8b; */
    --text-hook-summary: var(--uchu-dark-purple);
    --text-success: var(--uchu-dark-green); /* --uchu-dark-green: #2e943a; */
    --text-fail: var(--uchu-dark-red); /* --uchu-dark-red: #a30d30; */
    --text-process: var(--uchu-dark-blue); /* --uchu-dark-blue: #0949ac; */
    --text-button: var(--uchu-yang); /* --uchu-dark-blue: #0949ac; */
    --text-placeholder: var(--uchu-dark-gray);

    --surface-0: var(--uchu-light-gray);
    --surface-test: var(--uchu-yang);
    --surface-test-summary: var(--uchu-gray);
    --surface-hook-summary: var(--uchu-light-purple);
    --surface-success: var(--uchu-light-green);
    --surface-fail: var(--uchu-light-red);
    --surface-process: var(--uchu-light-blue);
    --surface-button: var(--uchu-blue); /* --uchu-blue: #3984f2 */
    --surface-button-hover: var(--uchu-light-blue);
    --surface-button-active: var(--uchu-dark-blue);
    --surface-button-cancel: var(--uchu-dark-blue);

    --border-test: solid 1px var(--uchu-dark-gray);
    --border-hook: solid 1px var(--uchu-dark-purple);
    --border-success: solid 1px var(--uchu-dark-green);
    --border-fail: solid 1px var(--uchu-dark-red);
    --border-process: solid 1px var(--uchu-dark-blue);
    --border-button: solid 1px var(--uchu-blue);

    --success-icon: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="%232e943a" d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg>');
    --info-icon: url('data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%2022.812714%2022.814663%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Asvg%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20style%3D%22fill%3Atransparent%3Bstroke%3Atransparent%3Bstroke-width%3A0.999999%3Bstroke-linejoin%3Around%3Bstroke-miterlimit%3A6.3%3Bstroke-dasharray%3Anone%3Bstroke-dashoffset%3A29.2913%3Bstroke-opacity%3A1%22%20d%3D%22M%2022.295505%2C11.407332%20A%2010.889144%2C10.889144%200%200%201%2011.406424%2C22.296479%2010.889144%2C10.889144%200%200%201%200.51720881%2C11.407332%2010.889144%2C10.889144%200%200%201%2011.406424%2C0.51818382%2010.889144%2C10.889144%200%200%201%2022.295505%2C11.407332%20Z%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22m%2013.945668%2C4.3053761%20c%200.150778%2C-0.96462%20-0.30687%2C-1.43709%20-1.36997%2C-1.43709%20-1.063%2C0%20-1.668452%2C0.47247%20-1.81923%2C1.43709%20-0.150779%2C0.96462%200.306971%2C1.43708%201.369971%2C1.43708%201.004%2C0%201.66845%2C-0.47246%201.819229%2C-1.43708%20z%20M%2011.693889%2C17.829726%2013.373994%2C7.0811161%20h%20-2.9333%20L%208.7605887%2C17.829726%20Z%22%20style%3D%22font-size%3A19.6861px%3Bfont-family%3APassageway%3B-inkscape-font-specification%3APassageway%3Bfill%3A%23a30d30%3Bstroke-width%3A2.5%3Bstroke-linejoin%3Around%3Bstroke-miterlimit%3A6.3%3Bstroke-dashoffset%3A29.2913%22%20aria-label%3D%22i%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E');

    --font-text: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";

    /*** styles ***/

    color-scheme: light dark;
    display: grid;
    gap: var(--spacer);
    background-color: var(--surface-0);
    color: var(--text-surface); 
    padding: var(--small-spacer);
    font-family: var(--font-text);
}

#header
{
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    gap: var(--spacer);
    border-bottom: solid 2px;
    padding: var(--spacer);
    margin-bottom: var(--spacer);
    user-select: none;
}

#title
{
    font-weight: bold;
    font-size: 16px;
}

.hook
{
    display: none;
}
:host(.has-before-hook) #before-all-details
,:host(.has-after-hook) #after-all-details
{
    display: initial;
}
:host(.has-required-before-hook) #required-before-any-details
,:host(.has-required-after-hook) #required-after-any-details
{
    display: initial;
}

#required-before-any-summary
,#required-after-any-summary
{
    background: var(--surface-process);
    color: var(--text-process);
    border: solid 1px var(--text-process);
    grid-template-columns: auto auto 1fr;
}

#tests
{
    margin: 0;
    padding: 0;
    list-style: none;
    display: grid;
    grid-auto-rows: max-content;
    gap: var(--spacer);
}

summary
{
    display: grid;
    gap: var(--spacer);
    padding: var(--small-spacer) var(--spacer);
    align-items: center;
}
summary::before
{
    content: '';
    width: 16px;
    height: 16px;
    background: url("data:image/svg+xml,%3Csvg%20viewBox%3D'0%200%2020%2020'%20width%3D'14px'%20height%3D'14px'%20fill%3D'none'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%3E%3Cg%20stroke-width%3D'0'%3E%3C%2Fg%3E%3Cg%20stroke-linecap%3D'round'%20stroke-linejoin%3D'round'%3E%3C%2Fg%3E%3Cg%3E%3Cpath%20d%3D'M8.72798%2015.795L3.72798%207.795C3.10356%206.79593%203.82183%205.5%204.99998%205.5L15%205.5C16.1781%205.5%2016.8964%206.79593%2016.272%207.795L11.272%2015.795C10.6845%2016.735%209.31549%2016.735%208.72798%2015.795Z'%20fill%3D'%23878a8b'%3E%3C%2Fpath%3E%3C%2Fg%3E%3C%2Fsvg%3E");
    transform: rotate(-90deg);
    transition: transform ease-out 200ms;
}
[open] > summary::before
{
    transform: rotate(0);
    /* background: var(--surface-test-summary); */
}

:host(.running) .run[data-all]
{
    color: var(--text-surface);
    background-color: oklch(89.68% 0.002 197.12);
    border-color: oklch(63.12% 0.004 219.55);
}
:host(.running) .run[data-all]:hover
{
    background-color: oklch(95.57% 0.003 286.35);
    border-color: oklch(63.12% 0.004 219.55);
}
:host(.running) .run[data-all]:active
{
    background-color: oklch(63.12% 0.004 219.55);
    border-color: oklch(53.12% 0.004 219.55);
}
:host(.running) .run[data-all]::before
{
    display: none;
}

#before-all-summary
,#after-all-summary
{
    background: var(--surface-hook-summary);
    color: var(--text-hook-summary);
    grid-template-columns: auto auto 1fr;
}

.result-icon
{
    --background-size: 24px;
    width: var(--background-size);
    height: var(--background-size);

    display: flex;
    align-items: center;
    justify-content: center;

    border: solid 1px currentColor;
    border-radius: 50%;
}
.result-icon::before
{
    content: '⋯';
}

.hook
{
    border: var(--border-hook);
}

.test
,#before-all-details
,#after-all-details
{
    border: var(--border-test);
    border-radius: 2px;
}

.test summary
{
    background: var(--surface-test-summary);
    grid-template-columns: auto auto 1fr auto;
}

.test.running .result-icon
,.hook.running .result-icon
{
    border: var(--border-process);
    background: var(--surface-process);
}
.test.success .result-icon
,.hook.success .result-icon
{
    border: var(--border-success);
    background: var(--surface-success)
    var(--success-icon);
    background-repeat: no-repeat;
    background-position: center;
    background-size: var(--icon-size, 16px) var(--icon-size, 16px);
}
.test.fail .result-icon
,.hook.fail .result-icon
{
    border: var(--border-fail);
    background: var(--surface-fail)
    var(--info-icon);
    background-repeat: no-repeat;
    background-position: center;
    transform: rotate(175deg);
}
.test:is(.success,.fail) .result-icon::before
,.hook:is(.success,.fail) .result-icon::before
{
    display: none;
}
.test:is(.running) .result-icon::before
,.hook:is(.running) .result-icon::before
{
    content: '';
    --color: var(--text-process);
    --animation-timing-function: linear;
    --animation-duration: 2s;
    width: var(--icon-size, 18px);
    height: var(--icon-size, 18px);
    mask-image: radial-gradient(circle at 50% 50%, transparent calc(var(--icon-size, 18px) / 3), black calc(var(--icon-size, 18px) / 3));
    background-image: conic-gradient(transparent, transparent 135deg, var(--color));
    border-radius: 50%;
    animation: var(--animation-timing-function) var(--animation-duration) infinite spin;
    margin: 2px;
}

.description
{
    user-select: none;
}

.test .result
,.hook .result
{
    background: var(--surface-test);
    border: var(--border-test);
    border-radius: 2px;
    margin: var(--small-spacer);
}

.test .result:empty::before
,.results:empty::before
{
    content: "[Test has not been run]";
    font-style: italic;
    font-size: 11px;
    color: var(--text-placeholder);
}
.results:empty::before
{
    content: "[Tests have not been run]";
}
.before-result:empty
,.after-result:empty
{
    display: none;
}

.test .result
,.results
,.before-result
,.after-result
{
    padding: var(--small-spacer) var(--spacer);
}

pre
{
    margin: var(--small-spacer);
}

.run
{
    width: auto;
    min-width: auto;
    max-width: auto;
    appearance: none;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 3px 10px 3px 7px;
    font-size: 11px;
    gap: var(--small-spacer);
    border: var(--border-button);
    background: var(--surface-button);
    border-radius: 4px;
    text-shadow: 1px 1px rgb(0 0 0 / .2);
    color: var(--text-button);
}
.run:hover
{
    background: oklch(68.39% 0.181 258.33);
}
.run:active
{
    background: oklch(50.39% 0.181 258.33);
}
.run::before
{
    content: '';
    display: block;
    width: 16px;
    height: 16px;
    transform: rotate(-90deg);
    background: 
    url("data:image/svg+xml,%3Csvg%20viewBox%3D'0%200%2020%2020'%20width%3D'16px'%20height%3D'16px'%20fill%3D'none'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%3E%3Cg%20stroke-width%3D'0'%3E%3C%2Fg%3E%3Cg%20stroke-linecap%3D'round'%20stroke-linejoin%3D'round'%3E%3C%2Fg%3E%3Cg%3E%3Cpath%20d%3D'M8.72798%2015.795L3.72798%207.795C3.10356%206.79593%203.82183%205.5%204.99998%205.5L15%205.5C16.1781%205.5%2016.8964%206.79593%2016.272%207.795L11.272%2015.795C10.6845%2016.735%209.31549%2016.735%208.72798%2015.795Z'%20fill%3D'%23fdfdfd'%3E%3C%2Fpath%3E%3C%2Fg%3E%3C%2Fsvg%3E");
}


@media (prefers-color-scheme: dark) 
{
    :host
    {
        --text-surface: var(--uchu-yang);
        --text-result: var(--uchu-yang);

        --surface-0: var(--uchu-yin);
        --surface-test: oklch(25.11% 0.006 258.36);
        --surface-test-summary: oklch(35.02% 0.005 236.66);
    }
    :host(.running) .run[data-all]
    {
        background-color: oklch(35.02% 0.005 236.66);
        border-color: oklch(35.02% 0.005 236.66);
    }
    :host(.running) .run[data-all]:hover
    {
        background-color: oklch(63.12% 0.004 219.55);
        border-color:oklch(63.12% 0.004 219.55);
    }
    :host(.running) .run[data-all]:active
    {
        background-color: oklch(25.11% 0.006 258.36);
        border-color: oklch(25.11% 0.006 258.36);
    }
}

@keyframes spin
{
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}`, U = `<slot name="header">
    <header id="header">
        <span id="title"><slot name="title"><span id="title-text">Tests</span></slot></span>
        <slot name="play-button">
            <button type="button" class="run" data-all>
                <slot name="play-button-label">
                    <span id="play-button-label" class="button-label label icon">Run Tests</span>
                </slot>
            </button>
        </slot>
        <slot name="details"></slot>
    </header>
</slot>
<details id="required-before-any-details" class="hook">
    <summary id="required-before-any-summary">
        <span id="required-before-any-result-icon" class="result-icon"></span>
        <span id="required-before-any-description" class="description">Results from Required Before Any Hook</span>
    </summary>
    <div id="required-before-any-results" class="results"></div>
</details>
<details id="before-all-details" class="hook">
    <summary id="before-all-summary">
        <span id="before-all-result-icon" class="result-icon"></span>
        <span id="before-all-description" class="description">Results from Before All Hook</span>
    </summary>
    <div id="before-all-results" class="results"></div>
</details>
<ul id="tests"></ul>
<details id="after-all-details" class="hook">
    <summary id="after-all-summary">
        <span id="after-all-result-icon" class="result-icon"></span>
        <span id="after-all-description" class="description">Results from After All Hook</span>
    </summary>
    <div id="after-all-results" class="results"></div>
</details>
<details id="required-after-any-details" class="hook">
    <summary id="required-after-any-summary">
        <span id="required-after-any-result-icon" class="result-icon"></span>
        <span id="required-after-any-description" class="description">Results from Required After Any Hook</span>
    </summary>
    <div id="required-after-any-results" class="results"></div>
</details>

<template id="prompt-template">
    <div class="prompt" part="prompt">
        <div class="prompt-display">
            <span class="icon prompt-icon"></span>
            <span class="label prompt-label"></span>
        </div>
        <div class="prompt-actions">
            <button class="prompt-button accept" type="button">Accept</button>
            <button class="prompt-button reject" type="button">Reject</button>
        </div>
    </div>
</template>`, v = class extends Promise {
  async toBeDefined(e) {
    if (await this == null)
      throw new Error(`${e ?? "Value"} is undefined`);
  }
  async toBe(e, r = !1) {
    const s = await this;
    if ((r == !0 ? s === e : s == e) == !1)
      throw new Error(`  Value is not equal.
  Expected: ${e}
  Result: ${s}`);
  }
  async toContainText(e) {
    await this;
  }
  async toHaveAttribute(e) {
    const r = await this;
    if (!(r instanceof HTMLElement))
      throw new Error("Unable to check for attribute on non-HTMLElement target");
    if (r.getAttribute(e))
      throw new Error("Taret does not have attribute");
  }
}, F = class q {
  static timeoutMS = 500;
  static #e;
  static #t;
  static expect(r) {
    return new v(async (t, a) => {
      if (r instanceof Promise) {
        const o = await r;
        t(o);
        return;
      }
      t(r);
    });
  }
  static expectSync(r) {
    return new v(async (t, a) => {
      if (r instanceof Promise) {
        const o = await r;
        t(o);
        return;
      }
      t(r);
    });
  }
  static expectBefore(r) {
    return new v(async (t, a) => {
      if (r instanceof Promise) {
        const o = await r;
        t(o);
        return;
      }
      t(r);
    });
  }
  static async prompt(r, s, t, a) {
    return new Promise((o, i) => {
      const l = r.findElement("prompt-template"), n = q.createElementFromTemplate(l);
      n.querySelector(".label").textContent = t;
      const u = (c) => {
        const g = c.composedPath();
        if (g.find((h) => h instanceof HTMLButtonElement && h.classList.contains("accept")) != null) {
          const h = a?.onAccept?.() ?? !0;
          n.removeEventListener("click", u), o(h);
          return;
        }
        if (g.find((h) => h instanceof HTMLButtonElement && h.classList.contains("reject")) != null) {
          const h = a?.onReject?.() ?? !1;
          n.removeEventListener("click", u), o(h);
          return;
        }
      };
      n.addEventListener("click", u), a?.acceptLabel != null && (n.querySelector(".accept").textContent = a.acceptLabel), a?.rejectLabel != null && (n.querySelector(".reject").textContent = a.rejectLabel);
      const d = s instanceof HTMLDetailsElement ? s : s.querySelector(".test-details");
      d != null && (d.open = !0), s.querySelector(".result")?.append(n);
    });
  }
  static createElementFromTemplate(r, s) {
    const t = r instanceof HTMLTemplateElement ? r : document.querySelector(r);
    if (t == null)
      throw new Error(`Unable to find template element from selector: ${r}`);
    const a = t.content.cloneNode(!0).querySelector("*");
    if (a == null)
      throw new Error("Unable to find first child of template element");
    return s?.append(a), a;
  }
};
function J(e) {
  return F.expect(e);
}
function K(e, r, s, t) {
  return F.prompt(e, r, s, t);
}
var w = ":not(slot,defs,g,rect,path,circle,ellipse,line,polygon,text,tspan,use,svg image,svg title,desc,template,template *)";
function O(e) {
  const r = [...e.querySelectorAll(`${w}[id]`)];
  for (let t = 0; t < r.length; t++)
    r[t].part.add(r[t].id);
  const s = [...e.querySelectorAll(`${w}[class]`)];
  for (let t = 0; t < s.length; t++)
    s[t].part.add(...s[t].classList);
}
var Z = /* @__PURE__ */ ((e) => (e.BeforeAll = "beforeall", e.AfterAll = "afterall", e.BeforeEach = "beforeeach", e.AfterEach = "aftereach", e.RequiredBeforeAny = "requiredbeforeany", e.RequiredAfterAny = "requiredafterany", e))(Z || {}), k = /* @__PURE__ */ ((e) => (e.BeforeAll = "beforeall", e.AfterAll = "afterall", e.BeforeTest = "beforetest", e.AfterTest = "aftertest", e.Cancel = "cancel", e))(k || {}), b = Symbol("No Test Defined"), D = new CSSStyleSheet();
D.replaceSync(I);
var x = "code-tests", G = class extends HTMLElement {
  componentParts = /* @__PURE__ */ new Map();
  getElement(e) {
    if (this.componentParts.get(e) == null) {
      const r = this.findElement(e);
      r != null && this.componentParts.set(e, r);
    }
    return this.componentParts.get(e);
  }
  findElement(e) {
    return this.shadowRoot.getElementById(e);
  }
  #e = {};
  #t = !0;
  constructor() {
    super(), this.attachShadow({ mode: "open" }), this.shadowRoot.innerHTML = U, this.shadowRoot.adoptedStyleSheets.push(D), this.#n = this.#p.bind(this);
  }
  connectedCallback() {
    if (O(this.shadowRoot), this.addEventListener("click", this.#n), this.getAttribute("auto") == "false")
      return;
    const e = this.#d();
    e != null && this.loadTests(e);
  }
  disconnectedCallback() {
    this.removeEventListener("click", this.#n);
  }
  #n;
  #p(e) {
    const r = e.composedPath().find((o) => o instanceof HTMLButtonElement && o.classList.contains("run"));
    if (r == null)
      return;
    const s = r.closest("li");
    if (s == null) {
      if (r.hasAttribute("data-all") == !0)
        if (this.classList.contains("running")) {
          if (this.classList.contains("canceled"))
            return;
          this.cancel();
        } else
          this.runTests();
      return;
    }
    const t = s.dataset.testId;
    if (t == null)
      return;
    const a = this.#s.get(t);
    a != null && (this.isCanceled = !1, this.classList.remove("canceled"), this.part.remove("canceled"), this.#u(t, a));
  }
  #d() {
    return this.getAttribute("src") ?? this.getAttribute("test") ?? this.getAttribute("tests") ?? this.getAttribute("run") ?? this.getAttribute("path");
  }
  async loadTests(e) {
    const r = e ?? this.#d();
    if (r != null)
      try {
        this.getElement("tests").innerHTML = "", this.#s.clear(), this.classList.remove("has-before-hook"), this.classList.remove("has-after-hook");
        const s = window.location.href.lastIndexOf("/"), a = window.location.href.substring(s).indexOf(".") != -1 == !0 ? window.location.href.substring(0, s + 1) : window.location.href, o = a + r.substring(0, r.lastIndexOf("/") + 1), i = a + r;
        let l = await (await fetch(i)).text();
        l = l.replaceAll(/['"`](((\.\/)|(\.\.\/))+(.*))['"`]/g, `'${o}$1'`);
        const n = new File([l], r.substring(r.lastIndexOf("/")), { type: "text/javascript" }), d = await import(URL.createObjectURL(n)), c = d.tests ?? d.default;
        if (c == null)
          throw new Error(`Unable to find tests definition in file at path: ${r}`);
        const g = c.beforeall;
        g != null && (this.#e.beforeall = g, delete c.beforeall, this.classList.add("has-before-hook"));
        const m = c.afterall;
        m != null && (this.#e.afterall = m, delete c.afterall, this.classList.add("has-after-hook"));
        const f = c.beforeeach;
        f != null && (this.#e.beforeeach = f, delete c.beforeeach);
        const h = c.aftereach;
        h != null && (this.#e.aftereach = h, delete c.aftereach);
        const p = c.requiredbeforeany;
        p != null && (this.#e.requiredbeforeany = p, delete c.requiredbeforeany, this.classList.add("has-required-before-hook"), this.part.add("has-required-before-hook"));
        const E = c.requiredafterany;
        E != null && (this.#e.requiredafterany = E, delete c.requiredafterany, this.classList.add("has-required-after-hook"), this.part.add("has-required-after-hook"));
        for (const [P, H] of Object.entries(c))
          this.#g(P, H);
      } catch (s) {
        this.#c("An error occurred while loading the tasks:", s);
      }
  }
  isCanceled = !1;
  cancel() {
    this.isCanceled = !0, this.classList.add("canceled"), this.part.add("canceled"), this.dispatchEvent(new CustomEvent("cancel", { bubbles: !0, composed: !0 }));
  }
  async runTests() {
    this.dispatchEvent(new CustomEvent("beforeall", { bubbles: !0, composed: !0 })), this.#t = !0, this.classList.add("running"), this.isCanceled = !1, this.classList.remove("canceled"), this.part.remove("canceled"), this.toggleAttribute("success", !1);
    const e = this.findElement("play-button-label");
    e != null && (e.textContent = "Cancel"), this.#f();
    const r = this.hasAttribute("in-order"), s = this.#e.requiredbeforeany;
    if (s != null) {
      let l;
      try {
        const n = this.getElement("required-before-any-details");
        if (n.classList.add("running"), n.part.add("running"), this.isCanceled == !0)
          throw new Error("Test has been cancelled");
        l = await s(this, n), this.#r(l, !0, "before", !0), n.part.remove("running"), n.classList.remove("running");
      } catch (n) {
        this.#r(l, !1, "before", !0, n), console.error(n), this.#t = !1, this.classList.remove("running"), this.part.remove("running"), e != null && (e.textContent = "Run Tests"), this.dispatchEvent(new CustomEvent("afterall", { bubbles: !0, composed: !0 }));
        return;
      }
    }
    const t = this.#e.beforeall;
    if (t != null) {
      let l;
      try {
        const n = this.getElement("before-all-details");
        if (n.classList.add("running"), n.part.add("running"), this.isCanceled == !0)
          throw new Error("Test has been cancelled");
        l = await t(this, n), this.#r(l, !0, "before", !1), n.part.remove("running"), n.classList.remove("running");
      } catch (n) {
        this.#r(l, !1, "before", !1, n), console.error(n), this.#t = !1, this.classList.remove("running"), this.part.remove("running"), e != null && (e.textContent = "Run Tests"), this.dispatchEvent(new CustomEvent("afterall", { bubbles: !0, composed: !0 }));
        return;
      }
    }
    if (r == !1) {
      const l = [];
      for (const [n, u] of this.#s)
        l.push(this.#u(n, u));
      await Promise.all(l);
    } else
      for (const [l, n] of this.#s) {
        if (this.#t == !1)
          break;
        await this.#u(l, n, !1);
      }
    if (this.#t == !1) {
      this.classList.remove("running"), this.part.remove("running"), e != null && (e.textContent = "Run Tests"), this.dispatchEvent(new CustomEvent("afterall", { bubbles: !0, composed: !0 }));
      return;
    }
    const a = this.#e.afterall;
    if (a != null) {
      let l;
      try {
        const n = this.getElement("after-all-details");
        if (n.classList.add("running"), n.part.add("running"), this.isCanceled == !0)
          throw new Error("Test has been cancelled");
        l = await a(this, n), this.#r(l, !0, "after", !1), n.part.remove("running"), n.classList.remove("running");
      } catch (n) {
        this.#r(l, !1, "after", !1, n), console.error(n);
        const u = this.#e.requiredafterany;
        if (u != null) {
          let d;
          try {
            const c = this.getElement("required-after-any-details");
            if (c.classList.add("running"), c.part.add("running"), this.isCanceled == !0)
              throw new Error("Test has been cancelled");
            d = await u(this, c), this.#r(d, !0, "after", !0), c.part.remove("running"), c.classList.remove("running");
          } catch (c) {
            this.#r(d, !1, "after", !0, c), console.error(c);
          }
        }
        this.#t = !1, this.classList.remove("running"), this.part.remove("running"), e != null && (e.textContent = "Run Tests"), this.dispatchEvent(new CustomEvent("afterall", { bubbles: !0, composed: !0 }));
        return;
      }
    }
    const o = this.#e.requiredafterany;
    if (o != null) {
      let l;
      try {
        const n = this.getElement("required-after-any-details");
        if (n.classList.add("running"), n.part.add("running"), this.isCanceled == !0)
          throw new Error("Test has been cancelled");
        l = await o(this, n), this.#r(l, !0, "after", !0), n.part.remove("running"), n.classList.remove("running");
      } catch (n) {
        this.#r(l, !1, "after", !0, n), console.error(n), this.#t = !1;
      }
    }
    const i = this.shadowRoot.querySelectorAll('[success="false"]');
    this.setAttribute("success", i.length == 0 ? "true" : "false"), this.classList.remove("running"), this.part.remove("running"), e != null && (e.textContent = "Run Tests"), this.dispatchEvent(new CustomEvent("afterall", { bubbles: !0, composed: !0 }));
  }
  #f() {
    for (const [s, t] of this.#s) {
      const a = this.getElement("tests").querySelector(`[data-test-id="${s}"]`);
      if (a == null) {
        this.#c(`Unable to find test element for test: ${s}`);
        return;
      }
      a.toggleAttribute("success", !1), a.classList.remove("success", "fail"), a.part.remove("success", "fail");
    }
    const e = this.getElement("before-all-details");
    e.toggleAttribute("success", !1), e.classList.remove("success", "fail"), e.part.remove("success", "fail");
    const r = this.getElement("after-all-details");
    r.toggleAttribute("success", !1), r.classList.remove("success", "fail"), r.part.remove("success", "fail");
  }
  async #u(e, r, s = !0) {
    const t = this.getElement("tests").querySelector(`[data-test-id="${e}"]`);
    if (t == null) {
      this.#c(`Unable to find test element for test: ${e}`);
      return;
    }
    t.toggleAttribute("success", !1), t.classList.add("running"), t.part.add("running"), t.classList.remove("success", "fail"), t.part.remove("success", "fail");
    const a = t.querySelector(".result-icon");
    a?.classList.remove("success", "fail"), a?.part.remove("success", "fail"), a?.classList.add("running"), a?.part.add("running");
    const o = t.querySelector(".error-message");
    o != null && (o.textContent = "");
    const i = t.querySelector("details");
    i != null && (i.open = !1);
    let l = b, n, u = b, d;
    try {
      const c = this.dispatchEvent(new CustomEvent("beforetest", { bubbles: !0, cancelable: !0, composed: !0, detail: { testElement: t } }));
      if (s == !0) {
        const f = this.#e.requiredbeforeany;
        if (f != null) {
          let h;
          try {
            const p = this.getElement("required-before-any-details");
            if (p.classList.add("running"), p.part.add("running"), this.isCanceled == !0)
              throw new Error("Test has been cancelled");
            h = await f(this, p), this.#r(h, !0, "before", !0), p.part.remove("running"), p.classList.remove("running");
          } catch (p) {
            this.#r(h, !0, "before", !0, p), console.error(p), this.#t = !1;
            return;
          }
        }
      }
      if (this.#t == !1)
        throw new Error("Tests have been disabled from continuing to run.");
      if (c == !1 || this.isCanceled == !0)
        throw new Error("Test has been cancelled");
      const g = this.#e.beforeeach;
      if (g != null && (l = await g(this, t)), this.isCanceled == !0)
        throw new Error("Test has been cancelled");
      if (n = await r(this, t), this.isCanceled == !0)
        throw new Error("Test has been cancelled");
      const m = this.#e.aftereach;
      if (m != null && (u = await m(this, t)), s == !0) {
        const f = this.#e.requiredafterany;
        if (f != null) {
          let h;
          try {
            const p = this.getElement("required-before-any-details");
            if (p.classList.add("running"), p.part.add("running"), this.isCanceled == !0)
              throw new Error("Test has been cancelled");
            h = await f(this, p), this.#r(h, !0, "after", !0), p.part.remove("running"), p.classList.remove("running");
          } catch (p) {
            this.#r(h, !0, "after", !0, p), console.error(p), this.#t = !1;
            return;
          }
        }
      }
      d = "before", l != b && this.#o(t, l, !0, void 0, d), d = void 0, this.#o(t, n, !0, void 0, d), d = "after", u != b && this.#o(t, u, !0, void 0, d);
    } catch (c) {
      this.#o(t, n, !1, c, d), console.error(c), this.#t = !1;
    } finally {
      t?.classList.remove("running"), t?.part.remove("running"), a?.classList.remove("running"), a?.part.remove("running"), this.dispatchEvent(new CustomEvent("aftertest", { bubbles: !0, cancelable: !0, composed: !0, detail: { testElement: t } }));
    }
  }
  #o(e, r, s, t, a) {
    if (r instanceof HTMLElement)
      this.#l(e, r, s, a);
    else if (r == null) {
      const i = a == null ? "Passed" : "Hook Ran Successfully", l = this.#a(s == !0 ? `${i}` : `Failed${t != null ? `:
${t.message}` : ""}`, s, a);
      this.#l(e, l, s, a);
    } else if (typeof r == "string") {
      const i = this.#a(`${r}${t == null ? "" : `:
${t.message}`}`, s, a);
      this.#l(e, i, s, a);
    } else if (typeof r == "object") {
      const i = r;
      if (i.success != null && i.expected != null && i.value != null) {
        const l = a == null ? "Passed" : "Success", n = a == null ? "Failed" : "Fail", u = this.#a(
          `${i.success == !0 ? `${l}:` : `${n}:`}
Expected:${i.expected}
Result:${i.value}`,
          i.success,
          a
        );
        this.#l(e, u, s, a);
      }
    }
    const o = e.querySelector("details");
    o != null && (o.open = !0);
  }
  #r(e, r, s, t, a) {
    if (e instanceof HTMLElement)
      this.#i(e, r, s, t);
    else {
      let i;
      if (e == null)
        i = this.#a(r == !0 ? "Hook Ran Successfully" : `Failed${a != null ? `:
${a.message}` : ""}`, r), this.#i(i, r, s, t);
      else if (typeof e == "string")
        i = this.#a(`${e}${a == null ? "" : `:
${a.message}`}`, r), this.#i(i, r, s, t);
      else if (typeof e == "object") {
        const l = e;
        l.success != null && l.expected != null && l.value != null && (i = this.#a(
          `${l.success == !0 ? "Success:" : "Fail:"}
Expected:${l.expected}
Result:${l.value}`,
          l.success
        ), this.#i(i, r, s, t));
      }
    }
    const o = this.getElement(`${s}-all-details`);
    o != null && (o.open = !0);
  }
  static create(e) {
    return document.createElement("code-tests");
  }
  #s = /* @__PURE__ */ new Map();
  #g(e, r) {
    const s = Y();
    this.#s.set(s, r);
    const t = this.#m(s, e);
    return this.getElement("tests").append(t), s;
  }
  #m(e, r) {
    const s = document.createElement("li");
    s.dataset.testId = e, s.classList.add("test"), s.part.add("test");
    const t = document.createElement("details");
    t.classList.add("test-details"), t.part.add("test-details");
    const a = document.createElement("summary");
    a.classList.add("test-summary"), a.part.add("test-summary");
    const o = document.createElement("div");
    o.classList.add("result-icon"), o.part.add("result-icon"), a.append(o);
    const i = document.createElement("span");
    i.classList.add("description", "test-description"), i.textContent = r, a.append(i);
    const l = document.createElement("button");
    l.classList.add("run", "test-run"), l.part.add("run", "test-run"), l.textContent = "Run Test", l.title = "Run Test", a.append(l);
    const n = document.createElement("div");
    n.classList.add("before-result", "test-before-result"), n.part.add("before-result", "test-before-result");
    const u = document.createElement("div");
    u.classList.add("result", "test-result"), u.part.add("result", "test-result");
    const d = document.createElement("div");
    return d.classList.add("after-result", "test-after-result"), d.part.add("after-result", "test-after-result"), t.append(a), t.append(n), t.append(u), t.append(d), s.append(t), s;
  }
  #l(e, r, s, t) {
    e.setAttribute("success", s == !0 ? "true" : "false"), e.classList.toggle("success", s), e.part.toggle("success", s), e.classList.toggle("fail", !s), e.part.toggle("fail", !s);
    const a = e.querySelector(".result-icon");
    a?.classList.toggle("success", s), a?.part.toggle("success", s), a?.classList.toggle("fail", !s), a?.part.toggle("fail", !s);
    const o = e.querySelector(`.${t == null ? "result" : t == "before" ? "before-result" : "after-result"}`);
    if (o == null) {
      this.#c("Unable to find result element");
      return;
    }
    o.innerHTML = "", o.appendChild(r);
  }
  #a(e, r, s) {
    const t = document.createElement("code");
    t.classList.add("code"), t.part.add("code");
    const a = document.createElement("pre");
    a.textContent = e;
    const o = r == !0 ? "success-message" : "error-message";
    return a.classList.add("pre", o), a.part.add("pre", o), t.appendChild(a), t;
  }
  #i(e, r, s, t) {
    const a = t == !0 ? `required-${s}-any` : `${s}-all`, o = this.getElement(`${a}-details`), i = this.getElement(`${a}-results`);
    o.setAttribute("success", r == !0 ? "true" : "false"), o.classList.toggle("success", r), o.part.toggle("success", r), o.classList.toggle("fail", !r), o.part.toggle("fail", !r), i.innerHTML = "", i.appendChild(e);
  }
  #c(e, r) {
    r instanceof Error && (e += `
${r.message}`, console.error(r));
    const s = document.createElement("li");
    s.classList.add("error", "process-error"), s.part.add("error", "process-error");
    const t = document.createElement("code");
    t.classList.add("code", "process-error-code"), t.part.add("code", "process-error-code");
    const a = document.createElement("pre");
    a.classList.add("pre", "process-error-pre"), a.part.add("pre", "process-error-pre"), a.textContent = e, t.append(a), s.append(t), this.getElement("tests").append(s);
  }
  #h(e) {
    if (e == "ordered") {
      const r = this.shadowRoot.querySelector("ul");
      if (r == null)
        return;
      const s = this.shadowRoot?.querySelectorAll("li"), t = document.createElement("ol");
      s != null && t.append(...s), t.id = "tests", r.replaceWith(t);
    } else {
      const r = this.shadowRoot.querySelector("ol");
      if (r == null)
        return;
      const s = this.shadowRoot?.querySelectorAll("li"), t = document.createElement("ul");
      t.id = "tests", s != null && t.append(...s), r.replaceWith(t);
    }
  }
  static observedAttributes = ["in-order"];
  attributeChangedCallback(e, r, s) {
    e == "in-order" && (s == null ? this.#h("unordered") : this.#h("ordered"));
  }
};
function Y() {
  const e = new Uint8Array(20);
  crypto.getRandomValues(e);
  const r = [].slice.apply(e).map(function(t) {
    return String.fromCharCode(t);
  }).join("");
  return btoa(r).replace(/\//g, "_").replace(/\+/g, "-").replace(/=/g, "");
}
customElements.get(x) == null && customElements.define(x, G);
var R = new CSSStyleSheet();
R.replaceSync(`
    ${N}`);
var V = `${_}
`, C = "test-group", B = class extends HTMLElement {
  findElement(e) {
    return this.shadowRoot.getElementById(e);
  }
  get enabled() {
    return this.findElement("enable-value")?.checked;
  }
  constructor() {
    super(), this.attachShadow({ mode: "open" }), this.shadowRoot.innerHTML = V, this.shadowRoot.adoptedStyleSheets.push(R);
  }
  connectedCallback() {
    this.findElement("details").open = !0;
    const e = this.findElement("groups-slot");
    e.addEventListener("slotchange", () => {
      const s = e.assignedElements().find((t) => t.tagName == "CODE-TESTS");
      if (s != null) {
        const t = s.shadowRoot.querySelector("#header");
        t?.style.setProperty("display", "none");
        const a = (s.querySelector('[slot="title"]') ?? t?.querySelector("#title-text"))?.textContent;
        a != null && (this.findElement("group-title").textContent = a);
        const o = t?.querySelector("button.run");
        o != null && this.findElement("summary").append(o), s.loadTests();
      }
    }), T(this.shadowRoot), A(this.shadowRoot), S(this.shadowRoot), this.addEventListener(k.BeforeAll, () => {
      this.classList.remove("success", "fail"), this.part.remove("success", "fail"), this.classList.add("running"), this.part.add("running");
    }), this.addEventListener(k.AfterAll, () => {
      this.classList.remove("running"), this.part.remove("running");
      const s = e.assignedElements().find((a) => a.tagName == "CODE-TESTS");
      s != null && s.hasAttribute("success") == !0 ? (this.classList.add("success"), this.part.add("success")) : (this.classList.add("fail"), this.part.add("fail"));
      const t = this.findElement("play-button-label");
      t != null && (t.textContent = "Run Tests");
    });
  }
  runTests() {
    if (this.classList.contains("running")) {
      if (this.classList.contains("canceled"))
        return;
      this.querySelector("code-tests")?.cancel();
      return;
    }
    const e = this.findElement("play-button-label");
    return e != null && (e.textContent = "Cancel"), this.querySelector("code-tests")?.runTests();
  }
};
customElements.get(C) == null && customElements.define(C, B);
var M = new CSSStyleSheet();
M.replaceSync(`
    ${$}`);
var W = `${j}
`, L = "test-runner", Q = class extends HTMLElement {
  findElement(e) {
    return this.shadowRoot.getElementById(e);
  }
  constructor() {
    super(), this.attachShadow({ mode: "open" }), this.shadowRoot.innerHTML = W, this.shadowRoot.adoptedStyleSheets.push(M), this.#n();
    const e = this.findElement("subject-slot");
    e.addEventListener("slotchange", () => {
      const r = e.assignedElements();
      r.length == 0 ? (this.classList.add("empty"), this.part.add("empty")) : (this.classList.remove("empty"), this.part.remove("empty"));
      const s = [];
      for (let t = 0; t < r.length; t++) {
        const a = r[t];
        a.tagName === "CODE-TESTS" && s.push(a);
      }
      this.updateTests(s);
    }), T(this.shadowRoot), A(this.shadowRoot), S(this.shadowRoot);
  }
  //#region API
  updateTests(e) {
    const r = [];
    for (let s = 0; s < e.length; s++) {
      const t = e[s], a = this.#t(t);
      r.push(a);
    }
    this.findElement("test-group-items").append(...r);
  }
  async runAllTests() {
    const e = this.shadowRoot.querySelectorAll("test-group");
    for (let r = 0; r < e.length; r++) {
      const s = e[r];
      s.enabled != !1 && await s.runTests();
    }
  }
  //#endregion
  //#region Handlers
  async #e(e) {
    const r = e.composedPath().filter((a) => a instanceof HTMLElement);
    if (r.find((a) => a instanceof HTMLButtonElement && a.id == "run-all") != null) {
      if (this.classList.contains("running"))
        return;
      this.runAllTests();
      return;
    }
    const t = r.find((a) => a instanceof HTMLButtonElement && a.classList.contains("run") && a.hasAttribute("data-all"));
    if (t != null) {
      const a = t.getRootNode().host;
      a != null && a instanceof B && a.runTests();
    }
  }
  //#endregion Handlers
  //#region Management
  #t(e) {
    const r = document.createElement("test-group");
    return r.append(e), r;
  }
  #n() {
    this.addEventListener("click", this.#e);
  }
  //#endregion
};
customElements.get(L) == null && customElements.define(L, Q);
export {
  k as C,
  Z as H,
  Q as T,
  F as a,
  G as b,
  J as e,
  K as p
};
