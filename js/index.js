//all classes stored in game box box_classes
var classes = ['game_box2','game_box4','game_box8','game_box16','game_box32','game_box64','game_box128','game_box256','game_box512','game_box1024','game_box2048'];
//every box have his own classes
var no_of_gamebox1=0;
var no_of_gamebox2=0;
var no_of_gamebox3=0;
var no_of_gamebox4=0;
var swap='';
var speed=200;
var action_speed;

function gameBox(){
	var s = "";
	for( x=0; x<4 ; x++ ){
		for( y=0; y<4 ; y++ ){
			s += "<div id=box_"+x+"_"+y+" class=gameBox> 0 </div>";
		}	
	}
	
	gamebody.innerHTML = s;
	add_gameBox();
	add_gameBox();
	add_gameBox();
	//document.write(gamebody);
}

function add_gameBox(){
	i=parseInt(4*Math.random());
	j=parseInt(4*Math.random());
	//document.write(j);
	//document.write(i);
	
	if(document.getElementById("box_"+i+"_"+j).classList.length == 1){
		document.getElementById("box_"+i+"_"+j).classList.add(classes[0]);
		add_value(i,j);
		//document.write('hello');
	}else{
		add_gameBox();
	}
	//document.write(classes);
}

// for add a value in game box //

function add_value(i,j){
	/////////////////////////////////////////////////////////////
	
	if(document.getElementById("box_"+i+"_"+j+"").classList.contains('game_box2')){
		document.getElementById("box_"+i+"_"+j+"").innerHTML = "2";
	}
	
	/////////////////////////////////////////////////////////////
	
	if(document.getElementById("box_"+i+"_"+j+"").classList.contains('game_box4')){
		document.getElementById("box_"+i+"_"+j+"").innerHTML = "4";
	}
	
	if(document.getElementById("box_"+i+"_"+j+"").classList.contains('game_box8')){
		document.getElementById("box_"+i+"_"+j+"").innerHTML = "8";
	}
	
	if(document.getElementById("box_"+i+"_"+j+"").classList.contains('game_box16')){
		document.getElementById("box_"+i+"_"+j+"").innerHTML = "16";
	}
	
	if(document.getElementById("box_"+i+"_"+j+"").classList.contains('game_box32')){
		document.getElementById("box_"+i+"_"+j+"").innerHTML = "32";
	}
	
	if(document.getElementById("box_"+i+"_"+j+"").classList.contains('game_box64')){
		document.getElementById("box_"+i+"_"+j+"").innerHTML = "64";
	}
	
	if(document.getElementById("box_"+i+"_"+j+"").classList.contains('game_box128')){
		document.getElementById("box_"+i+"_"+j+"").innerHTML = "128";
	}
	
	if(document.getElementById("box_"+i+"_"+j+"").classList.contains('game_box256')){
		document.getElementById("box_"+i+"_"+j+"").innerHTML = "256";
	}
	
	if(document.getElementById("box_"+i+"_"+j+"").classList.contains('game_box512')){
		document.getElementById("box_"+i+"_"+j+"").innerHTML = "512";
	}
	
	if(document.getElementById("box_"+i+"_"+j+"").classList.contains('game_box1024')){
		document.getElementById("box_"+i+"_"+j+"").innerHTML = "1028";
	}
	
	if(document.getElementById("box_"+i+"_"+j+"").classList.contains('game_box2048')){
		document.getElementById("box_"+i+"_"+j+"").innerHTML = "2048";
	}
	
}
//end of add value function
//////////////////////////////////////////////////////////////////////////////////////////////
/*
function add_classes(i,j,index){
	//document.getElementById("box_"+i+"_"+j+"").classList.toggle(class_remove);
	add_box_classes.push(box_classes[index]);
	document.getElementById("box_"+i+"_"+j+"").classList.toggle(box_classes[index]);
	add_value(i,j);
}*/
/////////////////////////////////////////////////////////////////////////////////////////////
//remove class or game_box
/*
function remove_classes(i,j){
	//document.getElementById("box_"+i+"_"+j+"").classList.toggle(class_remove);
	var remove=add_box_classes.pop();
	document.getElementById("box_"+i+"_"+j+"").classList.toggle(remove);
	var index=
	add_classes(i,j,index);
}	
*/
//action of game boxes
function add_class(x,y,class_i,box_remove){
	//document.write(x+','+box_remove);
	document.getElementById("box_"+box_remove+"_"+y+"").classList.remove(classes[class_i]);
	setTimeout(function(){	
		document.getElementById("box_"+x+"_"+y+"").classList.remove(classes[class_i]);
		document.getElementById("box_"+x+"_"+y+"").classList.add(classes[class_i+1]);
		add_value(x,y);
	},action_speed);	
	swap='Yes';
}

