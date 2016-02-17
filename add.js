/*function addRecursive(num) {
  if (num === 1) {
    return 1;
  }
  return num + addRecursive(num -1);
}

var result = addRecursive(10);
console.log(result);*/

/*for (i=0; i<=10; i++) {
  var sum = i+i;
  console.log(sum);
}*/

//console.log(sum);

/*for(inc=0,sum=0;inc<=100;inc++)
{
 sum=sum+inc
}

console.log(sum);*/

/*위의 예제는 inc,sum 이라는 변수의 초기값을 0 으로 할당하고,
inc 가 100 보다 작거나 같을 때까지 inc를 1 씩 증가시키고,

 sum 은 sum 에 증가된 int 를 더해서 다시 할당해주고 있습니다.
 결국 1씩 증가된 값들이 합해져서 합계를 계산해 줍니다.
*/


for(sum=0,i=0; i<=10; i++)
  {
    var sum = sum + i; /*1+1, 2+2, 3+3, 4+4, 5+5*/
    console.log(sum);
  }

console.log(sum);
