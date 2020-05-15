var ctx = document.getElementById('myCanvas').getContext('2d');

var color = 'black';
var size = 30;
var bgColor = 'black';
var speech = window.speechSynthesis;
var int;

ctx.beginPath();
ctx.fillStyle = 'black';
ctx.arc(300, 400, 50, 0, 2 * Math.PI);
ctx.stroke();

var commands = {
	/*'color *color': changeColor,
	'background *color': bgColor,
	'size *num': changeSize,*/
	'help': function() {
    	var msg = new SpeechSynthesisUtterance();
    	msg.text = "Say color, followed by a color, to set the circle color. \n\
    	Say background, followed by a color, to set the background color. \n\
    	Say size, followed of a number from 1 to 300, to set the diameter of the circle. Say about, to hear about the program.";
    	speech.speak(msg);
	},
	'about': function() { 
	 	var msg = new SpeechSynthesisUtterance();
  		msg.text =  "Created by Matthew Thien. This program is to show the usage of text to speech and speech recognition";
  		speech.speak(msg);
  	}
};

annyang.addCommands(commands);

function startButton(){
	var x = document.getElementById("speakButton");
	if (x.value == "Speak") {
    	x.value = "Stop";
    	annyang.start({continuous: false});
  	} else {
    	annyang.abort();  
    	x.value = "Speak";
  	}
  	//annyang.start();  
}