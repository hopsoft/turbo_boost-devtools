import supervisor from './supervisor'
import Devtool from './devtool'

const { restart, start, stop } = supervisor

function decorateElementWithDevtool (element, name, label) {
  Object.assign(element, {
    initializeDevtool () {
      const mouseenter = () => this.devtool.show()

      addEventListener('turbo-boost:devtools-start', () => {
        this.devtool = new Devtool(this)
        this.addEventListener('mouseenter', mouseenter)
      })

      addEventListener('turbo-boost:devtools-stop', () => {
        this.removeEventListener('mouseenter', mouseenter)
        this.removeDevtool()
      })

      this.dispatchEvent(
        new CustomEvent('turbo-boost:devtools-connect', { bubbles: true })
      )
    },
    hideDevtool () {
      this.devtool?.hide({ active: false })
    },
    removeDevtool () {
      this.devtool.hide({ active: false })
      this.devtool.unregisterEventListeners()
      delete this.devtool
    },
    name,
    targetLineLabel: label
  })

  // the element references below are defaults that are placed on the receiver if not present
  const properties = ['triggerElement', 'morphElement', 'targetElement']

  properties
    .filter(property => {
      return element[property] === undefined
    })
    .forEach(property => {
      Object.defineProperty(element, property, {
        get () {
          return element
        }
      })
    })
}

;(async () => {
  // we cannot detect customElements.get("cable-ready-updates-for") because they are lazily initialized
  if (window.CableReady) await import('./delegates/cable_ready.js')
})()

export { Devtool, decorateElementWithDevtool }

export default { restart, start, stop }
