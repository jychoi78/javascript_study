var coke = {
  price: 500,
  total: 10
}

var cider = {
  price: 300,
  total: 20
}

var juice = {
  price: 200,
  total: 10
}

var vending = {
  coin: 0,
  price: 0,
  sumPrice: 0,
  orderTotal: "",
  inputMoney: function(coin) {
    this.coin = coin;
    console.log(this.coin + '투입됐습니다.');
  },
  drinkSelect: function(drink,num) {
    if (drink == '콜라') {
      coke.total = coke.total - num;
      this.price = num * coke.price;
      this.sumPrice = this.sumPrice + this.price;
      this.orderResult = '콜라' + num + '개' + '가격' + this.price;
      this.orderTotal = this.orderTotal + this.orderResult;
      console.log(this.orderResult);
      console.log(this.sumPrice);
    }
    else if (drink == '사이다') {
      cider.total = cider.total - num;
      this.price = num * cider.price;
      this.sumPrice = this.sumPrice + this.price;
      this.orderResult = '콜라' + num + '개' + '가격' + this.price;
      this.orderTotal = this.orderTotal + this.orderResult;
      console.log(this.orderResult);
      console.log(this.sumPrice);
    }
    else if (drink == '쥬스') {
      juice.total = juice.total - num;
      this.price = num * juice.price;
      this.sumPrice = this.sumPrice + this.price;
      this.orderResult = '콜라' + num + '개' + '가격' + this.price;
      this.orderTotal = this.orderTotal + this.orderResult;
      console.log(this.orderResult);
      console.log(this.sumPrice);
    }
    else {
      console.log('해당 음료가 없습니다.')
    };
  },
  drinkOrder: function() {
    var totalsum = this.coin - this.sumPrice;
    if (this.coin < this.price) {
      console.log('금액이 부족합니다.')
    }
    else if (this.coin == 0) {
      console.log('금액을 투입해주세요.')
    }
    else {
      console.log(this.orderTotal);
      console.log('거스름돈' + totalsum)
    }
  },
  status: function() {
    console.log('남은 콜라 갯수' + coke.total);
    console.log('남은 사이다 갯수' + cider.total);
    console.log('남은 쥬스 갯수' + juice.total);
  }
}
