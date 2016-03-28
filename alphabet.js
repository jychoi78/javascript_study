var set = []
var countset = []

//버튼 누를때마다 리셋 ?? 하는 방법은??
function array () {
  var alp = document.getElementById('alphabet').value;

  for (i=0; i<alp.length; i++) {
    var userset = alp.charCodeAt(i); //input에 입력된 알파벳 숫자로 변환
    set.push(userset); // set에 배열로 밀어 넣기
  }
  console.log("인풋입력값 : " + set); //set호출

  for (k=0; k<set.length; k++) {
    for (j=0; j<set.length; j++) {
      var first = set[j];
      var second = set[j + 1];
        if (second < first) { // 첫번째 숫자가 두번째 숫자보다 높으면
          var temp = set[j]; // temp는 set배열에 첫번재 숫자를 넣는다.
          set[j] = set[j + 1]; // 첫번째 숫자와 두번째 숫자는 같다 ???
          set[j + 1] = temp; // temp에 두번재 숫자를 담는다.
        }
    }
  }
  console.log("정렬된값 : " + set);

  for (m=0; m<set.length; m++) {
    var number = set[m];
    var res = String.fromCharCode(number);
    countset.push(res);
  }
  console.log(countset);

  for (n=0; n<countset.length; n++) {
    var pull = countset[n];
    console.log(pull)
  }
}
