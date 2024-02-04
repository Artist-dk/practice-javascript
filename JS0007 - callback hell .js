// Callback Hell

function getData(data, getNextData) {
  setTimeout(() => {
    console.log("data",data)
    if(getNextData) {
      getNextData()
    }
  }, 2000)
}
// getData(1)
// getData(2)
// getData(3)

getData(1, () => {
  getData(2, ()=>{
    getData(3, ()=> {
      getData(4)
    })
  })
})