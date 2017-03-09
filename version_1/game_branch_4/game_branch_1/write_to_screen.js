


var pw = new display_phrases_list(230,20);

//note: if you're using "this" in the constructor, that makes the variable
//public. using "var" to initially define it make a variable private. 


function display_phrases_list(xInput,yInput){
	this.xVal = xInput;
	this.yVal = yInput;
	this.words3Array = new Array();
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

	// var blah1 = (c == null) ? "c is empty" : "c is NOT empty";
	// console.log(blah1);

	// var blah2 = (ctx == null) ? "ctx is empty" : "ctx is NOT empty";
	// console.log(blah2);
	var ctx = c.getContext("2d");

	// console.log("location: " + results[0]);
	// console.log("file name: " + results[1]);


	ctx.fillStyle = "black";
	ctx.font = "10px Arial";
	ctx.clearRect(that.xnum,that.ynum,that.width,that.hoc);
	ctx.fillText(string,that.xVal,yStringLoc);
};

display_phrases_list.prototype.AddToList = function(blarg){
	var that = this;
	
	that.words3Array.push(blarg); 
};

display_phrases_list.prototype.print = function(to_display){
	//var that = this;

	this.AddToList(to_display);
}

//print plus
display_phrases_list.prototype.print_p = function(to_display){
	//var that = this;

	//file name and line nuber
	var fn_and_ln = get_file_name_and_line_number(getErrorObject());

	to_display = to_display + " ||| fn: " + fn_and_ln[1] + " | ln: " +  fn_and_ln[0]; 

	this.AddToList(to_display);
}







//------------------------------------


//http://stackoverflow.com/questions/1340872/how-to-get-javascript-caller-function-line-number-how-to-get-javascript-caller

//print with file name and line number
function print_w_fn_and_ln(string){

	var results = get_file_name_and_line_number(getErrorObject());

	console.log("location: " + results[0]);
	console.log("file name: " + results[1]);

	console.log("string input was: " + string);

}

function getErrorObject(){
    try { throw Error('') } catch(err) { return err; }
}

function get_file_name_and_line_number(err){

	var caller_line = err.stack.split("\n")[4];

	var file_name = get_file_name(caller_line);

	var loc = get_line_number(caller_line);

	return [loc,file_name];

}


function get_file_name(caller_line){

	//last slash (in the string)
	var ls = "/";

	//the "+1" is to skip the slash in the actual output
	var n1 = caller_line.lastIndexOf(ls) + 1;

	//something thats pretty much garunteed to be at the end
	//of the file name
	var js = ".js:";

	//get it's location (note, the "location" here is basically the period)
	var n2 = caller_line.lastIndexOf(js);
	//var n2 = caller_line.search(js);

	//get the string that is contained between the last slash in the string, 
	//and going up to the period in the js variable.
	var res = caller_line.slice(n1, n2) + ".js";

	return res;

}

function get_line_number(caller_line){

	var js = ".js:"
	var n = caller_line.search(js) + js.length;
	var line_num = caller_line.slice(n, caller_line.length);

	return line_num;
}


//print_w_fn_and_ln("hello world. :-)");

