let x;
let y;
let option = 1;
let numbers = [];
let motion = 0;
let selection = [];
let found = false;
let y1 = 254;
let x1 = 400;
let x2 = 0;
let step = 0.01;
let pct = 0;
let xFall;
let yFall;

function keyPressed() {
  print(key);
  print(typeof key);
  print(key);
  // keys 1, 2, and 3 toggle b/w cursors
  if (key === '1') {
    option = 1;
  }
  if (key === '2') {
    option = 2;
  }
  if (key === '3') {
    option = 3;
  }
  if (key === '4') {
    option = 4;
  }
  if (key === '5') {
    option = 5;
  }
  if (keyCode === BACKSPACE) { //Backspace key goes back to option 1
    option = 1;
  }
  if (keyCode === RIGHT_ARROW) { //right arrow key goes to next scene
    option = 6;
  }
  print("option is : ");
  print(option);
}


function setup() {
  createCanvas(600, 800);
  angleMode(DEGREES);

  top4Leaf = new CloverLeaf(400, 275);
  top3Leaf = new CloverLeaf(100, 175);

  selection.push(top4Leaf);

  winningValue1 = new Horseshoe(140, 182);
  winningValue2 = new LuckyCharm(300, 195);
  winningValue3 = new Wishbone(645, 205);

  winningNumber1 = new WinningNumberCovers(150, 170);
  winningNumber2 = new WinningNumberCovers(300, 170);
  winningNumber3 = new WinningNumberCovers(450, 170);

  losingNumber1 = new Ladybug(150, 370);
  winningValue4 = new LuckyCharm(300, 395);
  //winningValue5 = ThreeLeafClover(440, 382);
  winningValue6 = new LuckyCharm(150, 535);
  losingNumber2 = new Ladybug(300, 510);
  losingNumber3 = new Ladybug(450, 510);
  //winningValue7 = new Horseshoe(140, 662);
  winningValue8 = new Wishbone(430, 890);
  winningValue9 = new Horseshoe(440, 662);

  number1 = new YourNumbers(150, 370);
  number2 = new YourNumbers(300, 370);
  number3 = new YourNumbers(450, 370);
  number4 = new YourNumbers(150, 510);
  number5 = new YourNumbers(300, 510);
  number6 = new YourNumbers(450, 510);
  number7 = new YourNumbers(150, 650);
  number8 = new YourNumbers(300, 650);
  number9 = new YourNumbers(450, 650);


  numbers.push(winningNumber1);
  numbers.push(winningNumber2);
  numbers.push(winningNumber3);
  numbers.push(number1);
  numbers.push(number2);
  numbers.push(number3);
  numbers.push(number4);
  numbers.push(number5);
  numbers.push(number6);
  numbers.push(number7);
  numbers.push(number8);
  numbers.push(number9);

  xFall = 135;
  yFall = 620;
}

function doubleClicked() {
  found = true;
  frameCount = 0;
  for (let i = selection.length-1; i >= 0; i--) {
    if (selection[i].contains(mouseX, mouseY)) {
      selection.splice(i, 1);
    }
  }
}

function mousePressed() {

  for (let i = numbers.length-1; i >= 0; i--) {
    if (numbers[i].contains(mouseX, mouseY)) {
      numbers.splice(i, 1);
    }
  }
}

