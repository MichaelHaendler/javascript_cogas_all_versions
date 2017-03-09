

//printWords.AddToList(temp);
var mike = new Person();
var stem = new genObj();
var gun = new gen_gun();
//stem.setImage("gun_icon_1");
var i2 = 0;

var boxee = new Box("testing");
boxee.drawAt(50,50);

var boxes = new Boxes();
boxes.setAt(100,80);
boxes.addBox("boomy11111111111111111111111111111111");
boxes.addBox("hello");


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
		

	stem.setMouse(this.mousePosX,this.mousePosY,leftClick,rightClick);  
	stem.movement();
	
	// if(i2 < 10){
		// console.log(i2);
		// var i = 23 + i2;
		// stem.setMouse(i,i,true,rightClick);
		// stem.movement();
		// i2++;
	// }
	
	
	//stem.contains();
	// //stem.printCorners_square();
	// //stem.printCorners_ssi();
	
	
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
	
	//stem.printCorners();

	//ctx.clearRect(0,0,1000,600);
	
	var showLocX = "x: " + this.mousePosX;
	var showLocY = "y: " + this.mousePosY;
	printWords.AddToList(showLocX);
	printWords.AddToList(showLocY);

	// var temp = "11111 leftClick is: " + leftClick;
	// printWords.AddToList(temp);
	// var temp = "22222 rightClick is: " + rightClick;
	// printWords.AddToList(temp);
	// printWords.AddToList(stem.test());
	// printWords.AddToList(stem.test_square());
	// printWords.AddToList(stem.test_ssi());
	

	boxee.draw();//for testing only
	
	boxes.contains(this.mousePosX,this.mousePosY);
	boxes.draw();
	
	//printWords.AddToList(testFunction(1,mike.testing));
	
	printWords.displayList();
	
}//end of mainloop

