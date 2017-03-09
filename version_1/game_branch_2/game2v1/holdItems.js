
//background color for rectangle that will hold items. 
//http://i.imgur.com/u82EY9f.png
function ItemHolder(){

	//default values put in for test purposes. 
	this.x = 350;
	this.y = 50;
	this.sx = 0;
	this.sy = 0;
	this.swidth = 100;
	this.sheight = 200;
	this.width = this.swidth;
	this.height = this.sheight;	
	// this.width = 100;
	// this.height = 300;
	//just initializing values. (organized by location)
	// this.ULX = this.x;
	// this.ULY = this.y - this.height;
	
	// this.URX = this.x + this.width;
	// this.URY = this.y - this.height;		
	
	// this.LRX = this.x + this.width;	
	// this.LRY = this.y;	
	
	// this.LLX = this.x;
	// this.LLY = this.y;
	//-----------------------
	this.ULX = this.x;
	this.ULY = this.y 
	
	this.LLX = this.x;
	this.LLY = this.y + this.height;
	
	this.URX = this.x + this.width;
	this.URY = this.y;	
	
	this.LRX = this.x + this.width;	
	this.LRY = this.y + this.height;
	
	this.imageName = "item_column";

	this.items = [];

	//for postiioning the items in the column (how far away the first item begins
	//from the top (posY) and how far they are from the side(posX).
	this.posX = 0;
	this.posY = 0;
	
	//for saying how much of a gap there should be between the items. 
	this.gap = 0;
}


ItemHolder.prototype.containsItem = function(item){

	if( ((item.ULX < this.ULX && item.URX > this.ULX) && (item.LRY > this.URY && item.LRY < this.LRY)) ||
		((item.ULX < this.URX && item.URX > this.URX) && (item.LRY > this.URY && item.LRY < this.LRY))){
			return true;
		}
	else{
		return false
	}
		
};

ItemHolder.prototype.containsMouse = function(item){

	var containsX = (this.mousePosX > this.ULX && this.mousePosX < this.URX);
	var containsY = (this.mousePosY > this.ULY && this.mousePosY < this.ULY);

	if(containsX && containsY){
		return true;
	}
	else{
		return false
	}
		
};

ItemHolder.prototype.contains = function(items,mX,mY,leftClick){

	//printWords.AddToList("contains!!!!!!!!!!!");
	
	var containsMouse = ((mX > this.ULX && mX < this.URX) && (mY > this.ULY && mY < this.LLY));
	
	//if(true){
	if(containsMouse){
	
		for(var i = 0; i < items.length; i++){
		
			var item = items[i];
			
			var containsItem = 	(
			//if the left part of the item is between the left part of the column and the right part of the column OR
			((item.getULX() > this.ULX && item.getULX() < this.URX) ||
			//if the right part of the item is between the left part of the column and the right part of the column
			(item.getURX() > this.ULX && item.getURX() < this.URX)) &&
			//AND...the top part is greater than the top part AND less than the bottom part. 
			(item.getULY() > this.ULY && item.getLLY() < this.LLY)
			);
			
			// var temp = "containsItem is: " + containsItem;
			// printWords.AddToList(temp);
			
				
			//dropping item
			if(containsItem && leftClick == false){
				
				this.set_new_coords_on_this_item(item);
				
				this.items.push(item);//insert thing into items list
				items.splice(i,1);//and remove from globalItemArray	
			}
		
		}//end of for
		
		
	// //if you're holding down the left mouse button on one of the items in the menu, I'm assuming you're
	// //trying to drag it around.
	// if(item.menuLocContains(mX,mY) && leftClick == true){
		// var temp = "Seeing click!!!!";
		// printWords.AddToList(temp);	
		// globalItemArray.push(item);//add back to global area. 
		// this.items.splice(i,1);//remove the item. 
	// }
	// else{
		// var temp = "not seeing click";
		// printWords.AddToList(temp);			
	// }
		
		
	}//end of if 

};


