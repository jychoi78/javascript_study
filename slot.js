function inputcash () {
  var usercash = document.getElementById('cash').value; // 입력 금액
  console.log(usercash)
}

var cokesum = 0; //콜라 초기 개수
var cidersum = 0; //사이다 초기 개수
var juicesum = 0; //쥬스 초기 개수

function cokecount () {
  cokesum = cokesum + 1; //콜라 구입개수
  coketotal = cokesum * 300; // 콜라 구입가격
  console.log('콜라' + cokesum);
  console.log(coketotal);
}

function cidercount () {
  cidersum = cidersum + 1; //사이다 구입개수
  cidertotal = cidersum * 400; //사이다 구입가격
  console.log('사이다' + cidersum);
  console.log(cidertotal);
}

function juicecount () {
  juicesum = juicesum + 1; //쥬스 구입개수
  juicetotal = juicesum * 500; //쥬스 구입가격
  console.log('쥬스' + juicesum);
  console.log(juicetotal);
}

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
  else {
    console.log('잔액은' + totalcash + '입니다.');
  }
}
