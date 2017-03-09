

//var td_ascii_map = ah.get_3d_ascii_map();

//print_3d_array(td_ascii_map);

var mainloop = function (){

	c.width = c.width;

	ctx.fillStyle="pink";
	ctx.fillRect(0,0,c.width,c.height);
	

	pw.AddToList("hello there.");
	pw.AddToList("mx is: " + mx);
	pw.AddToList("my is: " + my);
	pw.AddToList("mlc is: " + mlc);	
	pw.print("mrc is: " + mrc);
	pw.print("ms is: " + ms);
	//pw.print("calc_loc is: " + calc_loc());

	set_user_inputs();//get keyboard and mouse input from user

	//bonkers.draw_ssi();

	//insert stuff here. 
	//b3.draw_ssi();
	//b2.draw_ssi();

	//tb.draw_ssi();
	ts2.draw_ssi();
	//ts.draw_ssi();
	perp.draw_ssi();
	
	pw.displayList();

	
};//end of mainloop






