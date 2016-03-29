var restaurant = ["음식점1", "음식점2", "음식점3", "음식점4", "음식점5", "음식점6", "음식점7", "음식점8", "음식점9", "음식점10"]
var choice = "";

function shuffle () {
  var count = restaurant.length;
  var ran = parseInt(Math.random() * restaurant.length);
  var choice2 = restaurant[ran];

  if (choice === choice2) {
    console.log('중복된 곳 입니다.');
    shuffle();
    return;
  }

  choice = choice2;

  //console.log(restaurant);
  var deduct = restaurant.splice(ran,1);
  //console.log(restaurant);
  var insert = restaurant.push(choice);
  /*console.log(restaurant);
  console.log(ran);*/
  //var aa = ran <= count;
  //var bb = choice === choice;

  if (ran <= count) {
    console.log(choice);
  }
}
