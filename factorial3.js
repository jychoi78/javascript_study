function factorial(){
  var num = document.getElementById('username').value;
  if(num == 1){
    return num;
  }
  else{
    return num * factorial(num-1);
  }
  console.log(num);
}
