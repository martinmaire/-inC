var monSon;
var yRot =0;
var xx
var soundVolume

function preload() {
  soundFormats('mp3', 'ogg');
  monSon = loadSound('file/4.ogg');
}


var changeBG

  

function setup() {
  createCanvas(400, 400);
  
  //
  
  button = createButton('Pattern 1');
  button.position(20, 30);
  button.mousePressed(changeBG);
 



}

  


function changeBG() {

  
  if ( monSon.isPlaying() ) { // .isPlaying() returns a boolean
    monSon.pause(); // .play() will resume from .pause() position
    background(255,0,0);
  } else {
  
    monSon.loop();
    background(0,255,0);
  }
}


function draw() {
 
  background(255);
  strokeWeight(20);
 soundVolume = map(rotationY, 0, 80, 0, 1);
 line(20, 300, constrain((rotationY*3), 20, 300), 300)
  text("rotationZ: " + nf(rotationY, 0, 2), 20, 320);
  
  text("soundVolume: " + nf(soundVolume, 0, 2), 20, 330);
  
  var volume = map(abs(rotationY), 0, 200, 0, 2);
  volume = constrain(volume, 0, 1);
  monSon.amp(volume, 0.03);
  
}




	

