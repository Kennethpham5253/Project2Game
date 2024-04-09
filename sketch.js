let timer = 10;
let timer2 = 0;
let timer3 = 0;
let timer4 = 0;
let m = 0;
let col = 255;
let player;
let bow;
let arrow;
let coin;
let count = 0;
var state = 0;

function preload() {
  img = loadImage('bricks.jpg');
  img2 = loadImage('gamebow.png');
  img3 = loadImage('arrow.png');
  img4 = loadImage('CryingCyclops.png');
  img5 = loadImage('GameStart.png');
  img6 = loadImage('tri.png');
}

function setup() {
  player = new Sprite(300,300,225,400);
  player.img = 'CyclopsNoBackground3.png';
  player.scale = 0.25;
  
  arrow = new Sprite(0,0,425,-100);
  arrow.img = 'arrow.png';
  arrow.scale = 0.10;
  arrow.x = -25;
  arrow.y = random(0,600);
  arrow.xspeed = 1.5;
  arrow.yspeed = -3;
  
  arrow2 = new Sprite(0,0,425,-100);
  arrow2.img = 'arrow.png';
  arrow2.scale = 0.10;
  arrow2.x = random(600,0);
  arrow2.y = -25;
  arrow2.xspeed = -3;
  arrow2.yspeed = 1.5;
  arrow2.rotation = 90;
  
  bow = new Sprite();
  bow.collider = 'none';
  bow.img = 'gamebow.png';
  bow.scale = 0.10;
  bow.x = 5;
  bow.y = 100;
  
  bow2 = new Sprite();
  bow2.collider = 'none';
  bow2.img = 'gamebow.png';
  bow2.scale = 0.10;
  bow2.x = 100;
  bow2.y = 5;
  bow2.rotation = 90;
  
  coin = new Sprite(425,67,14);
  coin.color = 'green';
  
  createCanvas(600, 600);
  background(200);
  noFill();
  textAlign(CENTER);
  setInterval(Timer,1000);
}

function draw() {
  player.visible = false;
  bow.visible = false;
  bow2.visible = false;
  coin.visible = false;
  draw1();
  if (mouseX > 220 && mouseX < 380 && mouseY > 471 && mouseY < 581) {
    image(img6,-23,209);
    if(mouseIsPressed) {
    state = 1;
    }
  }
  
  if (state == 1){
    player.visible = true;
    bow.visible = true;
    bow2.visible = true;
    coin.visible = true;
    
    draw2();
  }
}

function draw1() {
  image(img5,0,0,600,600);
  // console.log(mouseX,mouseY);
}

