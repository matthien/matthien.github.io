
    function main() {
    	var canvas = document.getElementById("myCanvas");
    	var context = canvas.getContext("2d");
    
        function makeShapes () { 
            context.fillStyle = "cyan";
            context.fillRect(0, 0, canvas.width, canvas.height);
            
            context.fillStyle = "green"; //grass
            context.fillRect(0, 500, 800, 100);   
            
            context.fillStyle = "grey"; //house block
            context.fillRect(500, 330, 225, 200); 
            
            context.fillStyle = "red"; //house roof
            context.beginPath();
            context.moveTo(612, 200);
            context.lineTo(470, 330);
    		context.lineTo(752, 330);
    		context.fill();
    		
    		context.fillStyle = "brown"; //door
    		context.fillRect(650, 420, 50, 100);  
    		
    		context.fillStyle = "white"; //window
    		context.fillRect(540, 375, 50, 50);
        }
        
        function insertName () {  
            context.font="14px Arial";
            context.fillStyle = "black";
            context.fillText("Matthew Thien", 690, 585);
        }
        
        function insertSprite () { 
            var balloonSprite = new Image();
            var cloudSprite = new Image();
            var sunSprite = new Image();
            var tentSprite = new Image();
            var grassSprite = new Image();
            
        	grassSprite.onload = function() { //onloads image to draw afterl oading in
            	context.drawImage(grassSprite, 0, 450, 800, 100);
            }
            balloonSprite.onload = function() {
                context.drawImage(balloonSprite, 750, 220);
            }
            cloudSprite.onload = function() { 
            	var x = 50;
            	var y = 100;
            	for (var i = 1; i < 4; i++) {  //draws 3 clouds
            		context.drawImage(cloudSprite, x, y, 100, 100);
            		x = x*3;
            		
            	}
            }
            sunSprite.onload = function() { 
            	context.drawImage(sunSprite, 0, 0, 200, 200);
            }
            tentSprite.onload = function() { 
            	context.drawImage(tentSprite, 50, 370, 300, 200);
            }
            
            balloonSprite.src = "images/spr_balloon.png";
            cloudSprite.src = "images/cloud.png";
            sunSprite.src = "images/sun.png";
            tentSprite.src = "images/tent.png";
            grassSprite.src = "images/grass.png";
        }    

        makeShapes(); //calls commands
        insertName();
        insertSprite();
    }
    document.addEventListener('DOMContentLoaded', main);