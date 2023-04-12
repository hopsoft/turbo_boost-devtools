var T=Object.defineProperty,D=Object.defineProperties;var C=Object.getOwnPropertyDescriptors;var g=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var f=(e,t,o)=>t in e?T(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,m=(e,t)=>{for(var o in t||(t={}))S.call(t,o)&&f(e,o,t[o]);if(g)for(var o of g(t))$.call(t,o)&&f(e,o,t[o]);return e},v=(e,t)=>D(e,C(t));function A(e){let t=document.createElement("template");return t.innerHTML=e,t}function h(e,t){t=t||document.body;let i=A(e).content.cloneNode(!0).querySelector("*");return t.appendChild(i)}var l=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=this.html,this.labelElement.addEventListener("click",t=>{t.preventDefault(),this.toggle()}),this.checkboxElement.addEventListener("change",t=>this.dispatchEvent(new CustomEvent("change",{bubbles:!0})))}toggle(){this.checked?this.uncheck():this.check()}check(){this.checkboxElement.checked=!0,this.dispatchEvent(new CustomEvent("change",{bubbles:!0}))}uncheck(){this.checkboxElement.checked=!1,this.dispatchEvent(new CustomEvent("change",{bubbles:!0}))}get name(){return this.getAttribute("name")}get checked(){return this.checkboxElement.checked}get checkboxElement(){return this.shadowRoot.querySelector("input")}get labelElement(){return this.shadowRoot.querySelector("label")}get html(){return`
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
    `}};var a=class extends HTMLElement{constructor(){super(),this.enabledDevtools={},this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=this.html,this.shadowRoot.querySelector("button").addEventListener("click",()=>this.dispatchEvent(new CustomEvent("turbo-boost:devtools-close",{bubbles:!0}))),this.addEventListener("change",t=>{let o=t.target,{checked:i,name:p}=o;i?this.enableDevtool(p):this.disableDevtool(p)})}enableDevtool(t){this.enabledDevtools[t]||(this.enabledDevtools[t]=!0,this.dispatchEvent(new CustomEvent("turbo-boost:devtool-enable",{bubbles:!0,detail:{name:t}})))}disableDevtool(t){this.enabledDevtools[t]&&(delete this.enabledDevtools[t],this.dispatchEvent(new CustomEvent("turbo-boost:devtool-disable",{bubbles:!0,detail:{name:t}})))}close(){this.devtoolElements.forEach(t=>{t.checked&&t.uncheck()}),this.remove()}get devtoolElements(){return this.querySelectorAll('[slot="devtool"]')}get closeElement(){return this.querySelector("button")}get html(){return`
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
    `}};var c=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=this.html}get color(){return this.getAttribute("color")||"darkslategray"}get backgroundColor(){return this.getAttribute("background-color")||"gainsboro"}get position(){return this.getAttribute("position")||"top"}get html(){return`
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
    `}};var r=[],M={LeaderLine:{src:"https://cdnjs.cloudflare.com/ajax/libs/leader-line/1.0.7/leader-line.min.js",integrity:"sha512-0dNdzMjpT6pJdFGF1DwybFCfm3K/lzHhxaMXC/92J9/DZujHlqYFqmhTOAoD0o+LkeEsVK2ar/ESs7/Q2B6wJg==",global:"LeaderLine"},PlainDraggable:{src:"https://cdn.jsdelivr.net/npm/plain-draggable@2.5.14/plain-draggable.min.js",global:"PlainDraggable"}};function j(e){return e.global&&self[e.global]||document.querySelector(`[src='${e.src}']`)?!0:r.includes(e)}function q(e){if(j(e))return;r.push(e);let{src:t,integrity:o}=e,i=document.createElement("script");i.setAttribute("src",t),i.setAttribute("crossorigin","anonymous"),i.setAttribute("referrerpolicy","no-referrer"),o&&i.setAttribute("integrity",o),document.head.appendChild(i)}function x(e){if(!r.includes(e))return;r.splice(r.indexOf(e),1);let{src:t}=e,o=document.querySelector(`script[src='${t}']`);o&&o.remove(),e.global&&self[e.global]&&(self[e.global]=null)}function z(){[...r].forEach(e=>x(e))}var n=v(m({},M),{add:q,remove:x,removeAll:z});customElements.define("turbo-boost-devtool",l);customElements.define("turbo-boost-devtool-supervisor",a);customElements.define("turbo-boost-devtool-tooltip",c);var s;function k(){if(s)try{new PlainDraggable(s)}catch(e){setTimeout(k,200)}}function b(){w()||(s.close(),s.dispatchEvent(new CustomEvent("turbo-boost:devtools-stop",{bubbles:!0})),s=null,n.removeAll())}function E(){u()||(n.add(n.LeaderLine),n.add(n.PlainDraggable),s=h("<turbo-boost-devtool-supervisor></turbo-boost-devtool-supervisor>"),setTimeout(k,200),s.dispatchEvent(new CustomEvent("turbo-boost:devtools-start",{bubbles:!0})))}function R(){let e=s?Object.keys(s.enabledDevtools):[];b(),E(),s.devtoolElements.forEach(t=>{e.includes(t.name)&&t.check()})}function u(){return!!s}function w(){return!u()}var y;function L(){clearTimeout(y),y=setTimeout(R,25)}function d(){u()&&L()}addEventListener("turbo:load",d);addEventListener("turbo-frame:load",d);addEventListener(TurboBoost.Commands.events.success,d);addEventListener(TurboBoost.Commands.events.finish,d);addEventListener("turbo-boost:devtools-connect",d);addEventListener("turbo-boost:devtools-close",b);function O(e,t){if(s)return h(`
      <turbo-boost-devtool name="${e}" slot="devtool">
        <span slot="label">${t}</span>
      </turbo-boost-devtool>
    `,s)}function B(e){return s?s.enabledDevtools[e]:!1}var H={enabled:B,register:O,start:E,stop:b,restart:L,get started(){return u()},get stopped(){return w()}};var{restart:W,start:F,stop:P}=H;var it={restart:W,start:F,stop:P};export{it as default,H as supervisor};
//# sourceMappingURL=devtools.js.map
