



// var count = 0;
// var run = false;
// var keepRunning = true;

var mike = new Person();

var mainloop = function (){

	//console.log("hello world");
	
	//clears the canvas
	myCanvas.width = myCanvas.width;
	
	mike.run();


	for(var i = 0; i < globalItemArray.length; i++){
		//globalItemArray[i].printCorners();
		//globalItemArray[i].contains();
		globalItemArray[i].printCorners_square();
		globalItemArray[i].draw();
		
	}	

	var showLocX = "x: " + mousePosX;
	var showLocY = "y: " + mousePosY;
	printWords.AddToList(showLocX);
	printWords.AddToList(showLocY);
	

	printWords.AddToList("this thing on?");
	printWords.displayList();

	
	
	
}//end of mainloop



// function mouseSim(){

// 	var initLocX = 325;
// 	var initLocY = 75;
	
// 	var amount = 50;
// 	var to_go_to = -200;
// 	var moveBy = 3;

// 	//set mouse to correct initial spot
// 	if(mousePosX == 666 && mousePosY == 777){
// 		mousePosX = initLocX;
// 		mousePosY = initLocY;
// 		run = true;
// 		leftClick = true;
// 	}
	
// 	//move object into item box
// 	if(run == true && count <= amount){
// 		mousePosX += moveBy;
// 		count += moveBy;
// 	}
// 	else if(count >= amount){
// 		leftClick = false;
// 		run = false;
// 	}
// 	else if (count >= amount && leftClick == false){
// 		leftClick = true;
// 	}
// 	else if(count >= to_go_to){
// 		count -= moveBy;
// 		mousePosX -= moveBy;
// 	}
// 	else if(count <= to_go_to){
// 		keepRunning = false;
// 		console.log("keepRunning is: " + keepRunning);
// 	}
// }

