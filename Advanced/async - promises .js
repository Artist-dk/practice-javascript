
let myPromise = new Promise(function(resolve, reject){
    let x = 0;
    if(x == 0) {
        resolve("Resolved")
    } else {
        reject("Rejected")
    }
});

myPromise.then(
    function(value) {console.log(value)},
    function(error) {console.log(error)}
)