ItemHolder.prototype.insert = function(item){
		this.items.push(item);
};

//I did it this way because it seemed to me that the default values for posting stuff seemed
//to start at the lower left hand corner of a square. 
ItemHolder.prototype.updateCoords = function(){

	
	this.ULX = this.x;
	this.ULY = this.y - this.height;
	
	this.URX = this.x + this.width;
	this.URY = this.y - this.height;		
	
	this.LRX = this.x + this.width;	
	this.LRY = this.y;	
	
	this.LLX = this.x;
	this.LLY = this.y;
	


};


// ItemHolder.prototype.insert = function(item){

	// //if UL and LL corners are to the left of the column (and thus not in) but it's UR and LR are greater than (not just equal)
	// //the UL and LL corners of this item holder column,then it's good. note: item can go past the UR and LR hand corners, or be
	// //less than. either way is cool. 
	// //note: I could have used the LLX (lower left x) just as easily as the ULX (upper left x). No reason for one over
	// //the other. 
	// //read this line as so: if the left part of the item is hovering off to the left of the column, but the right
	// //part of the box is clearly in the column, then insert the item. note also that I had to do the y comparison, since
	// //even if the x values were right, the item could have been being held either directly below or directly above the column. 
	// if((item.ULX < this.ULX && item.URX > this.ULX) && (item.LRY > this.URY && item.LRY < this.LRY)){
		// this.items.push(item);
	// }

	// //if UR and LR hand corners are less than the UR and LR hand corners of the column, but the UL and LL hand corners 
	// //of the item are greater, then we're good. 
	// //saying it another way, the right hand side is not in the column, but the left hand side is. 
	// if((item.ULX < this.URX && item.URX > this.URX) && (item.LRY > this.URY && item.LRY < this.LRY)){
		// this.items.push(item);
	// }
	
// };

ItemHolder.prototype.getImageName = function(){
	return this.imageName;
};

ItemHolder.prototype.setImageName = function(name){
	this.imageName = name;
};

ItemHolder.prototype.draw = function(){

	//printWords.AddToList("menu.draw() method");
	
	// var c=document.getElementById("myCanvas");
	// var ctx=c.getContext('2d');

	//draw rectangle (which will hold the objects) 
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
	
	//draw objects 
	
	var y_at = this.y;
	var bottom_of_column = this.height + this.y;
	
	var skipGap = true; 
	
	var gap = 10;
	
	
	// var temp = "this.items.length is: " + this.items.length;
	// printWords.AddToList(temp);
	
	for(var i = 0; i < this.items.length; i++){
	
		// var temp = "inside loop";
		// printWords.AddToList(temp);
		
		// var temp = "y_at is: " + y_at;
		// printWords.AddToList(temp);	
	
		var temp = "bottom_of_column is: " + bottom_of_column;
		printWords.AddToList(temp);	
		
		var item = this.items[i];
		
		item.printCorners_square();
		
		// printWords.AddToList("document");
		// item.printCorners();
		// printWords.AddToList("/document");
		
		//var next_spot = y_at + item.getHeight()
		var next_spot = this.y;
		//if we've technically gone past the bottom of the column 
		
		if(next_spot > bottom_of_column){
		
			// var temp = "------------------------";
			// printWords.AddToList(temp);	
		
			// var temp = "ABY-normal display";
			// printWords.AddToList(temp);
			
			// var temp = "y_at is: " + y_at;
			// printWords.AddToList(temp);	
		
			//remove the part of the image that goes past the bottom, and only display that
			//which is within the column. 
			var tempHeight = bottom_of_column - y_at;
			
			// var temp = "tempHeight is: " + tempHeight;
			// printWords.AddToList(temp);	
		
			ctx.drawImage(
			document.images[item.getImageName()],
			item.getSx(),
			item.getSy(),
			item.getSwidth(),
			item.getSheight(),
			this.x,//this is a rectange, all of the x's will be the same. the y vals will be incremented as we draw items
			y_at,
			item.getWidth(),
			tempHeight);
			
			//item.set_menu_y_and_height(y_at,tempHeight);
			//item.setXandY(this.x,this.y);
			
			//i = this.items.length;
		
		}
		else{
		
			// var temp = "normal display";
			// printWords.AddToList(temp);
			//console.log("got to the 'else' in draw() in holdItems.js");
			
			ctx.drawImage(
			document.images[item.getImageName()],
			item.getSx(),
			item.getSy(),
			item.getSwidth(),
			item.getSheight(),
			this.x,//this is a rectange, all of the x's will be the same. the y vals will be incremented as we draw items
			y_at,
			item.getWidth(),
			item.getHeight());
			
			//item.set_menu_y_and_height(y_at,item.getHeight());
			//item.setXandY(this.x,this.y);
			
			//current loc plus the height (to get to the bottom) plus gap to get to the next loc. 
			// y_at = y_at + item.getHeight() + gap;
			
			// skipGap = false;
		
		}
	
	}

};//draw


