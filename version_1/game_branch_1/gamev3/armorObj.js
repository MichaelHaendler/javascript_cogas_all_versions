

function Person(){
	this.array = new Array(new Array());
	this.currSSI = 0;//currSSI current single still image
	this.aniCount = 3;  //the number of stills used to make an animation
	this.charXLoc = 0;
	this.charYLoc = 0;
	this.direction = 0;
	this.didMove = false;
	this.SSI;
	this.icon = new this.SSI();
	
	//0 to 4 (aka 4) is because left right forward, backwards.
	for(var iy = 0; iy < 4; iy++){
	//0 to 3 (aka 3) because there are 3 images per action. 
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