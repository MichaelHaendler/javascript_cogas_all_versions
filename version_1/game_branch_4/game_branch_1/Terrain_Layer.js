
//push and pop are what you use to treat an array like a queue in js. 
//http://stackoverflow.com/questions/1590247/how-do-you-implement-a-stack-and-a-queue-in-javascript

function Terrain_Layer(layer,terrain_blocks_across,terrain_blocks_down){

	// console.log("terrain_blocks_across is: " + terrain_blocks_across);
	// console.log("terrain_blocks_down is: " + terrain_blocks_down);


	//is our z. is used to tell us which layer of an object to display. 
	this.which_layer = layer;

	//terrain blocks wide: number of terrain blocks across x axis. 
	this.tbw = terrain_blocks_across;

	//terrain blocks high. number of terrain blocks down y axis. 
	this.tbh = terrain_blocks_down;

	//canvas width
	//gaw (game)
	this.c_w = this.tbw * Terrain_Block.w;

	//canvas height
	this.c_h = this.tbh * Terrain_Block.h;

	//number of squares
	this.nos = (this.tbw >= this.tbh) ? this.tbw : this.tbh;

	//biggest size. 
	//this.b_size = (this.c_w >= this.c_h) ? this.c_w : this.c_h;

	// console.log("this.c_w is: " + this.c_w);
	// console.log("this.c_h is: " + this.c_h);

	this.contains = false;
	this.contains_x = null;
	this.contains_y = null;

	//terrain squares
	this.tss = [];

	//sets each [x,y] loc with an array (which will be treated like a queue)
	this.init_tss();

	//same as this.tss except it holds numbers in place of objects. 
	//is good for things like the path finding code. 
	this.ascii_tss = [];

	this.init_ascii_tss();

	var backup_ascii_tss = [];
	var backup_tss = [];

	this.default_type = 0;

	//contains the locations of all the terrain squares on this
	//layer. Is used to speed up drawing. 
	this.locs_of_terr_sqs = [];

};

Terrain_Layer.prototype.init_tss = function(){

	//console.log("this.nos is: " + this.nos);


	for(var x = 0; x < this.nos; x++){

		this.tss[x] = [];

		for(var y = 0; y < this.nos; y++){

			this.tss[x][y] = null;

		}
	}

	// console.log("2 this.tss.length is: " + this.tss.length);

	// console.log("2 this.tss[0].length is: " + this.tss[0].length);


};


Terrain_Layer.prototype.init_ascii_tss = function(){

	var canvas_width = c.width;

	var canvas_height = c.height;

	var canvas_size = (canvas_width >= canvas_height) ? canvas_width : canvas_height;

	//terrain block count size (the biggest of either height or width)
	//note: doing this 'size' thing rather than by width and height because of walking/shortest path
	//algorithm which requires both w and h have to be the same. 
 	var tbc_s = Math.ceil(canvas_size/Terrain_Block.w);

 	//console.log("!!!!!!!!!!tbc_s is: " + tbc_s);

 	var tmp_array = [];

	for(var x = 0; x < tbc_s; x++){

		this.ascii_tss[x] = [];

		for(var y = 0; y < tbc_s; y++){

			this.ascii_tss[x][y] = null;

		}
	}

};

Terrain_Layer.prototype.new_Terrain_Square = function(x,y,w,l,h,
													  which_sprite_array,
													  name_of_sprite_sheet,ba,which_layer){

	// if(ba == null){
	// 	ba = [];
	// }

	
	//create it. 
	//(x,y,w,l,h,type,which_sprite_array,name_of_sprite_sheet)

	//(x,y,w,l,h,which_sprite_array,name_of_sprite_sheet,ba,which_layer)

	//console.log("1");
	//console.log(ba);

	var tmp_ts = new Terrain_Square(x,y,w,l,h,which_sprite_array,name_of_sprite_sheet,ba,which_layer);

	//tmp_ts.add_boundaries(ba);

	//add boundaries if need to
	// if(ba != null){
	// 	tmp_ts.add_boundaries(ba);
	// }

	// console.log("x is: " + x);
	// console.log("y is: " + y);

	// print_2d_array(tmp_ts.ascii_tba);

	//add it to the layer
	this.add_terr_sq_to_layer(x,y,tmp_ts);

	//and return it. 
	return tmp_ts;

};



