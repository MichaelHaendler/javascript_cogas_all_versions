

//AddToList() <--- method that you want to use. 

//note: if you're using "this" in the constructor, that makes the variable
//public. using "var" to initially define it make a variable private. 


function display_phrases_list(xInput,yInput){
	this.xVal = xInput;
	this.yVal = yInput;
	this.words3Array = new Array();
	//var canvas = document.getElementById('myCanvas');
	//var ctx = canvas.getContext('2d');
	//ctx.fillStyle = "blue";
	ctx.font = "bold 16px Arial";
	this.woc = 10; //width of (a) character
	this.hoc = 15;//(max) height of (a) character
	this.xnum = xInput - 19;//-29 is an adjustment thing (???)
	this.ynum = yInput - 12;//-12 is an adjustment thing (???)
}





display_phrases_list.prototype.displayList = function (){
	var that = this;
	var y = that.yVal;
	
	for(var i = 0; i < that.words3Array.length; i++){
		that.displayWords(that.words3Array[i],y);
		y += that.hoc;
	}
	
	y = that.yVal;
	that.words3Array = new Array();
}

display_phrases_list.prototype.displayWords = function(string,yStringLoc){
	var that = this;
	var width = that.woc * string.length;
	//var c=document.getElementById("myCanvas");
	//var ctx=c.getContext("2d");
	ctx.fillStyle = "black";
	ctx.font = "10px Arial";
	ctx.clearRect(that.xnum,that.ynum,that.width,that.hoc);
	ctx.fillText(string,that.xVal,yStringLoc);
};

// display_phrases_list.prototype.AddToList = function(blarg){
	// var that = this;
	// var words4Array = new Array();
	// words4Array.push(blarg); 
	// words4Array.concat(that.words3Array,words4Array);
	// that.words3Array = words4Array;
// }

display_phrases_list.prototype.AddToList = function(blarg){
	var that = this;
	
	// if(that.words3Array instanceof Array){
		// document.write(" IS an array </br>");
	// }
	// else{
		// document.write(" is NOT an array </br>");
	// }
	
	that.words3Array.push(blarg); 
}

var printWords = new display_phrases_list(700,20);

