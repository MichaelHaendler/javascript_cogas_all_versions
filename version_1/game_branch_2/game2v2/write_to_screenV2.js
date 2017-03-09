

//AddToList() <--- method that you want to use. 

//note: if you're using "this" in the constructor, that makes the variable
//public. using "var" to initially define it make a variable private. 

//constructor
function display_phrases_list(xInput,yInput){
	this.xVal = xInput;
	this.yVal = yInput;
	this.words3Array = new Array();
	//var canvas = document.getElementById('myCanvas');
	//var ctx = canvas.getContext('2d');
	ctx.fillStyle = "blue";
	ctx.font = "bold 16px Arial";
	this.woc = 10; //width of (a) character
	this.hoc = 15;//(max) height of (a) character
	this.xnum = xInput - 19;//-19 is an adjustment thing (???)
	this.ynum = yInput - 12;//-12 is an adjustment thing (???)
}


display_phrases_list.prototype.displayList = function (){
	var that = this;
	var y = that.yVal;
	
	for(var i = 0; i < that.words3Array.length; i++){
		that.displayWords(that.words3Array[i],y);
		y += that.hoc;
	}

	that.words3Array = new Array();
}

display_phrases_list.prototype.displayWords = function(string,yStringLoc){
	var that = this;

	//calc width of string 
	var width = that.woc * string.length;

	//define looks of ctx
	ctx.fillStyle = "black";
	ctx.font = "20px Arial";

	//clear whatever hae been there before (could hold old values)
	ctx.clearRect(that.xnum,that.ynum,that.width,that.hoc);

	//and put in the new one.
	ctx.fillText(string,that.xVal,yStringLoc);
};

display_phrases_list.prototype.AddToList = function(blarg){

	var that = this;
	that.words3Array.push(blarg); 
}

//cant be in globalvariables because of issues between printWords and ctx. 
var printWords = new display_phrases_list(700,20);

