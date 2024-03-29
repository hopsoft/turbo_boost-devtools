// Icons courtesy of https://feathericons.com/
import supervisor from './supervisor'
import { appendHTML, addHighlight, attempt, coordinates, removeHighlight } from './utils/dom.js'

function appendTooltip(title, subtitle, content, options = {}) {
  let { backgroundColor, color, position, id } = options
  color = color || 'white'
  position = position || 'top'
  return appendHTML(`
    <turbo-boost-devtool-tooltip id="${id}" position="${position}" background-color="${backgroundColor}" color="${color}">
      <div slot='title'>${title}</div>
      <div slot='subtitle'>${subtitle}</div>
      ${content}
    </turbo-boost-devtool-tooltip>
  `)
}

let activeTarget

export default class Devtool {
  constructor(delegate) {
    this.delegate = delegate

    let hideTimeout
    const debouncedHide = () => {
      clearTimeout(hideTimeout)
      hideTimeout = setTimeout(this.hide({ active: false }), 25)
    }

    this.eventListeners['turbo-boost:devtool-enable'] = event => {
      // LeaderLine.positionByWindowResize = false
      const { name } = event.detail
      if (name !== this.delegate.name) return

      addHighlight(this.delegate.triggerElement, {
        outline: '3px dashed blueviolet',
        outlineOffset: '2px'
      })

      this.hide({ active: false })
      if (this.active) this.show()
    }

    this.eventListeners['turbo-boost:devtool-disable'] = event => {
      const { name } = event.detail
      if (name === this.delegate.name) removeHighlight(this.delegate.triggerElement)
    }

    this.eventListeners['click'] = event => {
      if (event.target.closest('turbo-boost-devtool-tooltip')) return
      debouncedHide()
    }

    this.eventListeners['turbo:load'] = debouncedHide
    this.eventListeners['turbo-frame:load'] = debouncedHide
    if (window.TurboBoost) {
      this.eventListeners[TurboBoost.Commands.events.finish] = debouncedHide
    }

    this.registerEventListeners()
  }

  registerEventListeners() {
    Object.entries(this.eventListeners).forEach(([type, listener]) => {
      addEventListener(type, listener)
    })
  }

  unregisterEventListeners() {
    Object.entries(this.eventListeners).forEach(([type, listener]) => {
      removeEventListener(type, listener)
    })
  }

  get eventListeners() {
    return this._eventListeners || (this._eventListeners = {})
  }

  show() {
    if (!this.enabled) return

    if (this.active) return
    this.active = true

    this.hide({ active: true })

    addHighlight(this.delegate.targetElement, {
      outline: '3px dashed darkcyan',
      outlineOffset: '-2px'
    })

    addHighlight(this.delegate.morphElement, {
      outline: '3px dashed chocolate',
      outlineOffset: '3px'
    })

    this.renderingTooltip = this.createRenderingTooltip()
    this.targetTooltip = this.createTargetTooltip()
    this.triggerTooltip = this.createTriggerTooltip(this.targetTooltip, this.renderingTooltip)

    document.querySelectorAll('.leader-line').forEach(el => (el.style.zIndex = 100000))

    const data = {
      morph: {
        partial: this.delegate.triggerElement.renders,
        id: this.delegate.triggerElement.morphs,
        status: this.delegate.morphElement ? 'OK' : 'Not Found'
      },
      trigger: { partial: null, id: null, status: 'Not Found' },
      target: { partial: null, id: null, status: 'Not Found' }
    }

    if (this.delegate.triggerElement) {
      data.trigger = {
        partial: this.delegate.triggerElement.partial,
        id: this.delegate.triggerElement.id,
        status: 'OK'
      }
      data.target.id = this.delegate.triggerElement.controls
    }

    if (this.delegate.targetElement)
      data.target = {
        partial: this.delegate.targetElement.partial,
        dom_id: this.delegate.targetElement.id,
        status: 'OK'
      }

    console.table(data)
  }

  hide({ active: active = false }) {
    document.querySelectorAll('turbo-boost-devtool-tooltip').forEach(tooltip => {
      attempt(() => tooltip.line.remove())
      attempt(() => tooltip.drag.remove())
      attempt(() => tooltip.lineToRendering.remove())
      attempt(() => tooltip.lineToTarget.remove())
      attempt(() => tooltip.remove())
    })

    document.querySelectorAll('[data-turbo-boost-highlight]').forEach(el => {
      if (!el.tagName.match(/turbo-boost-toggle-trigger/i)) removeHighlight(el)
    })

    this.active = active
  }

  get active() {
    return activeTarget === this.delegate
  }

  set active(value) {
    if (value) activeTarget = this.delegate
    else activeTarget = null
  }

  get enabled() {
    return supervisor.enabled(this.delegate.name)
  }

  static register(name, label) {
    supervisor.register(name, label)
  }

