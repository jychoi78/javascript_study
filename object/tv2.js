var tvChannel = {
    num: [
      {
        number: 6,
        label: 'sbs 입니다.'
      },
      {
        number: 7,
        label: 'kbs2 입니다.'
      },
      {
        number: 9,
        label: 'kbs1 입니다.'
      },
      {
        number: 11,
        label: 'mbc 입니다.'
      }
    ]
}

var tv = {
  on: false,
  channel:"",
  sound:"",
  tvOn: function() {
    this.on = true;
    this.channel = tvChannel.num[0].number;
    this.label = tvChannel.num[0].label;
    this.sound = 5;
    this.status();
  },
  tvOff: function() {
    this.off = false;
    this.status();
  },
  channelUp: function() {
    for (i=0; i<=tvChannel.num.length; i++) {
      if (tv.channel == tvChannel.num[i].number) {
        tv.channel = tvChannel.num[i+1].number;
        console.log(tv.channel);
        return;
      }
    }
  },
  channelDown: function() {
    for (i=0; i<=tvChannel.num.length; i++) {
      if (tv.channel == tvChannel.num[i].number) {
        tv.channel = tvChannel.num[i-1].number;
        console.log(tv.channel);
        return;
      }
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
      console.log('티브가 켜졌습니다.' + '현재채널:' + this.channel + '볼륨:' + this.sound + '입니다.');
    } else {
      console.log('티브가 꺼졌습니다.')
    }
  }
}
