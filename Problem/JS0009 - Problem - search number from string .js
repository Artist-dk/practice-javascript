// Date: 16 jan 2024
// search numbers from string: "Hello123world12js3"

var inputString = "Hello123world12js3";
var numbers = inputString.match(/\d+/g);

if (numbers) {
  console.log(numbers.join(' '));
} else {
  console.log('No numbers found in the string.');
}
