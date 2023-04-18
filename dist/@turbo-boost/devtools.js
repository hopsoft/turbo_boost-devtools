var N=Object.defineProperty,G=Object.defineProperties;var F=Object.getOwnPropertyDescriptors;var R=Object.getOwnPropertySymbols;var W=Object.prototype.hasOwnProperty,K=Object.prototype.propertyIsEnumerable;var O=(e,t,o)=>t in e?N(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,d=(e,t)=>{for(var o in t||(t={}))W.call(t,o)&&O(e,o,t[o]);if(R)for(var o of R(t))K.call(t,o)&&O(e,o,t[o]);return e},c=(e,t)=>G(e,F(t));function V(e){let t=document.createElement("template");return t.innerHTML=e,t}function b(e,t){t=t||document.body;let l=V(e).content.cloneNode(!0).querySelector("*");return t.appendChild(l)}function w(e,t={}){if(!e)return;k(e);let{outline:o,outlineOffset:l}=t;o=o||"dashed 3px red",l=l||"0px",e.originalStyles=e.originalStyles||{display:e.style.display,minHeight:e.style.minHeight,minWidth:e.style.minWidth,outline:e.style.outline,outlineOffset:e.style.outlineOffset},getComputedStyle(e).display.match(/^inline$/i)&&e.offsetWidth===0&&e.offsetHeight===0&&(e.style.display="inline-block",e.style.minHeight="2px",e.style.minWidth="2px"),e.style.outline=o,e.style.outlineOffset=l,e.dataset.turboBoostHighlight=!0}function k(e){if(e){if(e.originalStyles){for(let[t,o]of Object.entries(e.originalStyles))o?e.style[t]=o:e.style[t]="";delete e.originalStyles}delete e.dataset.turboBoostHighlight}}function T(e){if(!e)return{};let t=e.getBoundingClientRect(),o=e.offsetWidth,l=e.offsetHeight,i=t.top+window.scrollY,n=t.left+window.scrollX,r=n+o,a=i+l;return{top:i,left:n,right:r,bottom:a,width:o,height:l}}function h(e){try{e()}catch(t){}}var m=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=this.html,this.labelElement.addEventListener("click",t=>{t.preventDefault(),this.toggle()}),this.checkboxElement.addEventListener("change",t=>this.dispatchEvent(new CustomEvent("change",{bubbles:!0})))}toggle(){this.checked?this.uncheck():this.check()}check(){this.checkboxElement.checked=!0,this.dispatchEvent(new CustomEvent("change",{bubbles:!0}))}uncheck(){this.checkboxElement.checked=!1,this.dispatchEvent(new CustomEvent("change",{bubbles:!0}))}get name(){return this.getAttribute("name")}get checked(){return this.checkboxElement.checked}get checkboxElement(){return this.shadowRoot.querySelector("input")}get labelElement(){return this.shadowRoot.querySelector("label")}get html(){return`
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
    `}};var f=class extends HTMLElement{constructor(){super(),this.enabledDevtools={},this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=this.html,this.shadowRoot.querySelector("button").addEventListener("click",()=>this.dispatchEvent(new CustomEvent("turbo-boost:devtools-close",{bubbles:!0}))),this.addEventListener("change",t=>{let o=t.target,{checked:l,name:i}=o;l?this.enableDevtool(i):this.disableDevtool(i)})}enableDevtool(t){this.enabledDevtools[t]||(this.enabledDevtools[t]=!0,this.dispatchEvent(new CustomEvent("turbo-boost:devtool-enable",{bubbles:!0,detail:{name:t}})))}disableDevtool(t){this.enabledDevtools[t]&&(delete this.enabledDevtools[t],this.dispatchEvent(new CustomEvent("turbo-boost:devtool-disable",{bubbles:!0,detail:{name:t}})))}close(){this.devtoolElements.forEach(t=>{t.checked&&t.uncheck()}),this.remove()}get devtoolElements(){return this.querySelectorAll('[slot="devtool"]')}get closeElement(){return this.querySelector("button")}get html(){return`
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
    `}};var v=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=this.html}get color(){return this.getAttribute("color")||"darkslategray"}get backgroundColor(){return this.getAttribute("background-color")||"gainsboro"}get position(){return this.getAttribute("position")||"top"}get html(){return`
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
    `}};var g=[],_={LeaderLine:{src:"https://cdnjs.cloudflare.com/ajax/libs/leader-line/1.0.7/leader-line.min.js",integrity:"sha512-0dNdzMjpT6pJdFGF1DwybFCfm3K/lzHhxaMXC/92J9/DZujHlqYFqmhTOAoD0o+LkeEsVK2ar/ESs7/Q2B6wJg==",global:"LeaderLine"},PlainDraggable:{src:"https://cdn.jsdelivr.net/npm/plain-draggable@2.5.14/plain-draggable.min.js",global:"PlainDraggable"}};function I(e){return e.global&&self[e.global]||document.querySelector(`[src='${e.src}']`)?!0:g.includes(e)}function J(e){if(I(e))return;g.push(e);let{src:t,integrity:o}=e,l=document.createElement("script");l.setAttribute("src",t),l.setAttribute("crossorigin","anonymous"),l.setAttribute("referrerpolicy","no-referrer"),o&&l.setAttribute("integrity",o),document.head.appendChild(l)}function j(e){if(!g.includes(e))return;g.splice(g.indexOf(e),1);let{src:t}=e,o=document.querySelector(`script[src='${t}']`);o&&o.remove(),e.global&&self[e.global]&&(self[e.global]=null)}function U(){[...g].forEach(e=>j(e))}var u=c(d({},_),{add:J,remove:j,removeAll:U});customElements.define("turbo-boost-devtool",m);customElements.define("turbo-boost-devtool-supervisor",f);customElements.define("turbo-boost-devtool-tooltip",v);var s;function A(){if(s)try{new PlainDraggable(s)}catch(e){setTimeout(A,200)}}function C(){q()||(s.close(),s.dispatchEvent(new CustomEvent("turbo-boost:devtools-stop",{bubbles:!0})),s=null,u.removeAll())}function B(){L()||(u.add(u.LeaderLine),u.add(u.PlainDraggable),s=b("<turbo-boost-devtool-supervisor></turbo-boost-devtool-supervisor>"),setTimeout(A,200),s.dispatchEvent(new CustomEvent("turbo-boost:devtools-start",{bubbles:!0})))}function X(){let e=s?Object.keys(s.enabledDevtools):[];C(),B(),s.devtoolElements.forEach(t=>{e.includes(t.name)&&t.check()})}function L(){return!!s}function q(){return!L()}var z;function P(){clearTimeout(z),z=setTimeout(X,25)}function y(){L()&&P()}addEventListener("turbo:load",y);addEventListener("turbo-frame:load",y);addEventListener(TurboBoost.Commands.events.success,y);addEventListener(TurboBoost.Commands.events.finish,y);addEventListener("turbo-boost:devtools-connect",y);addEventListener("turbo-boost:devtools-close",C);function Y(e,t){if(s)return b(`
      <turbo-boost-devtool name="${e}" slot="devtool">
        <span slot="label">${t}</span>
      </turbo-boost-devtool>
    `,s)}function Q(e){return s?s.enabledDevtools[e]:!1}var E={enabled:Q,register:Y,start:B,stop:C,restart:P,get started(){return L()},get stopped(){return q()}};function S(e,t,o,l={}){let{backgroundColor:i,color:n,position:r}=l;return n=n||"white",r=r||"top",b(`
    <turbo-boost-devtool-tooltip position="${r}" background-color="${i}" color="${n}">
      <div slot='title'>${e}</div>
      <div slot='subtitle'>${t}</div>
      ${o}
    </turbo-boost-devtool-tooltip>
  `)}var M,$=class{constructor(t){this.delegate=t;let o,l=()=>{clearTimeout(o),o=setTimeout(this.hide({active:!1}),25)};this.eventListeners["turbo-boost:devtool-enable"]=i=>{let{name:n}=i.detail;n===this.delegate.name&&(w(this.delegate.triggerElement,{outline:"3px dashed blueviolet",outlineOffset:"2px"}),this.hide({active:!1}),this.active&&this.show())},this.eventListeners["turbo-boost:devtool-disable"]=i=>{let{name:n}=i.detail;n===this.delegate.name&&k(this.delegate.triggerElement)},this.eventListeners.click=i=>{i.target.closest("turbo-boost-devtool-tooltip")||l()},this.eventListeners["turbo:load"]=l,this.eventListeners["turbo-frame:load"]=l,TurboBoost&&(this.eventListeners[TurboBoost.Commands.events.finish]=l),this.registerEventListeners()}registerEventListeners(){Object.entries(this.eventListeners).forEach(([t,o])=>{addEventListener(t,o)})}unregisterEventListeners(){Object.entries(this.eventListeners).forEach(([t,o])=>{removeEventListener(t,o)})}get eventListeners(){return this._eventListeners||(this._eventListeners={})}show(){if(!this.enabled||this.active)return;this.active=!0,this.hide({active:!0}),w(this.delegate.targetElement,{outline:"3px dashed darkcyan",outlineOffset:"-2px"}),w(this.delegate.morphElement,{outline:"3px dashed chocolate",outlineOffset:"3px"}),this.renderingTooltip=this.createRenderingTooltip(),this.targetTooltip=this.createTargetTooltip(),this.triggerTooltip=this.createTriggerTooltip(this.targetTooltip,this.renderingTooltip),document.querySelectorAll(".leader-line").forEach(o=>o.style.zIndex=1e5);let t={morph:{partial:this.delegate.triggerElement.renders,id:this.delegate.triggerElement.morphs,status:this.delegate.morphElement?"OK":"Not Found"},trigger:{partial:null,id:null,status:"Not Found"},target:{partial:null,id:null,status:"Not Found"}};this.delegate.triggerElement&&(t.trigger={partial:this.delegate.triggerElement.partial,id:this.delegate.triggerElement.id,status:"OK"},t.target.id=this.delegate.triggerElement.controls),this.delegate.targetElement&&(t.target={partial:this.delegate.targetElement.partial,dom_id:this.delegate.targetElement.id,status:"OK"}),console.table(t)}hide({active:t=!1}){document.querySelectorAll("turbo-boost-devtool-tooltip").forEach(o=>{h(()=>o.line.remove()),h(()=>o.drag.remove()),h(()=>o.lineToRendering.remove()),h(()=>o.lineToTarget.remove()),h(()=>o.remove())}),document.querySelectorAll("[data-turbo-boost-highlight]").forEach(o=>{o.tagName.match(/turbo-boost-toggle-trigger/i)||k(o)}),this.active=t}get active(){return M===this.delegate}set active(t){t?M=this.delegate:M=null}get enabled(){return E.enabled(this.delegate.name)}static register(t,o){E.register(t,o)}createRenderingTooltip(){if(!this.delegate.triggerElement.renders)return console.debug("Unable to create the rendering tooltip! The trigger element must set the 'renders' attribute.");if(!this.delegate.triggerElement.morphs)return console.debug(`Unable to create the rendering tooltip! The trigger element specified the 'morphs' attrbiute but no element matches the DOM id: '${this.triggerElement.morphs}'`);let t=`
      <svg xmlns="http://www.w3.org/2000/svg" style="display:inline-block;" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>
      RENDERING
    `,o=`
      <b>partial</b>: ${this.delegate.triggerElement.renders||"unknown"}<br>
      <b>morphs</b>: ${this.delegate.triggerElement.morphs||"unknown"}<br>
    `,i=S(t,o,`
      <div slot="content-top" style="font-size:85%; font-style:italic; font-weight:100;">
        The <b>TRIGGER</b> toggles the <b>TARGET</b> then renders the partial &amp; morphs the element.<br>
      </div>
    `,{backgroundColor:"lightyellow",color:"chocolate"}),n=T(this.delegate.morphElement),r=Math.ceil(n.top+n.height/2-i.offsetHeight/2),a=Math.ceil(n.left+n.width+100);return i.style.top=`${r}px`,i.style.left=`${a}px`,i.line=new LeaderLine(i,this.delegate.morphElement,c(d({},this.leaderLineOptions),{color:"chocolate"})),i.drag=new PlainDraggable(i),i}createTargetTooltip(){if(!this.delegate.targetElement)return console.debug(`Unable to create the target tooltip! No element matches the DOM id: '${this.delegate.triggerElement.controls}'`);let t=`
      <svg xmlns="http://www.w3.org/2000/svg" style="display:inline-block;" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
      TARGET
    `,o=`
      <b>id</b>: ${this.delegate.targetElement.id}<br>
      <b>aria-labeled-by</b>: ${this.delegate.targetElement.labeledBy}<br>
    `,l=this.delegate.targetElement.viewStack.reverse().map((p,x)=>this.delegate.triggerElement.sharedViews.includes(p)?`<div slot="content">${x+1}. ${p}</div>`:`<div slot="content-bottom">${x+1}. ${p}</div>`,this).join("");l=`
      <div slot="content-top">
        <svg xmlns="http://www.w3.org/2000/svg" style="display:inline-block;" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
        <b>View Stack</b>
      </div>
      ${l}
    `;let i=S(t,o,l,{backgroundColor:"lightcyan",color:"darkcyan",position:"bottom"}),n=T(this.delegate.targetElement),r=Math.ceil(n.top+i.offsetHeight),a=Math.ceil(n.left+n.width+i.offsetWidth/3);return i.style.top=`${r}px`,i.style.left=`${a}px`,i.line=new LeaderLine(i,this.delegate.targetElement,c(d({},this.leaderLineOptions),{color:"darkcyan"})),i.drag=new PlainDraggable(i),i}createTriggerTooltip(t,o){if(!this.delegate.triggerElement)return;let l=`
      <svg xmlns="http://www.w3.org/2000/svg" style="display:inline;" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
      TRIGGER
    `,i=`
      <b>id</b>: ${this.delegate.triggerElement.id}<br>
      <b>aria-controls</b>: ${this.delegate.triggerElement.controls}<br>
      <b>aria-expanded</b>: ${this.delegate.triggerElement.expanded}<br>
      <b>remember</b>: ${this.delegate.triggerElement.remember}<br>
    `,n=this.delegate.triggerElement.viewStack.reverse().map((H,D)=>this.delegate.triggerElement.sharedViews.includes(H)?`<div slot="content">${D+1}. ${H}</div>`:`<div slot="content-bottom">${D+1}. ${H}</div>`,this).join("");n=`
      <div slot="content-top">
        <svg xmlns="http://www.w3.org/2000/svg" style="display:inline-block;" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
        <b>View Stack</b>
      </div>
      ${n}
    `;let r=S(l,i,n,{backgroundColor:"lavender",color:"blueviolet"}),a=T(this.delegate.triggerElement),p=Math.ceil(a.top-r.offsetHeight*2),x=Math.ceil(a.left+a.width+r.offsetWidth/3);return r.style.top=`${p}px`,r.style.left=`${x}px`,r.line=new LeaderLine(this.delegate.triggerElement,r,c(d({},this.leaderLineOptions),{color:"blueviolet"})),t&&(r.lineToTarget=new LeaderLine(r,t,c(d({},this.leaderLineOptions),{color:"blueviolet",middleLabel:"toggles",size:2.1})),t.drag.onMove=()=>{t.line.position(),r.lineToTarget.position(),r.lineToRendering.position()}),o&&(r.lineToRendering=new LeaderLine(r,o,c(d({},this.leaderLineOptions),{color:"blueviolet",middleLabel:"renders & morphs",size:2.1})),o.drag.onMove=()=>{o.line.position(),r.lineToTarget&&r.lineToTarget.position(),r.lineToRendering.position()}),r.drag=new PlainDraggable(r),r.drag.onMove=()=>{r.line.position(),r.lineToTarget&&r.lineToTarget.position(),r.lineToRendering&&r.lineToRendering.position()},r}get leaderLineOptions(){return{dash:{animation:!0},dropShadow:{opacity:.3},endPlug:"arrow3",endPlugSize:1.7,size:3,startPlug:"disc",startPlugSize:1}}};var{restart:Z,start:tt,stop:et}=E;var kt={restart:Z,start:tt,stop:et};export{$ as Devtool,kt as default};
//# sourceMappingURL=devtools.js.map
