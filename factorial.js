/*var num = 1;

for(i=5; 0<i; i--) {
  num = num*i;
  1 = 1*5
  5 = 5*4
  20 = 20*3
  60 = 60*2
  120 = 120*1
}

console.log(num);*/

function factorial(n) {
  var num = 1;

  for (i=n; 0<i; i--) {
    num = num * i;
    /*1 = 1 * 5
    5 = 5 * 4
    20 = 20 * 3
    60 = 60 * 2
    120 = 120 * 1*/
  }

  return num;
}

console.log(factorial(5));
