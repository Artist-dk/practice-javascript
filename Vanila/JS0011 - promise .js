// Promise

let promise = new Promise((resolve, reject) => {
  console.log("I am a promise")
  reject("some error")
  resolve("Success")
})

// .then() and .catch()
promise.then((res) => {
  console.log("promise fullfilled: ", res)
})
promise.catch((err) => {
  console.log("Rejected: ", err)
})

console.log(promise)