window.addEventListener('load', function(){
	
	var startx = 0;
	var starty = 0;
    var distX = 0;
    var distY = 0;
	
	
	document.getElementById('container').addEventListener('touchstart', function(e){
	  var touchobj = e.changedTouches[0]; // reference first touch point (ie: first finger)
	  startx = parseInt(touchobj.clientX); // get x position of touch point relative to left edge of browser
	  starty = parseInt(touchobj.clientY);
	  //alert(startx+','+starty);
	  e.preventDefault();
	}, false);
	
	
	document.getElementById('container').addEventListener('touchmove', function(e){
		var touchobj = e.changedTouches[0];// reference first touch point (ie: first finger)
        //startx = parseInt(touchobj.clientX);// get x position of touch point relative to left edge of browser
		//starty = parseInt(touchobj.clientY);
		distX = parseInt(touchobj.clientX) - startx;
		
		if(distX>=50){
			swapRight();
			touchobj=0;
		}
		
		if(distX<=-50){
			swapLeft();
			touchobj=0;
		}
		
		e.preventDefault();
	},false);
	
	
	document.getElementById('container').addEventListener('touchmove', function(e){
		var touchobj = e.changedTouches[0];
		distY = parseInt(touchobj.clientY) - starty;
		
		if(distY>=50){
			swapButtom();
			touchobj=0;
		}
		
		if(distY<=-50){
			swapUp();
			touchobj=0;
		}
		
		e.preventDefault();
	},false);

	
}, false);