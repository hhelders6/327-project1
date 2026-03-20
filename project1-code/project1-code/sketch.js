let bg;
let caterpillarImg;
let fr1img;
let fr2img;
let fr3img;
let fr4img;
let fr5img;
let fr6img;
let fo1img;
let fo2img;
let fo3img;
let fo4img;
let fo5img;
let fo6img;

let cr = 25;

let fr1R = 30;
let fr2R = 30;
let fr3R = 30;
let fr4R = 30;
let fr5R = 30;
let fr6R = 30;

let fo1R = 30;
let fo2R = 30;
let fo3R = 30;
let fo4R = 30;
let fo5R = 30;
let fo6R = 30;

let cx = 450;
let cy = 375;

let incX = 8;
let incY = 8;

let fr1x = 200;
let fr1y = 200;

let fr2x = 800;
let fr2y = 600;

let fr3x = 550;
let fr3y = 600;

let fr4x = 400;
let fr4y = 200;

let fr5x = 800;
let fr5y = 150;

let fr6x = 100;
let fr6y = 400;

let fo1x = 100;
let fo1y = 200;

let fo2x = 200;
let fo2y = 400;

let fo3x = 800;
let fo3y = 300;

let fo4x = 500;
let fo4y = 500;

let fo5x = 100;
let fo5y = 600;

let fo6x = 700;
let fo6y = 100;

let points = 0;

let startX = 0;
let startY = 0;
let textX = 250;
let textY = 200;


function preload() {
  bg = loadImage('images/background.jpg');
  caterpillarImg = loadImage('images/caterpillar.png')
  fr1img = loadImage('images/watermelon.png');
  fr2img = loadImage('images/apple.png');
  fr3img = loadImage('images/pom.png');
  fr4img = loadImage('images/peach.png');
  fr5img = loadImage('images/kiwi.png');
  fr6img = loadImage('images/orange.png');

  fo1img = loadImage('images/cookie.png');
  fo2img = loadImage('images/pizza.png');
  fo3img = loadImage('images/burger.png');
  fo4img = loadImage('images/bun.png');
  fo5img = loadImage('images/donut.png');
  fo6img = loadImage('images/pasta.png');
}


let start = {
  display: function(){
    fill("orange");
    rect(startX,startY,900,700);
    fill("white");
    textAlign(CENTER);
    text("The caterpillar is so hungry! Hit enter to begin, then use your arrow keys to eat all the fruit! BUT avoid any food the caterpillar can't eat, you'll lose a point! If you get less than 0 points, you'll die! Don't hit the sides either!", textX,textY,400);
  },
}


function setup() {
  createCanvas(900, 700);
  
}

