
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

}

//setMouse, because I'm not necessarily going to move the icon. The mouse
//might not even be on the object. But even if it is, the user might not 
//might not move the object. 
HealthObj.prototype.setMouse = function(x,y){
	this.cci.setMouse(x,y);
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
		this.swidth = 200;
		//Optional. The height of the clipped image
		this.sheight = 200;
		//The x coordinate where to place the image on the canvas
		this.x = self.XLoc;
		
		//document.write("from within HealthObj.prototype.SSI this.XLoc is: " + self.XLoc + "<br>");
		
		//self.XLoc += 10;
		
		//document.write("that.other1 is: " + that.other1 + "<br>");
		
		//The y coordinate where to place the image on the canvas
		this.y = self.YLoc;
		//Optional. The width of the image to use (stretch or reduce the image)
		this.width = 70;
		//Optional. The height of the image to use (stretch or reduce the image)
		this.height = 70;
		
		//this.stringy = "no way!";
		
		//document.write("--SSI end <br>");
};

HealthObj.prototype.Square = function(tempSelf){
	
	this.self = tempSelf;
	
	this.mousePosX = 0; 
	this.mousePosY = 0; 
	
	//upper right corner
	this.URX = 0; //upper right x
	this.URY = 0; //upper right y 
	
	this.LRX = 0; //lower right x
	this.LRY = 0; //lower right y
	
	this.ULX = 0; //upper left x
	this.ULY = 0; //upper left y
	
	this.LLX = 0; //lower left x 
	this.LLY = 0; //lower left y
	
	this.updateLoc();
	
};

HealthObj.prototype.Square.prototype.setMouse = function(x,y){

	this.mousePosX = x;
	this.mousePosX = y;

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

HealthObj.prototype.Square.prototype.updateLoc = function(){

	this.URX = this.mousePosX; //upper right x
	this.URY = this.mousePosY; //upper right y 

	//lower right corner
	this.LRX = this.URX;//lower right y 
	this.LRY = this.URY - this.self.array[0].height;//lower right y 

	//upper left corner
	this.ULX = this.URX - this.self.array[0].width;//upper left x 
	this.ULY = this.URY;//upper left y	

	//lower left corner
	this.LLX = this.URX - this.self.array[0].width;//lower left x 
	this.LLY = this.URY - this.self.array[0].height;//upper left y	

}

HealthObj.prototype.contains = function(){
	if(this.cci.contains() == true){
		printWords.AddToList("worked!!!!!!!!!!!!!!!!!");
		}
	else{
		printWords.AddToList("didn't work");
	}
};

HealthObj.prototype.Square.prototype.contains = function(){
	
	//printWords.AddToList("how about here?");
	
	var that = this;
	var containsX = false; 
	var containsY = false;
	
	//printWords.AddToList("3 bonky?");
	
	// var tempString = "the upper right hand corner is: " + this.URX + " , " + this.URX ;
	// printWords.AddToList(tempString);
	
	

	//is within the right range horizontally speaking 
	if(this.mousePosX <= this.URX && this.mousePosX >= this.LLX){
		containsX = true;
		}
		
	//is within the right range vertically speaking
	if(this.mousePosY <= this.URY && this.mousePosY >= this.LLY){
		containsY = true;
		}
	
	if(containsX && containsY){
		printWords.AddToList("YOU ARE on healthObj!!!");
		return true;
	}
	else{
		printWords.AddToList("not on healthObj");
		return false;		
	}
	
	

};//end of contains

HealthObj.prototype.printCorners_square  = function(){
	this.cci.printCorners();
};

HealthObj.prototype.Square.prototype.printCorners = function(){

	printWords.AddToList("--start, square");

	var temp1 = "this.URX and this.URY: " +  this.URX + " , " + this.URY;
	printWords.AddToList(temp1);
	var temp1 = "this.ULX and this.ULY: " +  this.ULX + " , " + this.ULY;
	printWords.AddToList(temp1);
	var temp1 = "this.LRX and this.LRY: " +  this.LRX + " , " + this.LRY;
	printWords.AddToList(temp1);
	var temp1 = "this.LLX and this.LLY: " +  this.LLX + " , " + this.LLY;
	printWords.AddToList(temp1);

	printWords.AddToList("--end, square");
};


HealthObj.prototype.printCorners_ssi = function(){

	printWords.AddToList("--start, ssi");


	var temp1 = "(upper left corner): " +  this.getX() + " , " + this.getY();
	printWords.AddToList(temp1);
	
	var temp1 = "(lower left corner): " +  this.getX()  + " , " + (this.getY() - this.getHeight());
	printWords.AddToList(temp1);	

	var temp1 = "(upper right corner): " + (this.getX() + this.getWidth())  + " , " + this.getY();
	printWords.AddToList(temp1);

	var temp1 = "(lower right corner): " +  (this.getX() + this.getWidth())  + " , " + (this.getY() - this.getHeight());
	printWords.AddToList(temp1);		

	printWords.AddToList("--end, ssi");
};



