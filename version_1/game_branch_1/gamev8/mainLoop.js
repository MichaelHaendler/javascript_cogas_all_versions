
// var temp = "inside loop";
// printWords.AddToList(temp);

var mike = new Person();
//var gun = new GenGun();

var menu = new ItemHolder();
// menu.insert(gun);
// menu.insert(gun);
// menu.insert(gun);
// menu.insert(gun);
// menu.insert(gun);

var count = 0;
var run = false;
var keepRunning = true;

var mainloop = function (){
	
	myCanvas.width = myCanvas.width;
	
	mike.run();
	

	/*
	this should contain items that are located in the general area. if an Item
	is dragged and dropped (no longer a left click) into the menu, then said item
	should be taken out of the globalItemArray, and placed into the menu, which will
	be drawn to show said item inside of it. 
	
	if the item is (left) clicked on, and dragged, it should be taken out of the menu, 
	and placed into the globalItemArray.
	*/
	// if(keepRunning == true){
		// mouseSim();
		// printWords.AddToList("getting into here?");
		// var temp = "keepRunning is: " + keepRunning;
		// printWords.AddToList(temp);
	// }
	
	// menu.contains(gun,mousePosX,mousePosY);
	
	menu.contains(globalItemArray,mousePosX,mousePosY,leftClick);
	menu.getItem(mousePosX,mousePosY,leftClick);
	menu.draw();

	for(var i = 0; i < globalItemArray.length; i++){
		//globalItemArray[i].printCorners();
		//globalItemArray[i].contains();
		globalItemArray[i].printCorners_square();
		globalItemArray[i].draw();
		
	}	
	
	//gun.draw();
	// var temp = "globalItemArray.length is: " + globalItemArray.length;
	// printWords.AddToList(temp);
	
	var showLocX = "x: " + mousePosX;
	var showLocY = "y: " + mousePosY;
	printWords.AddToList(showLocX);
	printWords.AddToList(showLocY);
	
	printWords.displayList();
	
	
}//end of mainloop



function mouseSim(){

	var initLocX = 325;
	var initLocY = 75;
	
	var amount = 50;
	var to_go_to = -200;
	var moveBy = 3;

	//set mouse to correct initial spot
	if(mousePosX == 666 && mousePosY == 777){
		mousePosX = initLocX;
		mousePosY = initLocY;
		run = true;
		leftClick = true;
	}
	
	//move object into item box
	if(run == true && count <= amount){
		mousePosX += moveBy;
		count += moveBy;
	}
	else if(count >= amount){
		leftClick = false;
		run = false;
	}
	else if (count >= amount && leftClick == false){
		leftClick = true;
	}
	else if(count >= to_go_to){
		count -= moveBy;
		mousePosX -= moveBy;
	}
	else if(count <= to_go_to){
		keepRunning = false;
		console.log("keepRunning is: " + keepRunning);
	}
}

