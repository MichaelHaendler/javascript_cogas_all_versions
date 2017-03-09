

function genObj(){

	var that = this;
	printWords.AddToList("remaking object!!!!!!");

	// document.write("<br><br>creating genObj instance <br>");

	// temp1 = "inputted x value is: " + x + "<br>";
	//document.write(temp1);
	
	// this.XLoc = (typeof x === 'undefined') ? 0 : x; 
	// this.YLoc = (typeof y === 'undefined') ? 0 : y;
	this.XLoc = 0;
	this.YLoc = 0;
	
	//health increment. amount to increment person's health by. 
	//note: 20 was randomly chosen. 
	//this.healthInc = (typeof amount === 'undefined') ? 20 : amount; 
	this.healthInc = 20;
	
	this.curr_see_mouse = false;
	this.mouseXLoc = 0;
	this.mouseYLoc = 0;
	//var instancefields = [];
	//instancefields["genObj"] = this;
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
	
	this.still_holding_down = false;
	

}

genObj.prototype.updateLocs = function(xVal,yVal){	
	
	var temp = "yVal is: " + yVal;
	printWords.AddToList(temp);
	var temp = "xVal is: " + xVal;
	printWords.AddToList(temp);
	
	var x = 0;
	var y = 1;
	
	//console.log("this.firstClick[x] was : " + this.firstClick[x]);
	//console.log("this.firstClick[y] was : " + this.firstClick[y]);	
	
	//save this last move
	this.firstClick[x] = this.XLoc;
	this.firstClick[y] = this.YLoc;	
	
	//console.log("this.firstClick[x] now is : " + this.firstClick[x]);
	//console.log("this.firstClick[y] now is : " + this.firstClick[y]);	
	
	//console.log("this.array[0].x was : " + this.array[0].x);
	//console.log("this.array[0].y was : " + this.array[0].y);
	
	//update location of image
	this.array[0].updateLocs(xVal,yVal);
	//console.log("so this.array[0].x now is : " + this.array[0].x);
	//console.log("and this.array[0].y now is : " + this.array[0].y);
	
	
	//console.log("this.cci.ULX was : " + this.cci.ULX);
	//console.log("this.cci.ULY was : " + this.cci.ULY);
	
	//update location of interacting software. 
	this.cci.updateLocs(xVal,yVal);
	
	//console.log("this.cci.ULX now is : " + this.cci.ULX);
	//console.log("this.cci.ULY now is : " + this.cci.ULY);
};

genObj.prototype.getCurrX = function(){

	return this.cci.mousePosX;
};

