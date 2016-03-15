var randomLoc = Math.floor(Math.random()*10);
var num = randomLoc % 2;

function sum() {
  if (num < 1) {
    console.log("짝수")
  }
  else {
    console.log("홀수")
  }
}

console.log(randomLoc);
console.log(sum());
