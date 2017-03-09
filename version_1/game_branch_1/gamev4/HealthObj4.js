
function HealthObj(amount,x,y){

	var that = this;

	// document.write("<br><br>creating HealthObj instance <br>");

	// temp1 = "inputted x value is: " + x + "<br>";
	//document.write(temp1);
	
	this.XLoc = (typeof x === 'undefined') ? 0 : x; 
	this.YLoc = (typeof y === 'undefined') ? 0 : y;
	
	//health increment. amount to increment person's health by. 
	//note: 20 was randomly chosen. 
	this.healthInc = (typeof amount === 'undefined') ? 20 : amount; 
	
	this.healthInc = amount;
	
	this.curr_see_mouse = false;
	this.mouseXLoc = 0;
	this.mouseYLoc = 0;
	//var instancefields = [];
	//instancefields["HealthObj"] = this;
	/*this array holds either the graphic or set of graphics associated
	with a health item. At this point there is only one graphic. However, 
	I'm trying to set it up so that if I ever want there to be multiple graphics
	for a single item, that it will be easy to implement.*/
	this.array = new Array(1);
	//this.array[0] = "wrong value";//just a default value for testing. 
	
	this.array[0] = new this.SSI(this);//emulating a private class. 
	
	//this.printX();
	
	//instancefields["SSI"] = this.array[0].getThis();

	this.cci = new this.Square(this); //cci == contains check instance. see if mouse is on object. 
	
	// temp = "number is: " + this.array[0].height + "<br>";
	// document.write(temp);
	
	this.image_name = "health_icon_1";
	
	//this.left_mouse_button = -1;
	
	this.movedBefore = false;
	
	this.firstClick = [0,0];//change to 'lastMove'
	
	this.leftClick = false;
	
	this.rightClick = false;
	
	//this.hadContained = false;
	

}

//I don't need the mouse location each and every time it moves. However, 
//if I find out that the icon has been clicked on, I will need those mouse
//locations 
HealthObj.prototype.setMouse = function(x,y,leftClick,rightClick){
	// this.array[0].setMouse(x,y);
	// this.cci.setMouse(x,y);
	
	// var temp = "(setMouse) this.XLoc is: " + this.XLoc;
	// printWords.AddToList(temp);
	
	// var temp = "(setMouse) this.leftClick is: " + this.leftClick;
	// printWords.AddToList(temp);
	
	this.XLoc = x;
	this.YLoc = y;
	this.leftClick = leftClick;
	this.rightClick = rightClick;
	this.cci.mousePosX = x;
	this.cci.mousePosY = y;	
	
};

HealthObj.prototype.retImage = function(){
	return this.image_name;
}

HealthObj.prototype.getSx = function(){
	return this.array[0].sx;
}

HealthObj.prototype.getSy = function(){
	return this.array[0].sy;
}

HealthObj.prototype.getSwidth = function(){
	return this.array[0].swidth;
}

HealthObj.prototype.getSheight = function(){
	return this.array[0].sheight;
}

HealthObj.prototype.getX = function(){
	return this.array[0].x;
}

HealthObj.prototype.getY = function(){
	return this.array[0].y;
}

HealthObj.prototype.getWidth = function(){
	return this.array[0].width;
}

HealthObj.prototype.getHeight = function(){
	return this.array[0].height;
}


HealthObj.prototype.SSI = function(self){

		//document.write("--SSI start <br>");
		//var self = that;
		var that = this;

		//Optional. The x coordinate where to start clipping
		this.sx = 0;
		//Optional. The y coordinate where to start clipping
		this.sy = 0;
		//Optional. The width of the clipped image
		this.swidth = 128;
		//Optional. The height of the clipped image
		this.sheight = 128;
		//The x coordinate where to place the image on the canvas
		this.x = self.XLoc;
		
		//document.write("from within HealthObj.prototype.SSI this.XLoc is: " + self.XLoc + "<br>");
		
		//self.XLoc += 10;
		
		//document.write("that.other1 is: " + that.other1 + "<br>");
		
		//The y coordinate where to place the image on the canvas
		this.y = self.YLoc;
		//Optional. The width of the image to use (stretch or reduce the image)
		this.width = 45;
		//Optional. The height of the image to use (stretch or reduce the image)
		this.height = 45;
		
		//this.stringy = "no way!";
		
		//document.write("--SSI end <br>");
};


