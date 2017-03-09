
//Person
//function Gen_Character(){
//Character_Graphic

Character_Graphic.z_loc_in_array = 0;
Character_Graphic.x_loc_in_array = 1;
Character_Graphic.y_loc_in_array = 2;

Character_Graphic.up = 3;
Character_Graphic.down = 0;
Character_Graphic.left = 1;
Character_Graphic.right = 2;

//haven't actually been done in the code yet. 
Character_Graphic.lower_left = -1;
Character_Graphic.lower_right = -1;
Character_Graphic.upper_left = -1;
Character_Graphic.upper_right = -1;

Character_Graphic.move_amount = 5;


function Character_Graphic(z,x,y,w,l,h,d,num_of_rows,num_of_columns,sprite_sheet){

	//canvas_loc_y

	this.z = (z == null) ? 0 : z;

	this.x = (x == null) ? 0 : x;

	this.y = (y == null) ? 0 : y;

	//aka directions that the character can move in.
	//h stands for horizonal
	//v stands for vertical
	//could also have a "d" in there as well that stands
	//for diagonal.  
	this.d = (d == null) ? ["h","v","d"] : d;

	//30 was what was used for the width with the sprite 
	//sheet character that I initially used to build this 
	//game engine. same with height. the length was made up,
	//and only happaned after I had made some progress with
	//turning the game pseudo 3d
	this.w = (w == null || w == 0) ? 30 : w;

	//aka y 
	this.l = (l == null || l == 0) ? 10 : l;

	//height aka z
	this.h = (h == null || h == 0) ? 50 : h;

	//not necessarily much of a stop gap...but (shrugs) more or less
	//the best I can do. 
	sprite_sheet = (sprite_sheet == null || (typeof sprite_sheet != 'string')) ? "person_set_1" : sprite_sheet;

	//so that the image is only gotten once. 
	//this.img=document.getElementById("person_set_1");
	this.img=document.getElementById(sprite_sheet);


	//number of columns and rows (the defaults are what I used with my original
	//sprites)
	this.num_of_columns = (num_of_columns == null || num_of_columns == 0) ? 3 : num_of_columns;
	this.num_of_rows = (num_of_rows == null || num_of_rows == 0) ? 4 : num_of_rows;

	//squares that will be used to select the proper image from the sheet for display. 
	this.double_array = this.build_image_array();

	//aka forward. just a default value. 
	this.current_direction = Character_Graphic.down;

	//is part of the instance rather than global values because the speed
	//at which a person (or thing...like a car) goes, will at times vary. 
	this.amount = Character_Graphic.move_amount;

};

//get width and height
Character_Graphic.prototype.get_wah = function(){
	return [this.w,this.h];
};

Character_Graphic.prototype.get_loc = function(){
	return [this.z,this.x,this.y];
};

Character_Graphic.prototype.get_x_and_y = function(){
	return [this.x,this.y];
};

//note: put the rest of build_image_array into Multi_SSI
Character_Graphic.prototype.build_image_array = function(){

	//console.log("GETTING INTO BUILD-IMAGE-ARRAY");

	//note: haven't had luck declaring double arrays in javascript. Not sure if you even can. 
	var temp_double_array = [];

	//console.log("this.num_of_rows is: " + this.num_of_rows);

	for(var row = 0; row < this.num_of_rows; row++){

		//console.log("!!!!!!!!!!ROW: " + row);

		var tmp_mult_ssi = new Multi_SSI(row,this.num_of_columns);

		temp_double_array.push(tmp_mult_ssi);
		//console.log("00000000000000000000");

	}

	//once all of the arrays are built, return the fully build double array. 
	return temp_double_array; 

}; 

Character_Graphic.prototype.draw_ssi = function(curr_ssi){

			//console.log("curr_ssi.start_of_ssi_x is: " + curr_ssi.start_of_ssi_x);

			// pw.print("meyo");
			// pw.print("curr_ssi.destination_width is: " + curr_ssi.destination_width);
			// pw.print("curr_ssi.destination_height is: " + curr_ssi.destination_height);

			ctx.drawImage(this.img,
				curr_ssi.start_of_ssi_x,
				curr_ssi.start_of_ssi_y,
				curr_ssi.s_width,
				curr_ssi.s_height,
				this.x, 
				this.y,
				curr_ssi.destination_width,
				curr_ssi.destination_height
			);
};


Character_Graphic.prototype.run = function(direction,moved){

	// pw.AddToList("direction is: " + direction);
	// pw.AddToList("moved is: " + moved);

	// pw.print("direction is: " + direction);
	// pw.print("moved is: " + moved);


	//if we did move
	if(moved){

		pw.print("moved");

		//adjust coordinates AND set variable used to remember which graphic (facing north, south, east, west, etc)
		//of the character is in use. 
		this.move_perp(direction);

		//use the direction number to select which set of graphics to use (left, right, up, down) 
		var temp_multi_ssi = this.double_array[direction];//need to check that it is filled correctly.

		//then, get the proper graphic (ie the first, second, or third graphic...depending on how
		//long the user has been holding down the arrow)
		var temp_ssi = temp_multi_ssi.get_next_SSI();

		//save the standing perfectly still (but still facing that same direction) graphic for when
		//the arrow is no longer being hit. 
		this.temp_default_ssi = temp_multi_ssi.get_default();

		//debugger;

		//pw.AddToList("1temp_ssi.start_of_ssi_x is: " + temp_ssi.start_of_ssi_x);

		this.draw_ssi(temp_ssi);

	}
	 else{

		pw.AddToList("didn't move.");


		//if temp_default_ssi was already set, then just use it. 
		if(this.temp_default_ssi != null){

			//pw.AddToList("this.temp_default_ssi not null");

			this.draw_ssi(this.temp_default_ssi);

		}
		else{

			//If however it was not initially set, then set it and use it. 

			//double_array is made up up multi_SSIs...which is a type of object that holds arrays. 
			//you are getting a multi_ssi from here. 
			var temp_multi_ssi = this.double_array[direction];

			//from multi_ssi you are calling get_default, which should get you 
			this.temp_default_ssi = temp_multi_ssi.get_default();

			this.draw_ssi(this.temp_default_ssi);
		}

	}




};

