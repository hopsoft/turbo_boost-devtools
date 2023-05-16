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

  Object.defineProperties(element, {
    // the element references below are defaults to be overriden if necessary
    triggerElement: {
      get () {
        return element
      }
    },

    morphElement: {
      get () {
        return element
      }
    },

    targetElement: {
      get () {
        return element
      }
    }
  })
}

export { Devtool, decorateElementWithDevtool }

export default { restart, start, stop }
