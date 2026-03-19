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

let cx = 300;
let cy = 300;

let incX = 5;
let incY = 5;

let fr1x = 200;
let fr1y = 200;

let fr2x = 550;
let fr2y = 450;

let fr3x = 400;
let fr3y = 400;

let fr4x = 400;
let fr4y = 200;

let fr5x = 200;
let fr5y = 100;

let fr6x = 100;
let fr6y = 400;

let fo1x = 100;
let fo1y = 200;

let fo2x = 200;
let fo2y = 400;

let fo3x = 300;
let fo3y = 100;

let fo4x = 500;
let fo4y = 400;

let fo5x = 50;
let fo5y = 450;

let fo6x = 500;
let fo6y = 50;

let points = 0;

let caterpillar = {
  color: "blue",
  display: function(){
    fill(caterpillar.color);
    circle(cx,cy,cr*2);
  },
}

let fruit1 = {
  color: "green",
  display: function(){
    fill(fruit1.color);
    circle(fr1x,fr1y,fr1R * 2);
  },
}

let fruit2 = {
  color: "green",
  display: function(){
    fill(fruit2.color);
    circle(fr2x,fr2y,fr2R * 2);
  },
}

let fruit3 = {
  color: "green",
  display: function(){
    fill(fruit3.color);
    circle(fr3x,fr3y,fr3R * 2);
  },
}

let fruit4 = {
  color: "green",
  display: function(){
    fill(fruit4.color);
    circle(fr4x,fr4y,fr4R * 2);
  },
}

let fruit5 = {
  color: "green",
  display: function(){
    fill(fruit5.color);
    circle(fr5x,fr5y,fr5R * 2);
  },
}

let fruit6 = {
  color: "green",
  display: function(){
    fill(fruit6.color);
    circle(fr6x,fr6y,fr6R * 2);
  },
}

let food1 = {
  color: "red",
  display: function(){
    fill(food1.color);
    circle(fo1x,fo1y,fo1R * 2);
  },
}

let food2 = {
  color: "red",
  display: function(){
    fill(food2.color);
    circle(fo2x,fo2y,fo2R * 2);
  },
}

let food3 = {
  color: "red",
  display: function(){
    fill(food3.color);
    circle(fo3x,fo3y,fo3R * 2);
  },
}

let food4 = {
  color: "red",
  display: function(){
    fill(food4.color);
    circle(fo4x,fo4y,fo4R * 2);
  },
}

let food5 = {
  color: "red",
  display: function(){
    fill(food5.color);
    circle(fo5x,fo5y,fo5R * 2);
  },
}

let food6 = {
  color: "red",
  display: function(){
    fill(food6.color);
    circle(fo6x,fo6y,fo6R * 2);
  },
}

function setup() {
  createCanvas(600, 500);
}

function draw() {
  background(220);
  
  fill("black");
  textSize(20);
  text(points + " points", 10,25);
  
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
  
  
  
  caterpillar.display ();
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
  
  
  fruit1.display ();
  fruit2.display ();
  fruit3.display ();
  fruit4.display ();
  fruit5.display ();
  fruit6.display ();
  
  food1.display ();
  food2.display ();
  food3.display ();
  food4.display ();
  food5.display ();
  food6.display ();
  
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
    background("pink");
    incX = 0;
    incY = 0;
    textSize(30);
    fill("black");
    text("yay you won!!", 200, 250);
  }
  
  
  if (points < 0){
    incX = 0;
    incY = 0;
    background("black");
    textSize(30);
    fill("pink");
    text("aw you died :(", 200,250);
  }
  
  if (cx > width){
    incX = 0;
    incY = 0;
    background("black");
    textSize(30);
    fill("pink");
    text("aw you died :(", 200,250);
  }
  
  if (cx < 0){
    incX = 0;
    incY = 0;
    background("black");
    textSize(30);
    fill("pink");
    text("aw you died :(", 200,250);
  }
  
  if (cy > height){
    incX = 0;
    incY = 0;
    background("black");
    textSize(30);
    fill("pink");
    text("aw you died :(", 200,250);
  }
  
  if (cy < 0){
    incX = 0;
    incY = 0;
    background("black");
    textSize(30);
    fill("pink");
    text("aw you died :(", 200,250);
  }
  
  
}