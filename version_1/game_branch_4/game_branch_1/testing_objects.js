
//ba == boundary array 

var bonkers = new SSI();

var b2 = new Multi_SSI(0,2);


var z = 10;
var x = 20;
var y = 10;
var w = 30;
var l = 10;
var h = 50; 
var d = ["h","v","d"];//directions that the character can walk in 
var num_of_rows = 3;
var num_of_columns = 3;
var sprite_sheet = "person_set_1";

var b3 = new Character_Graphic(z,x,y,w,l,h,d,num_of_rows,num_of_columns,sprite_sheet);


//Terrain_Block(z,x,y,block_type)

var z = 0;
var x = 20;
var y = 30;
var block_type_can_walk = 0;
var block_type_cannot_walk = 1;
var tb = new Terrain_Block(z,x,y,block_type_can_walk);

var x = 0;
var y = 0;
var w = 30;
var l = 10;
var h = 40;
var which_sprite_array = [0,0,30,50];
var name_of_sprite_sheet = "person_set_1";

var border_array = [
		{layer: 0, start_loc: [0,2], ts_layer: [1,1,1], d_array: false},
		{layer: 1, start_loc: [0,2], ts_layer: [1,1,1], d_array: false},
		{layer: 2, start_loc: [0,2], ts_layer: [1,1,1], d_array: false},
		{layer: 3, start_loc: [0,2], ts_layer: [1,1,1], d_array: false},
		{layer: 4, start_loc: [0,2], ts_layer: [1,1,1], d_array: false}
		];

var which_layer = 0;


//var ts = new Terrain_Square(x,y,w,l,h,which_sprite_array,name_of_sprite_sheet,border_array,which_layer);


var x = 0;
var y = 0;
var wos = 30;
var los = 30;
var hos = 0; //height of square? 
var grass_sprite = [0,0,32,32];
var grass_sprite_sheet = "grass_and_rocks_canvas";

//I guess grass has a height of 1. 
var grass_ba = [
		{layer: 0, 
		start_loc: [0,0], 
		ts_layer: [
				   [0,0,0],
				   [0,0,0],
				   [0,0,0]
				  ], 
		d_array: true}
		];


var ts2 = new Terrain_Square(x,y,wos,los,hos,grass_sprite,grass_sprite_sheet,grass_ba,which_layer);


var perp = new Person();

