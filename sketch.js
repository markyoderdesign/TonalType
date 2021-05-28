let speaker = new p5.Speech();
speaker.onLoad = voicesLoaded;
let pitch = 0.1;
function voicesLoaded() {
  speaker.listVoices();
  speaker.setRate(1.5)
  speaker.setPitch(pitch)
  speaker.setVoice("Karen");
}
function setup() {
  createCanvas(400, 400);
}
function draw() {
  background(220);
}
function mousePressed() {
  pitch = pitch + 0.2;
  speaker.setPitch(pitch);
  speaker.speak("A specter is haunting this zoom call");
}