//direction should be same as before. 
//moved, instead of being a boolean, needs to be an amount that we'll
//increment by. something like that. 
Character_Graphic.prototype.move = function(direction,moved){

	// pw.AddToList("direction is: " + direction);
	// pw.AddToList("moved is: " + moved);


	//if we did move
	if(moved){

		pw.AddToList("moved");

		this.move_perp(direction);

		//use the direction number to select which set of graphics to use (left, right, up, down) 
		var temp_multi_ssi = this.double_array[direction];//need to check that it is filled correctly.

		//then, get the proper graphic (ie the first, second, or third graphic...depending on how
		//long the user has been holding down the arrow)
		var temp_ssi = temp_multi_ssi.get_next_SSI();

		//save the standing perfectly still (but still facing that same direction) graphic for when
		//the arrow is no longer being hit. 
		this.temp_default_ssi = temp_multi_ssi.get_default();

		//debugger;

		//pw.AddToList("1temp_ssi.start_of_ssi_x is: " + temp_ssi.start_of_ssi_x);

		this.draw_ssi(temp_ssi);

	}
	 else{

		pw.AddToList("didn't move.");


		//if temp_default_ssi was already set, then just use it. 
		if(this.temp_default_ssi != null){

			//pw.AddToList("this.temp_default_ssi not null");



			this.draw_ssi(this.temp_default_ssi);

		}
		else{

			//If however it was not initially set, then set it and use it. 

			//double_array is made up up multi_SSIs...which is a type of object that holds arrays. 
			//you are getting a multi_ssi from here. 
			var temp_multi_ssi = this.double_array[direction];

			//from multi_ssi you are calling get_default, which should get you 
			this.temp_default_ssi = temp_multi_ssi.get_default();

			this.draw_ssi(this.temp_default_ssi);
		}

	}

};


//probably not in use
// Character_Graphic.prototype.stand_still = function(direction){

// 	var moved = false;

// 	this.run(direction,moved);

// };





// Character_Graphic.prototype.contains_mouse = function(){

// 	return((mx >= this.canvas_loc_x && mx <= (this.canvas_loc_x + this.w)) && 
// 			(my >= this.canvas_loc_y && mx <= (this.canvas_loc_y + this.h)));

// };				



	// this.canvas_loc_x = 0;
	// this.canvas_loc_y = 0;
Character_Graphic.prototype.move_perp = function(direction){

	// var amount = 5;

	// var up = 3;
	// var down = 0;
	// var left = 1;
	// var right = 2;

	if(direction == Character_Graphic.up){
		this.y -= this.amount;
		this.current_direction = Character_Graphic.up;
	}
	else if(direction == Character_Graphic.down){
		this.y += this.amount;
		this.current_direction = Character_Graphic.down;
	}
	else if(direction == Character_Graphic.left){
		this.x -= this.amount;
		this.current_direction = Character_Graphic.left;
	}
	else if(direction == Character_Graphic.right){
		this.x += this.amount;
		this.current_direction = Character_Graphic.right;
	}

};


// Character_Graphic.prototype.move_perp_w_provided_amount = function(amount,direction){

// 	// var amount = 5;

// 	// var up = 3;
// 	// var down = 0;
// 	// var left = 1;
// 	// var right = 2;

// 	if(direction == Character_Graphic.up){
// 		this.y -= amount;
// 		this.current_direction = Character_Graphic.up;
// 	}
// 	else if(direction == Character_Graphic.down){
// 		this.y += amount;
// 		this.current_direction = Character_Graphic.down;
// 	}
// 	else if(direction == Character_Graphic.left){
// 		this.x -= amount;
// 		this.current_direction = Character_Graphic.left;
// 	}
// 	else if(direction == Character_Graphic.right){
// 		this.x += amount;
// 		this.current_direction = Character_Graphic.right;
// 	}

// };


//the difference between the current location and where your character is trying to get to is 3. 
//the movemovement is 5. you dont want to overshoot, so you return 3 instead of 5. however, in the
//opposite case of diff_x being >= Character_Graphic.move_amount, just return the move amount. 

// var move_x = (Math.abs(diff_x) < Character_Graphic.move_amount) ? diff_x : Character_Graphic.move_amount;
// var move_y = (Math.abs(diff_y) < Character_Graphic.move_amount) ? diff_y : Character_Graphic.move_amount;

Character_Graphic.prototype.move_perp_for_walk_path= function(diff_x,diff_y,move_x,move_y){

	//0 means that neither x nor y will be changed. also means that the last
	//curren_direction change will stay the same. 

	if(diff_y < 0){//up
		this.y -= move_y;
		this.current_direction = Character_Graphic.up;
	}
	//on zero do no addition
	else if(diff_y > 0){
		this.y += move_y;
		this.current_direction = Character_Graphic.down;
	}
	
	if(diff_x < 0){
		this.x -= move_x;
		this.current_direction = Character_Graphic.left;
	}
	else if(diff_x > 0){
		this.x += move_x;
		this.current_direction = Character_Graphic.right;
	}


};
