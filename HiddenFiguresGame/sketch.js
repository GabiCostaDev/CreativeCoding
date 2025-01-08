let img;
let cursor = 1;
let fastestFont;
let buttons = [];
let screens = [];
let arrowL = [];
let arrowR = [];
let homeB = [];
var captureSize = 1
var captureHeight = 60;
var captureWidth = 100;
//let start = 1;
let option = 1;
let padding = 20;
//let sprite;

//let easier = true;

function preload() {
  //images sourced from:
  //https://store.steampowered.com/app/2087470/I_commissioned_some_bees_5/
  img = loadImage('Images/islands 1.jpg');
  img2 = loadImage('Images/farm 2.jpg');
  img3 = loadImage('Images/monsters 3.jpg');
  img4 = loadImage('Images/sea 4.jpg');
  img5 = loadImage('Images/fairy tale 5.jpg');
  img6 = loadImage('Images/machines 6.jpg');
  img7 = loadImage('Images/mad house 7.jpg');
  img8 = loadImage('Images/robots 8.jpg');
  img9 = loadImage('Images/city 9.jpg');
  home = loadImage('Images/home icon.png');
  classicRock = loadFont('ClassicRock.ttf');
  correct = loadSound('correct_selection.wav');
}


function setup() {
  createCanvas(1000, 600);
  img.loadPixels();
  img2.loadPixels();
  img3.loadPixels();
  img4.loadPixels();
  img5.loadPixels();
  img6.loadPixels();
  img7.loadPixels();
  img8.loadPixels();
  img9.loadPixels();
  home.loadPixels();
  play = new PlayButton(500, 370);
  buttons.push(play);
  screen1 = new PlayScreen();
  screens.push(screen1);
  left = new LeftArrowKey(820, 300);
  arrowL.push(left);
  right = new RightArrowKey(980, 300);
  arrowR.push(right);
  homebutton = new HomeButton(50, 500);
  homeB.push(homebutton);
  
  firstCapture = new Capture1(img, 400, 120, 100, 100, 50);
  secondCapture = new Capture1(img, 500, 20, 100, 100, 185);
  thirdCapture = new Capture1(img, 80, 200, 100, 100, 320);
  fourthCapture = new Capture1(img, 345, 600, 100, 100, 454);
  //sprite = new Sprite(50, 500);
 
}

//function Sprite (x, y) {
//  rect (x, y, 50, 50);
//}
function draw() {
   
  if (option == 1) {  //screen 1 -- start/play screen
    image(img, 0, 0, 1000, 600);
    for (let i = 0; i < screens.length; i++) {
      screens[i].display(); 
    }
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].display();
     if (buttons[i].contains(mouseX, mouseY)) {
      buttons[i].changeColor(255);
    } else {
      buttons[i].changeColor(0);
    }
   }
 }

  if (option == 2) {  //screen 2 -- level 1
    image(img, 0, 0, 1000, 600);
    //sprite.color = 'yellow';
    //if (sprite.mouse.pressing()) {
	//	sprite.color = 'green';
	//}
    taskMenu();
    fill(127);
    text('Level I', 100, 50);
    if (cursor == 1) {
      for (var g = mouseX; g < 1200; g+=1000) {
        for (var h = mouseY; h < 650; h+=700) {
          capture(g, h);
    }
   }
  }
    if (cursor == 2) {
      for (var i = mouseX; i < 1200; i+=1000) {
        for (var j = mouseY; j < 650; j+=700) {
          capture2(i, j);
    }
   }
  }
    for (let i = 0; i < homeB.length; i++) {
      homeB[i].display();
    }
    for (let i = 0; i < arrowR.length; i++) {
      arrowR[i].display();
     if (arrowR[i].contains(mouseX, mouseY)) {
      arrowR[i].changeColor(0);
    } else {
      arrowR[i].changeColor(255);
    }
   }
    for (let i = 0; i < arrowL.length; i++) {
      arrowL[i].display();
     if (arrowL[i].contains(mouseX, mouseY)) {
      arrowL[i].changeColor(0);
    } else {
      arrowL[i].changeColor(255);
    }
   }
    for (let i = 0; i < homeB.length; i++) {
      homeB[i].display();
   }
  } 
  if (option == 3) {  //screen 3 -- level 2
    cursor = 1;
    levels(img2, 'Level II');
  }
  if (option == 4) {  //screen 4 -- level 3
    levels(img3, 'Level III');
  }
  if (option == 5) {  //screen 5 -- level 4
    levels(img4, 'Level IV');
  }
  if (option == 6) {  //screen 6 -- level 5
    levels(img5, 'Level V');
  }
  if (option == 6) {  //screen 6 -- level 5
    levels(img6, 'Level VI');
  }
  if (option == 8) {  //screen 8 -- level 7
    levels(img7, 'Level VII');
  }
  if (option == 9) {  //screen 9 -- level 8
    levels(img8, 'Level VIII');
  }
  if (option == 10) {  //screen 10 -- level 9
    levels(img9, 'Level IX');
  }  
  //print('arrows is:');
  //print(arrows);
}
let IMG;
let LEVEL;
function levels(IMG, LEVEL) {
    image(IMG, 0, 0, 1000, 600);
    taskMenu1(IMG);
    fill(127);
    text(LEVEL, 100, 50);
    if (cursor == 1) {
      for (var y = mouseX; y < 1200; y+=1000) {
        for (var z = mouseY; z < 650; z+=700) {
          capture(y, z);
    }
   }
  }
    for (let i = 0; i < homeB.length; i++) {
      homeB[i].display();
    }
    for (let i = 0; i < arrowR.length; i++) {
      arrowR[i].display();
     if (arrowR[i].contains(mouseX, mouseY)) {
      arrowR[i].changeColor(0);
    } else {
      arrowR[i].changeColor(255);
    }
   }
    for (let i = 0; i < arrowL.length; i++) {
      arrowL[i].display();
     if (arrowL[i].contains(mouseX, mouseY)) {
      arrowL[i].changeColor(0);
    } else {
      arrowL[i].changeColor(255);
    }
   }
}

