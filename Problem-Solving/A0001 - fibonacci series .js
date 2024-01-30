// fibonacci series

var f=l=r=c=0;
var n = 10;

while(c<n) {
  f = l
  l = r
  r = f + l
  console.log(r)
  if(r<1) r++
  c++
}


/* 
0
1
1
2
3
5
8
13

 */
