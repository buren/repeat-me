function RepeatMe(callback, timeout, opts) {
    let calledCount = 0
    let runner = null
    let isRunning = false
    let finished = false

    const noop = () => undefined
    const finishedFn = opts.finished || noop
    const maxCalls = opts.maxCalls || Infinity

    const call = () => {
        if (calledCount >= opts.maxCalls) {
            this.stop()
            if (!finished) {
              finished = true
              finishedFn(calledCount)
            }
        } else {
          callback(calledCount)
          calledCount += 1
        }
    }

    const start = () => {
      if (!isRunning) {
          isRunning = true
          call()
          runner = setInterval(call, timeout)
      }
    }

    const stop = () => {
        isRunning = false
        clearInterval(runner)
        runner = null
    }

    this.start = start
    this.stop = stop
    this.getCalledCount = () => calledCount

    this.start()
}

module.exports = RepeatMe