function add_classRight_or_Left(x,y,class_i,box_remove){
	//document.write(x+','+y+','+box_remove);
	document.getElementById("box_"+x+"_"+y+"").classList.remove(classes[class_i]);
	setTimeout(function(){	
		document.getElementById("box_"+x+"_"+box_remove+"").classList.remove(classes[class_i]);
		document.getElementById("box_"+x+"_"+box_remove+"").classList.add(classes[class_i+1]);
		add_value(x,box_remove);
	},action_speed);	
	swap='Yes';
}

function actionswapButtom(x,y,game_box,class_i){
	//document.write("no_of_gamebox1");
	//for(i=0;i>){				
	if(x === 3){

		if(document.getElementById("box_"+x+"_"+y+"").className === game_box){
			no_gamebox++;
		}	
	}
	
	if(x === 2){

		if(document.getElementById("box_"+x+"_"+y+"").className === game_box){
			no_gamebox++;
			if(no_gamebox==2){
				box_remove=x+1;
				
				add_class(box_remove,y,class_i,x);
				no_gamebox=0;
			}
		}else{
			no_gamebox=0;
		}	
	}
	
	if(x === 1){

		if(document.getElementById("box_"+x+"_"+y+"").className === game_box){
			no_gamebox++;
			if(no_gamebox==2){
				box_remove=x+1;
					add_class(box_remove,y,class_i,x);
					
				no_gamebox=0;
			}
		}else{
			no_gamebox=0;
		}	
	}
	
	if(x === 0){

		if(document.getElementById("box_"+x+"_"+y+"").className === game_box){
			no_gamebox++;
			if(no_gamebox==2){
				box_remove=x+1;
				
					add_class(box_remove,y,class_i,x);
					
			}
		}	
	}
}

function actionswapUp(x,y,game_box,class_i){
	//document.write("no_of_gamebox1");
	//for(i=0;i>){				
	if(x === 0){

		if(document.getElementById("box_"+x+"_"+y+"").className === game_box){
			no_gamebox++;
		}	
	}
	
	if(x === 1){

		if(document.getElementById("box_"+x+"_"+y+"").className === game_box){
			no_gamebox++;
			if(no_gamebox==2){
				box_remove=x-1;
				//document.write(x+','+y+','+box_remove);	
					add_class(box_remove,y,class_i,x);
					
				no_gamebox=0;
			}
		}else{
			no_gamebox=0;
		}	
	}
	
	if(x === 2){

		if(document.getElementById("box_"+x+"_"+y+"").className === game_box){
			no_gamebox++;
			if(no_gamebox==2){
				box_remove=x-1;	
				add_class(box_remove,y,class_i,x);
					
				no_gamebox=0;
			}
		}else{
			no_gamebox=0;
		}	
	}
	
	if(x === 3){

		if(document.getElementById("box_"+x+"_"+y+"").className === game_box){
			no_gamebox++;
			if(no_gamebox==2){
				box_remove=x-1;
				add_class(box_remove,y,class_i,x);
					
			}
		}	
	}
}


