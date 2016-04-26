var tv = {
  on: false,
  channelOn:"",
  sound:"",
  tvOn: function() {
    this.on = true;
    this.channelOn = "mbc입니다.";
    this.sound = 5;
    this.status();
  },
  tvOff: function() {
    this.off = false;
    this.status();
  },
  channel: function(num) {
    if(num == "11") {
      console.log("mbc 입니다.");
    } else if (num == "9") {
      console.log("kbs1 입니다.");
    } else if (num == "7") {
      console.log("kbs2 입니다.");
    } else if (num == "6") {
      console.log("sbs 입니다.");
    } else {
      console.log("없는 채널입니다.");
    }
  },
  volumUp: function() {
    this.sound = this.sound + 1;
    this.status();
  },
  volumDown: function() {
    this.sound = this.sound - 1;
    this.status();
  },
  mute: function() {
    this.status();
    console.log('음소거 상태 입니다.')
  },
  status: function() {
    if(this.on) {
      console.log('티브가 켜졌습니다.' + this.channelOn + '현재 볼륨은' + this.sound + '입니다.')
    } else {
      console.log('티브가 꺼졌습니다.')
    }
  }
}
