const RepeatMe = require('./repeat-me')

const timeout = 100 // 0.1 second
const logCount = count => console.log(count)

// Both these options are optional
const options = {
  maxCalls: 5,       // optional (default: Infinity)
  finished: logCount // optional
}
const repeater = new RepeatMe(logCount, timeout, options)

const stop = () => repeater.stop()
const start = () => repeater.start()
const count = () => console.log('Total calls:', repeater.getCalledCount())

setTimeout(stop, 1000)
setTimeout(stop, 1800)
setTimeout(start, 3300)
setTimeout(count, 8300)
