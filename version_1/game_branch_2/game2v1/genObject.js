

function genObj(){

	var that = this;
	//printWords.AddToList("remaking object!!!!!!");

	// document.write("<br><br>creating genObj instance <br>");

	// temp1 = "inputted x value is: " + x + "<br>";
	//document.write(temp1);
	
	// this.XLoc = (typeof x === 'undefined') ? 0 : x; 
	// this.YLoc = (typeof y === 'undefined') ? 0 : y;
	this.XLoc = 294;
	this.YLoc = 55;
	
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
	//this.array = new Array(1);
	//this.ssiObj = "wrong value";//just a default value for testing. 
	
	//this.ssiObj = new this.SSI(this);//emulating a private class. 
	
	//this.printX();
	
	//instancefields["SSI"] = this.ssiObj.getThis();

	this.cci = new this.Square(this); //cci == contains check instance. see if mouse is on object. 
	
	// temp = "number is: " + this.ssiObj.height + "<br>";
	// document.write(temp);
	
	this.image_name = "health_icon_1";
	
	//this.left_mouse_button = -1;
	
	this.movedBefore = false;
	
	this.firstClick = [0,0];//change to 'lastMove'
	
	this.leftClick = false;
	
	this.rightClick = false;
	
	//this.hadContained = false;
	
	this.still_holding_down = false;
	
	this.menuY = 0;
	this.menuHeight = 0;

}

