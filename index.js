const RepeatMe = require('./repeat-me')

const timeout = 1000 // 1 second
const maxCalls = 5 // Max number of calls to repeat function (Default: Infinity)
const logCount = count => console.log(count)
const repeater = new RepeatMe(logCount, timeout, maxCalls)

const stop = () => repeater.stop()
const start = () => repeater.start()
const count = () => console.log(repeater.getCalledCount())

setTimeout(stop, 1000)
setTimeout(stop, 1800)
setTimeout(start, 3300)
setTimeout(count, 8300)
