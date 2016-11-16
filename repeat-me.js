function RepeatMe(callbackFunction, timeout, maxCalls) {
    let calledCount = 0
    let runner = null
    let isRunning = false

    const callback = callbackFunction
    const maxCallCount = maxCalls || Infinity

    const call = () => {
        if (calledCount >= maxCallCount) {
            this.stop()
            return
        }
        callback(calledCount)
        calledCount += 1
    }

    this.start = () => {
        if (!isRunning) {
            isRunning = true
            call()
            runner = setInterval(call, timeout)
        }
    }

    this.stop = () => {
        if (isRunning) {
            isRunning = false
            clearInterval(runner)
        }
    }

    this.getCalledCount = () => calledCount

    this.start()
}

module.exports = RepeatMe