function draw2() {
  image(img,-19,-10,619,610);
  
  fill(color('white'));
  
  text("Orb count: " + count, 540, 560);
  
  textSize(20);
  
  if (player.overlaps(coin)) {
    coin.x = random(600);
    coin.y = random(600);
    count++;
      }
  
  if (timer2 >= 10) {
    text(m + ':' + timer2, 550, 590);
  }
  
  if (timer2 < 10) {
    text(m + ':0' + timer2, 550, 590);
  }
  
  if (timer2 == 15) {
    bow3 = new Sprite();
    bow3.collider = 'none';
    bow3.img = 'gamebow.png';
    bow3.scale = 0.10;
    bow3.x = 650;
    bow3.rotation = 180;
    
    timer3++;
    
    arrow3 = new Sprite(0,0,425,-100);
    arrow3.img = 'arrow.png';
    arrow3.scale = 0.10;
    arrow3.x = 625;
    arrow3.y = random(0,600);
    arrow3.xspeed = -1.5;
    arrow3.yspeed = -3;
    arrow3.rotation = 180;
  }
  
  if (timer3 > 0) {
    arrow3.x = arrow3.x + arrow3.xspeed * 2;
    
    if (arrow3.x <= -5) {
      arrow3.x = 625;
      arrow3.y = random(height);
    }
    
    if (arrow3.x >= 624) {
      bow3.y = arrow3.y;
      bow3.x = 595;
    }
    
    if (player.colliding(arrow3)) {
      GameOver();
      player.remove();
      coin.remove();
      bow.remove();
      bow2.remove();
      bow3.remove();
      
      if (timer4 > 0) {
      bow4.remove();
      bow4.visible = false;
      }
      
      arrow.remove();
      arrow2.remove();
      arrow3.remove();
      
      if (timer4 > 0) {
      arrow4.remove();
      bow4.visible = false;
      }
    }
  }
    
  if (timer2 == 45) {
    bow4 = new Sprite();
    bow4.collider = 'none';
    bow4.img = 'gamebow.png';
    bow4.scale = 0.10;
    bow4.y = 650;
    bow4.rotation = 270;
    
    timer4++;
    
    arrow4 = new Sprite(0,0,425,-100);
    arrow4.img = 'arrow.png';
    arrow4.scale = 0.10;
    arrow4.x = random(600,0);
    arrow4.y = 625;
    arrow4.xspeed = -3;
    arrow4.yspeed = -1.5;
    arrow4.rotation = 270;
    }
  
  if (timer4 > 0) {
    arrow4.y = arrow4.y + arrow4.yspeed * 2;
    
    if (arrow4.y <= -5) {
      arrow4.y = 625;
      arrow4.x = random(height);
    }
    
    if (arrow4.y >= 624) {
      bow4.x = arrow4.x;
      bow4.y = 595;
    }
    
    if (player.colliding(arrow4)) {
      GameOver();
      player.remove();
      coin.remove();
      bow.remove();
      bow2.remove();
      bow3.remove();
      bow4.remove();
      arrow.remove();
      arrow2.remove();
      arrow3.remove();
      arrow4.remove();
    }
  }
  
  if (timer2 == 60) {
    m++;
    timer2 = 0;
  }
  
  if (kb.pressing('left')) player.vel.x = -5;
  else if (kb.pressing('right')) player.vel.x = 5;
  else player.vel.x = 0;
  
  if (kb.pressing('up')) player.vel.y = -5;
  else if (kb.pressing('down')) player.vel.y = 5;
  else player.vel.y = 0;
  
  if (player.x >= width - 25) {
      player.x = width - 25;
      }
  if (player.x <= 0 + 25) {
    player.x = 0 +25;
  }
  if (player.y >= height - 45) {
    player.y = height - 45;
  }
  if (player.y <= 0 + 45) {
    player.y = 0 + 45;
  }
  
  stroke(col);
  
  if (timer <= 0) {
    arrow.x = arrow.x + arrow.xspeed * 2;
    arrow2.y = arrow2.y + arrow2.yspeed * 2;
  }
  
  if (arrow.x >= width) {
    timer = 100;
    arrow.x = -25;
    arrow.y = random(height);
  }
  
  if (arrow2.y >= height) {
    timer = 100;
    arrow2.x = random(width);
    arrow2.y = -25;
  }
  
  if (arrow.x <= -5) {
    bow.y = arrow.y;
  }
  
  if (arrow2.y <= -5) {
    bow2.x = arrow2.x;
  }
  
  if (player.colliding(arrow) || player.colliding(arrow2)) {
    GameOver();
    player.remove();
    coin.remove();
    bow.remove();
    bow2.remove();
    
    if (timer3 >= 1) {
      bow3.remove();
    }
    
    if (timer4 >= 1) {
      bow4.remove();
    }
    
    arrow.remove();
    arrow2.remove();
    
    if (timer3 >= 1) {
      arrow3.remove();
    }
    
    if (timer4 >= 1) {
      arrow4.remove();
    }
  }
  timer--;
}

function GameOver() {
  push();
  strokeWeight(4);
  background(232, 136, 137);
  image(img4,180,25,250,250);
  textSize(40);
  fill(color(80, 158, 215));
  textAlign(CENTER);
  textStyle(BOLD);
  
  if (timer2 < 10) {
    text("Game Over\nTime - " + m + ":0" + timer2 + "\nOrb count - " + count + "\nPress play to start over &\n try to beat your time & score!", width / 2, height /2 + 50);
  } else {
    text("Game Over\nTime - " + m + ":" + timer2 + "\nOrb count - " + count + "\nPress play to start over &\n try to beat your time & score!", width / 2, height /2 + 50);
  }
  
  // if (kb.presses('1'))
  //   {
  //     draw();
  //   }
  
  noLoop();
  pop();
}

function Timer()
{
  if (timer2 >= 0) {
    timer2++;
  }
}

// background image source: https://stock.adobe.com/images/pixel-art-2d-brick-wall-orange-brick-texture-with-shadowing-assets-for-game-brickwork-concrete-seamless-background-wallpaper/493148923
// bow image source: https://c8.alamy.com/comp/2D8TC26/crossbow-icon-element-of-weapon-icon-for-mobile-concept-and-web-apps-thin-line-crossbow-icon-can-be-used-for-web-and-mobile-premium-icon-on-white-2D8TC26.jpg