//including w and h here because not all sprite squares are going to be the same size. 
Terrain_Layer.prototype.add_square = function(x,y,w,l,h,which_sprite_array,name_of_sprite_sheet){
// Terrain_Layer.prototype.add_square = function(x,y,type,which_sprite_array,name_of_sprite_sheet){

	//build instance
	var tmp_ts = new Terrain_Square(x,y,w,l,h,this.default_type,which_sprite_array,name_of_sprite_sheet);

	//and add it to the layer. 
	this.add_terr_sq_to_layer(x,y,tmp_ts);

	//var tmp_ts = new Terrain_Square(x,y,this.wos,this.hos,type,which_sprite_array,name_of_sprite_sheet);

	//this.tss[x][y] = tmp_ts;


	// //if it doesn't equal to null that means there's an array there already. 
	// //so push the current square onto it.
	//if(this.tss[x][y].constructor == Array){
	// if(this.tss[x][y] != null){
	// 	console.log(this.tss[x][y]);
	// 	this.tss[x][y].push(tmp_ts);
	// }
	// else{
	// 	//else, if that location IS null, set it as an array, and push
	// 	//the terrain square onto it. 
	// 	this.tss[x][y] = [];
	// 	this.tss[x][y].push(tmp_ts);
	// }

	// this.locs_of_terr_sqs.push([x,y]);

	// this.add_to_ascii_tss(tmp_ts);	

};


//ba == boundary array 

Terrain_Layer.prototype.add_square_w_boundaries = function(x,y,w,l,h,which_sprite_array,name_of_sprite_sheet,ba){
//Terrain_Layer.prototype.add_square_w_boundaries = function(x,y,type,which_sprite_array,name_of_sprite_sheet,ba){

	//temp terrain square

	var tmp_ts = new Terrain_Square(x,y,w,l,h,which_sprite_array,name_of_sprite_sheet,ba,this.which_layer);

	// console.log(name_of_sprite_sheet);
	// console.log(ba);

	//add boundaries to item 
	//tmp_ts.add_boundaries(ba);

	this.add_terr_sq_to_layer(x,y,tmp_ts);

	//this.tss[x][y] = tmp_ts;

	// //if it doesn't equal to null that means there's an array there already. 
	// //so push the current square onto it. 
	// if(this.tss[x][y] != null){
	// 	//console.log(this.tss[x][y]);
	// 	this.tss[x][y].push(tmp_ts);
	// }
	// else{
	// 	this.tss[x][y] = [];
	// 	this.tss[x][y].push(tmp_ts);
	// }

	// this.locs_of_terr_sqs.push([x,y]);

	// this.add_to_ascii_tss(tmp_ts);



};

Terrain_Layer.prototype.add_pre_made_terr_sq = function(ts){

	this.add_terr_sq_to_layer(ts.x,ts.y,ts);

};

//helper code 
//is the z layer...so no need for tss to be 3 dimensional. 
Terrain_Layer.prototype.add_terr_sq_to_layer = function(x,y,tmp_ts){

	//if it doesn't equal to null that means there's an array there already. 
	//so push the current square onto it. 

	// console.log("TL x is: " + x);
	// console.log("TL y is: " + y);


	// if(x == 39 && y == 0){
	// 	debugger;
	// }


	if(this.tss[x][y] != null){
		//console.log("not null");
		//console.log(this.tss[x][y]);
		this.tss[x][y].push(tmp_ts);
	}
	else{
		//console.log("null");
		this.tss[x][y] = [];
		this.tss[x][y].push(tmp_ts);
	}

	//console.log("getting here");

	this.locs_of_terr_sqs.push([x,y]);

	this.add_to_ascii_tss(tmp_ts);

};