// HealthObj.prototype.printCorners_ssi = function(){

	// printWords.AddToList("--start, ssi");


	// var temp1 = "(upper left corner): " +  this.getX() + " , " + this.getY();
	// printWords.AddToList(temp1);
	
	// var temp1 = "(lower left corner): " +  this.getX()  + " , " + (this.getY() - this.getHeight());
	// printWords.AddToList(temp1);	

	// var temp1 = "(upper right corner): " + (this.getX() + this.getWidth())  + " , " + this.getY();
	// printWords.AddToList(temp1);

	// var temp1 = "(lower right corner): " +  (this.getX() + this.getWidth())  + " , " + (this.getY() - this.getHeight());
	// printWords.AddToList(temp1);		

	// printWords.AddToList("--end, ssi");
// };

HealthObj.prototype.Square = function(tempSelf){
	
	this.self = tempSelf;
	
	this.mousePosX = 0; 
	this.mousePosY = 0; 
	
	this.ULX = this.self.getX(); //upper left x
	this.ULY = this.self.getY(); //upper left y	
	
	this.LLX = this.self.getX(); //lower left x 
	this.LLY = (this.self.getY() + this.self.getHeight()); //lower left y	
	
	//upper right corner
	this.URX =  (this.self.getX() + this.self.getWidth());//upper right x
	this.URY =  this.self.getY();//upper right y 
	
	this.LRX = (this.self.getX() + this.self.getWidth()); //lower right x
	this.LRY = (this.self.getY() + this.self.getHeight()); //lower right y
};

HealthObj.prototype.Square.prototype.setMouse = function(x,y){

	this.mousePosX = x;
	this.mousePosY = y;

}


// HealthObj.prototype.Square.prototype.updateLoc = function(){

	// this.URX = this.mousePosX; //upper right x
	// this.URY = this.mousePosY; //upper right y 

	// //lower right corner
	// this.LRX = this.URX;//lower right y 
	// this.LRY = this.URY - this.self.array[0].height;//lower right y 

	// //upper left corner
	// this.ULX = this.URX - this.self.array[0].width;//upper left x 
	// this.ULY = this.URY;//upper left y	

	// //lower left corner
	// this.LLX = this.URX - this.self.array[0].width;//lower left x 
	// this.LLY = this.URY - this.self.array[0].height;//upper left y	

// }

// HealthObj.prototype.Square.prototype.updateLoc = function(){

	// this.URX = this.mousePosX; //upper right x
	// this.URY = this.mousePosY; //upper right y 

	// //lower right corner
	// this.LRX = this.URX;//lower right y 
	// this.LRY = this.URY - this.self.array[0].height;//lower right y 

	// //upper left corner
	// this.ULX = this.URX - this.self.array[0].width;//upper left x 
	// this.ULY = this.URY;//upper left y	

	// //lower left corner
	// this.LLX = this.URX - this.self.array[0].width;//lower left x 
	// this.LLY = this.URY - this.self.array[0].height;//upper left y	

// }

HealthObj.prototype.contains = function(){
	//printWords.AddToList("got into CONTAINS");
	if(this.cci.contains() == true){
		//printWords.AddToList("worked!!!!!!!!!!!!!!!!!");
		return true;
		}
	else{
		//printWords.AddToList("didn't work");
		return false;
	}
};

