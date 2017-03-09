

function Box(string){

	this.x = 0;
	this.y = 0;
	this.canvas = document.getElementById('myCanvas');
	this.ctx = this.canvas.getContext('2d');
	
	
	// this.ctx.font = "bold 20px Arial";
	this.phrase = string;
	this.woc = 7.4; //width of (a) character
	this.hoc = 19;//(max) height of (a) character
	this.width = this.woc * string.length;
	
	//writeX (and writeY) are for saying where IN THE BOX the 
	//writing is supposed to go. x and y are where to put the box itself.
	this.writeX = this.x;  
	this.writeY = this.y; 
	this.color = "green";
	
}

Box.prototype.drawAt = function(x,y){

	var padding_in_square_x = 3;
	var padding_in_square_y = 13;
	this.x = x;
	this.y = y;
	this.writeX = this.x + padding_in_square_x; 
	this.writeY = this.y + padding_in_square_y; 
	

}

// Box.prototype.draw = function(){

	// //this.phrase.fontcolor("green");
	// //this.ctx.fillStyle = "green";
	
	// //this.ctx.fillText(this.phrase,this.writeX,this.writeY);
	
	// this.ctx.clearRect(this.x,this.y,this.width,this.hoc);
	
	// //draw outline of box
	// //this.ctx.fillStyle = "black";
	// // this.ctx.fillRect(this.x,this.y,this.width,this.hoc);
	// this.ctx.strokeStyle = this.color;
	// this.ctx.strokeRect(this.x,this.y,this.width,this.hoc);
	
	// //write words 
	// this.ctx.font = "bold 13px Arial";
	// this.ctx.fillStyle = this.color;
	// this.ctx.fillText(this.phrase,this.writeX,this.writeY);
	

// };

Box.prototype.draw = function(){

	
	//printWords.AddToList("in draw()");
	//this.phrase.fontcolor("green");
	//this.ctx.fillStyle = "green";
	
	//this.ctx.fillText(this.phrase,this.writeX,this.writeY);
	
	this.ctx.clearRect(this.x,this.y,this.width,this.hoc);
	
	// this.ctx.fillStyle = "black";
	// this.ctx.fillRect(this.x,this.y,this.width,this.hoc);
	// this.ctx.strokeStyle = "black";
	this.ctx.strokeStyle = this.color;
	this.ctx.strokeRect(this.x,this.y,this.width,this.hoc);
	
	this.ctx.font = "bold 13px Arial";
	// this.ctx.fillStyle = "black";
	this.ctx.fillStyle = this.color;
	this.ctx.fillText(this.phrase,this.writeX,this.writeY);
	
	// var temp = "this.phrase is: " + this.phrase;
	// printWords.AddToList(temp);
	// var temp = "this.writeX is: " + this.writeX;
	// printWords.AddToList(temp);
	// var temp = "this.writeY is: " + this.writeY;
	// printWords.AddToList(temp);
	

};

Box.prototype.getWidth = function(){
	return this.width;
}

Box.prototype.setWidth = function(newWidth){
	this.width = newWidth;
}


Box.prototype.contains = function(mouseX,mouseY){

	var ULX = this.x ;//upper left X
	// var LLX = this.x + this.hoc;//lower left X
	var LLX = this.x + this.width;//lower left X
	
	var ULY = this.y;//upper left Y
	var URY = this.y + this.hoc;//upper right Y
	
	var checkX = (mouseX >= ULX && mouseX <= LLX);
	var checkY = (mouseY >= ULY && mouseY <= URY);
	
	if(checkX && checkY){
		return true;
	}
	else{
		return false;
	}

}

Box.prototype.display_contains_mouse_graphic = function(){
	this.color = "light green";
}


Box.prototype.do_not_display_contains_mouse_graphic = function(){
	this.color = "green";
}



//for testing only
Box.prototype.testBlah = function(){
	console.log("got here!");
	printWords.AddToList("the right class!!!");
}

Box.prototype.getString = function(){

	return this.phrase;
}