Terrain_Layer.prototype.add_to_ascii_tss = function(tmp_ts){

	//this represents the type of area that cannot be replaced
	//if stepped on. here are the general rules
	//null: (nothing) can be replaced by a 1 or a 0
	//0: can be replaced by a 1
	//1: cannot be replaced
	var non_replaceable_type = 1;

	// console.log("tmp_ts.array_w is: " + tmp_ts.array_w);
	// console.log("tmp_ts.array_l is: " + tmp_ts.array_l);

	var z = this.which_layer;

	//console.log("z here is: " + z);

	// console.log("tmp_ts.array_w is: " + tmp_ts.array_w);
	// console.log("tmp_ts.array_l is: " + tmp_ts.array_l);

	//debugger;

	//a width of 3
	for(var x = 0; x < tmp_ts.array_w; x++){

		var array_x = tmp_ts.get_x_loc_of_ts_on_tl_tb_array(x);

		//console.log("!!!!!array_x is: " + array_x);

		//a thickness of 1 tb. (so y only hits zero)
		for(var y = 0; y < tmp_ts.array_l; y++){

			//console.log("getting here?");

			//tmp_ts.array_loc_x is the starting x loc for the object in the array
			// //x will iterate from something like 0 to 2
			// var array_x = tmp_ts.array_loc_x + x;

			// //same deal as with x and array_loc_x
			// var array_y = tmp_ts.array_loc_y + y;

			var array_y = tmp_ts.get_y_loc_of_ts_on_tl_tb_array(y);///?!??!!?!?

			// console.log("this.tss["+array_x+"].length is: " + this.tss[array_x].length);
			// console.log("this.ascii_tss["+array_x+"].length is: " + this.ascii_tss[array_x].length);


			// if(array_x == 39 && array_y == 2){
			// 	debugger;
			// }

			if(this.ascii_tss[array_x] instanceof Array){
				// console.log("getting in here");
				// console.log("array_x is: " + array_x);
				// console.log("array_y is: " + array_y);
				this.ascii_tss[array_x][array_y] = tmp_ts.get_ascii_terrain_block_type(z,array_x,array_y);
			}
			// else{
			// 	console.log("NOT getting in here");
			// 	console.log("!array_x is: " + array_x);
			// 	console.log("!array_y is: " + array_y);				
			// }

			// if(this.ascii_tss[array_x][array_y] != non_replaceable_type){
			// 	this.ascii_tss[array_x][array_y] = tmp_ts.get_ascii_terrain_block_type(z,x,y);
			// }
		}
	}

	//console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
	//right now you are getting the tb drawing to work when the ts isn't at 0,0

	//where the freak is the number 141 coming from???? why is this method being ran that many times???
	//console.log("after it was: ");
	// print_2d_array(this.ascii_tss);
};



//important note of need to dos: 
//--get terrain holder with area_builder working (yay! almost there!)
//--need a method for taking a character, and setting it's ascii double array
//as part of the map 

//d_array == double array 
//add temporary terrain blocks (will need to be able to revert back)
Terrain_Layer.prototype.add_tmp_tbs = function(x,y,d_array){



};

Terrain_Layer.prototype.contains_mouse = function(x,y){

	// var tmpx = Math.floor(x/this.wos);
	// var tmpy = Math.floor(y/this.hos);
	// pw.print("|");
	// pw.print("tmpx is: " + tmpx);
	// pw.print("tmpy is: " + tmpy);


	if((x >= 0 && x < this.c_w) &&
	   (y >= 0 && y < this.c_h)){

		this.contains = true;
		// this.contains_x = x;
		// this.contains_y = y;
		this.contains_x = Math.floor(x/this.tbw);
		this.contains_y = Math.floor(y/this.tbh);
	}
	else{
		this.contains = false;
		this.contains_x = null;
		this.contains_y = null;
	}

};


