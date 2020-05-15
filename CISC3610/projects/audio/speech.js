var ctx = document.getElementById('myCanvas').getContext('2d');

var color = 'black';
var size = 30;
var bgColor = 'black';
var speech = window.speechSynthesis;
var int;

ctx.beginPath();
ctx.fillStyle = 'black';
ctx.arc(300, 400, size*2, 0, 2 * Math.PI);
ctx.stroke();

var commands = {
	'color *word': function(word) {
		changeColor(word);
	},
	'ground *word': function(word) {
		backgroundColor(word);
	},
	'size *num': function(num) {
		size = parseInt(num);
		changeSize(size);
	},
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
};

function changeColor(word){
	color = word;
    updateCircle();
};

function backgroundColor(word){
	bgColor = word;
	erase();
	updateBackground();
};

function changeSize(num){
   
    if(size < 1){
            var msg = new SpeechSynthesisUtterance();
            msg.text =  "Size too small, the minimize size is 1";
            speech.speak(msg);
    }
    if(size > 300){
            var msg = new SpeechSynthesisUtterance();
            msg.text =  "Size too big, the size limit is 300";
            speech.speak(msg);
    }
    else{
    	size = num;
    	erase();
    }
};

function erase(){
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, ctx.width, ctx.height);
    updateBackground();
};

function updateCircle(){
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.arc(300, 400, size*2, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
};

function updateBackground() {
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, ctx.width, ctx.height);
    updateCircle();
}