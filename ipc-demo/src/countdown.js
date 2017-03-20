module.exports = function countdown(tick) { // the count will come from the tick function
  let count = 3;

  let timer = setInterval(_ => {
    tick(count--);                          // when coundown is decremented we'll send it to callback function
//  console.log("count", count)
    if (count === -1)
      clearInterval(timer)
  }, 1000)
}
