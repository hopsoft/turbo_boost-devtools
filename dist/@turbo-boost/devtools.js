var W=Object.defineProperty,K=Object.defineProperties;var V=Object.getOwnPropertyDescriptors;var z=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var A=(e,t,o)=>t in e?W(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,d=(e,t)=>{for(var o in t||(t={}))_.call(t,o)&&A(e,o,t[o]);if(z)for(var o of z(t))I.call(t,o)&&A(e,o,t[o]);return e},c=(e,t)=>K(e,V(t));function J(e){let t=document.createElement("template");return t.innerHTML=e,t}function f(e,t){t=t||document.body;let n=J(e).content.cloneNode(!0).querySelector("*");return t.appendChild(n)}function L(e,t={}){if(!e)return;$(e);let{outline:o,outlineOffset:n}=t;o=o||"dashed 3px red",n=n||"0px",e.originalStyles=e.originalStyles||{display:e.style.display,minHeight:e.style.minHeight,minWidth:e.style.minWidth,outline:e.style.outline,outlineOffset:e.style.outlineOffset},getComputedStyle(e).display.match(/^inline$/i)&&e.offsetWidth===0&&e.offsetHeight===0&&(e.style.display="inline-block",e.style.minHeight="2px",e.style.minWidth="2px"),e.style.outline=o,e.style.outlineOffset=n,e.dataset.turboBoostHighlight=!0}function $(e){if(e){if(e.originalStyles){for(let[t,o]of Object.entries(e.originalStyles))o?e.style[t]=o:e.style[t]="";delete e.originalStyles}delete e.dataset.turboBoostHighlight}}function H(e){if(!e)return{};let t=e.getBoundingClientRect(),o=e.offsetWidth,n=e.offsetHeight,i=t.top+window.scrollY,l=t.left+window.scrollX,r=l+o,a=i+n;return{top:i,left:l,right:r,bottom:a,width:o,height:n}}function g(e){try{e()}catch(t){}}var v=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=this.html,this.labelElement.addEventListener("click",t=>{t.preventDefault(),this.toggle()}),this.checkboxElement.addEventListener("change",t=>this.dispatchEvent(new CustomEvent("change",{bubbles:!0})))}toggle(){this.checked?this.uncheck():this.check()}check(){this.checkboxElement.checked=!0,this.dispatchEvent(new CustomEvent("change",{bubbles:!0}))}uncheck(){this.checkboxElement.checked=!1,this.dispatchEvent(new CustomEvent("change",{bubbles:!0}))}get name(){return this.getAttribute("name")}get checked(){return this.checkboxElement.checked}get checkboxElement(){return this.shadowRoot.querySelector("input")}get labelElement(){return this.shadowRoot.querySelector("label")}get html(){return`
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
    `}};var y=class extends HTMLElement{constructor(){super(),this.enabledDevtools={},this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=this.html,this.shadowRoot.querySelector("button").addEventListener("click",()=>this.dispatchEvent(new CustomEvent("turbo-boost:devtools-close",{bubbles:!0}))),this.addEventListener("change",t=>{let o=t.target,{checked:n,name:i}=o;n?this.enableDevtool(i):this.disableDevtool(i)})}enableDevtool(t){this.enabledDevtools[t]||(this.enabledDevtools[t]=!0,this.dispatchEvent(new CustomEvent("turbo-boost:devtool-enable",{bubbles:!0,detail:{name:t}})))}disableDevtool(t){this.enabledDevtools[t]&&(delete this.enabledDevtools[t],this.dispatchEvent(new CustomEvent("turbo-boost:devtool-disable",{bubbles:!0,detail:{name:t}})))}close(){this.devtoolElements.forEach(t=>{t.checked&&t.uncheck()}),this.remove()}get devtoolElements(){return this.querySelectorAll('[slot="devtool"]')}get closeElement(){return this.querySelector("button")}get html(){return`
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
    `}};var E=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=this.html}get color(){return this.getAttribute("color")||"darkslategray"}get backgroundColor(){return this.getAttribute("background-color")||"gainsboro"}get position(){return this.getAttribute("position")||"top"}get html(){return`
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
    `}};var u=[],U={LeaderLine:{src:"https://cdnjs.cloudflare.com/ajax/libs/leader-line/1.0.7/leader-line.min.js",integrity:"sha512-0dNdzMjpT6pJdFGF1DwybFCfm3K/lzHhxaMXC/92J9/DZujHlqYFqmhTOAoD0o+LkeEsVK2ar/ESs7/Q2B6wJg==",global:"LeaderLine"},PlainDraggable:{src:"https://cdn.jsdelivr.net/npm/plain-draggable@2.5.14/plain-draggable.min.js",global:"PlainDraggable"}};function X(e){return e.global&&self[e.global]||document.querySelector(`[src='${e.src}']`)?!0:u.includes(e)}function Y(e){if(X(e))return;u.push(e);let{src:t,integrity:o}=e,n=document.createElement("script");n.setAttribute("src",t),n.setAttribute("crossorigin","anonymous"),n.setAttribute("referrerpolicy","no-referrer"),o&&n.setAttribute("integrity",o),document.head.appendChild(n)}function B(e){if(!u.includes(e))return;u.splice(u.indexOf(e),1);let{src:t}=e,o=document.querySelector(`script[src='${t}']`);o&&o.remove(),e.global&&self[e.global]&&(self[e.global]=null)}function Q(){[...u].forEach(e=>B(e))}var p=c(d({},U),{add:Y,remove:B,removeAll:Q});customElements.define("turbo-boost-devtool",v);customElements.define("turbo-boost-devtool-supervisor",y);customElements.define("turbo-boost-devtool-tooltip",E);var s;function P(){if(s)try{new PlainDraggable(s)}catch(e){setTimeout(P,200)}}function D(){G()||(s.close(),s.dispatchEvent(new CustomEvent("turbo-boost:devtools-stop",{bubbles:!0})),s=null,p.removeAll())}function N(){C()||(p.add(p.LeaderLine),p.add(p.PlainDraggable),s=f("<turbo-boost-devtool-supervisor></turbo-boost-devtool-supervisor>"),setTimeout(P,200),s.dispatchEvent(new CustomEvent("turbo-boost:devtools-start",{bubbles:!0})))}function Z(){let e=s?Object.keys(s.enabledDevtools):[];D(),N(),s.devtoolElements.forEach(t=>{e.includes(t.name)&&t.check()})}function C(){return!!s}function G(){return!C()}var q;function F(){clearTimeout(q),q=setTimeout(Z,25)}function x(){C()&&F()}addEventListener("turbo:load",x);addEventListener("turbo-frame:load",x);addEventListener("turbo-boost:devtools-connect",x);addEventListener("turbo-boost:devtools-close",D);window.TurboBoost&&(addEventListener(TurboBoost.Commands.events.success,x),addEventListener(TurboBoost.Commands.events.finish,x));function tt(e,t){if(s)return f(`
      <turbo-boost-devtool name="${e}" slot="devtool">
        <span slot="label">${t}</span>
      </turbo-boost-devtool>
    `,s)}function et(e){return s?s.enabledDevtools[e]:!1}var w={enabled:et,register:tt,start:N,stop:D,restart:F,get started(){return C()},get stopped(){return G()}};function R(e,t,o,n={}){let{backgroundColor:i,color:l,position:r}=n;return l=l||"white",r=r||"top",f(`
    <turbo-boost-devtool-tooltip position="${r}" background-color="${i}" color="${l}">
      <div slot='title'>${e}</div>
      <div slot='subtitle'>${t}</div>
      ${o}
    </turbo-boost-devtool-tooltip>
  `)}var O,S=class{constructor(t){this.delegate=t;let o,n=()=>{clearTimeout(o),o=setTimeout(this.hide({active:!1}),25)};this.eventListeners["turbo-boost:devtool-enable"]=i=>{let{name:l}=i.detail;l===this.delegate.name&&(L(this.delegate.triggerElement,{outline:"3px dashed blueviolet",outlineOffset:"2px"}),this.hide({active:!1}),this.active&&this.show())},this.eventListeners["turbo-boost:devtool-disable"]=i=>{let{name:l}=i.detail;l===this.delegate.name&&$(this.delegate.triggerElement)},this.eventListeners.click=i=>{i.target.closest("turbo-boost-devtool-tooltip")||n()},this.eventListeners["turbo:load"]=n,this.eventListeners["turbo-frame:load"]=n,window.TurboBoost&&(this.eventListeners[TurboBoost.Commands.events.finish]=n),this.registerEventListeners()}registerEventListeners(){Object.entries(this.eventListeners).forEach(([t,o])=>{addEventListener(t,o)})}unregisterEventListeners(){Object.entries(this.eventListeners).forEach(([t,o])=>{removeEventListener(t,o)})}get eventListeners(){return this._eventListeners||(this._eventListeners={})}show(){if(!this.enabled||this.active)return;this.active=!0,this.hide({active:!0}),L(this.delegate.targetElement,{outline:"3px dashed darkcyan",outlineOffset:"-2px"}),L(this.delegate.morphElement,{outline:"3px dashed chocolate",outlineOffset:"3px"}),this.renderingTooltip=this.createRenderingTooltip(),this.targetTooltip=this.createTargetTooltip(),this.triggerTooltip=this.createTriggerTooltip(this.targetTooltip,this.renderingTooltip),document.querySelectorAll(".leader-line").forEach(o=>o.style.zIndex=1e5);let t={morph:{partial:this.delegate.triggerElement.renders,id:this.delegate.triggerElement.morphs,status:this.delegate.morphElement?"OK":"Not Found"},trigger:{partial:null,id:null,status:"Not Found"},target:{partial:null,id:null,status:"Not Found"}};this.delegate.triggerElement&&(t.trigger={partial:this.delegate.triggerElement.partial,id:this.delegate.triggerElement.id,status:"OK"},t.target.id=this.delegate.triggerElement.controls),this.delegate.targetElement&&(t.target={partial:this.delegate.targetElement.partial,dom_id:this.delegate.targetElement.id,status:"OK"}),console.table(t)}hide({active:t=!1}){document.querySelectorAll("turbo-boost-devtool-tooltip").forEach(o=>{g(()=>o.line.remove()),g(()=>o.drag.remove()),g(()=>o.lineToRendering.remove()),g(()=>o.lineToTarget.remove()),g(()=>o.remove())}),document.querySelectorAll("[data-turbo-boost-highlight]").forEach(o=>{o.tagName.match(/turbo-boost-toggle-trigger/i)||$(o)}),this.active=t}get active(){return O===this.delegate}set active(t){t?O=this.delegate:O=null}get enabled(){return w.enabled(this.delegate.name)}static register(t,o){w.register(t,o)}createRenderingTooltip(){if(!this.delegate.triggerElement.renders)return console.debug("Unable to create the rendering tooltip! The trigger element must set the 'renders' attribute.");if(!this.delegate.triggerElement.morphs)return console.debug(`Unable to create the rendering tooltip! The trigger element specified the 'morphs' attrbiute but no element matches the DOM id: '${this.triggerElement.morphs}'`);let t=`
      <svg xmlns="http://www.w3.org/2000/svg" style="display:inline-block;" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>
      RENDERING
    `,o=`
      <b>partial</b>: ${this.delegate.triggerElement.renders||"unknown"}<br>
      <b>morphs</b>: ${this.delegate.triggerElement.morphs||"unknown"}<br>
    `,i=R(t,o,`
      <div slot="content-top" style="font-size:85%; font-style:italic; font-weight:100;">
        The <b>TRIGGER</b> toggles the <b>TARGET</b> then renders the partial &amp; morphs the element.<br>
      </div>
    `,{backgroundColor:"lightyellow",color:"chocolate"}),l=H(this.delegate.morphElement),r=Math.ceil(l.top+l.height/2-i.offsetHeight/2),a=Math.ceil(l.left+l.width+100);return i.style.top=`${r}px`,i.style.left=`${a}px`,i.line=new LeaderLine(i,this.delegate.morphElement,c(d({},this.leaderLineOptions),{color:"chocolate"})),i.drag=new PlainDraggable(i),i}createTargetTooltip(){var k,T,b;if(!this.delegate.targetElement)return console.debug(`Unable to create the target tooltip! No element matches the DOM id: '${this.delegate.triggerElement.controls}'`);let t=`
      <svg xmlns="http://www.w3.org/2000/svg" style="display:inline-block;" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
      TARGET
    `,o=`
      <b>id</b>: ${this.delegate.targetElement.id}<br>
      <b>aria-labeled-by</b>: ${this.delegate.targetElement.labeledBy}<br>
    `,n=(b=(T=(k=this.delegate.targetElement.viewStack)==null?void 0:k.reverse())==null?void 0:T.map((h,m)=>this.delegate.triggerElement.sharedViews.includes(h)?`<div slot="content">${m+1}. ${h}</div>`:`<div slot="content-bottom">${m+1}. ${h}</div>`,this))==null?void 0:b.join("");n=`
      <div slot="content-top">
        <svg xmlns="http://www.w3.org/2000/svg" style="display:inline-block;" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
        <b>View Stack</b>
      </div>
      ${n}
    `;let i=R(t,o,n,{backgroundColor:"lightcyan",color:"darkcyan",position:"bottom"}),l=H(this.delegate.targetElement),r=Math.ceil(l.top+i.offsetHeight),a=Math.ceil(l.left+l.width+i.offsetWidth/3);return i.style.top=`${r}px`,i.style.left=`${a}px`,i.line=new LeaderLine(i,this.delegate.targetElement,c(d({},this.leaderLineOptions),{color:"darkcyan"})),i.drag=new PlainDraggable(i),i}createTriggerTooltip(t,o){var b,h,m;if(!this.delegate.triggerElement)return;let n=`
      <svg xmlns="http://www.w3.org/2000/svg" style="display:inline;" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
      TRIGGER
    `,i=`
      <b>id</b>: ${this.delegate.triggerElement.id}<br>
      <b>aria-controls</b>: ${this.delegate.triggerElement.controls}<br>
      <b>aria-expanded</b>: ${this.delegate.triggerElement.expanded}<br>
      <b>remember</b>: ${this.delegate.triggerElement.remember}<br>
    `,l=(m=(h=(b=this.delegate.triggerElement.viewStack)==null?void 0:b.reverse())==null?void 0:h.map((M,j)=>this.delegate.triggerElement.sharedViews.includes(M)?`<div slot="content">${j+1}. ${M}</div>`:`<div slot="content-bottom">${j+1}. ${M}</div>`,this))==null?void 0:m.join("");l=`
      <div slot="content-top">
        <svg xmlns="http://www.w3.org/2000/svg" style="display:inline-block;" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
        <b>View Stack</b>
      </div>
      ${l}
    `;let r=R(n,i,l,{backgroundColor:"lavender",color:"blueviolet"}),a=H(this.delegate.triggerElement),k=Math.ceil(a.top-r.offsetHeight*2),T=Math.ceil(a.left+a.width+r.offsetWidth/3);return r.style.top=`${k}px`,r.style.left=`${T}px`,r.line=new LeaderLine(this.delegate.triggerElement,r,c(d({},this.leaderLineOptions),{color:"blueviolet"})),t&&(r.lineToTarget=new LeaderLine(r,t,c(d({},this.leaderLineOptions),{color:"blueviolet",middleLabel:"toggles",size:2.1})),t.drag.onMove=()=>{t.line.position(),r.lineToTarget.position(),r.lineToRendering.position()}),o&&(r.lineToRendering=new LeaderLine(r,o,c(d({},this.leaderLineOptions),{color:"blueviolet",middleLabel:"renders & morphs",size:2.1})),o.drag.onMove=()=>{o.line.position(),r.lineToTarget&&r.lineToTarget.position(),r.lineToRendering.position()}),r.drag=new PlainDraggable(r),r.drag.onMove=()=>{r.line.position(),r.lineToTarget&&r.lineToTarget.position(),r.lineToRendering&&r.lineToRendering.position()},r}get leaderLineOptions(){return{dash:{animation:!0},dropShadow:{opacity:.3},endPlug:"arrow3",endPlugSize:1.7,size:3,startPlug:"disc",startPlugSize:1}}};var{restart:ot,start:it,stop:rt}=w;var $t={restart:ot,start:it,stop:rt};export{S as Devtool,$t as default};
//# sourceMappingURL=devtools.js.map
