
function getData(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data",data)
      resolve("success")
    }, 2000)
  })
}

// async - await

async function getAllData() {
  console.log("getting all data...")
  await getData(1)
  await getData(2)
  await getData(3)
  await getData(4)
  await getData(5)
}

getAllData();