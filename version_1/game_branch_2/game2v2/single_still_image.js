

genObj.prototype.SSI = function(self){

		//document.write("--SSI start <br>");
		//var self = that;
		var that = this;

		//Optional. The x coordinate where to start clipping
		this.sx = 0;
		//Optional. The y coordinate where to start clipping
		this.sy = 0;
		//Optional. The width of the clipped image
		this.swidth = 128;
		//Optional. The height of the clipped image
		this.sheight = 128;
		//The x coordinate where to place the image on the canvas
		this.x = self.XLoc;
		
		//document.write("from within genObj.prototype.SSI this.XLoc is: " + self.XLoc + "<br>");
		
		//self.XLoc += 10;
		
		//document.write("that.other1 is: " + that.other1 + "<br>");
		
		//The y coordinate where to place the image on the canvas
		this.y = self.YLoc;
		//Optional. The width of the image to use (stretch or reduce the image)
		this.width = 45;
		//Optional. The height of the image to use (stretch or reduce the image)
		this.height = 45;
		
		//this.stringy = "no way!";
		
		//document.write("--SSI end <br>");
};

genObj.prototype.SSI.prototype.setMouse = function(x,y){

	this.x = x;
	this.y = y;
};

// genObj.prototype.SSI.prototype.updateLocs = function(x,y){

	// this.x = this.x - x;
	// this.y = this.y - y;

// };

genObj.prototype.SSI.prototype.updateLocs = function(x,y){

	this.x = this.x + x;
	this.y = this.y + y;

};

genObj.prototype.SSI.prototype.test = function(){

	return "ssi worked!";

};