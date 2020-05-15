"use strict";

var Scene = {
    canvas : undefined,
    canvasContext : undefined,
    sprite: undefined
};

Scene.start = function () {
    // Get the canvas and it's context.
    Scene.canvas = document.getElementById("myCanvas");
    Scene.canvasContext = Scene.canvas.getContext("2d");
	
    // Seup the angry cat to be displayed.
    Scene.sprite = runGif;
	
    // Attach the image to be used for the sprite.
    Scene.sprite.img = new Image();
    Scene.sprite.img.src = Scene.sprite.src;
    
    Scene.sprite.frame=0;
	
    // Wait till the angry cat image is loaded before starting the animation.
    Scene.sprite.img.onload = function() {		
    	Scene.mainLoop();
    };
};

// Once the basic HTML document is loaded and its parsing has taken place, start the scene.
document.addEventListener( 'DOMContentLoaded', Scene.start);

Scene.mainLoop = function() {
    //Scene.clearCanvas();
    //Scene.update();
    Scene.draw();
        
	// Animate at 24 frames a second.
    window.setTimeout(Scene.mainLoop, 1000 / 24);
};

Scene.clearCanvas = function () {
    Scene.canvasContext.fillStyle = "white";
    Scene.canvasContext.fillRect(0, 0, Scene.canvas.width, Scene.canvas.height);
};

Scene.update = function () {
	// Set the canvas width to be that of the display Window. Which helps if you resize the window.
  	Scene.canvas.width = window.innerWidth;
};

Scene.draw = function () {
	Scene.canvasContext.drawImage(Scene.sprite.img,Scene.sprite.frames[Scene.sprite.frame].frame.x,Scene.sprite.frames[Scene.sprite.frame].frame.y,Scene.sprite.frames[Scene.sprite.frame].frame.w,Scene.sprite.frames[Scene.sprite.frame].frame.h,0,0,Scene.sprite.frames[Scene.sprite.frame].frame.w,Scene.sprite.frames[Scene.sprite.frame].frame.h);
	
	Scene.canvasContext.font = "30px Arial";
	Scene.canvasContext.fillStyle = "black";
	Scene.canvasContext.fillText("RUN!!!", 40, 50);
	
	// Advance to the next frame.
	//alert(Scene.sprite.frame);
        Scene.sprite.frame++;

	// At the end of the sprite sheet,Clear the canvas and call second gif
	if(Scene.sprite.frame==Scene.sprite.frames.length){
            Scene.clearCanvas();
            Scene1.start();
        }
};

var Scene1 = {
    canvas : undefined,
    canvasContext : undefined,
    sprite: undefined
};

Scene1.start = function () {
    // Get the canvas and it's context.
    Scene1.canvas = document.getElementById("myCanvas");
    Scene1.canvasContext = Scene1.canvas.getContext("2d");
	
    // Seup the sold out to be displayed.
    Scene1.sprite = fireGif;
	
    // Attach the image to be used for the sprite.
    Scene1.sprite.img = new Image();
    Scene1.sprite.img.src = Scene1.sprite.src;
    
    Scene1.sprite.frame=0;
    
    // Wait till the sold out image is loaded before starting the animation.
    Scene1.sprite.img.onload = function() {		
    	Scene1.mainLoop();
    };
};

Scene1.mainLoop = function() {
    //Scene1.clearCanvas();
    //Scene1.update();
    Scene1.draw();
    
	
	// Animate at 10 frames a second.
    window.setTimeout(Scene1.mainLoop, 1000 / 10);
};

Scene1.clearCanvas = function () {
    Scene1.canvasContext.fillStyle = "white";
    Scene1.canvasContext.fillRect(0, 0, Scene1.canvas.width, Scene1.canvas.height);
};

Scene1.update = function () {
	// Set the canvas width to be that of the display Window. Which helps if you resize the window.
  	Scene1.canvas.width = window.innerWidth;
};

Scene1.draw = function () {
	Scene1.canvasContext.drawImage(Scene1.sprite.img,Scene1.sprite.frames[Scene1.sprite.frame].frame.x,Scene1.sprite.frames[Scene1.sprite.frame].frame.y,Scene1.sprite.frames[Scene1.sprite.frame].frame.w,Scene1.sprite.frames[Scene1.sprite.frame].frame.h,0,0,Scene1.sprite.frames[Scene1.sprite.frame].frame.w,Scene1.sprite.frames[Scene1.sprite.frame].frame.h);
	
    Scene1.canvasContext.font = "20px Arial";
	Scene1.canvasContext.fillStyle = "black";
	Scene1.canvasContext.fillText("IM COMING!!", 350, 250);
	   
	// Advance to the next frame.
	Scene1.sprite.frame++;

	// At the end of the sprite sheet, restart the first gif
	if(Scene1.sprite.frame==Scene1.sprite.frames.length){
            Scene1.clearCanvas();
            Scene.start();
        }
};
