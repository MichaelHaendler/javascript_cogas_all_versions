


function Backpack(){

	var that = this;

	this.XLoc = 294;
	this.YLoc = 55;
	
	this.curr_see_mouse = false;
	this.mouseXLoc = 0;
	this.mouseYLoc = 0;

	this.cci = new this.Square(this); 
	
	this.image_name = "backpack_background";
	
	this.movedBefore = false;
	
	this.firstClick = [0,0];//change to 'lastMove'
	
	this.leftClick = false;
	
	this.rightClick = false;
	
	this.still_holding_down = false;
	
	this.menuY = 0;
	this.menuHeight = 0;
	
	//----
	
	this.holdItem1 = new ItemHolder();
	
	this.holdItem2 = new ItemHolder();	
	
	this.itemColumn = new ItemHolder();
	
	this.moveUp = new Button(); 
	
	this.moveUp = new Button(); 

}

Backpack.prototype.updateLocs = function(xVal,yVal){	
	
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

Backpack.prototype.getCurrX = function(){

	return this.cci.mousePosX;
};

/*update location...because you're not necessarily moving it.
initially had x and y parameters for this function, but I changed it so that
those weren't needed. I like my objects as self sufficient as possible. 
*/
Backpack.prototype.movement = function(){

	//printWords.AddToList("Backpack.prototype.movement");
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

Backpack.prototype.printCorners_ssi = function(){

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

Backpack.prototype.printCorners = function(){
	printWords.AddToList("-------------");
	this.printCorners_ssi();
	printWords.AddToList("-------------");
	printWords.AddToList("-------------");
	this.printCorners_square();
	printWords.AddToList("-------------");

};

Backpack.prototype.printCorners_square  = function(){
	this.cci.printCorners();
};

Backpack.prototype.contains = function(){
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

Backpack.prototype.setImage = function(url){
	this.image_name = url;
}

Backpack.prototype.retImage = function(){
	return this.image_name;
}

Backpack.prototype.getImageName = function(){
	return this.image_name;
}

Backpack.prototype.getSx = function(){
	return this.cci.getSx();
}

Backpack.prototype.getSy = function(){
	return this.cci.getSy();
}

Backpack.prototype.getSwidth = function(){
	return this.cci.getSwidth();
}

Backpack.prototype.getSheight = function(){
	return this.cci.getSheight();
}

Backpack.prototype.getX = function(){
	return this.cci.getX();
}

Backpack.prototype.getY = function(){
	return this.cci.getY();
}

Backpack.prototype.getWidth = function(){
	//console.log("this.cci.getWidth() is: " + this.cci.getWidth());
	return this.cci.getWidth();
}

Backpack.prototype.getHeight = function(){
	//console.log("this.cci.getHeight() is: " + this.cci.getHeight());
	return this.cci.getHeight();
}

//I don't need the mouse location each and every time it moves. However, 
//if I find out that the icon has been clicked on, I will need those mouse
//locations 
Backpack.prototype.setMouse = function(x,y,leftClick,rightClick){
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

Backpack.prototype.test = function(){

	return "Backpack worked!";
};

Backpack.prototype.test_square = function(){

	return this.cci.test();

};

Backpack.prototype.test_ssi = function(){

	var temp = this.ssiObj;//randomly chosen

	return temp.test();

};

Backpack.prototype.draw = function(){
		
	//draw background
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
	
	//draw item column
	ctx.drawImage(
	document.images[this.getImageName()],
	this.sx,
	this.sy,
	this.swidth,
	this.sheight,
	this.x,
	this.y,
	this.width,
	this.height);

	//draw move up button 
	ctx.drawImage(
	document.images[this.getImageName()],
	this.sx,
	this.sy,
	this.swidth,
	this.sheight,
	this.x,
	this.y,
	this.width,
	this.height);	
	
	//draw move down button
	ctx.drawImage(
	document.images[this.getImageName()],
	this.sx,
	this.sy,
	this.swidth,
	this.sheight,
	this.x,
	this.y,
	this.width,
	this.height);
	
	//draw hold single item box 1
	ctx.drawImage(
	document.images[this.getImageName()],
	this.sx,
	this.sy,
	this.swidth,
	this.sheight,
	this.x,
	this.y,
	this.width,
	this.height);

};

//draw cci square (for debugging purposes)
Backpack.prototype.draw_cci_square = function(){

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

Backpack.prototype.getULX = function(){

	return this.cci.getULX();
}

Backpack.prototype.getULY = function(){

	return this.cci.getULY();
}

//

Backpack.prototype.getLLX = function(){

	return this.cci.getLLX();
}

Backpack.prototype.getLLY = function(){

	return this.cci.getLLY();
}

//

Backpack.prototype.getURX = function(){

	return this.cci.getURX();
}

Backpack.prototype.getURY = function(){

	return this.cci.getURY();
}
//

Backpack.prototype.getLRX = function(){

	return this.cci.getLRX();
}

Backpack.prototype.getLRY = function(){

	return this.cci.getLRY();
}

//-----

Backpack.prototype.setULX = function(num){
	//console.log("(Backpack) num is: " + num);
	this.cci.ULX = num;
}

Backpack.prototype.setULY = function(num){

	this.cci.ULY = num;
}

//

Backpack.prototype.setURX = function(num){

	this.cci.URX = num;
}

Backpack.prototype.setURY = function(num){

	this.cci.URY = num;
}

Backpack.prototype.setLLX = function(num){

	this.cci.LLX = num;
}

Backpack.prototype.setLLY = function(num){

	this.cci.LLY = num;
}

//

Backpack.prototype.setLRX = function(num){

	this.cci.LRX = num;
}

Backpack.prototype.setLRY = function(num){

	this.cci.LRY = num;
}

//
Backpack.prototype.set_menu_y_and_height = function(y,height){

	this.menuY = y;
	this.menuHeight = height;
};

Backpack.prototype.menuLocContains = function(x,y){

	return this.cci.menuContains(x,y);

};

Backpack.prototype.setXandY = function(x,y){

	this.cci.setXandY(x,y);

};
