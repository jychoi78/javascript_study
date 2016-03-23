var randomLoc = Math.floor(Math.random()*10);
var num = randomLoc % 2;
var even = num >= 1; // 홀수
var odd = num == 0; // 짝수
console.log(randomLoc);
console.log(num);

function evenodd() {
  var result;
  if (randomLoc == 0) {
    console.log('정수');
    result = '정수';
  } else if (num >= 1) {
    //console.log('홀수');
    result = '홀수';
  } else if (num == 0) {
    //console.log('짝수');
    result = '짝수';
  }
  else {
    console.log('형식에 맞지 않습니다.');
  }
  return result;
}

console.log(evenodd())

function guess () {
  var result = evenodd();
  var useranswer = document.getElementById('number').value;
  if (useranswer == '홀수' || useranswer == '짝수' ) {
    if (result == useranswer) {
      console.log('정답입니다.')
    } else {
      console.log('틀렸습니다.')
    }
  } else {
    console.log('형식에 맞지 않습니다.')
  }
}
