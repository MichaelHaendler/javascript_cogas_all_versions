

var mike = new Person();

var mainloop = function (){

	myCanvas.width = myCanvas.width;
	
	// var c=document.getElementById("myCanvas");
	// var ctx=c.getContext("2d");
	
	mike.currLoc();
	
	mike.movement();
	var tempImage = mike.getSSI();
	
	//var printWords = new display_phrases_list(100,100);
	// printWords.AddToList("hello1");
	// printWords.AddToList("hello2");
	printWords.displayList();
	
	ctx.drawImage(document.images[0],tempImage.sx,tempImage.sy,tempImage.width,
	tempImage.height,mike.charXLoc,mike.charYLoc,tempImage.width,tempImage.height);
	

	//ctx.clearRect(0,0,1000,600);
}//end of mainloop