function draw() {
  background(bg);
  
  fill("pink");
  textSize(30);
  textAlign(LEFT);
  text(points + " points", 15,30);
  
  let fr1distX = cx - fr1x;
  let fr1distY = cy - fr1y;
  let fr1distance = sqrt((fr1distX * fr1distX) + (fr1distY * fr1distY));
  
  let fr2distX = cx - fr2x;
  let fr2distY = cy - fr2y;
  let fr2distance = sqrt((fr2distX * fr2distX) + (fr2distY * fr2distY));
  
  let fr3distX = cx - fr3x;
  let fr3distY = cy - fr3y;
  let fr3distance = sqrt((fr3distX * fr3distX) + (fr3distY * fr3distY));
  
  let fr4distX = cx - fr4x;
  let fr4distY = cy - fr4y;
  let fr4distance = sqrt((fr4distX * fr4distX) + (fr4distY * fr4distY));
  
  let fr5distX = cx - fr5x;
  let fr5distY = cy - fr5y;
  let fr5distance = sqrt((fr5distX * fr5distX) + (fr5distY * fr5distY));
  
  let fr6distX = cx - fr6x;
  let fr6distY = cy - fr6y;
  let fr6distance = sqrt((fr6distX * fr6distX) + (fr6distY * fr6distY));
  
  let fo1distX = cx - fo1x;
  let fo1distY = cy - fo1y;
  let fo1distance = sqrt((fo1distX * fo1distX) + (fo1distY * fo1distY));
  
  let fo2distX = cx - fo2x;
  let fo2distY = cy - fo2y;
  let fo2distance = sqrt((fo2distX * fo2distX) + (fo2distY * fo2distY));
  
  let fo3distX = cx - fo3x;
  let fo3distY = cy - fo3y;
  let fo3distance = sqrt((fo3distX * fo3distX) + (fo3distY * fo3distY));
  
  let fo4distX = cx - fo4x;
  let fo4distY = cy - fo4y;
  let fo4distance = sqrt((fo4distX * fo4distX) + (fo4distY * fo4distY));
  
  let fo5distX = cx - fo5x;
  let fo5distY = cy - fo5y;
  let fo5distance = sqrt((fo5distX * fo5distX) + (fo5distY * fo5distY));
  
  let fo6distX = cx - fo6x;
  let fo6distY = cy - fo6y;
  let fo6distance = sqrt((fo6distX * fo6distX) + (fo6distY * fo6distY));
  
  
  imageMode(CENTER);
  image(caterpillarImg,cx,cy);
  if (keyCode === RIGHT_ARROW){
    cx = cx + incX;
  }
  if (keyCode === DOWN_ARROW){
    cy = cy + incY;
  }
  if (keyCode === LEFT_ARROW){
    cx = cx - incX;
  }
  if (keyCode === UP_ARROW){
    cy = cy - incY;
  }
  
  
  image(fr1img,fr1x,fr1y);
  image(fr2img,fr2x,fr2y);
  image(fr3img,fr3x,fr3y);
  image(fr4img,fr4x,fr4y);
  image(fr5img,fr5x,fr5y);
  image(fr6img,fr6x,fr6y);
  
  image(fo1img,fo1x,fo1y);
  image(fo2img,fo2x,fo2y);
  image(fo3img,fo3x,fo3y);
  image(fo4img,fo4x,fo4y);
  image(fo5img,fo5x,fo5y);
  image(fo6img,fo6x,fo6y);

  imageMode(CORNER);

  start.display();

  if (keyCode == RETURN){
    startX = -1000;
    textX = -1000;
  }

  
  if (fr1distance <= cr + fr1R){
    fr1x = -100;
    points = points + 1;
  }
  
  if (fr2distance <= cr + fr2R){
    fr2x = -100;
    points = points + 1;
  }
  
  if (fr3distance <= cr + fr3R){
    fr3x = -100;
    points = points + 1;
  }
  
  if (fr4distance <= cr + fr4R){
    fr4x = -100;
    points = points + 1;
  }
  
  if (fr5distance <= cr + fr5R){
    fr5x = -100;
    points = points + 1;
  }
  
  if (fr6distance <= cr + fr6R){
    fr6x = -100;
    points = points + 1;
  }
  
  
  if (fo1distance <= cr + fo1R){
    fo1x = -100;
    points = points - 1;
  }
  
  if (fo2distance <= cr + fo2R){
    fo2x = -100;
    points = points - 1;
  }
  
  if (fo3distance <= cr + fo3R){
    fo3x = -100;
    points = points - 1;
  }
  
  if (fo4distance <= cr + fo4R){
    fo4x = -100;
    points = points - 1;
  }
  
  if (fo5distance <= cr + fo5R){
    fo5x = -100;
    points = points - 1;
  }
  
  if (fo6distance <= cr + fo6R){
    fo6x = -100;
    points = points - 1;
  }
  
  
  if (fr1x == -100 && fr2x == -100 && fr3x == -100 && fr4x == -100 && fr5x == -100 && fr6x == -100){
    background("#fc4ece");
    incX = 0;
    incY = 0;
    textSize(30);
    fill("white");
    text("yay you won!!", 450, 350);
  }
  
  
  if (points < 0){
    incX = 0;
    incY = 0;
    background("black");
    textSize(30);
    fill("pink");
    text("aw you died :(", 450,350);
  }
  
  if (cx > width){
    incX = 0;
    incY = 0;
    background("black");
    textSize(30);
    fill("pink");
    text("aw you died :(", 450,350);
  }
  
  if (cx < 0){
    incX = 0;
    incY = 0;
    background("black");
    textSize(30);
    fill("pink");
    text("aw you died :(", 450,350);
  }
  
  if (cy > height){
    incX = 0;
    incY = 0;
    background("black");
    textSize(30);
    fill("pink");
    text("aw you died :(", 450,350);
  }
  
  if (cy < 0){
    incX = 0;
    incY = 0;
    background("black");
    textSize(30);
    fill("pink");
    text("aw you died :(", 450,350);
  }
  
  
}