function draw() {
  background(0);
  noFill();
  stroke(255, 200, 45);
  strokeWeight(4);
  fill(135, 40, 30);
  rect(20, 20, 560, 760);
  noStroke();
  fill(255, 40, 30);
  rect(50, 70, 500, 200);

  losingNumber1.display();
  losingNumber2.display();
  losingNumber3.display();
  winningValue1.display();
  winningValue2.display();
  scale(0.7);
  winningValue3.display();
  scale(1.43);
  winningValue4.display();
  push();
  scale(0.7);
  ThreeLeafClover(285, 250);
  //winningValue5.display();
  pop();
  winningValue6.display();
  push();
  scale(0.7);
  ThreeLeafClover(95, 427);
  //winningValue7.display();
  pop();
  scale(0.7);
  winningValue8.display();
  scale(1.43);
  winningValue9.display();


  for (let i = 0; i < numbers.length; i++) {
    numbers[i].display();
  }

  if (option == 1) {
    for (var i = mouseX; i < 600; i+=600) {
      for (var j = mouseY; j < 800; j+=800) {
        Coin(i, j);
      }
    }
  }
  if (option == 2) {
    for (var k = mouseX; k < 600; k+=600) {
      for (var l = mouseY; l < 800; l+=800) {
        new Ladybug(k, l).display();
      }
    }
  }
  if (option == 3) {
    for (var m = mouseX; m < 600; m+=600) {
      for (var n = mouseY; n < 800; n+=800) {
        push();
        translate(0, 25);
        new LuckyCharm(m, n).display();
        pop();
      }
    }
  }
  if (option == 4) {
    for (var o = mouseX; o < 600; o+=600) {
      for (var p = mouseY; p < 800; p+=800) {
        push();
        translate(-8, 0);
        new Horseshoe(o, p).display();
        pop();
      }
    }
  }
  if (option == 5) {
    for (var q = mouseX; q < 600; q+=600) {
      for (var r = mouseY; r < 800; r+=800) {
        push();
        scale(0.7);
        translate(120, 100);
        new Wishbone(q, r).display();
        pop();
      }
    }
  }
  if (option == 6) {
    background(220);

    for (let z = 0; z < selection.length; z++) {
      if (selection[z].contains(mouseX, mouseY)) {
        selection[z].highlight(255);
      } else {
        selection[z].highlight(145);
      }
    }
    if (found == false) {
      ThreeLeafClovers();
    } else {
      //four leaf clover (in spot where clicked) breaks away and lands in goal
      noFill();
      stroke(0);
      ellipse(130, 600, 150, 25);
      if (frameCount < 20) {
        FourLeafClover(211, 171);
      } else if ((frameCount > 20) && (frameCount < 34.5)) {
        Neg1LeafClover(211, 171)
          FallingLeafClover(65, 315)
      } else if ((frameCount > 34.5) && (frameCount < 100)) {
        noStroke();
        fill(230, 123, 45);
        ellipse(xFall, yFall, 50, 50);
        Neg1LeafClover(211, 171)
          if (yFall > 400) {
          yFall+=80;
        }
      } else {
        Neg1LeafClover(211, 171)
      }
    }
  }
}

function ThreeLeafClovers() {
  for (var ii = -2; ii < 270; ii+=45) {
    ThreeLeafClover(ii, 19);
  }
  for (var ss = -2; ss < 270; ss+=45) {
    ThreeLeafClover(ss, 63);
  }
  for (var jj = -2; jj < 270; jj+=45) {
    ThreeLeafClover(jj, 107);
  }
  for (var kk = -2; kk < 134; kk+=45) {
    ThreeLeafClover(kk, 151);
  }
  FourLeafClover(211, 171);
  for (var pp = 224; pp < 300; pp+=45) {
    ThreeLeafClover(pp, 151);
  }
  for (var ll = -2; ll < 270; ll+=45) {
    for (var qq = 195; qq < 372; qq+=44) {
      ThreeLeafClover(ll, qq);
    }
  }
}

