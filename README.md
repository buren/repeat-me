# repeat-me

Simple JavaScript repeater.

```js
const RepeatMe = require('./repeat-me')

const timeout = 100 // 0.1 second
const logCount = count => console.log(count)

// Both these options are optional
const options = {
  maxCalls: 5,       // optional (default: Infinity)
  finished: logCount // optional
}
// Start the repeat function
const repeater = new RepeatMe(logCount, timeout, options)

repeater.stop()  // stop the repeater if you want to
repeater.start() // start it again

// get the current number of calls to repeat function
repeater.getCalledCount()
```
