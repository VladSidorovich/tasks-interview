function someFn() {
  console.log(arguments)
}

Function.prototype.delay = function (timer) {
  return (...args) => {
    setTimeout(() => {
      this(args)
    }, timer)
  }
}

const function_with_delay = someFn.delay(500)

function_with_delay('1', 1, [])