HealthObj.prototype.Square.prototype.contains = function(){
	
	//printWords.AddToList("got into square.contains!!!");
	
	var that = this;
	var containsX = false; 
	var containsY = false;
	
	//printWords.AddToList("3 bonky?");
	
	// var tempString = "the upper right hand corner is: " + this.URX + " , " + this.URX ;
	// printWords.AddToList(tempString);
	// var temp = "-----";
	// printWords.AddToList(temp);
	
	// var temp = "this.LLX is: " + this.LLX;
	// printWords.AddToList(temp);
	// var temp = "this.LRX is: " + this.LRX;
	// printWords.AddToList(temp);	
	
	// var temp = "this.ULY is: " + this.ULY;
	// printWords.AddToList(temp);
	// var temp = "this.LLY is: " + this.LLY;
	// printWords.AddToList(temp);	
	
	// var temp = "this.mousePosX is: " + this.mousePosX;
	// printWords.AddToList(temp);	
	
	// var temp = "-----";
	//printWords.AddToList(temp);

	//is within the right range horizontally speaking 
	if(this.mousePosX >= this.LLX && this.mousePosX <= this.LRX){
		containsX = true;
		//printWords.AddToList("in x");
		}
	// else{
		// printWords.AddToList("NOT in x");
	// }
	
		
	//is within the right range vertically speaking
	if(this.mousePosY >= this.ULY && this.mousePosY <= this.LLY){
		containsY = true;
		//printWords.AddToList("in y");
		}
	// else{
		// printWords.AddToList("NOT in y");
	// }
	
	if(containsX && containsY){
		//printWords.AddToList("returning TRUE00000");
		return true;
	}
	else{
		//printWords.AddToList("returning false1111111");
		return false;		
	}
	
	

};//end of contains

// HealthObj.prototype.Square.prototype.contains = function(){
	
	// printWords.AddToList("how about here?");
	
	// var that = this;
	// var containsX = false; 
	// var containsY = false;
	
	// var temp = "this.mousePosX is: " + this.mousePosX;
	
	// printWords.AddToList(temp);

	// //is within the right range horizontally speaking 
	// if(this.mousePosX <= this.URX && this.mousePosX >= this.LLX){
		// containsX = true;
		// }
		
	// //is within the right range vertically speaking
	// if(this.mousePosY <= this.URY && this.mousePosX >= this.LLY){
		// containsY = true;
		// }
	
	// if( containsX && containsY){
		// printWords.AddToList("YOU ARE on healthObj!!!");
		// return true;
	// }
	// else{
		// printWords.AddToList("not on healthObj");
		// return false;		
	// }
	
	

// }//end of contains

HealthObj.prototype.printCorners_square  = function(){
	this.cci.printCorners();
};

HealthObj.prototype.Square.prototype.printCorners = function(){

	printWords.AddToList("--start, square");

	var temp1 = "this.ULX and this.ULY: " +  this.ULX + " , " + this.ULY;
	printWords.AddToList(temp1);	
	
	var temp1 = "this.LLX and this.LLY: " +  this.LLX + " , " + this.LLY;
	printWords.AddToList(temp1);
	

	var temp1 = "this.URX and this.URY: " +  this.URX + " , " + this.URY;
	printWords.AddToList(temp1);

	var temp1 = "this.LRX and this.LRY: " +  this.LRX + " , " + this.LRY;
	printWords.AddToList(temp1);


	printWords.AddToList("--end, square");
};


HealthObj.prototype.printCorners = function(){
	printWords.AddToList("-------------");
	this.printCorners_ssi();
	printWords.AddToList("-------------");
	printWords.AddToList("-------------");
	this.printCorners_square();
	printWords.AddToList("-------------");

};

HealthObj.prototype.printCorners_ssi = function(){

	printWords.AddToList("--start, ssi");


	var temp1 = "(upper left corner): " +  this.getX() + " , " + this.getY();
	printWords.AddToList(temp1);
	
	var temp1 = "(lower left corner): " +  this.getX()  + " , " + (this.getY() + this.getHeight());
	printWords.AddToList(temp1);	

	var temp1 = "(upper right corner): " + (this.getX() + this.getWidth())  + " , " + this.getY();
	printWords.AddToList(temp1);

	var temp1 = "(lower right corner): " +  (this.getX() + this.getWidth())  + " , " + (this.getY() + this.getHeight());
	printWords.AddToList(temp1);		

	printWords.AddToList("--end, ssi");
};