function actionswapRight(y,x,game_box,class_i){
	//document.write(x+','+y+','+game_box+','+class_i+'<br>');
	if(y===3){
		if(document.getElementById("box_"+x+"_"+y+"").className === game_box){
			no_gamebox++;
		}	
	}
	
	if(y===2){
		if(document.getElementById("box_"+x+"_"+y+"").className === game_box){
			no_gamebox++;
			if(no_gamebox==2){
				box_remove=y+1;
				
					add_classRight_or_Left(x,y,class_i,box_remove);
					
			}
		}else{
			no_gamebox=0;
		}		
	}
	
	if(y===1){
		if(document.getElementById("box_"+x+"_"+y+"").className === game_box){
			no_gamebox++;
			if(no_gamebox==2){
				box_remove=y+1;
					add_classRight_or_Left(x,y,class_i,box_remove);
					
			}
		}else{
			no_gamebox=0;
		}	
	}
	
	if(y===0){
		if(document.getElementById("box_"+x+"_"+y+"").className === game_box){
			no_gamebox++;
			if(no_gamebox==2){
				box_remove=y+1;
				add_classRight_or_Left(x,y,class_i,box_remove);
					
			}
		}	
	}
	
	
}




function actionswapLeft(y,x,game_box,class_i){
	//document.write(x+','+y+','+game_box+','+class_i+'<br>');
	if(y===0){
		if(document.getElementById("box_"+x+"_"+y+"").className === game_box){
			no_gamebox++;
		}	
	}
	
	if(y===1){
		if(document.getElementById("box_"+x+"_"+y+"").className === game_box){
			no_gamebox++;
			if(no_gamebox==2){
				box_remove=y-1;
					add_classRight_or_Left(x,y,class_i,box_remove);
					
			}
		}else{
			no_gamebox=0;
		}		
	}
	
	if(y===2){
		if(document.getElementById("box_"+x+"_"+y+"").className === game_box){
			no_gamebox++;
			if(no_gamebox==2){
				box_remove=y-1;
				
					add_classRight_or_Left(x,y,class_i,box_remove);
				
			}
		}else{
			no_gamebox=0;
		}	
	}
	
	if(y===3){
		if(document.getElementById("box_"+x+"_"+y+"").className === game_box){
			no_gamebox++;
			if(no_gamebox==2){
				box_remove=y-1;
				
					add_classRight_or_Left(x,y,class_i,box_remove);
						
			}
		}	
	}
}





//for buttom
function arrange_boxesswapButtom(y){
	for(x=2;x>=0;x--){
		x_val=x+1;
		if(document.getElementById("box_"+x_val+"_"+y+"").className === "gameBox"){
			if(document.getElementById("box_"+x+"_"+y+"").className != "gameBox"){
				c=document.getElementById("box_"+x+"_"+y+"").className;
				c=c.substring(8);
				document.getElementById("box_"+x+"_"+y+"").classList.remove(c);
				document.getElementById("box_"+x_val+"_"+y+"").classList.add(c);
				add_value(x_val,y);
				swap='Yes';
			}
		}	
		//x_val=x+1;
		//document.write(x+','+y+','+x_val+'</br>');
	}
}

function arrange_boxesswapRight(y){
	for(x=1;x<=3;x++){
		if(document.getElementById("box_"+y+"_"+x+"").className === "gameBox"){
			x_val=x-1;
			
			if(document.getElementById("box_"+y+"_"+x_val+"").className != "gameBox"){
				//document.write(y+','+x+','+x_val);
				c=document.getElementById("box_"+y+"_"+x_val+"").className;
				c=c.substring(8);
				document.getElementById("box_"+y+"_"+x_val+"").classList.remove(c);
				document.getElementById("box_"+y+"_"+x+"").classList.add(c);
				add_value(y,x);
				swap='Yes';
			}
			
		}	
	}
}