genObj.prototype.updateLocs = function(xVal,yVal){	
	
	// var temp = "2yVal is: " + yVal;
	// printWords.AddToList(temp);
	// var temp = "2xVal is: " + xVal;
	// printWords.AddToList(temp);
	
	var x = 0;
	var y = 1;
	
	//console.log("this.firstClick[x] was : " + this.firstClick[x]);
	//console.log("this.firstClick[y] was : " + this.firstClick[y]);	
	
	//save this last move
	this.firstClick[x] = this.XLoc;
	this.firstClick[y] = this.YLoc;	
	
	//console.log("this.firstClick[x] now is : " + this.firstClick[x]);
	//console.log("this.firstClick[y] now is : " + this.firstClick[y]);	
	
	//console.log("this.ssiObj.x was : " + this.ssiObj.x);
	//console.log("this.ssiObj.y was : " + this.ssiObj.y);
	
	//update location of image
	this.cci.updateLocs(xVal,yVal);
	//console.log("so this.ssiObj.x now is : " + this.ssiObj.x);
	//console.log("and this.ssiObj.y now is : " + this.ssiObj.y);
	
	
	//console.log("this.cci.ULX was : " + this.cci.ULX);
	//console.log("this.cci.ULY was : " + this.cci.ULY);
	
	//update location of interacting software. 
	

	//console.log("got to updateLocs()-----");
	//this.cci.updateLocs(xVal,yVal);
	
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

	//printWords.AddToList("genObj.prototype.movement");
	var x = 0;
	var y = 1;
	
	// var temp = "(movement)";
	// printWords.AddToList(temp);
	
	

	// var temp = "(movement) this.movedBefore is: " + this.movedBefore;
	// printWords.AddToList(temp);
	// //console.log(temp);
	
	// var temp = "(movement) this.leftClick is: " + this.leftClick;
	// printWords.AddToList(temp);	
	//console.log(temp);
	
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

	// var temp = "(movement) this.cci.ULX is: " + this.cci.ULX;
	// printWords.AddToList(temp);	

	// var temp = "(movement) this.cci.ULY is: " + this.cci.ULY;
	// printWords.AddToList(temp);	
	
	//I think the cause of my issues is not being able to get into this if statement
	// if(this.leftClick == false){
		// //printWords.AddToList("resetting------------------------------------------");
		// console.log("resetting--------------");
		// this.movedBefore = false;
		// this.firstClick[x] = 0;
		// this.firstClick[y] = 0;
	// }
	// var temp = "this.leftClick is: " + this.leftClick;
	// printWords.AddToList(temp);
	
	// var temp = "this.still_holding_down is: " + this.still_holding_down;
	// printWords.AddToList(temp);
	
	if(this.leftClick && this.still_holding_down){
	
		//console.log("(this.XLoc - this.firstClick[x]) is: " + (this.XLoc - this.firstClick[x]));
		//console.log("(this.YLoc - this.firstClick[y]) is: " + (this.YLoc - this.firstClick[y]));
		//printWords.AddToList("if(this.leftClick && this.still_holding_down) returned true");
		//console.log("using (this.leftClick && this.still_holding_down)");
		this.updateLocs((this.XLoc - this.firstClick[x]), (this.YLoc - this.firstClick[y]));
	}
	else{
		//this.cci.reset_old_coords();
		this.still_holding_down = false;
	}
	
	/*
	if we had moved before, see a left click, and our box contains a mouse, we assume
	it's a continuation of a previous movement, and so we take the value of our previous click, 
	find the difference between it and the next movement we made with the mouse (the current
	location with the mouse), and then apply (either subtract, or "subtract subtract" meaning add)
	said difference to the four corners of our icon. 
	*/
	
	// var temp = "this.movedBefore is: " + this.movedBefore;
	// printWords.AddToList(temp);
	
	// var temp = "this.contains() is: " + this.contains();
	// printWords.AddToList(temp);
	
	if(this.movedBefore && this.leftClick && this.contains()){
		//console.log("using (this.movedBefore && this.leftClick && this.contains())");
		//printWords.AddToList("if(this.movedBefore && this.leftClick && this.contains()) returned true");
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
	if((this.leftClick == false) && (this.movedBefore == true)){
		//printWords.AddToList("resetting------------------------------------------");
		//console.log("resetting--------------");
		this.movedBefore = false;
		this.firstClick[x] = 0;
		this.firstClick[y] = 0;
	}
	
	/*
	if we hadn't just been moving the icon around, and we detect a left click, 
	as well as see that the box does indeed contain the mouse, set the values. 
	*/
	if((this.movedBefore == false) && this.leftClick && this.contains()){
		//printWords.AddToList("clicked on box (not moved)");
		//console.log("clicked on box (not moved)");
		//"clicked on box (moved)"
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
	// if(this.cci.contains() == true){
		// //printWords.AddToList("worked!!!!!!!!!!!!!!!!!");
		// return true;
		// }
	// else{
		// //printWords.AddToList("didn't work");
		// return false;
	// }
	return this.cci.contains();
};

genObj.prototype.setImage = function(url){
	this.image_name = url;
}

genObj.prototype.retImage = function(){
	return this.image_name;
}

genObj.prototype.getImageName = function(){
	return this.image_name;
}

genObj.prototype.getSx = function(){
	return this.cci.getSx();
}

genObj.prototype.getSy = function(){
	return this.cci.getSy();
}

genObj.prototype.getSwidth = function(){
	return this.cci.getSwidth();
}

genObj.prototype.getSheight = function(){
	return this.cci.getSheight();
}

genObj.prototype.getX = function(){
	return this.cci.getX();
}

genObj.prototype.getY = function(){
	return this.cci.getY();
}

genObj.prototype.getWidth = function(){
	//console.log("this.cci.getWidth() is: " + this.cci.getWidth());
	return this.cci.getWidth();
}

genObj.prototype.getHeight = function(){
	//console.log("this.cci.getHeight() is: " + this.cci.getHeight());
	return this.cci.getHeight();
}

//I don't need the mouse location each and every time it moves. However, 
//if I find out that the icon has been clicked on, I will need those mouse
//locations 
genObj.prototype.setMouse = function(x,y,leftClick,rightClick){
	// this.ssiObj.setMouse(x,y);
	// this.cci.setMouse(x,y);
	
	// var temp = "(setMouse) this.XLoc is: " + this.XLoc;
	// printWords.AddToList(temp);
	
	// var temp = "(setMouse) this.leftClick is: " + this.leftClick;
	// printWords.AddToList(temp);
	
	this.XLoc = x;
	this.YLoc = y;
	this.leftClick = leftClick;
	this.rightClick = rightClick;
	// this.cci.mousePosX = x;
	// this.cci.mousePosY = y;	
	this.cci.setMouse(x,y);
	
};

genObj.prototype.test = function(){

	return "genObj worked!";
};

genObj.prototype.test_square = function(){

	return this.cci.test();

};

genObj.prototype.test_ssi = function(){

	var temp = this.ssiObj;//randomly chosen

	return temp.test();

};

genObj.prototype.draw = function(){

	//printWords.AddToList("genObj.prototype.draw");

	this.setMouse(mousePosX,mousePosY,leftClick,rightClick);  
	this.movement();
	
	this.draw_cci_square();//for debugging only.
		
	// http://www.w3schools.com/tags/canvas_drawimage.asp
	ctx.drawImage(
	// document.images["health_icon_1"],
	document.images[this.retImage()],
	this.getSx(),
	this.getSy(),// tempImage.sy,
	this.getSwidth(),// tempImage.width,
	this.getSheight(),// tempImage.height,
	this.getX(),// this.charXLoc,
	this.getY(),// this.charYLoc,
	this.getWidth(),// tempImage.width,
	this.getHeight());// tempImage.height);
	
	


};

//draw cci square (for debugging purposes)
genObj.prototype.draw_cci_square = function(){

	// printWords.AddToList("getting into draw_cci_square!!!!!!");

	var image_name = "cci_color";
	
	var width = this.cci.getURX() - this.cci.getULX();
	
	var height = this.cci.getLLY() - this.cci.getULY();
	
	// var temp = "this.cci.getULX() is: " + this.cci.getULX();
	// printWords.AddToList(temp);
	
	// var temp = "this.cci.getURX() is: " + this.cci.getURX();
	// printWords.AddToList(temp);
	
	ctx.drawImage(
	// document.images["health_icon_1"],
	document.images[image_name],
	0,
	0,// tempImage.sy,
	width,// tempImage.width,
	height,// tempImage.height,
	this.cci.getX(),// this.charXLoc,
	this.cci.getY(),// this.charYLoc,
	width,// tempImage.width,
	height);// tempImage.height);

}

genObj.prototype.getULX = function(){

	return this.cci.getULX();
}

genObj.prototype.getULY = function(){

	return this.cci.getULY();
}

//

genObj.prototype.getLLX = function(){

	return this.cci.getLLX();
}

genObj.prototype.getLLY = function(){

	return this.cci.getLLY();
}

//

genObj.prototype.getURX = function(){

	return this.cci.getURX();
}

genObj.prototype.getURY = function(){

	return this.cci.getURY();
}
//

genObj.prototype.getLRX = function(){

	return this.cci.getLRX();
}

genObj.prototype.getLRY = function(){

	return this.cci.getLRY();
}

//-----

genObj.prototype.setULX = function(num){
	//console.log("(genObj) num is: " + num);
	this.cci.ULX = num;
}

genObj.prototype.setULY = function(num){

	this.cci.ULY = num;
}

//

genObj.prototype.setURX = function(num){

	this.cci.URX = num;
}

genObj.prototype.setURY = function(num){

	this.cci.URY = num;
}

genObj.prototype.setLLX = function(num){

	this.cci.LLX = num;
}

genObj.prototype.setLLY = function(num){

	this.cci.LLY = num;
}

//

genObj.prototype.setLRX = function(num){

	this.cci.LRX = num;
}

genObj.prototype.setLRY = function(num){

	this.cci.LRY = num;
}

//
genObj.prototype.set_menu_y_and_height = function(y,height){

	this.menuY = y;
	this.menuHeight = height;
};

genObj.prototype.menuLocContains = function(x,y){

	return this.cci.menuContains(x,y);

};

genObj.prototype.ssi_cci_comparison = function(){

	var ssiULX = this.ssi.getX();
	var ssiULY = this.ssi.getY();
	
	var ssiLLX = this.ssi.getX();
	var ssiLLY = this.ssi.getY() + this.ssi.getHeight();
	
	var ssiURX = this.ssi.getX() + this.ssi.getWidth();
	var ssiURY = this.ssi.getY();
	
	var ssiLRX = this.ssi.getX() + this.ssi.getWidth();
	var ssiLLY = this.ssi.getY() + this.ssi.getHeight();
	
	if(	ssiULX != this.cci.getULX() ||
		ssiULX != this.cci.getULX() ||
		ssiULX != this.cci.getULX() ||
		ssiULX != this.cci.getULX() ||
		ssiULX != this.cci.getULX() ||
		ssiULX != this.cci.getULX() ||
		ssiULX != this.cci.getULX() ||
		ssiULX != this.cci.getULX()){
			return false;
		}
		else{
			return true;
			
		}
		
	

};



genObj.prototype.setXandY = function(x,y){

	this.cci.setXandY(x,y);

};
