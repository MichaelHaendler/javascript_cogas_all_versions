
function HealthObj(amount,x,y){

	var that = this;

	document.write("<br><br>creating HealthObj instance <br>");

	temp1 = "inputted x value is: " + x + "<br>";
	undefined 
	document.write(temp1);
	
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
	
	//this.image_name = "health_icon_1";

}

// //method call constructor
// HealthObj.prototype.mcc = function(){

	// var that = this;

	// document.write("--mcc start <br>");

	// this.array[0] = new this.SSI(this);//emulating a private class. 
	
	// //worked
	// document.write("from within HealthObj.prototype.mcc this.array[0].height is: " + this.array[0].height +" <br>");

	// this.cci = new this.Square(this); //cci == contains check instance. see if mouse is on object. 
	
	// document.write("--mcc start <br>");
// };


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
		this.x = this.XLoc;
		
		document.write("from within HealthObj.prototype.SSI this.XLoc is: " + self.XLoc + "<br>");
		
		self.XLoc += 10;
		
		//document.write("that.other1 is: " + that.other1 + "<br>");
		
		//The y coordinate where to place the image on the canvas
		this.y = this.YLoc;
		//Optional. The width of the image to use (stretch or reduce the image)
		this.width = 70;
		//Optional. The height of the image to use (stretch or reduce the image)
		this.height = 70;
		
		//this.stringy = "no way!";
		
		//document.write("--SSI end <br>");
};

HealthObj.prototype.getWidth = function(){
	var that = this;
	return that.array[0].width;
};

HealthObj.prototype.getHeight = function(){
	//document.write("--getHeight start <br>");
	var that = this;
	//document.write("into getHeight <br>");
	return this.array[0].height;
	//document.write("--getHeight start <br>");
};

HealthObj.prototype.Square = function(self){

	//document.write("--Square start <br>");

	//var that = this;
	
	//array2 = this.array;
	
	//document.write("00from within HealthObj.prototype.Square self.XLoc is: " + self.XLoc + "<br>");
	
	//is from SSI
	//document.write("from within HealthObj.prototype.Square this.sy is: " + self.sy + "<br>");
	
	//Cannot read property '0' of undefined 
	//document.write("from within HealthObj.prototype.Square this.array[0] is: " + this.array[0] + "<br>");
	//Cannot read property '0' of undefined 
	//document.write("from within HealthObj.prototype.Square self.array[0].height is: " + self.array[0].height + "<br>");
	
	this.mousePosX = self.mouseXLoc; 
	this.mousePosY = self.mouseYLoc; 
	
	//upper right corner
	this.URX = this.XLoc; //upper right x
	this.URY = this.YLoc; //upper right y 
	
	//temp = "value of YLoc is: " + this.YLoc + "<br>";
	
	//document.write(temp);
	
	//lower right corner
	this.LRX = this.URX;//lower right y 
	this.LRY = this.URY - this.array[0].height;//lower right y 

	//upper left corner
	this.ULX = this.URX - this.getWidth();//upper left x 
	this.ULY = this.URY;//upper left y	

	//lower left corner
	this.LLX = this.URX - this.getWidth();//lower left x 
	this.LLY = this.URY - this.getHeight();//upper left y	
	
	//this.testVal = "hello1234";
	
	
	//blah = "11XLoc is: " + this.XLoc + "<br>";
	
	//document.write(blah);
	
	//document.write("--Square end <br>");

};

HealthObj.prototype.Square.prototype.contains = function(x,y){
	
	//printWords.AddToList("how about here?");
	
	var that = this;
	var containsX = false; 
	var containsY = false;
	
	//printWords.AddToList("3 bonky?");
	
	// var tempString = "the upper right hand corner is: " + this.URX + " , " + this.URX ;
	// printWords.AddToList(tempString);
	
	

	//is within the right range horizontally speaking 
	if(x <= this.URX && x >= this.LLX){
		containsX = true;
		}
		
	//is within the right range vertically speaking
	if(x <= this.URY && x >= this.LLY){
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


