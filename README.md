# repeat-me

Simple repeater (JavaScript).

```js
const RepeatMe = require('./repeat-me')

const timeout = 100 // 0.1 second
const maxCount = 5  // Max number of calls to repeat function (Default: Infinity)
const repeatFn = currentCount => console.log(currentCount)

// Start the repeat function
const repeater = new RepeatMe(repeatFn, timeout, maxCount)

repeater.stop()  // stop the repeater if you want to
repeater.start() // start it again

// get the current number of calls to repeat function
repeater.getCalledCount()
```
