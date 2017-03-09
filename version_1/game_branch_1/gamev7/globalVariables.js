
var c=document.getElementById("myCanvas");
var ctx=c.getContext('2d');

var mousePosX = 666;
var mousePosY = 777;

var leftClick = false;
var rightClick = false;




document.body.addEventListener('mousedown', function (e){
	//console.log(e.button);
	//left
	if(e.button === 0){
		leftClick = true;
	}
	//right
	else if(e.button === 2){
		rightClick = true;
	}
}, false);

document.body.addEventListener('mouseup', function (e){
	//console.log(e.button);
	//left
	if(e.button === 0){
		leftClick = false;
	}
	//right
	if(e.button === 2){
		rightClick = false;
	}
}, false);