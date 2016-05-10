var drinks = {
  kind: [
    {
      label: '콜라',
      price: 500,
      total: 10
    },
    {
      label: '사이다',
      price: 300,
      total: 10
    },
    {
      label: '쥬스',
      price: 200,
      total: 10
    }
  ]
}

var drinkorderList = []

var vending = {
  coin: 0,
  totalPrice: 0,
  sumPrice: 0,
  orderTotal: "",

  inputMoney: function(coin) {
    this.coin = coin;
    console.log(this.coin + '투입됐습니다.');
  },

  drinkSelect: function(drink,num){
    for (i=0; i<=drinks.kind.length; i++) {
      if (drink == drinks.kind[i]) {
        if (drinks.kind[i].total >= num) {
          this.totalPrice = num * drinks.kind[i].price; // 각각의 음료 가격
          this.sumPrice = this.sumPrice + this.totalPrice; // 총가격
          drinks.kind[i].total = drinks.kind[i].total - num; // 남은 음료 갯수
          this.orderResult = drinks.kind[i].label + num + '개' + '가격' + this.totalPrice;
          this.orderTotal = this.orderTotal + this.orderResult;
          var orderlistContain = drinkorderList.push(this.orderResult);
          console.log(this.orderResult);
          console.log(this.sumPrice);
        } else {
          console.log('음료가 모자랍니다.')
        }
      }
    };
  },

  drinkOrder: function() {
    var totalsum = this.coin - this.sumPrice;

    if (this.coin < this.sumPrice) {
      console.log('금액이 부족합니다.')
    }
    else if (this.coin == 0) {
      console.log('금액을 투입해주세요.')
    }
    else {
      console.log('주문 내역은' + drinkorderList)
      console.log('거스름돈은' + totalsum)
    }
  },

  status: function() {
    console.log('남은 콜라 갯수' + coke.total);
    console.log('남은 사이다 갯수' + cider.total);
    console.log('남은 쥬스 갯수' + juice.total);
  }
}
