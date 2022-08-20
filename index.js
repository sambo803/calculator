/* global Vue */

var App = {
  data: function () {
    return {
      message: "Hello Vue!!",
      number1: 2,
      number2: 3,
      number3: 4,
      result: 0
    };
  },
  methods: {
    computeSum: function () {
      console.log('in computing sum..');
      console.log(this.number1 + this.number2 + this.number3);
      this.result = parseInt(this.number1) + parseInt(this.number2) + parseInt(this.number3);
    }
    // var sum = 0;
    // sum = number1 + number2 + number3;


  }

};

// computeSum;


Vue.createApp(App).mount('#app');

// console.log('hellloooo');

// window.prompt('will this work?');