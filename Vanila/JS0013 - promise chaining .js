// Promises
function asyncFun1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data1")
      resolve("success")
    }, 4000);
  })
}
function asyncFun2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data2")
      resolve("success")
    }, 4000);
  })
}

// promises chaining
console.log("Fetching data1");
let p1 = asyncFun1();
p1.then((res) => {
  console.log(res)
  console.log("Fetching data2");
  let p2 = asyncFun1();
  p2.then((res1) => {
    console.log(res1)
  })
})