function arrange_boxesswapLeft(y){
	for(x=2;x>=0;x--){
		if(document.getElementById("box_"+y+"_"+x+"").className === "gameBox"){
			x_val=x+1;
			
			if(document.getElementById("box_"+y+"_"+x_val+"").className != "gameBox"){
				//document.write(y+','+x+','+x_val);
				c=document.getElementById("box_"+y+"_"+x_val+"").className;
				c=c.substring(8);
				document.getElementById("box_"+y+"_"+x_val+"").classList.remove(c);
				document.getElementById("box_"+y+"_"+x+"").classList.add(c);
				add_value(y,x);
				swap='Yes';
			}
			
		}	
	}
}

function arrange_boxesswapUp(y){
	for(x=1;x<=3;x++){
		x_val=x-1;
		if(document.getElementById("box_"+x_val+"_"+y+"").className === "gameBox"){
			if(document.getElementById("box_"+x+"_"+y+"").className != "gameBox"){
				c=document.getElementById("box_"+x+"_"+y+"").className;
				c=c.substring(8);
				document.getElementById("box_"+x+"_"+y+"").classList.remove(c);
				document.getElementById("box_"+x_val+"_"+y+"").classList.add(c);
				add_value(x_val,y);
				swap='Yes';
			}
		}	
		//x_val=x+1;
		//document.write(x+','+y+','+x_val+'</br>');
	}
}
//end of action function

//for swap up button in game
function swapButtom(){
// x is positive 0,1,2,3
	swap='';
	for(y=0;y<=3;y++){
	// y is negative 3,2,1,0
		for(class_i=classes.length-1;class_i>=0;class_i--){
			no_gamebox=0;
			for(x=3;x>=0;x--){
				
				str1="gameBox ";
				str2=classes[class_i];
				game_box=str1.concat(str2);
				actionswapButtom(x,y,game_box,class_i);
				//document.write(y+','+x+','+no_gamebox+','+game_box+','+class_i+'<br>');
			}	
			arrange_boxesswapButtom(y);
		}	
	}
	if(swap=='Yes'){
		setTimeout(function (){
			add_gameBox();
		},speed);
	}	
}
//end of swap up


//for swap right button in game
function swapRight(){
	swap='';
	for(y=0;y<=3;y++){
		for(class_i=classes.length-1;class_i>=0;class_i--){
			no_gamebox=0;
			for(x=3;x>=0;x--){
				str1="gameBox ";
				str2=classes[class_i];
				game_box=str1.concat(str2);
				actionswapRight(x,y,game_box,class_i);
				//document.write(y+','+x+','+no_gamebox+','+game_box+','+class_i+'<br>');
			}
			
		arrange_boxesswapRight(y);
		}	
	}
	
	if(swap=='Yes'){
		setTimeout(function (){
			add_gameBox();
		},speed);
	}
}
//end of swap up button in game

//for swap buttom in game 
function swapUp(){
	swap='';
	for(y=0;y<=3;y++){
	// y is negative 3,2,1,0
		for(class_i=classes.length-1;class_i>=0;class_i--){
			no_gamebox=0;
			for(x=0;x<=3;x++){
				
				str1="gameBox ";
				str2=classes[class_i];
				game_box=str1.concat(str2);
				actionswapUp(x,y,game_box,class_i);
				//document.write(y+','+x+','+no_gamebox+','+game_box+','+class_i+'<br>');
			}	
			arrange_boxesswapUp(y);
		}	
	}
	if(swap=='Yes'){
		setTimeout(function (){
			add_gameBox();
		},speed);
	}	
}
//end of swap button
//for swap left in game  
function swapLeft(){
	swap='';
	for(y=0;y<=3;y++){
		
			for(class_i=classes.length-1;class_i>=0;class_i--){
				no_gamebox=0;
				for(x=0;x<=3;x++){
					str1="gameBox ";
					str2=classes[class_i];
					game_box=str1.concat(str2);
					actionswapLeft(x,y,game_box,class_i);
						
					//document.write(y+','+x+','+no_gamebox+','+game_box+','+class_i+'<br>');
				}
					arrange_boxesswapLeft(y);	
			}	
	}
	
	if(swap=='Yes'){
		setTimeout(function (){
			add_gameBox();
		},speed);	
	}
}
//end of swap left