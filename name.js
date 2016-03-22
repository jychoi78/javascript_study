function inputname () {
  var name = document.getElementById('username').value; // value값을 배열로 받는 방법이 있나요????
  var names = name.slice(0,-1)
  var fullnames = names + '*';
  console.log(fullnames)
}
