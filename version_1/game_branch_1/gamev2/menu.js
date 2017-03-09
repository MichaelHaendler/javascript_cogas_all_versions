

function menu(){
	this.array = new Array(new Array());
	this.currSSI = 0;//currSSI current single still image
	this.aniCount = 3;  //the number of stills used to make an animation
	this.charXLoc = 0;
	this.charYLoc = 0;
	this.direction = 0;
	this.didMove = false;
	this.SSI;
	
	for(var iy = 0; iy < 4; iy++){
		for(var ix = 0; ix < 3; ix++){
			this.array[iy,ix] = new this.SSI();
			this.array[iy,ix].sx = 30 * ix;
			this.array[iy,ix].sy = 32 * iy;
		}
	}

}