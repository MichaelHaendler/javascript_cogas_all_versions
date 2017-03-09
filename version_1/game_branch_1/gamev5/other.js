

c.addEventListener("mousemove", getLoc, false);

function getLoc(event)
{
	var that = this;
	
	var mousy = getMousePos(c, event);
	
	mousePosX = mousy.x;
	
	mousePosY = mousy.y;
	
	//var message = '22Mouse position: ' + mousePosX + ',' + mousePosY;
	//printWords.AddToList(message);
}

  function getMousePos(canvas, evt) {
	var rect = canvas.getBoundingClientRect();
	return {
	  x: evt.clientX - rect.left,
	  y: evt.clientY - rect.top
	};
  }
	
	
c.addEventListener("mousedown", getPosition, false);

function getPosition(event)
{
  var x = event.x;
  var y = event.y;

  //var canvas = document.getElementById("canvas");

  x -= c.offsetLeft;
  y -= c.offsetTop;

  
  var blah = "x:" + x + " y:" + y;
  var down = "mouse is down";
  //printWords.AddToList(down);
}

//just testing crap. can be deleted
function testFunction(num,funct){
	printWords.AddToList("got within testFunction");
	var temp1 = "111num is: " + num;
	printWords.AddToList(temp1);
	printWords.AddToList("now entering mike");
	var temp2 = funct(num);
	printWords.AddToList("now exiting mike");
	printWords.AddToList(temp2);
	return temp2;
}

