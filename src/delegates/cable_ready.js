import devtools from '..'
import { Devtool, decorateElementWithDevtool } from '..'

function defineTooltipData(element) {
  Object.defineProperties(element, {
    targetTooltipData: {
      get() {
        return {
          subtitle: `
            <b>identifier</b>: ${element.identifier}<br>
            <b>query</b>: ${element.query}
          `,
          content: `
            <div slot="content-top">
              <svg xmlns="http://www.w3.org/2000/svg" style="display:inline-block;" width="16" height="16" viewbox="0 0 24 24" fill="none" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
              <b>element log</b>
            </div>
            ${element.targetElementLog.queue
              .slice(-10)
              .map(logEntry => `<div slot="content">${logEntry}</div>`)
              .join('')}
          `
        }
      }
    },

    triggerTooltipData: {
      get() {
        return {
          subtitle: `
            <b>identifier</b>: ${this.identifier}<br>
            <b>only</b>: ${this.getAttribute('only') || ''}<br>
            <b>url</b>: ${this.getAttribute('url') || location.href}<br>
            <b>debounce (client-side)</b>: ${this.debounce}<br>
            <b>ignore-inner-updates</b>: ${this.hasAttribute('ignore-inner-updates')}
          `,
          content: `
            <div slot="content-top">
              <svg xmlns="http://www.w3.org/2000/svg" style="display:inline-block;" width="16" height="16" viewbox="0 0 24 24" fill="none" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
              <b>element log</b>
            </div>
            ${element.triggerElementLog.queue
              .slice(-10)
              .map(logEntry => `<div slot="content">${logEntry}</div>`)
              .join('')}
          `
        }
      }
    }
  })
}

function initialize() {
  document.addEventListener('turbo-boost:devtools-start', () =>
    Devtool.register('updates-for', 'updates-for')
  )

  window.CableReady.devtools = devtools

  document.addEventListener('turbo:load', () => {
    document.querySelectorAll('updates-for').forEach(element => {
      decorateElementWithDevtool(element, 'updates-for', 'updates')
      defineTooltipData(element)
      element.initializeDevtool()
    })

    document.querySelectorAll('cable-ready-updates-for').forEach(element => {
      decorateElementWithDevtool(element, 'updates-for', 'updates')
      defineTooltipData(element)
      element.initializeDevtool()
    })

    CableReady.devtools.start()
  })
}

initialize()
