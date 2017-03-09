

var mike = new Person();
var stem = new HealthObj(50,40,40);

var mainloop = function (){

	var that = this;

	//var stem2 = new HealthObj(50,40,40);
	
	// document.body.onkeydown = function(event){
		// event = event || window.event;
	
	myCanvas.width = myCanvas.width;
	
	// var c=document.getElementById("myCanvas");
	// var ctx=c.getContext("2d");
	
	//mike.currLoc();
	
	mike.movement();
	var tempImage = mike.getSSI();
	
	//var printWords = new display_phrases_list(100,100);
	// printWords.AddToList("hello1");
	// printWords.AddToList("hello2");
	
	ctx.drawImage(document.images[mike.retImage()],tempImage.sx,tempImage.sy,tempImage.width,
	tempImage.height,mike.charXLoc,mike.charYLoc,tempImage.width,tempImage.height);
	
	//var tempImage = stem.getSSI();
	
	// ctx.drawImage(
	// document.images[stem.retImage()],
	// tempImage.sx,
	// tempImage.sy,
	// tempImage.width,
	// tempImage.height,
	// stem.charXLoc,
	// stem.charYLoc,
	// tempImage.width,
	// tempImage.height);	
	
	// stem.urhc();
	stem.setMouse(this.mousePosX,this.mousePosY);  
	stem.contains();
	stem.printCorners_square();
	stem.printCorners_ssi();
	
	//http://www.w3schools.com/tags/canvas_drawimage.asp
	ctx.drawImage(
	//document.images["health_icon_1"],
	document.images[stem.retImage()],
	stem.getSx(),
	stem.getSy(),// tempImage.sy,
	stem.getSwidth(),// tempImage.width,
	stem.getSheight(),// tempImage.height,
	stem.getX(),// stem.charXLoc,
	stem.getY(),// stem.charYLoc,
	stem.getHeight(),// tempImage.width,
	stem.getHeight());// tempImage.height);

	//ctx.clearRect(0,0,1000,600);
	
	var showLocX = "x: " + this.mousePosX;
	var showLocY = "y: " + this.mousePosY;
	printWords.AddToList(showLocX);
	printWords.AddToList(showLocY);
	
	printWords.displayList();
	
}//end of mainloop