/*update location...because you're not necessarily moving it.
initially had x and y parameters for this function, but I changed it so that
those weren't needed. I like my objects as self sufficient as possible. 
*/
HealthObj.prototype.movement = function(){
	var x = 0;
	var y = 1;
	
	// var temp = "(movement) this.XLoc is: " + this.XLoc;
	// printWords.AddToList(temp);
	
	// var temp = "(movement) this.movedBefore is: " + this.movedBefore;
	// printWords.AddToList(temp);
	
	// var temp = "(movement) this.leftClick is: " + this.leftClick;
	// printWords.AddToList(temp);	
	
	// var temp = "(movement) this.contains() is: " + this.contains();
	// printWords.AddToList(temp);
	
	/*
	if we had moved before, see a left click, and our box contains a mouse, we assume
	it's a continuation of a previous movement, and so we take the value of our previous click, 
	find the difference between it and the next movement we made with the mouse (the current
	location with the mouse), and then apply (either subtract, or "subtract subtract" meaning add)
	said difference to the four corners of our icon. 
	*/
	if(this.movedBefore && this.leftClick && this.contains()){
		//This means applying it to where the icon itself is drawn, as well 
		//as to the detection software that allows you to interact with the icon.
		this.updateLocs((this.firstClick[x] - this.XLoc), (this.firstClick[y] - this.YLoc));	
	}
	
	
	/*
	if we hadn't just been moving the icon around, and we detect a left click, 
	as well as see that the box does indeed contain the mouse, set the values. 
	*/
	if((this.movedBefore == false) && this.leftClick && this.contains()){
		this.movedBefore = true;
		this.firstClick[x] = this.XLoc;
		this.firstClick[y] = this.YLoc;
		
	}	
	
	/*
	if the mouse HAD been dragging the icon around just a moment ago ("this.movedBefore == true") 
	but now the leftClick is no longer being held down, then basically just clear all the saved
	info
	*/
	if(this.LeftClick == false && this.movedBefore == true){
		this.movedBefore = false;
		this.firstClick[x] = 0;
		this.firstClick[y] = 0;
	}

};

HealthObj.prototype.getCurrX = function(){

	return this.cci.mousePosX;
}

HealthObj.prototype.updateLocs = function(xVal,yVal){	
	var x = 0;
	var y = 1;
	//save this last move
	this.firstClick[x] = xVal;
	this.firstClick[y] = yVal;	
	//update location of image
	this.array[0].updateLocs(xVal,yVal);
	//update location of interacting software. 
	this.cci.updateLocs(xVal,yVal);
};

// HealthObj.prototype.Square.prototype.updateLocs = function(x,y){

	// this.ULX -= x;
	// this.ULY -= y;	
	
	// this.LLX -= x;
	// this.LLY -= y;	
	
	// //upper right corner
	// this.URX -= x;
	// this.URY -= y;
	
	// this.LRX -= x;
	// this.LRY -= y;


// }

// HealthObj.prototype.SSI.prototype.updateLocs = function(x,y){

	// this.x -= x;
	// this.y -= y;
// }

HealthObj.prototype.Square.prototype.updateLocs = function(x,y){

	this.ULX = this.ULX - x;
	this.ULY = this.ULY - y;	
	
	this.LLX = this.LLX - x;
	this.LLY = this.LLY - y;
	
	this.URX = this.URX - x;
	this.URY = this.URY - y;
	
	//lower right
	this.LRX = this.LRX - x;
	this.LRY = this.LRY - y;


}

HealthObj.prototype.SSI.prototype.updateLocs = function(x,y){

	this.x = this.x - x;
	this.y = this.y - y;

}

HealthObj.prototype.SSI.prototype.setMouse = function(x,y){

	this.x = x;
	this.y = y;
}


