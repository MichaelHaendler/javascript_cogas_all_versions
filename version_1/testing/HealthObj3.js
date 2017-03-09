

	function  testClass1(){

		var that = this;

		// this.xLoc = x;
		// this.yLoc = y;
		this.xLoc = 300;
		this.yLoc = 200;
		
		
		//this.val2 = new testClass2();
		
		document.write("works? <br>");
		
		//Uncaught TypeError: undefined is not a function 
		//that.method1();
		
		//this.val3 = new that.testClass3();
		
		//#1
		//document.write("value of this.val.zoom is: " + this.val2.zoom + "<br>");

		//document.write("value of this.val3.zoom is: " + this.val3.zoom + "<br>");	
		
	}

	testClass1.prototype.method1 = function(){

		var that = this;

		document.write("method1 prints: " + this.yLoc + "<br>");

	};

	testClass1.prototype.testClass3 = function(){

		var that = this;
		
		this.zoom = "wow!";

		//#3
		document.write("value of that.yLoc is: " + that.yLoc + "<br>");

	};

	testClass1.prototype.testClass3.prototype.method1 = function(){

		var that = this;

		//#4
		document.write("value of that.zoom is: " + that.zoom + "<br>");	

	}

//-----------

function testClass2(){

	var that = this;
	this.zoom = "hello";
	
	//#2
	document.write("value of that.yLoc is: " + that.yLoc + "<br>");

}

