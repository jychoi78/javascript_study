var restaurant = ["음식점1", "음식점2", "음식점3", "음식점4", "음식점5", "음식점6", "음식점7", "음식점8", "음식점9", "음식점10"]

function shuffle () {
  var count = restaurant.length;
  var ran = parseInt(Math.random() * restaurant.length);
  var choice = restaurant[ran];
  var deduct = restaurant.splice(ran,1);
  var insert = restaurant.push(choice);

  if (ran <= count) {
    console.log(choice);
    return choice;
  }

  else if (choice == choice) { // 앞에 값과 비교
    console.log('같은곳입니다.');
  }
}