  createRenderingTooltip() {
    if (!this.delegate.triggerElement.renders)
      return console.debug(
        `Unable to create the rendering tooltip! The trigger element must set the 'renders' attribute.`
      )

    if (!this.delegate.triggerElement.morphs)
      return console.debug(
        `Unable to create the rendering tooltip! The trigger element specified the 'morphs' attrbiute but no element matches the DOM id: '${this.triggerElement.morphs}'`
      )

    const title = `
      <svg xmlns="http://www.w3.org/2000/svg" style="display:inline-block;" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>
      RENDERING - &lt;${this.delegate.triggerElement.tagName.toLowerCase()}&gt;
    `
    const subtitle = `
      <b>partial</b>: ${this.delegate.triggerElement.renders || 'unknown'}<br>
      <b>morphs</b>: ${this.delegate.triggerElement.morphs || 'unknown'}<br>
    `
    const content = `
      <div slot="content-top" style="font-size:85%; font-style:italic; font-weight:100;">
        The <b>TRIGGER</b> toggles the <b>TARGET</b> then renders the partial &amp; morphs the element.<br>
      </div>
    `
    const tooltip = appendTooltip(title, subtitle, content, {
      id: `${this.delegate.id}-rendering`,
      backgroundColor: 'lightyellow',
      color: 'chocolate'
    })

    const coords = coordinates(this.delegate.morphElement)
    const top = Math.ceil(coords.top + coords.height / 2 - tooltip.offsetHeight / 2)
    const left = Math.ceil(coords.left + coords.width + 100)
    tooltip.style.top = `${top}px`
    tooltip.style.left = `${left}px`

    tooltip.line = new LeaderLine(tooltip, this.delegate.morphElement, {
      ...this.leaderLineOptions,
      color: 'chocolate'
    })

    tooltip.drag = new PlainDraggable(tooltip)
    return tooltip
  }

  createTargetTooltip() {
    if (!this.delegate.targetElement)
      return console.debug(
        `Unable to create the target tooltip! No element matches the DOM id: '${this.delegate.triggerElement.controls}'`
      )

    const title = `
      <svg xmlns="http://www.w3.org/2000/svg" style="display:inline-block;" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
      TARGET - &lt;${this.delegate.targetElement.tagName.toLowerCase()}&gt;
    `

    const tooltip = appendTooltip(
      title,
      this.delegate.targetTooltipData?.subtitle || '',
      this.delegate.targetTooltipData?.content || '',
      {
        id: `${this.delegate.id}-target`,
        backgroundColor: 'lightcyan',
        color: 'darkcyan',
        position: 'bottom'
      }
    )

    const coords = coordinates(this.delegate.targetElement)
    const top = Math.ceil(coords.top + tooltip.offsetHeight)
    const left = Math.ceil(coords.left + coords.width + tooltip.offsetWidth / 3)
    tooltip.style.top = `${top}px`
    tooltip.style.left = `${left}px`

    tooltip.line = new LeaderLine(tooltip, this.delegate.targetElement, {
      ...this.leaderLineOptions,
      color: 'darkcyan'
    })

    tooltip.drag = new PlainDraggable(tooltip)
    return tooltip
  }

  createTriggerTooltip(targetTooltip, renderingTooltip) {
    if (!this.delegate.triggerElement) return
    const title = `
      <svg xmlns="http://www.w3.org/2000/svg" style="display:inline;" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
      TRIGGER - &lt;${this.delegate.triggerElement.tagName.toLowerCase()}&gt;
    `

    const tooltip = appendTooltip(
      title,
      this.delegate.triggerTooltipData?.subtitle || '',
      this.delegate.triggerTooltipData?.content || '',
      {
        id: `${this.delegate.id}-trigger`,
        backgroundColor: 'lavender',
        color: 'blueviolet'
      }
    )

    const coords = coordinates(this.delegate.triggerElement)
    const top = Math.ceil(coords.top - tooltip.offsetHeight * 2)
    const left = Math.ceil(coords.left + coords.width + tooltip.offsetWidth / 3)
    tooltip.style.top = `${top}px`
    tooltip.style.left = `${left}px`

    tooltip.line = new LeaderLine(this.delegate.triggerElement, tooltip, {
      ...this.leaderLineOptions,
      color: 'blueviolet'
    })

    if (targetTooltip) {
      tooltip.lineToTarget = new LeaderLine(tooltip, targetTooltip, {
        ...this.leaderLineOptions,
        color: 'blueviolet',
        middleLabel: this.delegate.targetLineLabel,
        size: 2.1
      })

      targetTooltip.drag.onMove = () => {
        targetTooltip.line.position()
        tooltip.lineToTarget?.position()
        tooltip.lineToRendering?.position()
      }
    }

    if (renderingTooltip) {
      tooltip.lineToRendering = new LeaderLine(tooltip, renderingTooltip, {
        ...this.leaderLineOptions,
        color: 'blueviolet',
        middleLabel: this.delegate.renderingLineLabel,
        size: 2.1
      })

      renderingTooltip.drag.onMove = () => {
        renderingTooltip.line.position()
        if (tooltip.lineToTarget) tooltip.lineToTarget.position()
        tooltip.lineToRendering?.position()
      }
    }

    tooltip.drag = new PlainDraggable(tooltip)
    tooltip.drag.onMove = () => {
      tooltip.line.position()
      if (tooltip.lineToTarget) tooltip.lineToTarget.position()
      if (tooltip.lineToRendering) tooltip.lineToRendering.position()
    }

    return tooltip
  }

  get leaderLineOptions() {
    return {
      dash: { animation: true },
      dropShadow: { opacity: 0.3 },
      endPlug: 'arrow3',
      endPlugSize: 1.7,
      size: 3,
      startPlug: 'disc',
      startPlugSize: 1
    }
  }
}
