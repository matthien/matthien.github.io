function main() { 
	var canvas = document.getElementById("myCanvas");
	var context = canvas.getContext("2d");

	function clearCanvas () {
		context.clearRect(0, 0, canvas.width, canvas.height);
	}
	
	function backgroundColor() { 
		context.fillStyle = "red";
		context.fillRect(0,0, canvas.width, canvas.height);
	}
	
	function drawNumbers (spriteSheet, sx) { 
		var sy = 70; var sWidth = 309; var sHeight = 307; 
		var dx = 240; var dy = 150; var dWidth = 309; var dHeight = 307;
		
		context.drawImage(spriteSheet, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight); 
	}
	
	function loadImage() { 
		var spriteSheet = new Image();
		var sx = 100;
		spriteSheet.onload = function() { 
			for (var i = 0; i < 5; i++) { 			
			//window.setTimeout(drawNumbers(), 6000);
			drawNumbers(spriteSheet, sx);
			sx += 300;
			//drawNumbers(spriteSheet,sx);
			}
		}
		spriteSheet.src = "images/spritesheet.jpg";
	}
	
	backgroundColor();
	loadImage();
}

document.addEventListener('DOMContentLoaded', main);