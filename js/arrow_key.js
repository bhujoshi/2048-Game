
document.onkeydown = function() {
	switch (window.event.keyCode) {
	case 37:
			
			swapLeft();
	break;
	case 38:
		
		swapUp();
	break;
	case 39:
		
		swapRight();
	break;
	case 40:
		
		swapButtom();
	break;
	}
};