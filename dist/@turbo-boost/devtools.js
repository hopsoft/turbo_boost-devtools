var Z=Object.defineProperty,tt=Object.defineProperties;var et=Object.getOwnPropertyDescriptors;var q=Object.getOwnPropertySymbols;var ot=Object.prototype.hasOwnProperty,it=Object.prototype.propertyIsEnumerable;var P=(t,e,o)=>e in t?Z(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,c=(t,e)=>{for(var o in e||(e={}))ot.call(e,o)&&P(t,o,e[o]);if(q)for(var o of q(e))it.call(e,o)&&P(t,o,e[o]);return t},h=(t,e)=>tt(t,et(e));var d=(t,e)=>()=>(t&&(e=t(t=0)),e);function rt(t){let e=document.createElement("template");return e.innerHTML=t,e}function f(t,e){e=e||document.body;let r=rt(t).content.cloneNode(!0).querySelector("*");return e.appendChild(r)}function k(t,e={}){if(!t)return;L(t);let{outline:o,outlineOffset:r}=e;o=o||"dashed 3px red",r=r||"0px",t.originalStyles=t.originalStyles||{display:t.style.display,minHeight:t.style.minHeight,minWidth:t.style.minWidth,outline:t.style.outline,outlineOffset:t.style.outlineOffset},getComputedStyle(t).display.match(/^inline$/i)&&t.offsetWidth===0&&t.offsetHeight===0&&(t.style.display="inline-block",t.style.minHeight="2px",t.style.minWidth="2px"),t.style.outline=o,t.style.outlineOffset=r,t.dataset.turboBoostHighlight=!0}function L(t){if(t){if(t.originalStyles){for(let[e,o]of Object.entries(t.originalStyles))o?t.style[e]=o:t.style[e]="";delete t.originalStyles}delete t.dataset.turboBoostHighlight}}function T(t){if(!t)return{};let e=t.getBoundingClientRect(),o=t.offsetWidth,r=t.offsetHeight,i=e.top+window.scrollY,n=e.left+window.scrollX,l=n+o,a=i+r;return{top:i,left:n,right:l,bottom:a,width:o,height:r}}function u(t){try{t()}catch(e){}}var $=d(()=>{});var v,B=d(()=>{v=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=this.html,this.labelElement.addEventListener("click",e=>{e.preventDefault(),this.toggle()}),this.checkboxElement.addEventListener("change",e=>this.dispatchEvent(new CustomEvent("change",{bubbles:!0})))}toggle(){this.checked?this.uncheck():this.check()}check(){this.checkboxElement.checked=!0,this.dispatchEvent(new CustomEvent("change",{bubbles:!0}))}uncheck(){this.checkboxElement.checked=!1,this.dispatchEvent(new CustomEvent("change",{bubbles:!0}))}get name(){return this.getAttribute("name")}get checked(){return this.checkboxElement.checked}get checkboxElement(){return this.shadowRoot.querySelector("input")}get labelElement(){return this.shadowRoot.querySelector("label")}get html(){return`
      <style>${this.stylesheet}</style>
      <div>
        <input name="checkbox" type="checkbox">
        <label for="checkbox"><slot name="label"></slot></label>
      </div>
    `}get stylesheet(){return`
      :host, :host * {
        cursor: pointer;
      }

      div {
        display: flex;
        margin-right: 10px;
      }

      input:checked + label{
        font-weight: bold;
      }

      label {
        color: black;
      }
    `}}});var y,N=d(()=>{$();y=class extends HTMLElement{constructor(){super(),this.enabledDevtools={},this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=this.html,this.shadowRoot.querySelector("button").addEventListener("click",()=>this.dispatchEvent(new CustomEvent("turbo-boost:devtools-close",{bubbles:!0}))),this.addEventListener("change",e=>{let o=e.target,{checked:r,name:i}=o;r?this.enableDevtool(i):this.disableDevtool(i)})}enableDevtool(e){this.enabledDevtools[e]||(this.enabledDevtools[e]=!0,this.dispatchEvent(new CustomEvent("turbo-boost:devtool-enable",{bubbles:!0,detail:{name:e}})))}disableDevtool(e){this.enabledDevtools[e]&&(delete this.enabledDevtools[e],this.dispatchEvent(new CustomEvent("turbo-boost:devtool-disable",{bubbles:!0,detail:{name:e}})))}close(){this.devtoolElements.forEach(e=>{e.checked&&e.uncheck()}),this.remove()}get devtoolElements(){return this.querySelectorAll('[slot="devtool"]')}get closeElement(){return this.querySelector("button")}get html(){return`
      <style>${this.stylesheet}</style>
      <div>
        <img src="https://ik.imagekit.io/hopsoft/turbo-boost-logo_zHiiimlvT.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1671722004342">
        <slot name="devtool"></slot>
        <button>\u2715</button>
      </div>
    `}get stylesheet(){return`
      :host {
        background-color: gainsboro;
        border-radius: 5px;
        bottom: 20px;
        display: block;
        filter: drop-shadow(3px 3px 3px rgba(0,0,0,0.3));
        left: 50%;
        outline-offset: 1px;
        outline: solid 2px black;
        padding: 5px 10px;
        position: fixed;
        transform: translateX(-50%);
        z-index: 8999;
      }

      * {
        -webkit-user-select: none;
        font-family: helvetica, sans-serif;
        font-size: 1rem;
        user-select: none;
      }

      img {
        align-self: center;
        cursor: grab;
        height: 25px;
        margin-left: -5px;
        vertical-align: middle;
      }

      div {
        display: flex;
        gap: 0 5px;
        position: relative;
      }

      [slot="devtool"] {
        align-self: center;
      }

      button {
        align-self: center;
        background-color: darkgray;
        border-radius: 50%;
        border: none;
        color: black;
        cursor: pointer;
        font-size: 10px;
        height: 18px;
        line-height: 18px;
        margin-right: -5px;
        opacity: 0.5;
        outline: solid 1px black;
        padding: 0 2px;
        width: 18px;
      }

      button:hover {
        opacity: 1;
      }
    `}}});var E,W=d(()=>{E=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=this.html}connectedCallback(){let e=localStorage.getItem(`turbo-boost-devtools-${location.href}-${this.id}-transform`);e&&(this.style.transform=e)}disconnectedCallback(){this.id!=="undefined"&&this.id!==""&&localStorage.setItem(`turbo-boost-devtools-${location.href}-${this.id}-transform`,this.style.transform)}get color(){return this.getAttribute("color")||"darkslategray"}get backgroundColor(){return this.getAttribute("background-color")||"gainsboro"}get position(){return this.getAttribute("position")||"top"}get html(){return`
      <style>${this.stylesheet}</style>
      <div role="container">
        <div role="title">
          <slot name="title"></slot>
          <img src="https://ik.imagekit.io/hopsoft/turbo-boost-logo_zHiiimlvT.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1671722004342">
        </div>
        <slot name="subtitle"></slot>
        <slot name="content-top"></slot>
        <slot name="content"></slot>
        <slot name="content-bottom"></slot>
      </div>
    `}get stylesheet(){return`
      :host {
        display: block;
        position: absolute;
        z-index: 8999;
      }

      * {
        color: ${this.color}
        font-size: 1rem;
      }

      [role="container"] {
        background-color: ${this.backgroundColor};
        border-radius: 15px;
        filter: drop-shadow(3px 3px 3px rgba(0,0,0,0.3));
        font-family: monospace;
        min-height: 30px;
        min-width: 100px;
        opacity: 0.9;
        outline-offset: 1px;
        outline: dashed 3px ${this.color};
        padding: 12px;
        position: relative;
        white-space: nowrap;
      }

      [role="title"] {
        display: flex;
      }

      [role="title"] slot[name="title"] {
        color: ${this.color};
        display: block;
        flex-grow: 1;
        font-weight: bold;
      }

      [role="title"] img {
        height: 25px;
        vertical-align: middle;
      }

      slot[name="subtitle"] {
        border-bottom: dotted 1px ${this.color};
        border-top: dotted 1px ${this.color};
        color: ${this.color};
        display: block;
        font-size: 0.8rem;
        font-weight: lighter;
        margin-bottom: 12px;
        margin-top: 8px;
        padding-bottom: 4px;
        padding-top: 4px;
        width: 100%;
      }

      slot[name="content-top"],
      slot[name="content"],
      slot[name="content-bottom"] {
        display: block;
        font-weight: normal;
      }

      slot[name="content-top"] {
        color: ${this.color};
        margin-bottom: 8px;
      }

      slot[name="content"],
      slot[name="content-bottom"] {
        opacity: 0.7;
        padding-left: 12px;
      }

      slot[name="content"] {
        color: ${this.color};
      }

      slot[name="content-bottom"] {
        color: red;
      }
    `}}});function st(t){return t.global&&self[t.global]||document.querySelector(`[src='${t.src}']`)?!0:p.includes(t)}function lt(t){if(st(t))return;p.push(t);let{src:e,integrity:o}=t,r=document.createElement("script");r.setAttribute("src",e),r.setAttribute("crossorigin","anonymous"),r.setAttribute("referrerpolicy","no-referrer"),o&&r.setAttribute("integrity",o),document.head.appendChild(r)}function G(t){if(!p.includes(t))return;p.splice(p.indexOf(t),1);let{src:e}=t,o=document.querySelector(`script[src='${e}']`);o&&o.remove(),t.global&&self[t.global]&&(self[t.global]=null)}function at(){[...p].forEach(t=>G(t))}var p,nt,b,F=d(()=>{p=[],nt={LeaderLine:{src:"https://cdnjs.cloudflare.com/ajax/libs/leader-line/1.0.7/leader-line.min.js",integrity:"sha512-0dNdzMjpT6pJdFGF1DwybFCfm3K/lzHhxaMXC/92J9/DZujHlqYFqmhTOAoD0o+LkeEsVK2ar/ESs7/Q2B6wJg==",global:"LeaderLine"},PlainDraggable:{src:"https://cdn.jsdelivr.net/npm/plain-draggable@2.5.14/plain-draggable.min.js",global:"PlainDraggable"}};b=h(c({},nt),{add:lt,remove:G,removeAll:at})});function K(){if(s)try{new PlainDraggable(s)}catch(t){setTimeout(K,200)}}function C(){J()||(s.close(),s.dispatchEvent(new CustomEvent("turbo-boost:devtools-stop",{bubbles:!0})),s=null,b.removeAll())}function _(){D()||(b.add(b.LeaderLine),b.add(b.PlainDraggable),s=f("<turbo-boost-devtool-supervisor></turbo-boost-devtool-supervisor>"),setTimeout(K,200),s.dispatchEvent(new CustomEvent("turbo-boost:devtools-start",{bubbles:!0})))}function dt(){let t=s?Object.keys(s.enabledDevtools):[];C(),_(),s.devtoolElements.forEach(e=>{t.includes(e.name)&&e.check()})}function D(){return!!s}function J(){return!D()}function U(){clearTimeout(I),I=setTimeout(dt,25)}function w(){D()&&U()}function ct(t,e){if(s)return f(`
      <turbo-boost-devtool name="${t}" slot="devtool">
        <span slot="label">${e}</span>
      </turbo-boost-devtool>
    `,s)}function ht(t){return s?s.enabledDevtools[t]:!1}var s,I,x,H=d(()=>{$();B();N();W();F();customElements.define("turbo-boost-devtool",v);customElements.define("turbo-boost-devtool-supervisor",y);customElements.define("turbo-boost-devtool-tooltip",E);addEventListener("turbo:load",w);addEventListener("turbo-frame:load",w);addEventListener("turbo-boost:devtools-connect",w);addEventListener("turbo-boost:devtools-close",C);window.TurboBoost&&(addEventListener(TurboBoost.Commands.events.success,w),addEventListener(TurboBoost.Commands.events.finish,w));x={enabled:ht,register:ct,start:_,stop:C,restart:U,get started(){return D()},get stopped(){return J()}}});function R(t,e,o,r={}){let{backgroundColor:i,color:n,position:l,id:a}=r;return n=n||"white",l=l||"top",f(`
    <turbo-boost-devtool-tooltip id="${a}" position="${l}" background-color="${i}" color="${n}">
      <div slot='title'>${t}</div>
      <div slot='subtitle'>${e}</div>
      ${o}
    </turbo-boost-devtool-tooltip>
  `)}var S,g,X=d(()=>{H();$();g=class{constructor(e){this.delegate=e;let o,r=()=>{clearTimeout(o),o=setTimeout(this.hide({active:!1}),25)};this.eventListeners["turbo-boost:devtool-enable"]=i=>{let{name:n}=i.detail;n===this.delegate.name&&(k(this.delegate.triggerElement,{outline:"3px dashed blueviolet",outlineOffset:"2px"}),this.hide({active:!1}),this.active&&this.show())},this.eventListeners["turbo-boost:devtool-disable"]=i=>{let{name:n}=i.detail;n===this.delegate.name&&L(this.delegate.triggerElement)},this.eventListeners.click=i=>{i.target.closest("turbo-boost-devtool-tooltip")||r()},this.eventListeners["turbo:load"]=r,this.eventListeners["turbo-frame:load"]=r,window.TurboBoost&&(this.eventListeners[TurboBoost.Commands.events.finish]=r),this.registerEventListeners()}registerEventListeners(){Object.entries(this.eventListeners).forEach(([e,o])=>{addEventListener(e,o)})}unregisterEventListeners(){Object.entries(this.eventListeners).forEach(([e,o])=>{removeEventListener(e,o)})}get eventListeners(){return this._eventListeners||(this._eventListeners={})}show(){if(!this.enabled||this.active)return;this.active=!0,this.hide({active:!0}),k(this.delegate.targetElement,{outline:"3px dashed darkcyan",outlineOffset:"-2px"}),k(this.delegate.morphElement,{outline:"3px dashed chocolate",outlineOffset:"3px"}),this.renderingTooltip=this.createRenderingTooltip(),this.targetTooltip=this.createTargetTooltip(),this.triggerTooltip=this.createTriggerTooltip(this.targetTooltip,this.renderingTooltip),document.querySelectorAll(".leader-line").forEach(o=>o.style.zIndex=1e5);let e={morph:{partial:this.delegate.triggerElement.renders,id:this.delegate.triggerElement.morphs,status:this.delegate.morphElement?"OK":"Not Found"},trigger:{partial:null,id:null,status:"Not Found"},target:{partial:null,id:null,status:"Not Found"}};this.delegate.triggerElement&&(e.trigger={partial:this.delegate.triggerElement.partial,id:this.delegate.triggerElement.id,status:"OK"},e.target.id=this.delegate.triggerElement.controls),this.delegate.targetElement&&(e.target={partial:this.delegate.targetElement.partial,dom_id:this.delegate.targetElement.id,status:"OK"}),console.table(e)}hide({active:e=!1}){document.querySelectorAll("turbo-boost-devtool-tooltip").forEach(o=>{u(()=>o.line.remove()),u(()=>o.drag.remove()),u(()=>o.lineToRendering.remove()),u(()=>o.lineToTarget.remove()),u(()=>o.remove())}),document.querySelectorAll("[data-turbo-boost-highlight]").forEach(o=>{o.tagName.match(/turbo-boost-toggle-trigger/i)||L(o)}),this.active=e}get active(){return S===this.delegate}set active(e){e?S=this.delegate:S=null}get enabled(){return x.enabled(this.delegate.name)}static register(e,o){x.register(e,o)}createRenderingTooltip(){if(!this.delegate.triggerElement.renders)return console.debug("Unable to create the rendering tooltip! The trigger element must set the 'renders' attribute.");if(!this.delegate.triggerElement.morphs)return console.debug(`Unable to create the rendering tooltip! The trigger element specified the 'morphs' attrbiute but no element matches the DOM id: '${this.triggerElement.morphs}'`);let e=`
      <svg xmlns="http://www.w3.org/2000/svg" style="display:inline-block;" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>
      RENDERING - &lt;${this.delegate.triggerElement.tagName.toLowerCase()}&gt;
    `,o=`
      <b>partial</b>: ${this.delegate.triggerElement.renders||"unknown"}<br>
      <b>morphs</b>: ${this.delegate.triggerElement.morphs||"unknown"}<br>
    `,i=R(e,o,`
      <div slot="content-top" style="font-size:85%; font-style:italic; font-weight:100;">
        The <b>TRIGGER</b> toggles the <b>TARGET</b> then renders the partial &amp; morphs the element.<br>
      </div>
    `,{id:`${this.delegate.id}-rendering`,backgroundColor:"lightyellow",color:"chocolate"}),n=T(this.delegate.morphElement),l=Math.ceil(n.top+n.height/2-i.offsetHeight/2),a=Math.ceil(n.left+n.width+100);return i.style.top=`${l}px`,i.style.left=`${a}px`,i.line=new LeaderLine(i,this.delegate.morphElement,h(c({},this.leaderLineOptions),{color:"chocolate"})),i.drag=new PlainDraggable(i),i}createTargetTooltip(){var l,a;if(!this.delegate.targetElement)return console.debug(`Unable to create the target tooltip! No element matches the DOM id: '${this.delegate.triggerElement.controls}'`);let e=`
      <svg xmlns="http://www.w3.org/2000/svg" style="display:inline-block;" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
      TARGET - &lt;${this.delegate.targetElement.tagName.toLowerCase()}&gt;
    `,o=R(e,((l=this.delegate.targetTooltipData)==null?void 0:l.subtitle)||"",((a=this.delegate.targetTooltipData)==null?void 0:a.content)||"",{id:`${this.delegate.id}-target`,backgroundColor:"lightcyan",color:"darkcyan",position:"bottom"}),r=T(this.delegate.targetElement),i=Math.ceil(r.top+o.offsetHeight),n=Math.ceil(r.left+r.width+o.offsetWidth/3);return o.style.top=`${i}px`,o.style.left=`${n}px`,o.line=new LeaderLine(o,this.delegate.targetElement,h(c({},this.leaderLineOptions),{color:"darkcyan"})),o.drag=new PlainDraggable(o),o}createTriggerTooltip(e,o){var A,j;if(!this.delegate.triggerElement)return;let r=`
      <svg xmlns="http://www.w3.org/2000/svg" style="display:inline;" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
      TRIGGER - &lt;${this.delegate.triggerElement.tagName.toLowerCase()}&gt;
    `,i=R(r,((A=this.delegate.triggerTooltipData)==null?void 0:A.subtitle)||"",((j=this.delegate.triggerTooltipData)==null?void 0:j.content)||"",{id:`${this.delegate.id}-trigger`,backgroundColor:"lavender",color:"blueviolet"}),n=T(this.delegate.triggerElement),l=Math.ceil(n.top-i.offsetHeight*2),a=Math.ceil(n.left+n.width+i.offsetWidth/3);return i.style.top=`${l}px`,i.style.left=`${a}px`,i.line=new LeaderLine(this.delegate.triggerElement,i,h(c({},this.leaderLineOptions),{color:"blueviolet"})),e&&(i.lineToTarget=new LeaderLine(i,e,h(c({},this.leaderLineOptions),{color:"blueviolet",middleLabel:this.delegate.targetLineLabel,size:2.1})),e.drag.onMove=()=>{var m,z;e.line.position(),(m=i.lineToTarget)==null||m.position(),(z=i.lineToRendering)==null||z.position()}),o&&(i.lineToRendering=new LeaderLine(i,o,h(c({},this.leaderLineOptions),{color:"blueviolet",middleLabel:this.delegate.renderingLineLabel,size:2.1})),o.drag.onMove=()=>{var m;o.line.position(),i.lineToTarget&&i.lineToTarget.position(),(m=i.lineToRendering)==null||m.position()}),i.drag=new PlainDraggable(i),i.drag.onMove=()=>{i.line.position(),i.lineToTarget&&i.lineToTarget.position(),i.lineToRendering&&i.lineToRendering.position()},i}get leaderLineOptions(){return{dash:{animation:!0},dropShadow:{opacity:.3},endPlug:"arrow3",endPlugSize:1.7,size:3,startPlug:"disc",startPlugSize:1}}}});var ut={};function Y(t){Object.defineProperties(t,{targetTooltipData:{get(){return{subtitle:`
            <b>identifier</b>: ${t.identifier}<br>
            <b>query</b>: ${t.query}
          `,content:`
            <div slot="content-top">
              <svg xmlns="http://www.w3.org/2000/svg" style="display:inline-block;" width="16" height="16" viewbox="0 0 24 24" fill="none" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
              <b>element log</b>
            </div>
            ${t.targetElementLog.queue.slice(-10).map(e=>`<div slot="content">${e}</div>`).join("")}
          `}}},triggerTooltipData:{get(){return{subtitle:`
            <b>identifier</b>: ${this.identifier}<br>
            <b>only</b>: ${this.getAttribute("only")||""}<br>
            <b>url</b>: ${this.getAttribute("url")||location.href}<br>
            <b>debounce (client-side)</b>: ${this.debounce}<br>
            <b>ignore-inner-updates</b>: ${this.hasAttribute("ignore-inner-updates")}
          `,content:`
            <div slot="content-top">
              <svg xmlns="http://www.w3.org/2000/svg" style="display:inline-block;" width="16" height="16" viewbox="0 0 24 24" fill="none" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
              <b>element log</b>
            </div>
            ${t.triggerElementLog.queue.slice(-10).map(e=>`<div slot="content">${e}</div>`).join("")}
          `}}}})}function gt(){document.addEventListener("turbo-boost:devtools-start",()=>g.register("updates-for","updates-for")),window.CableReady.devtools=V,document.addEventListener("turbo:load",()=>{document.querySelectorAll("updates-for").forEach(t=>{M(t,"updates-for","updates"),Y(t),t.initializeDevtool()}),document.querySelectorAll("cable-ready-updates-for").forEach(t=>{M(t,"updates-for","updates"),Y(t),t.initializeDevtool()}),CableReady.devtools.start()})}var Q=d(()=>{O();O();gt()});function M(t,e,o){Object.assign(t,{initializeDevtool(){let r=()=>this.devtool.show();addEventListener("turbo-boost:devtools-start",()=>{this.devtool=new g(this),this.addEventListener("mouseenter",r)}),addEventListener("turbo-boost:devtools-stop",()=>{this.removeEventListener("mouseenter",r),this.removeDevtool()}),this.dispatchEvent(new CustomEvent("turbo-boost:devtools-connect",{bubbles:!0}))},hideDevtool(){var r;(r=this.devtool)==null||r.hide({active:!1})},removeDevtool(){this.devtool.hide({active:!1}),this.devtool.unregisterEventListeners(),delete this.devtool},name:e,targetLineLabel:o}),Object.defineProperties(t,{triggerElement:{get(){return t}},morphElement:{get(){return t}},targetElement:{get(){return t}}})}var pt,bt,mt,V,O=d(()=>{H();X();({restart:pt,start:bt,stop:mt}=x);(async()=>window.CableReady&&await Promise.resolve().then(()=>(Q(),ut)))();V={restart:pt,start:bt,stop:mt}});O();export{g as Devtool,M as decorateElementWithDevtool,V as default};
//# sourceMappingURL=devtools.js.map
