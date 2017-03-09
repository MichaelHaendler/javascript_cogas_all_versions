
var words3Array = new Array();


function displayList(xVal,yVal){

	var hoc = 15;//(max) height of (a) character
	var y = yVal;
	
	for(var i = 0; i < words3Array.length; i++){
		displayWords(words3Array[i],xVal,y);
		y += hoc;
	}
	
	y = yVal;
	words3Array = new Array();
}

function displayWords(string,xStringLoc,yStringLoc){
	var canvas = document.getElementById('myCanvas');
	var ctx = canvas.getContext('2d');
	ctx.fillStyle = "blue";
	ctx.font = "bold 16px Arial";
	var woc = 10; //width of (a) character
	var hoc = 15;//(max) height of (a) character
	var xnum = xStringLoc - 19;//-29 is an adjustment thing (???)
	var ynum = yStringLoc - 12;//-12 is an adjustment thing (???)
	var width = woc * string.length;
	ctx.clearRect(xnum,ynum,width,hoc);
	ctx.fillText(string,xStringLoc,yStringLoc);
};

function AddToList(string){
	words3Array.push(string);
}

function testList(){

	for(var i = 0; i < words3Array.length; i++){
		document.write(words3Array[i] + "</br>");
	}
	
}



