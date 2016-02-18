// 내가 이기면 게임 종료

var randomLoc = Math.floor(Math.random()*3);
var userChoice = prompt("가위! 바위! 보!");

// prompt창의 입력값을 userAnser로 반환
function userAnswer() {
  return userChoice;
}

// 입력 문자열을 숫자로 변환
if (userChoice == "가위") {
  userChoice = 0;
}
else if (userChoice == "바위") {
  userChoice = 1;
}
else if (userChoice == "보") {
  userChoice = 2;
}
else {
  alert("형식이 올바르지 않습니다.");
}

// 입력값 비교 가위,바위,보
if (randomLoc == userAnswer()) {
  alert ("same");
}
else if (randomLoc < userAnswer()) {
  alert ("win");
}
else if (randomLoc > userAnswer()) {
  alert ("lose");
}
else {
}

//랜덤으로 뿌려주는 값
console.log(randomLoc);

//사용자가 prompt창에 입력한 값
console.log(userAnswer());