class Ladybug {
  constructor(x, y) {
    this.x_ = x;
    this.y_= y;
  }
  display() {
    //lady bug
    stroke(0);
    strokeWeight(1);
    //left legs
    line(this.x_-30, this.y_-17, this.x_-23, this.y_-14); //top
    line(this.x_-33, this.y_, this.x_-27, this.y_); //middle
    line(this.x_-30, this.y_+17, this.x_-23, this.y_+14); //bottom
    //right legs
    line(this.x_+20, this.y_-14, this.x_+27, this.y_-17); //top
    line(this.x_+23, this.y_, this.x_+30, this.y_); //middle
    line(this.x_+20, this.y_+14, this.x_+27, this.y_+17); //bottom
    //antennas
    line(this.x_-9, this.y_-40, this.x_-2, this.y_-30); //left antenna
    line(this.x_+9, this.y_-40, this.x_+2, this.y_-30); //right antenna
    //head
    fill(0);
    ellipse(this.x_, this.y_-25, 15, 15);
    //red wings
    fill(255, 0, 0);
    noStroke();
    ellipse(this.x_, this.y_, 50, 50);
    fill(0);
    //left spots
    ellipse(this.x_-10, this.y_-12, 8, 8); //top
    fill(0);
    ellipse(this.x_-14, this.y_, 10, 10); //middle
    fill(0);
    ellipse(this.x_-10, this.y_+12, 8, 8); //bottom
    fill(0);
    //right spots
    ellipse(this.x_+10, this.y_-12, 8, 8); //top
    fill(0);
    ellipse(this.x_+14, this.y_, 10, 10); //middle
    fill(0);
    ellipse(this.x_+10, this.y_+12, 8, 8); //bottom
    //wing separation
    stroke(0);
    strokeWeight(2);
    line(this.x_, this.y_-25, this.x_, this.y_+23);
    fill(0);
    triangle(this.x_-4, this.y_+24, this.x_, this.y_+17, this.x_+4, this.y_+24);
  }
}

class YourNumbers {
  constructor(x, y) {
    this.x_ = x;
    this.y_ = y;
  }
  display() {
    stroke(0);
    strokeWeight(5);
    fill(255, 200, 45);
    ellipse(this.x_, this.y_, 80, 80);
    textSize(55);
    fill(0);
    text("S", this.x_-18, this.y_-23.5, 70, 70);
    //strokeWeight(4);
    line(this.x_, this.y_-30, this.x_, this.y_+28);
  }

  contains(v, w) {
    var d = dist(v, w, this.x_, this.y_);
    if (d < 40) {
      return true;
    } else {
      return false;
    }
  }
}


class WinningNumberCovers {
  constructor(x, y) {
    this.x_ = x;
    this.y_ = y;
    this.x2 = x2;
    this.value = motion;
  }
  display() {
    //stroke(this.value);
    //line(this.x1, 0, this.x1, height);
    this.x2++; //line movement

    //gradient
    if (this.x2 % 2 == 0) {
    } else {
      this.value += 10;
      if (this.value > 250) {
        this.value = 0;
      }
    }
    //reset
    if (this.x2 > width) {
      this.x2 = 0;
    }
    //push();
    //scale(1.5);
    stroke(this.value, 145, 80);
    strokeWeight(5);
    fill(255, 200, 45);
    ellipse(this.x_, this.y_, 120, 120);
    textSize(75);
    fill(this.value, 145, 145);
    text("S", this.x_-25, this.y_-31, 120, 120);
    //strokeWeight(4);
    line(this.x_, this.y_-38, this.x_, this.y_+38);
    // pop();
  }

  contains(v, w) {
    var d = dist(v, w, this.x_, this.y_);
    if (d < 60) {
      return true;
    } else {
      return false;
    }
  }
}


//coin
function Coin(x, y) {

  fill(200, 163, 35);
  stroke(207, 181, 59);
  ellipse(x, y, 60, 60);
  fill(235, 203, 20);
  stroke(190, 160, 70);
  ellipse(x, y, 45, 45);
  //1
  fill(212, 175, 55);
  stroke(190, 160, 70);
  beginShape();
  vertex(x+5, y-14);
  vertex(x-8, y-10);
  vertex(x-8, y-9);
  vertex(x+1, y-9);
  vertex(x-2, y+10);
  vertex(x-10, y+10);
  vertex(x-10, y+12);
  vertex(x+10, y+12);
  vertex(x+10, y+10);
  vertex(x+3, y+10);
  vertex(x+7, y-14);
  endShape();
}


