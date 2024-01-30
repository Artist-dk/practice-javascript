// Palindrome Checker

// "A man, a plan, a canal, Panama!"

var s = "A man, a plan, a canal, Panama!";
var s = 11011
s = s.toString()

var punctuationless = s.replaceAll(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
s = punctuationless.replaceAll(/\s{2,}/g," ");
s = s.replaceAll(" ","")

s = s.toUpperCase();

var initial = s
s = s.split("")
s = s.reverse()
s = s.toString()
s = s.replaceAll(",","")

if(initial === s) console.log("\""+s+"\" is a palindrome.") 
else console.log("\""+s+"\" is not palindome.")
