//30 wide, 40 tall. aka 3 wide, 4 tall. 1 thick. 

function Person(){

	//this.wp = new Walk_Path();

	//graphic of person
	this.gop = new Character_Graphic();

	//menu (holds items as well)
	//this.menu = new Menu();

	//this.menu.set_perp_wh_vals(this.gop.get_wah());

	//var w_and_h = this.gop.get_wah();

	//this.menu.set_perp_wh_vals(w_and_h);

	//each person should have a name. 
	this.name = "default_name";

	//things like scientist. solider. engineer. characters might have mutliple type.
	//or maybe not. maybe I wont wind up using this at all. (shrugs)
	this.char_type = "default_type";

	//this.walking = new Walk_Path();

	// var char_tb_width = 2;
	// var char_tb_length = 1;
	// var initial_horizonal_base = 0;

	// this.char_base = new Char_Base(char_tb_width,char_tb_length,initial_horizonal_base);


	// var person_w = 30;
	// var person_l = 10;
	// //horizonal, vertical, diagonal.
	// var directions = ["h","v","d"];

	// console.log("this.gop.w is: " + this.gop.w);
	// console.log("this.gop.l is: " + this.gop.l);
	// console.log("this.gop.d is: " + this.gop.d);


	//this.cbc = new Char_Base_Controller(this.gop.w,this.gop.l,this.gop.d);

	// each person should have a face graphic
	//this.face_picture = new SSI();

	//attributes (not yet completely implemented)
	//this.attr = new Attr();

	//console.log("mmoooooo");

	this.currently_selected = false;

	//this.tba = this.generate_tba();//terrain block array 
};


Person.prototype.z = function(){
	return this.gop.z;
};


Person.prototype.x = function(){
	return this.gop.x;
};


Person.prototype.y = function(){
	return this.gop.y;
};

Person.prototype.w = function(){
	return this.gop.w;
};

Person.prototype.h = function(){
	return this.gop.h;
};

Person.prototype.l = function(){
	return this.gop.l;
};



Person.prototype.generate_tba = function(){

	this.tba = [];

	var z = this.gop.z;

	var x = this.gop.x;

	var y = this.gop.y;

	//start terr block x 
	var start_tbx = Math.round(x/Terrain_Block.w) * Terrain_Block.w;

	var start_tby = Math.round(y/Terrain_Block.l) * Terrain_Block.l;


	var w = this.gop.w;

	var h = this.gop.h;

	var l = this.gop.l;

	//need to figure out a way to easily update this stuff I think. 

	// console.log("h is: " + h);
	// console.log("w is: " + w);
	// console.log("l is: " + l);

	for(var i1 = 0; i1 <= h; i1 += Terrain_Block.h){ //height of character

		for(var i2 = 0; i2 <= w; i2 += Terrain_Block.w){ //width of character

			for(var i3 = 0; i3 <= l; i3 += Terrain_Block.l){ //length (thickness) of character.

				//console.log("h i1 is: " + i1);
				//console.log("w i2 is: " + i2);
				//console.log("l i3 is: " + i3);

				//z here could be level 3 for instance. 
				var tbz = (i1 * Terrain_Block.h) + z;

				var tbx = (i2 * Terrain_Block.w) + start_tbx;

				var tby = (i3 * Terrain_Block.l) + start_tby;

				this.tba[i1] = new Terrain_Block(tbz,tbx,tby);
			}
		}
	}

	// for(var i1 = 0; i1 < w; i1++){ //width of character

	// 	for(var i2 = 0; i2 < h; i2++){ //height of character

	// 		for(var i3 = 0; i3 < h; i3++){ //length (thickness) of character. 

	// 			this.tba[i1] = new Terrain_Block(z,);
	// 		}
	// 	}
	// }
};


// Person.prototype.run = function(){


// 	if(mlc == true && this.cbc.can_stand_at_newly_selected_spot(g_ah_ascii_tba)){

// 		var current_loc = this.gop.get_loc();

// 		var update_loc_and_direction_array = this.walking.increment_char_location(current_loc);

// 		var direction = update_loc_and_direction_array[0];

// 		var new_loc = update_loc_and_direction_array[1];//has z,x,y vals

// 		this.gop.move(direction,new_loc);

// 		//this.gop.run(g_direction,g_moved);

// 	}
// 	else{
// 		this.gop.stand_still(g_direction);
// 	}

// };

//got the angle graphic associated with a person. 
//need to get it so that if the click happens, then it's okay
//i dunno. 

//pw.print("this.currently_selected is: " + this.currently_selected);


Person.prototype.draw_ssi = function(){
	this.run();
};

Person.prototype.run = function(){

	//pw.print("this.currently_selected is: " + this.currently_selected);

	//is used to say whether or not the character is selected or not (important)
	//this.set_selection_status();//was in use1111111

	//will be useful for when I want a character 
	//to walk to a certain spot. 
	//this.cbc.draw_ssi_w_ascii_map(g_ah_ascii_tba);

	//needs to be ran before gop, as it needs to show up underneath the characters feet. 

	//this moves it from where it was. 
	//this.update_char_base();

	//this sets it initially under the persons feet. 
	//this.update_and_display_personal_cb();//was in use1111111

	//this.cbc.draw_ssi_w_direction(this.gop.current_direction);

	this.gop.run(g_direction,g_moved);

	// var x_and_y = this.gop.get_x_and_y();

	// this.menu.set_perp_xy_vals(x_and_y);

	// this.menu.update(mx,my,mlc,gen_obj);

	// this.menu.draw_ssi();
};


