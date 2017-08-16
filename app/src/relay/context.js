import { EventEmitter } from 'events'

class _Context extends EventEmitter {
  constructor () {
    super()
    this.hasBooted = false
  }

  bootFinished() {
    this.hasBooted = true
  }
}

const Context = new _Context()
export default Context