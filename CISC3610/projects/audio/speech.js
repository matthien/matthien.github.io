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
	'background *color': backgroundColor,
	'size *num': changeSize,
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
    clear();
};

function backgroundColor(word){
	bgColor = word;
	clear();
};

function changeSize(size){
   
    if(size < 1){
            var msg = new SpeechSynthesisUtterance();
            msg.text =  "Size too small, the minimize size is 1";
            synth.speak(msg);
    }
    if(size > 300){
            var msg = new SpeechSynthesisUtterance();
            msg.text =  "Size too big, the size limit is 300";
            synth.speak(msg);
    }
    else{
        clear();
    }
};

function clear(){
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, ctx.width, ctx.height);
    update();
};

function update(){
    ctx.beginPath();
    ctx.fillStyle = bgColor;
    ctx.rect(0, 0, ctx.width, ctx.height);
    ctx.fill();
    ctx.stroke();
    
    ctx.beginPath();
    ctx.fillstyle = color;
    ctx.arc(400, 300, size, 0, 2* Math.PI); 
    ctx.fill();
    ctx.stroke();
}