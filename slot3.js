var cokelist = ['coke1','coke2','coke3','coke4','coke5'];
var ciderlist = ['cider1','cider2','cider3','cider4','cider5']
var juicelist = ['juice1','juice2','juice3','juice4','juice5']

function inputcash () {
  var usercash = document.getElementById('cash').value; // 입력 금액
  console.log(usercash)
}//인풋에 입력된 값

var cokesum = 0; //콜라 초기 개수
var cidersum = 0; //사이다 초기 개수
var juicesum = 0; //쥬스 초기 개수

function cokecount () {
  cokesum = cokesum + 1; //콜라 구입개수
  coketotal = cokesum * 300; // 콜라 구입가격
  var goods = cokelist.pop();
  var lastgoods = cokelist.length;
  if(0<lastgoods) {
    console.log(goods);
    console.log(lastgoods+'개의 콜라가 남았습니다.');
  } else {
    console.log('콜라가 품절되었습니다.');
  } // 콜라
}

function cidercount () {
  cidersum = cidersum + 1; //사이다 구입개수
  cidertotal = cidersum * 400; //사이다 구입가격
  var goods = ciderlist.pop();
  var lastgoods = ciderlist.length;
  if(0<lastgoods) {
    console.log(goods);
    console.log(lastgoods+'개의 사이다가 남았습니다.');
  } else {
    console.log('사이다가 품절되었습니다.');
  }
} //사이다

function juicecount () {
  juicesum = juicesum + 1; //쥬스 구입개수
  juicetotal = juicesum * 500; //쥬스 구입가격
  var goods = juicelist.pop();
  var lastgoods = juicelist.length;
  if(0<lastgoods) {
    console.log(goods);
    console.log(lastgoods+'개의 쥬스가 남았습니다.');
  } else {
    console.log('쥬스가 품절되었습니다.');
  }
} //쥬스

function calculation () {
  var usercash = document.getElementById('cash').value; //입력 금액
  var coke = cokesum * 300;
  var cider = cidersum * 400;
  var juice = juicesum * 500;
  var allsum = coke + cider + juice;
  var totalcash = usercash - allsum;
  if (usercash < allsum) {
    console.log('잔액이 부족합니다.');
  }
  else if(usercash == '') {
    console.log('금액을 투입해 주세요.');
  } // 왜 작동 안할까요?????
  else {
    console.log('총액은' + allsum + '입니다.');
    console.log('잔액은' + totalcash + '입니다.');
  }
} //계산방식