Terrain_Layer.prototype.draw_ssi = function(){

	this.contains_mouse(mx,my);

	// this.tss[0][0].contains_mouse = true;
	// this.tss[0][0].draw_ssi();


	//to speed up the second if statement.
	var need_to_set_back_to_false = false;

	//temporary terrain square object
	var tmp_ts_obj = null;
	
	/*
	if(this.contains){
		// if(	this.tss[this.contains_x] != null && 
		// 	this.tss[this.contains_x][this.contains_y] != null){
		// 	this.tss[this.contains_x][this.contains_y].contains_mouse = true;
		// 	need_to_set_back_to_false = true;
		// }

		//the land graphic should always be the first thing pushed onto the stack. 
		// tmp_ts_obj = this.tss[this.contains_x][this.contains_y][0];
		// tmp_ts_obj.contains_mouse = true;
		// need_to_set_back_to_false = true;


		if(	this.tss[this.contains_x][this.contains_y] != null){
			//the land graphic should always be the first thing pushed onto the stack. 
			tmp_ts_obj = this.tss[this.contains_x][this.contains_y];
			tmp_ts_obj.contains_mouse = true;
			need_to_set_back_to_false = true;
			//console.log("getting in here?");
		}

	}
	*/


	//console.log("------------------------------------");

	//console.log("")

	// for(var x = 0; x < this.tss.length; x++){
	// 	for(var y = 0; y < this.tss[x].length; y++){

	// 		if(this.tss[x][y] != null){

	// 			this.tss[x][y].draw_ssi();

	// 		}
			
	// 	}
	// }

	//each point will be a 2 numbered array for a loc in tss. each point 
	//set will lead to an array of objects that need to be displayed.

	//get a loc where something was drawn. 
	for(var point of this.locs_of_terr_sqs){

		//console.log("point: " + point);

		//get the actual x y vals
		var x = point[0];
		var y = point[1];

		//get the array for that loc
		terr_sq_array = this.tss[x][y];

		//console.log(terr_sq_array);

		//and it's length
		var length = terr_sq_array.length; 

		//and then draw everything in that array. 
		for(var i = 0; i < terr_sq_array.length; i++){

			//console.log("i is: " + i);
			terr_sq_array[i].draw_ssi();
		}

 

	}

	//want to get this working. 
	// for(var x in this.tss){

	// 	console.log("x is: " + x);

	// 	for(var y in this.tss[x]){

	// 		console.log("2y is: " + y);

	// 		console.log(this.tss[x][y]);

	// 			var tmp_array = this.tss[x][y];

	// 			for(var i = 0; i < tmp_array.length; i++){

	// 				console.log("got into here...");

	// 				var tmp_ts = tmp_array[i];
	// 				tmp_ts.draw_ssi();

	// 			}
			
	// 	}
	// }



	// if(need_to_set_back_to_false){
	// 	//this.tss[this.contains_x][this.contains_y].contains_mouse = false;	
	// 	tmp_ts_obj.contains_mouse = false;
	// }
	

};

//idea: 

/*
lol. fucking...lol. why not though, right? 

fuck making it really 3d. at least for now. debug what you currently 
have, switching over to the "clean_rock" graphic. 

dont even have a method for adding ground items or anything. 

leave the person how he currently is. just pass him the array, and

use that to figure out whether he can or cannot move forward. 

*/


Terrain_Layer.prototype.get_ascii_map = function(){

	return this.ascii_tss;
};


Terrain_Layer.prototype.get_worldWidth = function(){

	return (this.wos * this.tss.length);

};


Terrain_Layer.prototype.get_worldHeight = function(){

	return (this.hos * this.tss[0].length);

};

Terrain_Layer.prototype.get_tileHeight = function(){

	return this.tile_height;

};


Terrain_Layer.prototype.get_tileWidth = function(){

	return this.tile_Width;

};



Terrain_Layer.prototype.get_copy_of_last_added_ts = function(x,y){

	// console.log("x is: " + x);
	// console.log("y is: " + y);

	//get the array at that location
	var tmp_array = this.tss[x][y];

	//get the terrain square that was just added to that location
	var tmp_ts = tmp_array[tmp_array.length - 1];
 
	//and then return the number of terrain blocks tall this thing is. 
	//return tmp_ts.get_layer_count();

	return tmp_ts;
};


Terrain_Layer.prototype.testing = function(){

	//this.tss[0][1]

};