/*
so what is the end result here? 

that you click on the person, wherever the mouse goes, the char_base pattern that is on at the time
is represented on that terr base layer. 

also, the angle. need to keep up with that stuff. 

if even one part of the char_base is not an okay spot, then the whole thing turns red. 


if you right click then the selected character stuff goes away

*/

//if the mouse is ontop of the person and is clicked, return true.
//otherwise return false. 
Person.prototype.is_being_selected = function(){

	//pw.print("this.gop.x is: " + this.gop.x);

	return(mlc && ((mx >= this.gop.x && mx <= (this.gop.x + this.gop.w)) && 
			(my >= this.gop.y && mx <= (this.gop.y + this.gop.h))));


};	

//
Person.prototype.set_selection_status = function(){

	//pw.print("getting here123445");

	pw.print("this.is_being_selected() is: " + this.is_being_selected());

	pw.print("this.currently_selected is: " + (this.currently_selected));

	if(!this.currently_selected && this.is_being_selected()){
		console.log("hitting true!!");
		this.currently_selected = true;
	}
	else if(this.currently_selected && mrc){
		console.log("false");
		this.currently_selected = false;
	}

};

//displaying character base for this particular character while
//(s)he stands/walks at this particular angle. 
Person.prototype.update_and_display_personal_cb = function(){

	//pw.print("this.currently_selected is: " + this.currently_selected);

	if(this.currently_selected){

		//pw.print("getting into this place!");

		var z = this.gop.z;
		var x = this.gop.x;
		var y = this.gop.y;
		var h = this.gop.h;
		//no need for w (aka width)

		//cd == current direction
		var cd = this.gop.current_direction;


		// pw.print("z is: " + z);
		// pw.print("x is: " + x);
		// pw.print("y is: " + y);
		// pw.print("h is: " + h);
		// pw.print("cd is: " + cd);

		this.cbc.set_current_location(z,x,y,h,cd);
		this.cbc.draw_ssi_w_direction(this.gop.current_direction);
	}

}

//this method makes it so that as the character walks 
//around the areas, that the terrain blocks that (s)he is currently
//standing on light up, as (s)he steps on them.
Person.prototype.update_char_base = function(){

	//need to get direction of character so that I know which one to use. 

	//lower left hand corner of base x. You have the character, right? 
	//the character has a base? this is the lower left hand corner of it. 
	var llcobx = this.gop.x;

	var llcoby = this.gop.y + this.gop.h;//need to add base height as well I think. 

	//copy of first terrain block 
	var cof_tb = this.cbc.get_cof_tb();

	//update location does the following. 
	// --takes the provided location
	// --converts them into acceptable locations
	// --take the difference between them and the current location of the char base and its boxes
	// --adds the difference (be it positive, negative, or zero) to all of the squares

	if(this.moved_past_curr_cb(cof_tb,llcobx,llcoby)){

		var curr_perp_direction = this.gop.current_direction;

		this.cbc.update_location(curr_perp_direction,llcobx,llcoby);
	}

};

//moved past current character base. 
Person.prototype.moved_past_curr_cb = function(cof_tb,llcobx,llcoby){

	return (this.moved_past_curr_cb_calc_x(cof_tb,llcobx) || this.moved_past_curr_cb_calc_y(cof_tb,llcoby));

};

//helper
Person.prototype.moved_past_curr_cb_calc_x = function(cof_tb,llcobx){

	//terrain box x left side 
	var tbx_ls = cof_tb.x

	//terrain box x right side
	var tbx_rs = cof_tb.x + cof_tb.w;

	//y got changed but x didn't, since this is the lower left corner 
	//var llx = this.gop.x;

	return (llcobx < tbx_ls || llcobx > tbx_rs);

};

//helper
Person.prototype.moved_past_curr_cb_calc_y = function(cof_tb,llcoby){

	//terrain block y value 1
	var tby_top = cof_tb.y

	//terrain block y value 2
	var tby_bottom = cof_tb.y + cof_tb.l;

	//lower left y
	//normally you use l instead of h, but in this case it's needed
	//to get the lower left corner y value, where the initial y value is 
	//in the upper left hand corner and we need it from the lower left hand
	//corner 
	//var lly = this.gop.y + this.gop.h;

	return (llcoby < tby_top || llcoby > tby_bottom);

};

/*
the click on part (basically) works 

going to make the world variable global (if it isn't already)

going to look into inserting person into it. 

inserting character into that and then getting the character to run 
will be tricky 

after that need to get the character so that he cant walk through
the rocks 

after that, need to get the walking algorithm working. 

idea: the click on a spot char base and the click on the person char
base methods will actually be 2 different methods. 

something like 

//mouse click horizontal
mc_horizontal(mlcx,mlcy)

and

char_horizontal(perpx,perpy)
*/


/*
none of my ideas are good. 

fudge. 

*/

/*
what I want char_base_controller to do: 

when I click on a location, I can rotate the char_base

however, when I click on the person, I can't. 

*/

/*
note: need to ask on a game site or something how to implement
my 3d aspect of the game. 

*/