class LuckyCharm { //Lucky Charm cereal marshmellow
  constructor(x, y) {
    this.x_ = x;
    this.y_ = y;
  }
  display() {
    fill(140, 215, 80);
    noStroke();
    beginShape();
    curveVertex(this.x_, this.y_+1);
    curveVertex(this.x_, this.y_+1);
    curveVertex(this.x_-25, this.y_);
    curveVertex(this.x_-28, this.y_-6);
    curveVertex(this.x_-25, this.y_-10);
    curveVertex(this.x_-19, this.y_-12);
    curveVertex(this.x_-23, this.y_-30);
    curveVertex(this.x_-18, this.y_-40);
    curveVertex(this.x_-10, this.y_-42);
    curveVertex(this.x_, this.y_-39);
    curveVertex(this.x_+10, this.y_-42);
    curveVertex(this.x_+18, this.y_-40);
    curveVertex(this.x_+23, this.y_-30);
    curveVertex(this.x_+19, this.y_-12);
    curveVertex(this.x_+25, this.y_-10);
    curveVertex(this.x_+28, this.y_-6);
    curveVertex(this.x_+25, this.y_);
    curveVertex(this.x_, this.y_+1);
    curveVertex(this.x_, this.y_+1);
    endShape();

    fill(50, 145, 10);
    ellipse(this.x_-5, this.y_-26, 14, 14);
    ellipse(this.x_+5, this.y_-26, 14, 14);
    ellipse(this.x_+5, this.y_-16, 14, 14);
    ellipse(this.x_-5, this.y_-16, 14, 14);
  }
}

class Horseshoe {
  constructor(x, y) {
    this.x_ = x;
    this.y_ = y;
  }
  display() {
    fill(139, 80, 19);
    stroke(139, 80, 19);
    beginShape();
    //left side
    curveVertex(this.x_+4, this.y_+8);
    curveVertex(this.x_+4, this.y_+8);
    curveVertex(this.x_-9, this.y_);
    curveVertex(this.x_-10, this.y_-20);
    curveVertex(this.x_-8, this.y_-27);
    curveVertex(this.x_-18, this.y_-25); //highest point
    curveVertex(this.x_-21, this.y_);
    curveVertex(this.x_-5, this.y_+15);
    //bottom
    //right side
    curveVertex(this.x_+25, this.y_+15);
    curveVertex(this.x_+41, this.y_);
    curveVertex(this.x_+38, this.y_-25); //highest point
    curveVertex(this.x_+28, this.y_-27);
    curveVertex(this.x_+30, this.y_-20);
    curveVertex(this.x_+29, this.y_);
    curveVertex(this.x_+16, this.y_+8);
    curveVertex(this.x_+16, this.y_+8);
    endShape();

    //rectangle ends
    rect(this.x_-22, this.y_-34, 20, 10);
    rect(this.x_+22, this.y_-34, 20, 10);

    //holes
    fill(200, 180, 19);
    noStroke();
    //left
    rect(this.x_-17, this.y_-20, 5, 5); //top
    rect(this.x_-19, this.y_-10, 5, 5); //middle
    rect(this.x_-16, this.y_, 5, 5); //bottom
    //right
    rect(this.x_+32, this.y_-20, 5, 5); //top
    rect(this.x_+34, this.y_-10, 5, 5); //middle
    rect(this.x_+31, this.y_, 5, 5); //bottom
  }
}