/*update location...because you're not necessarily moving it.
initially had x and y parameters for this function, but I changed it so that
those weren't needed. I like my objects as self sufficient as possible. 
*/
genObj.prototype.movement = function(){
	var x = 0;
	var y = 1;
	
	// var temp = "(movement)";
	// printWords.AddToList(temp);
	
	

	// var temp = "(movement) this.movedBefore is: " + this.movedBefore;
	// printWords.AddToList(temp);
	// //console.log(temp);
	
	// var temp = "(movement) this.leftClick is: " + this.leftClick;
	// printWords.AddToList(temp);	
	// //console.log(temp);
	
	// var temp = "(movement) this.contains() is: " + this.contains();
	// printWords.AddToList(temp);
	// //console.log(temp);
	
	// var temp = "(movement) this.firstClick[x] is: " + this.firstClick[x];
	// printWords.AddToList(temp);	
	// //console.log(temp);
	
	// var temp = "(movement) this.firstClick[y] is: " + this.firstClick[y];
	// printWords.AddToList(temp);	
	// //console.log(temp);
	
	// var temp = "(movement) this.XLoc is: " + this.XLoc;
	// //console.log(temp);	
	
	// var temp = "(movement) this.YLoc is: " + this.YLoc;
	//console.log(temp);

	// var temp = "(movement) this.XLoc is: " + this.XLoc;
	// printWords.AddToList(temp);	

	// var temp = "(movement) this.YLoc is: " + this.YLoc;
	// printWords.AddToList(temp);	
	
	//I think the cause of my issues is not being able to get into this if statement
	if(this.LeftClick == false){
		//printWords.AddToList("resetting------------------------------------------");
		//console.log("resetting--------------");
		this.movedBefore = false;
		this.firstClick[x] = 0;
		this.firstClick[y] = 0;
	}
	
	if(this.leftClick && this.still_holding_down){
		this.updateLocs((this.XLoc - this.firstClick[x]), (this.YLoc - this.firstClick[y]));
	}
	else{
		this.still_holding_down = false;
	}
	
	/*
	if we had moved before, see a left click, and our box contains a mouse, we assume
	it's a continuation of a previous movement, and so we take the value of our previous click, 
	find the difference between it and the next movement we made with the mouse (the current
	location with the mouse), and then apply (either subtract, or "subtract subtract" meaning add)
	said difference to the four corners of our icon. 
	*/
	if(this.movedBefore && this.leftClick && this.contains()){
		//printWords.AddToList("clicked on box (moved)");
		//console.log("clicked on box (moved)");
		//This means applying it to where the icon itself is drawn, as well 
		//as to the detection software that allows you to interact with the icon.
		this.updateLocs((this.XLoc - this.firstClick[x]), (this.YLoc - this.firstClick[y]));	
		this.still_holding_down = true; 
	}
	
	/*
	if the mouse HAD been dragging the icon around just a moment ago ("this.movedBefore == true") 
	but now the leftClick is no longer being held down, then basically just clear all the saved
	info
	*/
	// if((this.LeftClick == false) && (this.movedBefore == true)){
		// printWords.AddToList("resetting------------------------------------------");
		// console.log("resetting--------------");
		// this.movedBefore = false;
		// this.firstClick[x] = 0;
		// this.firstClick[y] = 0;
	// }
	
	/*
	if we hadn't just been moving the icon around, and we detect a left click, 
	as well as see that the box does indeed contain the mouse, set the values. 
	*/
	if((this.movedBefore == false) && this.leftClick && this.contains()){
		//printWords.AddToList("clicked on box (not moved)");
		//console.log("clicked on box (not moved)");
		"clicked on box (moved)"
		////console.log("got here (not moved)");
		this.movedBefore = true;
		this.firstClick[x] = this.XLoc;
		this.firstClick[y] = this.YLoc;
		
		// var temp = "(movement) this.firstClick[x] is: " + this.firstClick[x];
		// printWords.AddToList(temp);	
		//console.log(temp);
		
		// var temp = "(movement) this.firstClick[y] is: " + this.firstClick[y];
		// printWords.AddToList(temp);	
		//console.log(temp);
		
	}	
	


};

genObj.prototype.printCorners_ssi = function(){

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

genObj.prototype.printCorners = function(){
	printWords.AddToList("-------------");
	this.printCorners_ssi();
	printWords.AddToList("-------------");
	printWords.AddToList("-------------");
	this.printCorners_square();
	printWords.AddToList("-------------");

};

genObj.prototype.printCorners_square  = function(){
	this.cci.printCorners();
};

genObj.prototype.contains = function(){
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

genObj.prototype.setImage = function(url){
	this.image_name = url;
}

genObj.prototype.retImage = function(){
	return this.image_name;
}

genObj.prototype.getSx = function(){
	return this.array[0].sx;
}

genObj.prototype.getSy = function(){
	return this.array[0].sy;
}

genObj.prototype.getSwidth = function(){
	return this.array[0].swidth;
}

genObj.prototype.getSheight = function(){
	return this.array[0].sheight;
}

genObj.prototype.getX = function(){
	return this.array[0].x;
}

genObj.prototype.getY = function(){
	return this.array[0].y;
}

genObj.prototype.getWidth = function(){
	return this.array[0].width;
}

genObj.prototype.getHeight = function(){
	return this.array[0].height;
};


//I don't need the mouse location each and every time it moves. However, 
//if I find out that the icon has been clicked on, I will need those mouse
//locations 
genObj.prototype.setMouse = function(x,y,leftClick,rightClick){
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

genObj.prototype.test = function(){

	return "genObj worked!";
};

genObj.prototype.test_square = function(){

	return this.cci.test();

};

genObj.prototype.test_ssi = function(){

	var temp = this.array[0];//randomly chosen

	return temp.test();

};