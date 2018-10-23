var myImage;
var mySong;
var amp;
var myFont;
var volhistory = [];


function preload() {
  myImage = loadImage("./assets/Civita.jpg");
  mySong = loadSound("./assets/Chill.mp3");
  myFont = loadFont("./assets/Bagnard.otf")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  mySong.loop();
  angleMode(DEGREES);
  mySong.play();
mySong.setVolume(0.5);
  amp = new p5.Amplitude();

}

function draw() {
  backgroundImage(myImage);
  push();
  var vol = amp.getLevel();
  volhistory.push(vol);
  stroke(255);
  strokeWeight(2);
  noFill();
  translate(width / 2, height / 2);
  beginShape();
  for (var i = 0; i < 360; i++) {
    var r = map(volhistory[i], 0, 1, 200, 300);
    var x = r * cos(i);
    var y = r * sin(i);
    // var y = map(volhistory[i], 0, 1, height, 0);
    vertex(x, y);
  }
  endShape();
  // ellipse(100, 100, 80, vol * 200);

  if (volhistory.length > 360) {
    volhistory.splice(0, 1);
  }
  pop();

//testo
  textFont('Bagnard');
  textSize(45);
  fill('yellow');
  text('Vacanze romane', 100, 100);
  fill(255);
  text('Vacanze romane', 104, 104);


}

function backgroundImage(myImage) {
  push();
  translate(width / 2, height / 2);
  imageMode(CENTER);
  let scale = Math.max(width / myImage.width, height / myImage.height);
  image(myImage, 0, 0, myImage.width * scale, myImage.height * scale)
  pop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
