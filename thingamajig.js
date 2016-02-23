// clunk에서 넘겨 받은 숫자를 times에 넣어준다.
function clunk (times) {
  var num = times;
  while (num > 0) { // clunk에서 넘겨 받은 숫자가 0보다 크면
    display("철컥"); // 콘솔에 철컥을 찍어준다.
    num = num - 1; // 숫자를 하나씩 줄이면서 계속 진행한다.
    clunkCounter = clunkCounter + 1; // clunkCounter는 초기값을 어디서 받아오나요? thingamajing 함수에 있는 초기값을 가져올수 있는건가요?
  }
}

//thingamajig(); 괄호 안에 숫자가 0이면 찰칵, 1이면 쿵, 1이상의 숫자면 계속 곱한 결과 값을 clunk 함수에 넘긴다.
function thingamajig (size) {
  var facky = 1;
  clunkCounter = 0; // 변수 선언한건가요?? var를 안붙여도 되나요?
  if (size == 0) {
    display("찰칵");
  }

  else if (size == 1) {
    display("쿵");
  }

  else {
    while (size > 1) {
      facky = facky * size ; // facky = 1 * 6 * 5 * 4 * 3 * 2 * 1
      size = size - 1 ; // size = 5, 4, 3, 2, 1
      alert(facky);
    }
    clunk(facky);
  }
}

// 콘솔에 로그를 찍는다.
function display (output) {
  console.log (output);
}

//var clunkCounter = 0;
thingamajig(6);
display(clunkCounter);
//console.log(clunkCounter);
