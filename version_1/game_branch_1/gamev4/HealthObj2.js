

function HealthObj(amount,x,y){

	document.write("got to the right place <br>");

	temp1 = "x here is: " + x + "<br>";
	
	document.write(temp1);
	
	this.XLoc = (typeof x === 'undefined') ? 0 : x; 
	this.YLoc = (typeof y === 'undefined') ? 0 : y;
	
	// this.xLoc = x;
	// this.yLoc = y;
	
	//this.xLoc = 66;
	//this.yLoc = 77;
	
	//temp1 = "xLoc here is: " + this.xLoc + "<br>";
	
	//document.write(temp1);
	
	//health increment. amount to increment person's health by. 
	//note: 20 was randomly chosen. 
	this.healthInc = (typeof amount === 'undefined') ? 20 : amount; 
	
	this.healthInc = amount;
	
	this.curr_see_mouse = false;
	this.mouseXLoc = 0;
	this.mouseYLoc = 0;
	
	// this.array = new Array(1);
	// this.array[0] = new this.SSI();//emulating a private class. 
	
	this.array = new this.SSI();
	
	// temp = "number is: " + this.array[0].height + "<br>";
	// document.write(temp);
	
	this.image_name = "health_icon_1";
	
	this.cci = new this.Square(); //cci == contains check instance. see if mouse is on object. 
	
	var other1 = "zoomy1";

}

HealthObj.prototype.getX = function(){
	var that = this;
	return that.XLoc;
}

HealthObj.prototype.retImage = function(){
	var that = this;
	return that.image_name;
}

HealthObj.prototype.getSSI = function(){
	var that = this;
	return that.array[0];
}

//SSI access

HealthObj.prototype.SSI = function(){

		document.write("SSI start <br>");

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
		this.x = that.XLoc;
		
		
		document.write("aaahhh that.xLoc is: " + that.XLoc + "<br>");
		
		document.write("that.other1 is: " + that.other1 + "<br>");
		
		//The y coordinate where to place the image on the canvas
		this.y = that.YLoc;
		//Optional. The width of the image to use (stretch or reduce the image)
		this.width = 70;
		//Optional. The height of the image to use (stretch or reduce the image)
		this.height = 70;
		
		this.stringy = "no way!";
		
		document.write("SSI end <br>");
}

HealthObj.prototype.getSx = function(){
	var that = this;
	return that.array[0].sx;
}

HealthObj.prototype.getSy = function(){
	var that = this;
	return that.array[0].sy;
}

HealthObj.prototype.getSwidth = function(){
	var that = this;
	return that.array[0].swidth;
}

HealthObj.prototype.getSheight = function(){
	var that = this;
	return that.array[0].sheight;
}

HealthObj.prototype.getX = function(){
	var that = this;
	return that.array[0].x;
}

HealthObj.prototype.getY = function(){
	var that = this;
	return that.array[0].y;
}

HealthObj.prototype.getWidth = function(){
	var that = this;
	return that.array[0].width;
}

HealthObj.prototype.getHeight = function(){
	var that = this;
	document.write("into getHeight <br>");
	return that.array[0].height;
}

//end of SSI stuff

////detection stuff

/*
HealthObj.prototype.Square = function(){

	var that = this;
	
	this.URX = that.x; //upper right x
	this.URY = that.y; //upper right y 
	
	this.LRX = this.URX;//lower right y 
	this.LRY = this.URY - that.height;//lower right y 

	this.ULX = this.URX - that.width;//upper left x 
	this.ULY = this.URY;//upper left y	

	this.LLX = this.URX - that.width;//lower left x 
	this.LLY = this.URY - that.height;;//upper left y	
	
	this.testVal = "hello1234";
	
	
	blah = "11XLoc is: " + that.XLoc + "<br>";
	
	document.write(blah);

}
*/

HealthObj.prototype.Square = function(){

	document.write("Square start <br>");

	var that = this;
	
	//array2 = this.array;
	
	document.write("that.sy is: " + that.sy + "<br>");
	
	document.write("1111boom <br>");
	document.write("2222that.array[0].height is: " + that.array.height + "<br>");
	
	//upper right corner
	this.URX = that.XLoc; //upper right x
	this.URY = that.YLoc; //upper right y 
	
	temp = "value of YLoc is: " + that.YLoc + "<br>";
	
	document.write(temp);
	
	//lower right corner
	this.LRX = this.URX;//lower right y 
	this.LRY = this.URY - that.array[0].height;//lower right y 

	//upper left corner
	this.ULX = this.URX - that.getWidth();//upper left x 
	this.ULY = this.URY;//upper left y	

	//lower left corner
	this.LLX = this.URX - that.getWidth();//lower left x 
	this.LLY = this.URY - that.getHeight();//upper left y	
	
	this.testVal = "hello1234";
	
	
	blah = "11XLoc is: " + that.XLoc + "<br>";
	
	document.write(blah);
	
	document.write("Square end <br>");

}

HealthObj.prototype.Square.prototype.getUrx = function(){

	var that = this;
	
	return that.URX;

}

HealthObj.prototype.Square.prototype.contains = function(){
	
	printWords.AddToList("how about here?");
	
	var that = this;
	var containsX = false; 
	var containsY = false;
	
	printWords.AddToList("3 bonky?");
	
	temp

	//is within the right range horizontally speaking 
	if(that.mousePosX <= that.URX && that.mousePosX >= that.LLX){
		containsX = true;
		}
		
	//is within the right range vertically speaking
	if(that.mousePosY <= that.URY && that.mousePosX >= that.LLY){
		containsY = true;
		}
	
	if( containsX && containsY){
		printWords.AddToList("YOU ARE on healthObj!!!");
		return true;
	}
	else{
		printWords.AddToList("not on healthObj");
		return false;		
	}
	
	

}//end of contains

HealthObj.prototype.containsMouse = function(event){

	printWords.AddToList("testing that.cci.contains");

	var that = this;
	
	return that.cci.contains(event);


}

HealthObj.prototype.testing = function(){

	var that = this;
	
	var tempString = "didn't work";
	
	tempString = that.cci.testVal;
	
	printWords.AddToList(tempString);


}


//upper right hand corner
HealthObj.prototype.urhc = function(){

	var that = this;
	var that2 = that;
	
	var tempX = this.cci.URX;
	
	var tempY = that.cci.URY;
	
	var string = "upper right hand corner is: " + tempX + " , " + tempY;

	printWords.AddToList(string);
	
	//----------
	
	var tempString = "didn't work";
	
	tempString = "the value is: " + that.cci.testVal;
	
	printWords.AddToList(tempString);
	
	tempString = "22the x value is: " + that.XLoc;
	
	printWords.AddToList(tempString);
	
	
}