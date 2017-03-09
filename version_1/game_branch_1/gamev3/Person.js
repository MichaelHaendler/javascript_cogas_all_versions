


function Person(){
	//this.array = new Array(new Array());
	this.array = new Array(4);
	this.currSSI = 0;//currSSI current single still image
	this.aniCount = 3;  //the number of stills used to make an animation
	this.charXLoc = 100;
	this.charYLoc = 100;
	this.direction = 0;
	this.didMove = false;
	this.SSI;
	this.image_set_name = "person_set_1";
	
	// //0 to 4 (aka 4) is because left right forward, backwards.
	// for(var iy = 0; iy < 4; iy++){
	// //0 to 3 (aka 3) because there are 3 images per action. 
		// for(var ix = 0; ix < 3; ix++){
			// // this.array[iy,ix] = new this.SSI();
			// // this.array[iy,ix].sx = 30 * ix;
			// // this.array[iy,ix].sy = 32 * iy;
		// }
	// }
	
	//0 to 4 (aka 4) is because left right forward, backwards.
	for(var iy = 0; iy < 4; iy++){
	//0 to 3 (aka 3) because there are 3 images per action. 
		var temp = new Array(3);
		for(var ix = 0; ix < 3; ix++){
			temp[ix] = new this.SSI();
			temp[ix].sx = 32 * ix;
			temp[ix].sy = 48 * iy;
		}
		this.array[iy] = temp;
	}

}

//single still image
Person.prototype.SSI = function(){
		this.sx = 0;
		this.sy = 0;
		this.swidth = 50;
		this.sheight = 50;
		this.x = 20;
		this.y = 20;
		this.width = 33;
		this.height = 50;
}


Person.prototype.getSSI = function(){
	var that = this;
	
	temp = "that.didMove is: " + that.didMove;
	
	printWords.AddToList(temp);
	
	if(that.didMove == false){
		that.currSSI = 0;
	}
	
	if(that.didMove == true){
		that.currSSI += 1;
		that.didMove = false;
	}
	
	if(that.currSSI >= that.aniCount){
		that.currSSI = 0;
	}
	
	var temp = that.array[that.direction];
	
	return temp[that.currSSI];
	
	// return that.array[that.direction,that.currSSI];
	
}

Person.prototype.forward = function(){
	var that = this;
	that.direction = 0;
}

Person.prototype.leftSide = function(){
	var that = this;
	that.direction = 1;
}

Person.prototype.rightSide = function(){
	var that = this;
	that.direction = 2;
}

Person.prototype.back = function(){
	var that = this;
	that.direction = 3;
}

Person.prototype.movement = function(){

	var that = this;
	
	//I know this is crappy as hell code, but what the heck am I supposed to do? 
	document.body.onkeydown = function(event){
	
		//var event = event || window.event;
		var event = window.event;
		
		var ma = 2.5; //move amount
		
		that.didMove = true;

		//var ma = 1; //move amount
		//up
		if (event.keyCode == 38) {
			//Words2('up was pressed',90,90);	
			//printWords.AddToList("up");
			that.charYLoc -= ma;
			that.back();
		}
		
		//down
		if (event.keyCode == 40) {
			//Words2('down was pressed',90,90);	
			that.charYLoc += ma;
			//printWords.AddToList("down");
			that.forward();
		}    
		
		//left
		if (event.keyCode == 37) {
			//Words2('Left was pressed',90,90);	
			that.charXLoc -= ma;
			//printWords.AddToList("left");
			that.leftSide()
		}
		
		//right
		if (event.keyCode == 39) {
			//Words2('Right was pressed',90,90);	
			that.charXLoc += ma;
			//printWords.AddToList("right");
			that.rightSide();
		}
		
	}
	//}, true);
	
	that.currLoc();

}

Person.prototype.currLoc = function(){
	var that = this;
	// var printWords = new display_phrases_list(100,200);
	var tempX = "that.charXLoc is: " + that.charXLoc;
	var tempY = "that.charYLoc is: " + that.charYLoc;
	//var temp = "hihi";
	printWords.AddToList(tempX);
	printWords.AddToList(tempY);
	//printWords.displayList();
}

//retrieve Image
Person.prototype.retImage = function(){
	var that = this;
	return that.image_set_name;
}
