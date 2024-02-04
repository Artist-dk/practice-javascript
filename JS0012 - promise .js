// Promises

function getData(data, getNextData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data: ", data)
      if(getNextData) {
        getNextData()
      }
    }, 2000);
  })
}

let promise = getData(123)
console.log(promise)