canvas= document.getElementById('mycCanvas');
ctx=canvas.getContext("2d");

greencarHeight=75;
greencarWidth=100;

backgroundImage = "parkingLot.jpg";
greencarImage = "car2.png";

greencar_x=5;
greencar_y=225;

function add() {
	backgroundImageTag = new Image(); 
    backgroundImageTag.onload = uploadBackground; 
    backgroundImageTag.src = backgroundImage; //
    greencarImageTag = new Image();
    greencarImageTag.onload = uploadgreencar;
    greencarImageTag.src = greencarImage;

function uploadBackground() {
	ctx.drawImage(backgroundImageTag, 0, 0, canvas.width, canvas.height); }


}

function uploadgreencar() {
	ctx.drawImage(greencarImageTag, greencar_x, greencar_y, greencarWidth, greencarHeight); 
}

	



window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(greencar_y >=10)
   {
      greencar_y = greencar_y-10;
      console.log("Quando a seta para cima é pressionada, x = " + greencar_x + " | y = " +greencar_y);
      uploadBackground();
      uploadgreencar();
   }
}

function down()
{
	if(greencar_y <=500)
   {
      greencar_y = greencar_y+10;
      console.log("Quando a seta para baixo é pressionada, x = " + greencar_x + " | y = " +greencar_y);
      uploadBackground();
      uploadgreencar();
   }
}

function left()
{
	if(greencar_x>=10)
   {
      greencar_x = greencar_x +10;
      console.log("Quando a seta para direita é pressionada, x = " + greencar_x + " | y = " + greencar_y);
      uploadBackground();
      uploadgreencar();
   }
}

function right()
{
	if(greencar_x<=690)
   {
      greencar_x = greencar_x +10;
      console.log("Quando a seta para direita é pressionada, x = " + greencar_x + " | y = " + greencar_y);
      uploadBackground();
      uploadgreencar();
   }
}
