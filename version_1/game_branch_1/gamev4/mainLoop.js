

//printWords.AddToList(temp);

var mike = new Person();
var stem = new HealthObj(50,40,40);
// var left_mouse_button = -1;
// var leftClick = false;
// var rightClick = false;

var mainloop = function (){

	var that = this;
	
	myCanvas.width = myCanvas.width;
	
	mike.movement();
	//stem.down();
	//stem.printVal();
	//stem.loadstuff();
	var tempImage = mike.getSSI();
	
	ctx.drawImage(
	document.images[mike.retImage()],
	tempImage.sx,
	tempImage.sy,
	tempImage.width,
	tempImage.height,
	mike.charXLoc,
	mike.charYLoc,
	tempImage.width,
	tempImage.height);
		
	// stem.urhc();
	stem.setMouse(this.mousePosX,this.mousePosY,leftClick,rightClick);  
	stem.movement();
	//stem.contains();
	//stem.printCorners_square();
	//stem.printCorners_ssi();
	
	
	// http://www.w3schools.com/tags/canvas_drawimage.asp
	ctx.drawImage(
	// document.images["health_icon_1"],
	document.images[stem.retImage()],
	stem.getSx(),
	stem.getSy(),// tempImage.sy,
	stem.getSwidth(),// tempImage.width,
	stem.getSheight(),// tempImage.height,
	stem.getX(),// stem.charXLoc,
	stem.getY(),// stem.charYLoc,
	stem.getHeight(),// tempImage.width,
	stem.getHeight());// tempImage.height);
	
	stem.printCorners();

	//ctx.clearRect(0,0,1000,600);
	
	var showLocX = "x: " + this.mousePosX;
	var showLocY = "y: " + this.mousePosY;
	printWords.AddToList(showLocX);
	printWords.AddToList(showLocY);

	// var temp = "11111 leftClick is: " + leftClick;
	// printWords.AddToList(temp);
	// var temp = "22222 rightClick is: " + rightClick;
	// printWords.AddToList(temp);
		
	printWords.displayList();
	
}//end of mainloop

