
// Array Basics:
// Write a program to create an array of numbers from 1 to 10, then find the sum of all elements.

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], sum = 0

for (i in arr) sum += arr[i]

console.log(`Sum of all elements in array is ${sum}`)