ItemHolder.prototype.getItem = function(mX,mY,leftClick){

	var containsMouse = ((mX > this.ULX && mX < this.URX) && (mY > this.ULY && mY < this.LLY));
	
	
	for(var i = 0; i < this.items.length; i++){
		var item = this.items[i];
		
			// var temp = "Seeing item";
			// printWords.AddToList(temp);
			
			// var temp = "item.getULX() is:" + item.getULX();
			// printWords.AddToList(temp);		
			// var temp = "item.getURX() is:" + item.getURX();
			// printWords.AddToList(temp);
			// var temp = "item.getULY() is:" + item.getULY();
			// printWords.AddToList(temp);
			// var temp = "item.getLLY() is:" + item.getLLY();
			// printWords.AddToList(temp);	

			//item.printCorners();	
		
			// var temp = "item.contains() is: " + item.contains();
			// printWords.AddToList(temp);
		
	//if you're holding down the left mouse button on one of the items in the menu, I'm assuming you're
	//trying to drag it around.
		if(item.contains() && leftClick == true){
			// var temp = "AAASeeing click!!!!";
			// printWords.AddToList(temp);	
			
			
			
			// console.log("here??????????");
			// var temp = "Aitem.getULX() is:" + item.getULX();
			// console.log(temp);		
			// var temp = "Aitem.getURX() is:" + item.getURX();
			// console.log(temp);
			// var temp = "Aitem.getULY() is:" + item.getULY();
			// console.log(temp);
			// var temp = "Aitem.getLLY() is:" + item.getLLY();
			// console.log(temp);	
			// console.log("HOW ABOUT here??????????");
			
			globalItemArray.push(item);//add back to global area. 
			this.items.splice(i,1);//remove the item. 
		}
		// else{
			// var temp = "not seeing click";
			// printWords.AddToList(temp);			
		// }
	}
	
	

};

ItemHolder.prototype.set_new_coords_on_this_item = function(item){

	// var items_new_ULX = this.x + this.posX;
	// var items_new_ULY = this.y + this.posY;
	
	// var items_new_URX = this.x + this.posX + item.getWidth();
	// var items_new_URY = this.y + this.posY;
	
	// var items_new_LLX = this.x + this.posX;
	// var items_new_LLY = this.y + this.posY + item.getHeight();
	
	// var items_new_LRX = this.x + this.posX + item.getWidth();
	// var items_new_LRY = this.y + this.posY + item.getHeight();

	// console.log("this.x is: " + this.x);
	// console.log("this.posX is: " + this.posX);
	// console.log("items_new_ULX is: " + items_new_ULX);
	// console.log("item.getULX was: " + item.getULX());
	
	item.setXandY(this.x,this.y);

			
	
};