function mousePressed() {
  
  for (let i = homeB.length-1; i >= 0; i--) {
    if (homeB[i].contains(mouseX, mouseY)) {
      homeB.splice(i, 1);
      buttons.push(play);
      option = 1;
      
   }
  }
 
  for (let i = buttons.length-1; i >= 0; i--) {
    if ((buttons[i].contains(mouseX, mouseY)) && (option == 1)) {
      buttons.splice(i, 1);
      option = 2;
  }
 }

  for (let i = arrowR.length-1; i >= 0; i--) {
    if ((option == 10) && (arrowL[i].contains(mouseX, mouseY))) {
      option = 10; // stops at level IX
   } else if (arrowR[i].contains(mouseX, mouseY)) {
      option++;
    }
   } 
 
  for (let i = arrowL.length-1; i >= 0; i--) {
    if ((option == 2) && (arrowL[i].contains(mouseX, mouseY))) {
      option = 2; // stops at level I
   } else if (arrowL[i].contains(mouseX, mouseY)) {
      option--;
   }
  }

    
    if ((mouseX >= (firstCapture.y - 100 + padding)) && (mouseX < (firstCapture.y - 100 + firstCapture.width - padding)) && (mouseY >= (firstCapture.z - 80 + padding)) && (mouseY < (firstCapture.z - 80 + firstCapture.height - padding))) {
      cursor = 2;
      correct.play();
    } else {
      return null;
    }
  
  if ((mouseX >= (secondCapture.y + padding)) && (mouseX < (secondCapture.y + secondCapture.width - padding)) && (mouseY >= (secondCapture.z + padding)) && (mouseY < (secondCapture.z + secondCapture.height - padding))) {
      cursor = 2;
    } else {
      return null;
    }
  
  if ((mouseX >= (thirdCapture.y + padding)) && (mouseX < (thirdCapture.y + thirdCapture.width - padding)) && (mouseY >= (thirdCapture.z + padding)) && (mouseY < (thirdCapture.z + thirdCapture.height - padding))) {
      cursor = 2;
    } else {
      return null;
    }
  
  if ((mouseX >= (fourthCapture.y + padding)) && (mouseX < (fourthCapture.y + fourthCapture.width - padding)) && (mouseY >= (fourthCapture.z + padding)) && (mouseY < (fourthCapture.z + fourthCapture.height - padding))) {
      cursor = 2;
    } else {
      return null;
    }
  
  //print('firstCapture.x + padding: ');
  //print(firstCapture.x + padding);
}


class PlayScreen {
  display() {
    fill(127, 130);
    strokeWeight(4);
    stroke(207, 181, 59);
    rect(355, 150, 290, 290, 50)
    fill(220);
    stroke(80);
    textSize(40);
    textAlign(CENTER, CENTER);
    textFont(classicRock);
    text('Hidden', 500, 220);
    text('Captures', 500, 280);
 }
}

class PlayButton {
  constructor(x, y) {
    this.x_ = x;
    this.y_ = y;
    this.brightness = 0;
  }
  
  changeColor(bright) {
    this.brightness = bright;
  }
  
