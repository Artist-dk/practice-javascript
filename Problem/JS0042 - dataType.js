
// Type Conversion:
// Convert a string "123" into a number and a number 123 into a string. Validate the conversions using typeof.

var str_a = "123"
var num_a = Number(str_a)

if(typeof num_a == 'number') console.log("type of num_a is Number")
else console.log("type of num_a is not Number")