


genObj.prototype.Square = function(tempSelf){
	
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
	
	this.menuY = 0;
	this.menuHeight = 0;
	
	this.oldX = 0;
	this.oldY = 0;
	
	this.set_old_coords_before = false;
	

	
};

genObj.prototype.Square.prototype.set_menu_y_and_height = function(y,height){

	this.menuY = y;
	this.menuHeight = height;

};

genObj.prototype.Square.prototype.menuContains = function(x,y){

	//this.ULX = this.self.getX(); //upper left x
	var tempULY = this.menuY; //upper left y	
	
	//this.LLX = this.self.getX(); //lower left x 
	var tempLLY = (this.menuY + this.menuHeight); //lower left y	
	
	//upper right corner
	//this.URX =  (this.self.getX() + this.self.getWidth());//upper right x
	//var tempURY =  this.menuY;//upper right y 
	
	//this.LRX = (this.self.getX() + this.self.getWidth()); //lower right x
	//var tempLRY = (this.menuY  + this.menuHeight); //lower right y
	
	var containsX = (x > this.ULX && x < this.URX);
	
	var containsY = (y > tempULY && y < tempLLY);
	
	if(containsX && containsY){
		return true;
	}
	else{
		return false;
	}
};


genObj.prototype.Square.prototype.setMouse = function(x,y){

	this.mousePosX = x;
	this.mousePosY = y;
	// this.oldX = x;
	// this.oldY = y;

};

// genObj.prototype.Square.prototype.updateLocs = function(x,y){

	// this.ULX = this.ULX - x;
	// this.ULY = this.ULY - y;	
	
	// this.LLX = this.LLX - x;
	// this.LLY = this.LLY - y;
	
	// this.URX = this.URX - x;
	// this.URY = this.URY - y;
	
	// //lower right
	// this.LRX = this.LRX - x;
	// this.LRY = this.LRY - y;


// };

genObj.prototype.Square.prototype.updateLocs = function(x,y){

	// console.log("entered Square.prototype.updateLocs");
	// console.log("x is: " + x);
	// console.log("y is: " + y);
	//console.log("this.ULX is: " + this.ULX);
	// console.log("-this.ULX is: " + this.ULX );
	// console.log("-this.URX is: " + this.URX );
	// console.log("-this.ULY is: " + this.ULY);
	// console.log("-this.LLY is: " + this.LLY );
	// console.log("----------------");
	
	// console.log("this.ULX is: " + this.ULX + "this.ULY is: " + this.ULY);
	// console.log("this.URX is: " + this.URX + "this.URY is: " + this.URY);
	// console.log("this.LLX is: " + this.LLX + "this.LLY is: " + this.LLY);
	// console.log("this.LRX is: " + this.LRX + "this.LRY is: " + this.LRY);
	
	this.ULX = this.ULX + x;
	this.ULY = this.ULY + y;	
	
	this.LLX = this.LLX + x;
	this.LLY = this.LLY + y;
	
	this.URX = this.URX + x;
	this.URY = this.URY + y;
	
	//lower right
	this.LRX = this.LRX + x;
	this.LRY = this.LRY + y;


};

// genObj.prototype.Square.prototype.reset_old_coords = function(){
	// this.set_old_coords_before = false;
// };

// genObj.prototype.Square.prototype.updateLocs = function(currX,currY){

	// //console.log("entered Square.prototype.updateLocs");
	
		// if(this.set_old_coords_before == false){
			// this.oldX = currX;
			// this.oldY = currY;
			// this.set_old_coords_before == true;
		// }

		// var diffX = currX - this.oldX;
		
		// var diffY = currY - this.oldY;
		
		// this.ULX = this.ULX + diffX;
		// this.ULY = this.ULY + diffY;	
		
		// this.LLX = this.LLX + diffX;
		// this.LLY = this.LLY + diffY;
		
		// this.URX = this.URX + diffX;
		// this.URY = this.URY + diffY;
		
		// //lower right
		// this.LRX = this.LRX + diffX;
		// this.LRY = this.LRY + diffY;
		
	
	// this.oldX = currX;

	// this.oldY = currY;

// };

genObj.prototype.Square.prototype.printCorners = function(){

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



genObj.prototype.Square.prototype.contains = function(){


	//is within the right range horizontally speaking 
	var containsX = (mousePosX >= this.LLX && mousePosX <= this.LRX);
	
		
	//is within the right range vertically speaking
	var containsY = (mousePosY >= this.ULY && mousePosY <= this.LLY);
	
	var temp = "22(containsX && containsY) is: " + (containsX && containsY);
	
	printWords.AddToList(temp);
	
	return (containsX && containsY);
	

};//end of contains


genObj.prototype.Square.prototype.test = function(){

	return "square worked!";

};

genObj.prototype.Square.prototype.menuContains = function(){

	return "square worked!";

};

genObj.prototype.Square.prototype.getULX = function(){
	return this.ULX;
}

genObj.prototype.Square.prototype.getULY = function(){
	return this.ULY;
}

genObj.prototype.Square.prototype.getURX = function(){
	return this.URX;
}

genObj.prototype.Square.prototype.getURY = function(){
	return this.URY;
}

genObj.prototype.Square.prototype.getLLX = function(){
	return this.LLX;
}

genObj.prototype.Square.prototype.getLLY = function(){
	return this.LLY;
}

genObj.prototype.Square.prototype.getLRX = function(){
	return this.LRX;
}

genObj.prototype.Square.prototype.getLRY = function(){
	return this.LRY;
}