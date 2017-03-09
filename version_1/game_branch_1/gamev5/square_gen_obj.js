


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
};


genObj.prototype.Square.prototype.setMouse = function(x,y){

	this.mousePosX = x;
	this.mousePosY = y;

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

	//console.log("entered Square.prototype.updateLocs");

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


genObj.prototype.Square.prototype.test = function(){

	return "square worked!";

};