  display() {
    rect(this.x_-75, this.y_-20, 150, 40, 20)
    fill(this.brightness);
    noStroke();
    textSize(20);
    text('PLAY', this.x_, this.y_+2);
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

class HomeButton {
  constructor(x, y) {
    this.x_ = x;
    this.y_ = y;
  }
  
  display() {
    image(home, this.x_, this.y_, 80, 60);
  }

  contains(v, w) {
    var d = dist(v, w, this.x_, this.y_);
    if (d < 65) {
      return true;
    } else {
      return false;
    }
  }
}

class LeftArrowKey { //to toggle less difficult images
  constructor(x, y) {
    this.x_ = x;
    this.y_ = y;
    this.brightness = 0;
  }
  
  changeColor(bright) {
    this.brightness = bright;
  }
  
  display() {
    stroke(this.brightness);
    line(this.x_, this.y_, this.x_+5, this.y_+5);
    line(this.x_, this.y_, this.x_+5, this.y_-5);
  }

  contains(v, w) {
    var d = dist(v, w, this.x_, this.y_);
    if (d < 10) {
      return true;
    } else {
      return false;
    }
  }
}

class RightArrowKey { //to toggle more difficult images
  constructor(x, y) {
    this.x_ = x;
    this.y_ = y;
    this.brightness = 0;
  }
  
  changeColor(bright) {
    this.brightness = bright;
  }
  
  display() {
    stroke(this.brightness);
    line(this.x_-5, this.y_+5, this.x_, this.y_);
    line(this.x_-5, this.y_-5, this.x_, this.y_);
  }

  contains(v, w) {
    var d = dist(v, w, this.x_, this.y_);
    if (d < 10) {
      return true;
    } else {
      return false;
    }
  }
}

function taskMenu() {  //side bar -- option 2
  fill(127, 130);
  stroke(255);
  rect(900, 300, 190, 590, 50)

  //captures within photo to find
  //capture #1
  //copy(x, 400, 120, 100, 100, 850, 50, 100, 100);
  firstCapture.display();
  noFill();
  rect(900, 100, 100, 100);  //border for copied area
  //capture #2
  secondCapture.display();
  noFill();
  rect(900, 235, 100, 100);
  //capture #3
  thirdCapture.display();
  noFill();
  rect(900, 370, 100, 100);
  //capture #4
  fourthCapture.display();
  noFill();
  rect(900, 505, 100, 100); 
}

function taskMenu1(x) {  //side bar -- option 2
  fill(127, 130);
  stroke(255);
  rect(900, 300, 190, 590, 50)
  //captures within photo to find
  //capture #1
  copy(x, 400, 120, 100, 100, 850, 50, 100, 100);
  noFill();
  rect(900, 100, 100, 100);  //border for copied area
  //capture #2
  copy(x, 500, 20, 100, 100, 850, 185, 100, 100);
  noFill();
  rect(900, 235, 100, 100);
  //capture #3
  copy(x, 80, 200, 100, 100, 850, 320, 100, 100);
  noFill();
  rect(900, 370, 100, 100);
  //capture #4
  copy(x, 970, 600, 100, 100, 850, 455, 100, 100);
  noFill();
  rect(900, 505, 100, 100);
  
}

class Capture1 {
  constructor(x, y, z, width, height, yLoc) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.width = width;
    this.height = height;
    this.yLoc = yLoc;
  }
  
  display() {
    copy(this.x, this.y, this.z, this.width, this.height, 850, this.yLoc, 100, 100);
  }
}


function correctSelection () {
  let a = rect(450, 170, 100, 100);
  if (mouseClicked == a) {
    cursor = 2;
  }
  
}


function capture(x, y) { //rectangle as cursor

  noFill();
  rectMode(CENTER);
  strokeWeight(4);
  stroke(207, 181, 59);
  rect(x, y, captureWidth, captureHeight);
  
  if (keyCode == UP_ARROW) {
      captureHeight++;
    } else if (keyCode == DOWN_ARROW) {
      captureHeight--;
    } else if (keyCode == LEFT_ARROW) {
      captureWidth--;
    } else if (keyCode == RIGHT_ARROW) {
      captureWidth++;
    }  
}

function capture2(x, y) { //rectangle as cursor

  noFill();
  rectMode(CENTER);
  strokeWeight(4);
  stroke(0, 181, 19);
  rect(x, y, captureWidth, captureHeight);
  
  if (keyCode == UP_ARROW) {
      captureHeight++;
    } else if (keyCode == DOWN_ARROW) {
      captureHeight--;
    } else if (keyCode == LEFT_ARROW) {
      captureWidth--;
    } else if (keyCode == RIGHT_ARROW) {
      captureWidth++;
    }  
}



