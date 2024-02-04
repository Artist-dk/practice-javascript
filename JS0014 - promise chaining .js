// Promises

function getData(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data",data)
      resolve("success")
    }, 2000)
  })
}

getData(1)
.then((res) => {
  return getData(2);
})
.then((res) => {
  return getData(3)
})
.then((res) => {
  console.log(res)
})