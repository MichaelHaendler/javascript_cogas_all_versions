


function GenGun(){

	this.maxDamage = 0; //maximum amount of damage that this gun can do. 
	
	this.genO = new genObj();//the object itself. 
	this.menu = new Boxes();
	
	this.menu.addBox("AK-47");
	this.menu.addBox("awesome");
	this.menu.addBox("holds 50 bullets");
	
		this.drawAtX = 0;
		this.drawAtY = 0;
	
	//null the above manually entered abbBox calls once this works. 
	// for(var i = 0; i < arguments.length; i++){
		// this.menu.addBox(arguments[i]);
	// }

}

GenGun.prototype.contains = function(){
	return this.genO.contains();
}

GenGun.prototype.drawObj = function(){
	//printWords.AddToList("GenGun.prototype.drawObj");
	this.genO.draw();
};


GenGun.prototype.draw = function(){

	//printWords.AddToList("GenGun.prototype.draw");
	this.drawMenu();
	this.drawObj();
};

GenGun.prototype.drawMenu = function(){

	if(this.genO.contains(mousePosX,mousePosY) && rightClick){
		this.displayMenu = true;
		this.drawAtX = mousePosX;
		this.drawAtY = mousePosY;		
	}
	
	//if you click anywhere OFF of the menu, then the menu stops being shown.
	if(this.genO.contains(mousePosX,mousePosY) == false && (rightClick || leftClick)){
		this.displayMenu = false;
	}	
	
	
	if(this.displayMenu){
		this.menu.setAt(this.drawAtX,this.drawAtY);
		this.menu.draw();
	}
	

}

GenGun.prototype.movement = function(mouseX,mouseY,leftClick,rightClick){

	//var temp = "inside movement";
	//printWords.AddToList(temp);

	if(this.genO.contains(mouseX,mouseY) && leftClick){
	
		this.genO.setMouse(mousePosX,mousePosY,leftClick,rightClick);  
		this.genO.movement();
	
	}
}

GenGun.prototype.getULX = function(){

	return this.genO.getULX();
}

GenGun.prototype.getULY = function(){

	return this.genO.getULY();
}

//

GenGun.prototype.getLLX = function(){

	return this.genO.getLLX();
}

GenGun.prototype.getLLY = function(){

	return this.genO.getLLY();
}

//

GenGun.prototype.getURX = function(){

	return this.genO.getURX();
}

GenGun.prototype.getURY = function(){

	return this.genO.getURY();
}
//

GenGun.prototype.getLRX = function(){

	return this.genO.getLRX();
}

GenGun.prototype.getLLY = function(){

	return this.genO.getLRY();
}


GenGun.prototype.getImageName = function(){
	return this.genO.getImageName();
}

//
GenGun.prototype.getSx = function(){
	return this.genO.getSx();
}

GenGun.prototype.getSy = function(){
	return this.genO.getSy();
}

GenGun.prototype.getSwidth = function(){
	return this.genO.getSwidth();
}

GenGun.prototype.getSheight = function(){
	return this.genO.getSheight();
}

GenGun.prototype.getWidth = function(){
	return this.genO.getWidth();
}

GenGun.prototype.getHeight = function(){
	return this.genO.getHeight();
};

GenGun.prototype.set_menu_y_and_height = function(y,height){
	this.genO.set_menu_y_and_height(y,height);
};

GenGun.prototype.menuLocContains = function(x,y){
	this.genO.menuLocContains(x,y);
};

//---

GenGun.prototype.setULX = function(num){
	//console.log("num is: " + num);
	this.genO.setULX(num);
};

GenGun.prototype.setULY = function(num){
	this.genO.setULY(num);
};

//

GenGun.prototype.setURX = function(num){
	this.genO.setURX(num);
};

GenGun.prototype.setURY = function(num){
	this.genO.setURY(num);
};

//

GenGun.prototype.setLLX = function(num){
	this.genO.setLLX(num);
};

GenGun.prototype.setLLY = function(num){
	this.genO.setLLY(num);
};

//

GenGun.prototype.setLRX = function(num){
	this.genO.setLRX(num);
};

GenGun.prototype.setLRY = function(num){
	this.genO.setLRY(num);
};

GenGun.prototype.getWidth = function(){
	return this.genO.getWidth();
};

GenGun.prototype.printVals = function(){
	return this.genO.getWidth();
};

GenGun.prototype.printCorners = function(){
	this.genO.printCorners_square();
};
