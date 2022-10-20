var canvas;
var canvasContext;

window.onload = function(){  /* run after everything finished loading */
    console.log("kkkkk");
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');
    drawEverything(); /*calling the function*/
}

function drawEverything(){
    /*分割线*/
    canvasContext.fillStyle = 'white';
    canvasContext.fillRect(890,100,2,30); /*位置和尺寸：html的尺寸要比这里大才能展现js特定的尺寸*/
    canvasContext.fillStyle = 'white';
    canvasContext.fillRect(890,140,2,30);
    canvasContext.fillStyle = 'white';
    canvasContext.fillRect(890,180,2,30);
    canvasContext.fillStyle = 'white';
    canvasContext.fillRect(890,220,2,30);
    canvasContext.fillStyle = 'white';
    canvasContext.fillRect(890,260,2,30); /*5*/
    canvasContext.fillStyle = 'white';
    canvasContext.fillRect(890,300,2,30);
    canvasContext.fillStyle = 'white';
    canvasContext.fillRect(890,340,2,30);
    canvasContext.fillStyle = 'white';
    canvasContext.fillRect(890,380,2,30);
    canvasContext.fillStyle = 'white';
    canvasContext.fillRect(890,420,2,30);
    canvasContext.fillStyle = 'white';
    canvasContext.fillRect(890,460,2,30); /*10*/
    canvasContext.fillStyle = 'white';
    canvasContext.fillRect(890,500,2,30);
    canvasContext.fillStyle = 'white';
    canvasContext.fillRect(890,540,2,30);
    canvasContext.fillStyle = 'white';
    canvasContext.fillRect(890,580,2,30);
    canvasContext.fillStyle = 'white';
    canvasContext.fillRect(890,620,2,30);
    canvasContext.fillStyle = 'white';
    canvasContext.fillRect(890,660,2,30); /*15*/
    canvasContext.fillStyle = 'white';
    canvasContext.fillRect(890,700,2,30);
    canvasContext.fillStyle = 'white';
    canvasContext.fillRect(890,740,2,30);
    canvasContext.fillStyle = 'white';
    canvasContext.fillRect(890,780,2,30);
  

    /*左踢板*/
    canvasContext.fillStyle = 'white';
    canvasContext.fillRect(20,100,5,60); 

    /*右踢板*/
    canvasContext.fillStyle = 'white';
    canvasContext.fillRect(1765,720,5,60); 

}