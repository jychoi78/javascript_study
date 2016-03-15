var scores = [60, 50, 60, 58, 54, 54,
              58, 50, 52, 54, 48, 69,
              34, 55, 51, 52, 44, 51,
              69, 64, 66, 55, 52, 61,
              46, 31, 57, 52, 44, 18,
              41, 53, 55, 61, 51, 44];

var highScore = 0;
var output;

for (i=0; i<scores.length; i++) {
  //output = "비누방울 용액 # " + i + "점수 : " + scores[i];
  //console.log(output);
  if (scores[i] > highScore) {
    /*
    60 > 0
    50 > 0
    60 > 0
    58 > 0 ......
    */
    highScore = scores[i];
    /*
    highScore = 60
    heighScore = 50
    heighScore = 60
    heighScore = 58
    결과 값이 왜 69가 나오는건지??????
    */
  }
}
console.log("비누방울 실험 횟수" + scores.length);
console.log("비누방울 최고 점수" + highScore); //왜 44(마지막이 아니고)가 아니고 69인지??? 최고값을 무엇을 기준으로 뽑아오는가??

var bestSolutions = [];
for (i=0; i<scores.length; i++) {
  if (scores[i] == highScore) {
    /*
    scores[0] == heighScore(위에서 계산한 최고값 69)
    */
    bestSolutions.push(i);
  }
}

console.log("비누방울 최고점수 번호" + bestSolutions);
