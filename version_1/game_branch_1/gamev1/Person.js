


function Person(){
	this.array = new Array(new Array());
	this.num = 0;
	this.aniCount = 3;  //the number of stills used to make an animation
	this.charXLoc = 0;
	this.charYLoc = 0;
	this.direction = 0;
	this.SSI;
	
	for(var iy = 0; iy < 4; iy++){
		for(var ix = 0; ix < 3; ix++){
			this.array[iy,ix] = new this.SSI();
			this.array[iy,ix].sx = 30 * ix;
			this.array[iy,ix].sy = 32 * iy;
		}
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
	that.num += 1;
	if(that.num >= that.aniCount){that.num = 0;}
	return that.array[that.direction,that.num];
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

	document.addEventListener('keydown', function(event) {

	var ma = 1; //move amount
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
		
	}, false);

}

Person.prototype.currLoc = function(){
	var that = this;
	// var printWords = new display_phrases_list(100,200);
	var temp = "that.charXLoc is: " + that.charXLoc;
	//var temp = "hihi";
	printWords.AddToList(temp);
	//printWords.displayList();
}
