import supervisor from './supervisor'
import Devtool from './devtool'

const { restart, start, stop } = supervisor

export { Devtool }

export default { restart, start, stop }
