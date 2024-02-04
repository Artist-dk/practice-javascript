const url = "https://jgentes-crime-data-v1.p.rapidapi.com/crime"
const getFacts = async () => {
  console.log("getting data...")
  let response = await fetch(url)
  console.log(response.body)
}
getFacts();