class Wishbone {
  constructor(x, y) {
    this.x_ = x;
    this.y_ = y;
  }
  display() {
    //scale(0.7);
    fill(255);
    stroke(0);
    strokeWeight(0.8);
    beginShape();
    //meets at inner highest point
    curveVertex(this.x_, this.y_+18);
    curveVertex(this.x_, this.y_+18);
    curveVertex(this.x_-5, this.y_+20);
    curveVertex(this.x_-15, this.y_+30);
    curveVertex(this.x_-19, this.y_+40);
    curveVertex(this.x_-23, this.y_+60);
    curveVertex(this.x_-18, this.y_+80);
    //up left^
    curveVertex(this.x_-30, this.y_+85); //lowest point
    curveVertex(this.x_-30, this.y_+50);
    curveVertex(this.x_-20, this.y_+25);
    //down left^
    //left in swoop^
    curveVertex(this.x_-5, this.y_+5);
    curveVertex(this.x_-4, this.y_-10);
    curveVertex(this.x_+6, this.y_-20); //highest point
    curveVertex(this.x_+5, this.y_+5);
    //right in swoop
    //down right
    curveVertex(this.x_+20, this.y_+25);
    curveVertex(this.x_+30, this.y_+50);
    curveVertex(this.x_+30, this.y_+85); //lowest point
    //up right
    curveVertex(this.x_+18, this.y_+80);
    curveVertex(this.x_+23, this.y_+60);
    curveVertex(this.x_+19, this.y_+40);
    curveVertex(this.x_+15, this.y_+30);
    curveVertex(this.x_+5, this.y_+20);
    curveVertex(this.x_, this.y_+18);
    curveVertex(this.x_, this.y_+18);
    //meets at inner highest point
    endShape();

    //line(this.x_-1, 396, 205, 412); //top left line detail
    //line(this.x_+3, 400, 215, 412); //top right line detail
    //line(this.x_-25, 470, 190, 482); //bottom left line detail
    //line(this.x_+25, 470, 230, 482); //bottom right line detail
  }
}



function ThreeLeafClover(x, y) {
  push();
  scale(2.25);

  push();
  translate(x-100, y-175);
  top3Leaf.display();
  pop();

  push();
  translate(x+190, y-19);
  rotate(120);
  top3Leaf.display();
  pop();

  push();
  translate(x-90, y+154);
  rotate(240);
  top3Leaf.display();
  pop();

  pop();
}

function FallingLeafClover(x, y) {
  frameRate(10);
  let step1 = frameCount % 20;
  let angle = map(step1, 0, 30, 0, 200);
  let cos_a = cos(angle);
  let sin_a = sin(angle);


  translate(x+x1, y+y1);
  rotate(180);
  applyMatrix(sin_a, cos_a, cos_a, sin_a, 5, 5);
  top4Leaf.display();
  pct += step;

  /*
  if((x1 < 700) && (y1 < 300)) {
   y1++;
   x1+=2;
   }
   else if((x1 <= 500) && (y1 >= 300)){
   y++;
   frameRate(2);
   x1-= random(-50, 200);
   x1+= random(-50, 200);
   }
   else if((x1 < 500) && (y1 >= 300)){
   y1++;
   x1+=pct + 5;
   }
   */
  print('x1 is: ' + x1);
  print('y1 is: ' + y1);
}


function Neg1LeafClover(x, y) {
  push();
  scale(1.9);
  push();
  translate(x-400, y-275);
  top4Leaf.display();
  pop();

  push();
  translate(x+265, y-410.5);
  rotate(90);
  top4Leaf.display();
  pop();

  push();
  translate(x-265, y+389.5);
  rotate(270);
  top4Leaf.display();
  pop();
}

function FourLeafClover(x, y) {
  push();
  scale(1.9);
  push();
  translate(x-400, y-275);
  top4Leaf.display();
  pop();

  push();
  translate(x+265, y-410.5);
  rotate(90);
  top4Leaf.display();
  pop();

  push();
  translate(x-265, y+389.5);
  rotate(270);
  top4Leaf.display();
  pop();

  push();
  translate(x+400, y+254);
  rotate(180);
  top4Leaf.display();
  pop();
  pop();
}


class CloverLeaf {
  constructor(x, y) {
    this.x_ = x;
    this.y_ = y;
    this.value = 145;
  }

  highlight(value) {
    this.value = value;

    print('this.value is: ' + this.value);
  }

  contains(v, w) {
    var d = dist(v, w, this.x_, this.y_);
    if (d < 20) {
      return true;
    } else {
      return false;
    }
  }

  display() {
    fill(50, this.value, 10);
    noStroke();
    ellipse(this.x_-5, this.y_-26, 14, 14);
    ellipse(this.x_+5, this.y_-26, 14, 14);
    triangle(this.x_, this.y_-8, this.x_-11, this.y_-23, this.x_+11, this.y_-23);
  }
}
