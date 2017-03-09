
/*
okay okay okay...I think I've got it. 

a terrain_block is a 1 or a 0 (or some number like it). and just
has a getter. 

a terrain_square is made up of terrain_blocks. each terrain_square
now also has to define which parts of its image is walkable (0) and
which parts aren't (1)

and terrain holder is made up of these new terrain squares 

and area builder possibly has new stuff to deal with as well. 

*/

//very important note: each block is to be 10 by 10. 

Terrain_Block.w = 10;
Terrain_Block.l = 10;
Terrain_Block.h = 10;

// Terrain_Block.same_color = false;
// Terrain_Block.static_color = null;


//dont need these values per instance...so made them static
Terrain_Block.cannot_walk = 1;
Terrain_Block.can_walk = 0;

function Terrain_Block(z,x,y,block_type){

	this.color = "blue";

	//is a number. 0 means you can walk on it. 1 means
	//you cant. 
	this.type = block_type;

	if(this.type == Terrain_Block.cannot_walk){
		//console.log("not walk here");
		this.color = "red";
	}
	// else{
	// 	console.log("type is: " + this.type);
	// }

	this.z = z;
	this.x = x;
	this.y = y;



	//hard coded because all terrain blocks are supposed to be the exact
	//same width and height. 
	this.w = Terrain_Block.w;
	this.l = Terrain_Block.l;
	this.h = Terrain_Block.h;

	// this.w = 10;
	// this.l = 10;

	//so that these 4 values dont need to be calculated over and over again. 
	this.ulc_x = this.x;
	this.urc_x = this.x + this.w;
	this.ulc_y = this.y;
	this.llc_y = this.y + this.l;

};

Terrain_Block.prototype.tb_count_across_x_axis = function(){

	return this.x / Terrain_Block.w;

};

Terrain_Block.prototype.tb_count_down_y_axis = function(){

	return this.y / Terrain_Block.l;

};

Terrain_Block.prototype.set_block_type = function(num){

	this.type = num;

	if(this.type == Terrain_Block.cannot_walk){
		this.color = "red";
	}

	if(this.type == Terrain_Block.can_walk){
		this.color = "blue";
	}

};

Terrain_Block.prototype.get_block_type = function(){

	return this.type;

};

//not even a single still image. just a square. :-P 
Terrain_Block.prototype.draw_ssi = function(){

	//pw.print("tb this.color is: " + this.color);

	// pw.print("(new Error).lineNumber is: " + (new Error).lineNumber);
	// pw.print((new Error).lineNumber);
	//console.log((new Error).lineNumber);

	// var thisline = new Error().lineNumber

	// console.log("this is: " + thisline);

	//pw.print("getting into tb.draw_ssi()");
	

	// pw.print("this.x is: " + this.x/Terrain_Block.w);
	// pw.print("this.y is: " + this.y/Terrain_Block.l);
	// pw.print("this.w is: " + this.w);
	// pw.print("this.l is: " + this.l);

	//pw.print("this.type is: " + this.type);

	ctx.lineWidth= "1";
	ctx.strokeStyle = this.color;
	ctx.rect(this.x,this.y,this.w,this.l);
	ctx.stroke();

	//ctx.strokeStyle = "yellow";

	// console.log("this.x is: " + this.x);
	// console.log("this.y is: " + this.y);
	// console.log("this.w is: " + this.w);
	// console.log("this.l is: " + this.l);

};

Terrain_Block.prototype.draw_tb_with_provided_color = function(color){

	var prev_color = ctx.strokeStyle;

	var prev_line_width = ctx.lineWidth;

	ctx.lineWidth = "1";

	ctx.strokeStyle = color;

	ctx.rect(this.x,this.y,this.w,this.l);

	ctx.stroke();

	ctx.strokeStyle = prev_color;

	ctx.lineWidth = prev_line_width;

};




Terrain_Block.prototype.contains_mouse = function(){

	var contains_x = (mx >= this.ulc_x && mx <= this.urc_x);

	if(contains_x){

		var contains_y = (my >= this.ulc_y && my <= this.llc_y);

		if(contains_y){
			return true;
		}
		else{
			return false;
		}

	}
	else{
		return false;
	}

};


Terrain_Block.prototype.test = function(){

	console.log("this is working?");
};


Terrain_Block.prototype.convert_and_increment = function(loc_x,loc_y){

	//takes the provided location and converts it into an acceptable locations

	var new_x_loc = Math.round(char_llx/Terrain_Block.w) * Terrain_Block.w;

	var new_y_loc = Math.round(char_lly/Terrain_Block.l) * Terrain_Block.l;


	//take the difference between the loc and the current location of the tb 
	var x_diff = new_x_loc - this.x;
	var y_diff = new_y_loc - this.y;

	//add the difference (be it positive, negative, or zero) to the loc of the block
	this.x += x_diff;
	this.y += y_diff;
};