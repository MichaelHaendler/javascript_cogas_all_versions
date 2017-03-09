

function Boxes(){

	//where to place the menu. 
	this.x;
	this.y;

	this.boxArray = new Array();

	this.color = "black";

	this.gap = 0; //number of pixels between menu boxes

	//same as in menu_box.js. So if you change the hoc there, you need to change it here as well. 
	this.hoc = 19;

	this.hobs = 0; //height of boxes. 
	
	this.widest = 0;
	
}

Boxes.prototype.setAt = function(x,y){
	this.x = x;
	this.y = y;
}
Boxes.prototype.setX = function(x){
	this.x = x;
}

Boxes.prototype.setY = function(y){
	this.y = y;
}

Boxes.prototype.addBox = function(string){

	var tempBox = new Box(string);
	//tempBox.testBlah();
	
	//I don't want a gap at the very top, so if hobs is zero (aka we have no boxes yet) then just set it to hold
	//a single box. (assuming the the lower left hand corner of the box is where things start, we subtract this.hoc so
	//that we are dealing with the box from it's upper left hand corner) 
	if(this.hobs == 0){
		this.hobs =  this.y - this.hoc;
		//this.hobs =  this.y;
	}
	//Otherwise, take hobs' current value, add gap (aka put a gap between the current box and this new one) and 
	//add space for the new box itself. 
	else{
		this.hobs =  this.hobs + this.gap + this.hoc;
		}
		
	//use this.hobs value to set the box being added to it's proper y value (as this value represents where it should start) 
	//tempBox.y = this.hobs;
	
	//since the boxes are all on top of each other, the x value stays the same for all of them (it's just about the y value). 
	//tempBox.x = this.x;

	tempBox.drawAt(this.x,this.hobs);
	
	
	this.make_all_boxes_the_same_width(tempBox);
	this.boxArray.push(tempBox);
	//this.boxArray[0].testBlah();
	
};

//--addBox() sets them initially, but since this will all depend on where the person clicks, we
//need to constantly update the boxes positions. 
//--Also, this method is for when wse clicked on a character or something with a menu. So the code
//in the future might said "if X character contains the mouse, and the mouse just did a right click,
//display said character's menu. When you display the menu, you will have to run this method). 
//--will get the code running with a stationary set point, and will then move on to getting this to
//work for the health object. 
Boxes.prototype.setLocs = function(){

	var tempHobs = 0; 

	for(var i = 0; i < this.boxArray.length; i++){

		if(i == 0){
			this.boxArray[i] =  this.y - this.hoc;
		}
		else{
			this.tempHobs =  this.tempHobs + this.gap + this.hoc;
			this.boxArray[i].y = this.tempHobs;
			}
		
	}

};



Boxes.prototype.draw = function(){

	for(var i = 0; i < this.boxArray.length; i++){
	// for(var box in this.boxArray){
		var box = this.boxArray[i];
		// var temp = "the string is: " + box.getString();
		// printWords.AddToList(temp);
		box.draw();
	}
};

Boxes.prototype.make_all_boxes_the_same_width = function(newBox){

	//console.log("got into Boxes.prototype.make_all_boxes_the_same_width");
	//console.log("this.widest is : " + this.widest);
	//if the new value is bigger than the old value, and we're not 
	//doing this for the first time, set all other boxes to the same width
	if(newBox.getWidth() > this.widest && this.widest != 0){
		//printWords.AddToList("got here AS WELL!!!!!!!!");
		//console.log("now doing comparisons");
		//set them all to that width 
		for(var i = 0; i < this.boxArray.length; i++){
			var box = this.boxArray[i];
			box.setWidth(this.widest);
		}
	
	}
	//if we are doing this for the first time, then set 'widest' to this value. 
	else if (this.widest == 0){
		//printWords.AddToList("got here!");
		//console.log("setting initial width value");
		this.widest = newBox.getWidth();
		//var temp = "this.widest  is: " + this.widest ;
		//printWords.AddToList(temp);
		//console.log("this.widest is initially set to: " + this.widest);
	}
	//if we are adding a new box which is not as wide as the widest box, then 
	//set it to be as wide. (so that all the menu options are of the same length)
	else if(newBox.getWidth() < this.widest){
		newBox.setWidth(this.widest);
	}
}
Boxes.prototype.contains = function(mouseX,mouseY){

	for(var i = 0; i < this.boxArray.length; i++){
	//for(var box in this.boxArray){
		
		var box = this.boxArray[i];
		
		//box.testBlah();
		if(box.contains(mouseX,mouseY)){
			//printWords.AddToList("contains!!!!22222122");
			box.display_contains_mouse_graphic();
		}
		else{
			//printWords.AddToList("does NOT contain");
			box.do_not_display_contains_mouse_graphic();
		}
	}


};

