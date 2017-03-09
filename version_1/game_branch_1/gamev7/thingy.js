


// genObj.prototype.Square = function(parent){

	// //Optional. The x coordinate where to start clipping
	// this.sx = 0;
	// //Optional. The y coordinate where to start clipping
	// this.sy = 0;
	// //Optional. The width of the clipped image
	// this.swidth = 128;
	// //Optional. The height of the clipped image
	// this.sheight = 128;
	// //The x coordinate where to place the image on the canvas
	// this.x = parent.XLoc;
	
	// this.y = parent.YLoc;

	// this.mousePosX = 0; 
	// this.mousePosY = 0; 
		
	// // this.menuY = 0;
	// // this.menuHeight = 0;
	
	// // this.oldX = 0;
	// // this.oldY = 0;
	
	// // this.set_old_coords_before = false;

	
// };

genObj.prototype.Square.prototype.updateLocs = function(x,y){

	this.x = this.x + x;
	this.y = this.y + y;

};

genObj.prototype.Square.prototype.set_menu_y_and_height = function(y,height){

	this.menuY = y;
	this.menuHeight = height;

};


genObj.prototype.Square.prototype.setMouse = function(x,y){

	this.mousePosX = x;
	this.mousePosY = y;

};

genObj.prototype.Square.prototype.updateLocs = function(x,y){

	this.x += x;
	this.y += y;
};

genObj.prototype.Square.prototype.printCorners = function(){

	printWords.AddToList("--start, square");

	var temp1 = "this.ULX and this.ULY: " +  this.getULX() + " , " + this.getULY();
	printWords.AddToList(temp1);	
	
	var temp1 = "this.LLX and this.LLY: " +  this.getLLX() + " , " + this.getLLY();
	printWords.AddToList(temp1);
	

	var temp1 = "this.URX and this.URY: " +  this.getURX() + " , " + this.getURY();
	printWords.AddToList(temp1);

	var temp1 = "this.LRX and this.LRY: " +  this.getLRX() + " , " + this.getLRY();
	printWords.AddToList(temp1);


	printWords.AddToList("--end, square");
};


genObj.prototype.Square.prototype.contains = function(){


	//is within the right range horizontally speaking 
	var containsX = (mousePosX >= this.getLLX() && mousePosX <= this.getLRX());
	
		
	//is within the right range vertically speaking
	var containsY = (mousePosY >= this.getULY() && mousePosY <= this.getLLY());
	
	var temp = "(containsX && containsY) is: " + (containsX && containsY);
	
	printWords.AddToList(temp);
	
	return (containsX && containsY);
	

};//end of contains

genObj.prototype.Square.prototype.getULX = function(){
	return this.x;
};

genObj.prototype.Square.prototype.getULY = function(){
	return this.y;
};

genObj.prototype.Square.prototype.getURX = function(){
	return this.x + this.swidth;
}

genObj.prototype.Square.prototype.getURY = function(){
	return this.y;
}

genObj.prototype.Square.prototype.getLLX = function(){
	return this.x;
}

genObj.prototype.Square.prototype.getLLY = function(){
	return this.y + this.sheight;
}

genObj.prototype.Square.prototype.getLRX = function(){
	return this.x + this.swidth;
}

genObj.prototype.Square.prototype.getLRY = function(){
	return this.y + this.sheight;
}