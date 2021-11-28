x = 0;
y = 0;

flower = "";

speak_data = "";

to_number = "";

draw_flower = "";

function preload(){
  flower = loadImage('flower.png');
}

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

  console.log(event); 

  content = event.results[0][0].transcript;
  document.getElementById("status").innerHTML = "The Speech Has Been Recognized :) " + content;

  to_number = Number(content);

  if(Number.isInteger(to_number)==true){
    document.getElementById("status").innerHTML = "Started Drawing Flower/s =)";
    draw_flower = "set";
  }
  else{
    document.getElementById("staus").innerHTML = "We Have Not Recognized A Numer :|";
  }
}

function setup(){
  canvas = createCanvas(1300,275);
  canvas.position(120, 550);
}

function draw() {
  if(draw_flower == "set"){
    for(var i = 1; i <= to_number; i++){
    x = Math.floor(Math.random() * 700);
    y = Math.floor(Math.random() * 400);
    image(flower, x, y, 50, 50);
    }
    document.getElementById("status").innerHTML = to_number + " Flowers drawn =D";
    draw_flower = "";
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}
