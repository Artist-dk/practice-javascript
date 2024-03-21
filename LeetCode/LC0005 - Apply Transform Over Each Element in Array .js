/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = fn(arr[i], i);
  }
  return arr
};
console.log(map([1,2,3], (n) => {return n + 1;}))
console.log(map([1,2,3], (n, i) => { return n + i; }))
console.log(map([1,2,3], () => { return 42; }))