//this or a method very similar needs to be ran any time the character moves
//so that everything is drawn correctly 
Terrain_Layer.prototype.adjust_character_into_world = function(char){

	var do_not_remove_anything = 0;

	var inserted = false;

	//need the lower left hand corner (could be lower right, just needs 
	//to be from the base) location so that I know where the character
	//goes in the stack of terr bases. 

	//same logic as for y. there's no "x + w" part here because we're
	//dealing with the lower left corner of the character
	var char_llc_x = Math.round(char.x() / Terrain_Block.w);


	//example of how this works: 
	//y is 10
	//h is 30
	//10 + 30 is 40 
	//we dont want to go down 40 terrain blocks though. we want to go down 4. 
	//so we divide by Terrain_Block.h (giving us 4)
	//and we do rounding just in case we're left with any decimals. 
	var char_llc_y = Math.round((char.y() + char.h()) / Terrain_Block.h);

	//this.tss[char_llcx][char_llcy].push(char);

	console.log("char_llc_x is: " + char_llc_x);
	console.log("char_llc_y is: " + char_llc_y);

	console.log("this.tss.length is: " + this.tss.length);
	console.log("this.tss[0].length is: " + this.tss[0].length);

	//debugger;

	console.log("this.tss["+char_llc_x+"]["+char_llc_y+"] is: ");
	console.log(this.tss[char_llc_x][char_llc_y]);

	//get the array for that loc
	// terr_sq_array = this.tss[char_llc_x][char_llc_y];


	var terr_sq_array = this.get_terr_square_array(char_llc_x,char_llc_y);

	//iterate through it. anything that has a base that comes
	//before the characters base needs to be draw before the character. 
	//anything with a base that comes after the character should be drawn
	//after the character (possibly drawing ontop of the character graphic)
	for(var i = 0; i < terr_sq_array.length; i++){

		var tmp_ts = terr_sq_array[i];

		//terr_sq_array[i].draw_ssi();

		//var tmp_base_llc_x = tmp_ts.x;

		var tmp_base_llc_y = tmp_ts.y + tmp_ts.h;

		//if the base is less than (comes before)
		//the base that we're looking at, just insert it there. 
		if(char_llc_y < tmp_base_llc_y){

			//insert element (via splice)
			//http://stackoverflow.com/questions/5306680/move-an-array-element-from-one-array-position-to-another

			//just stating what I'm using the "i" variable for here. 
			var insert_at = i;

			terr_sq_array.splice(insert_at,do_not_remove_anything,char);

			//say that we've inserted it. 
			inserted = true;

			//and then break (because we dont want to insert it anywhere else)
			break;
		}

	}

	//if we found no spot to put it in, just place it at the very front. 
	if(!inserted){
		this.tss[char_llc_x][char_llc_y].push(char);
	}

};

Terrain_Layer.prototype.get_terr_square_array = function(char_llc_x,char_llc_y){

	for(var x = char_llc_x; x >= 0; x--){
		for(var y = char_llc_y; y >= 0; y--){

			if(this.tss[x][y] != null){

				console.log("x is: " + x);
				console.log("y is: " + y);

				return this.tss[x][y];
			}

		}

	}


};


/*
http://stackoverflow.com/questions/565430/deep-copying-an-array-using-jquery

you have the 2d array of objects (and some nulls in there too)

use example below to copy said 2d array of objects

ex from link: 

var a =[[1], [2], [3]];
var b = $.extend(true, [], a);

b.shift().shift();
// a is still [[1], [2], [3]]

iterate through all of the locs 1 by 1, using the nested x and y for loops

check the array as you go along. 

if the array at the location is empty after you pop off the array, then delete
that array. 

note: instead of deep copying and shit...maybe I could just mark everything? I dunno. 

*/


/*
----------------------------------------------

need the 2d array in order to be able to put stuff anywhere. 

in order to speed drawing up, I will now have an array called something
like 'this.locs_of_terr_sqs' which will be an array of locations. this 
way, for the layers that only have one thing on them, the speed will be good. 

this should also speed up drawing in general, actually, because now not every
tb needs to be checked. 

*/