const url = "https://api.publicapis.org/entries"
const getFacts = async () => {
  console.log("getting data...")
  let response = await fetch(url)
  console.log(response.body)
  let data = await response.json();
  console.log(data)

}
getFacts();