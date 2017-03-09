

function Button(){

	this.x = 0;
	this.y = 0;
	this.width = 0;
	this.height = 0;
	this.swidth = 0;
	this.sheight = 0;
	
}



Button.prototype.contains = function(mx,my){

	//is within the right range horizontally speaking 
	var containsX = (mx >= this.getLLX() && mx <= this.getLRX());
	
		
	//is within the right range vertically speaking
	var containsY = (my >= this.getULY() && my <= this.getLLY());
	
	return (containsX && containsY);
	

};//end of contains



Button.prototype.clickedOn = function(mx,my,leftClick){

	if(this.contains(mx,my) && leftClick == true){
		return true;
	}
	else{
		return false;
	}


};

Button.prototype.draw = function(){

	ctx.drawImage(
	document.images[this.getImageName()],
	this.sx,
	this.sy,
	this.swidth,
	this.sheight,
	this.x,
	this.y,
	this.width,
	this.height);

}

Button.prototype.getX = function(){
	return this.x;
};

Button.prototype.getY = function(){
	return this.y;
};

Button.prototype.getULX = function(){
	return this.x;
};

Button.prototype.getULY = function(){
	return this.y;
};

Button.prototype.getURX = function(){
	return this.x + this.width;
}

Button.prototype.getURY = function(){
	return this.y;
}

Button.prototype.getLLX = function(){
	return this.x;
}

Button.prototype.getLLY = function(){
	return this.y + this.height;
}

Button.prototype.getLRX = function(){
	return this.x + this.width;
}

Button.prototype.getLRY = function(){
	return this.y + this.height;
}


Button.prototype.getSx = function(){
	return this.sx;
}

Button.prototype.getSy = function(){
	return this.sy;
}

Button.prototype.getSwidth = function(){
	return this.swidth;
}

Button.prototype.getSheight = function(){
	return this.sheight;
};

Button.prototype.setXandY = function(x,y){
	this.x = x;
	this.y = y;
};






