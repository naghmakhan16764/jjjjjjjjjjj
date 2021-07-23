var whiteCounterImg, blackCounterImg, redCounterImg, boradImg;
var white = [],
  black = [],
  redCounter;

function preload() {
  boradImg = loadImage("images/CarromBoard.jpg");
  whiteCounterImg = loadImage("images/white.png");
  blackCounterImg = loadImage("images/black.png");
  redCounterImg = loadImage("images/red.png");
}

function setup() {
  createCanvas(400, 400);
  redCounter = createSprite(width / 2, height / 2, 45, 45);
  redCounter.addImage("redCounterImg", redCounterImg);
  redCounter.scale = 0.05;

  for (var i = 0; i < 9; i = i + 1) {
    black.push(createSprite(225, 225));
    black[i].addImage("blackCounterImg", blackCounterImg);
    black[i].scale = 0.05;
  }

  for (var j = 0; j < 9; j = j + 1) {
    white.push(createSprite(225, 225));
    white[j].addImage("whiteCounterImg", whiteCounterImg);
    white[j].scale = 0.05;
  }

  black[0].x=width/2-20
  black[0].y=height/2

  black[1].x=width/2+10
  black[1].y=height/2+20

  black[2].x=width/2+10
  black[2].y=height/2-20



  white[0].x=width/2+20
  white[0].y=height/2

  white[1].x=width/2-10
  white[1].y=height/2-20

  white[2].x=width/2-10
  white[2].y=height/2+20

  white[3].x=width/2-15
  white[3].y=height/2-37





  
}

function draw() {
  background(boradImg);
  drawSprites();
}
