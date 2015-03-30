window.addEventListener('load', function(){
	reload=getElementsByClassName('reload');
	gameover=getElementById('gameover');
	var startx = 0;
	var starty = 0;
    var dist = 0;
	gamebody=getElementById('gamebody');
	
	reload.addEventListener('touchstart', function(e){
		gameBox();
		e.preventDefault()
	}, false);
	
	gameover.addEventListener('touchstart', function(e){
		gameBox();
		e.preventDefault()
	}, false);
	
	
	
}