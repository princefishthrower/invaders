export default function (s) {
    s.props = {} // as a safety for when props is not defiend
    s.onSetAppState = () => {}
    var sz = 15; // space invader size - 15 blocks
    var step = sz/5; // = 3
    var padding = (sz/2); // = 7.5
    var mx,my;
    let number = 0;
    const aColors = [s.color(132, 94, 194), s.color(214, 93, 177), s.color(255, 111, 145), s.color(255, 150, 113), s.color(255, 199, 95), s.color(249, 248, 113), s.color(44, 115, 210), s.color(0, 142, 155), s.color(0, 143, 122), s.color(155, 222, 126), s.color(75, 188, 142), s.color(3, 149, 144), s.color(28, 110, 125), s.color(47, 82, 107), s.color(26, 36, 120)]
    const oBackgroundColor = s.color(0,0,0);
    s.setup = function() {
      let iMaxInvaders = s.props.data.length;
      mx = ((s.props.canvasWidth - (2*padding))/(sz+padding)); // num invaders per row
      if (s.props.canvasWidth >= 690) {
        my = Math.ceil(iMaxInvaders / mx)*(sz+padding) + padding; // the number of rows (y distance) is the total number of invaders, divided by invaders per row, times padding!
      } else {
        my = Math.ceil(iMaxInvaders / mx)*(sz+(1.3*padding)); // the number of rows (y distance) is the total number of invaders, divided by invaders per row, times padding!
      }
      s.createCanvas(padding+mx*(sz+padding), my);
      s.background(oBackgroundColor);
      s.stroke(0);
      let invaders = [];
      for (var y = padding; y < s.height-2*padding; y += (sz+padding)) {
        for (var x = padding; x < s.width-2*padding; x += (sz+padding)) {  
          if (number < iMaxInvaders) {
            var invader = new Invader(x, y, number);
            number = number + 1
            invaders.push(invader);
          }
        }
      }
      number = 0;
      for (var i=0; i < invaders.length;i++) {
        if (number < iMaxInvaders) {
          invaders[i].display();
        }
      }
    }
    class Invader {
      constructor(_x, _y, _number) {
        this.x = _x;
        this.y = _y;
        this.number = _number;
        this.col = new Array(sz);
        for(var i = 0; i < sz; i++) {
          this.col[i] = new Array(sz);
        }
        var position = 0;
        for (var j = 0; j < sz; j+=step) {
          var m = 1;
          for (var k = 0; k < sz / 2; k+=step) {
            this.c = (s.props.data[this.number].block_string.charAt(position) === "1") ? aColors[s.props.data[this.number].rank - 1] : oBackgroundColor;  // either filled with rank color or white
            position = position + 1;
            this.col[j][k] = this.c;
            this.col[j][k+(sz-step)/m] = this.c;
            m++;
          }
        }
      }

      display() {
        s.fill(this.c);
        s.stroke(this.c);
        for (var j = 0;j<sz; j+=step) {
          for (var i = 0;i<sz; i+= step) {
            s.fill(this.col[j][i]);
            s.noStroke();
            s.rect(this.x + i, this.y + j, step, step);
          }
        }
      }
    }
}

