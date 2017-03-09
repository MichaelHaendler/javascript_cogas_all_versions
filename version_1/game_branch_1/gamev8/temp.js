
//this file is just garbage. it held helObj4 code, of which I cut out and pasted into 
//square_gen_obj.js, single_still_image.js, and genObject.js. 
//I'm holding onto it to make it easier to find code that I didn't use, however, it's
//not being used by game0.html. It's really just garbage. 

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








