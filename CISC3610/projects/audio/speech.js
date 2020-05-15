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
	'color *color': changeColor,
	'background *color': bgColor,
	'size *num': changeSize,
	'help': function() {},
	'about': function(){}
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