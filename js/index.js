//all classes stored in game box box_classes
var classes = ['game_box2','game_box4','game_box8','game_box16','game_box32','game_box64','game_box128','game_box256','game_box512','game_box1024','game_box2048'];
//every box have his own classes
var no_of_gamebox1=0;
var no_of_gamebox2=0;
var no_of_gamebox3=0;
var no_of_gamebox4=0;
var swap='';
var speed=400;
var action_speed=200;
var score=0;

function gameBox(){
	var s = "";
	for( x=0; x<4 ; x++ ){
		for( y=0; y<4 ; y++ ){
			s += "<div id=box_"+x+"_"+y+" class=gameBox></div>";
		}	
	}
	document.getElementById('s').innerHTML = score;
	gamebody.innerHTML = s;
	add_gameBox();
	add_gameBox();
	add_gameBox();
	//document.write(gamebody);
}

function add_gameBox(){
	i=parseInt(4*Math.random());
	j=parseInt(4*Math.random());	
	if(document.getElementById("box_"+i+"_"+j).classList.length == 1){
		document.getElementById("box_"+i+"_"+j).classList.add(classes[0]);
		add_value(i,j);
	}else{
		add_gameBox();
	}
	//document.write(classes);
}
function add_score(){
	score=score+10;
	document.getElementById('s').innerHTML = score;
}
// for add a value in game box //
function add_value(i,j){
	v=2;
	for(a=0;a<classes.length;a++){
		if(document.getElementById("box_"+i+"_"+j+"").classList.contains(classes[a])){
			if(a==0){	
				document.getElementById("box_"+i+"_"+j+"").innerHTML = "2";	
			}else{
				s=2;
				for(b=1;b<=a;b++){
					v=v*s;
				}	
				document.getElementById("box_"+i+"_"+j+"").innerHTML = v;
				add_score();
			}
		}
		//document.write(a+','+classes[a]+'<br>');
	}
}

function remove_value(i,j){
	document.getElementById("box_"+i+"_"+j+"").innerHTML = " ";
}

function add_class(x,y,class_i,box_remove){
	//document.write(x+','+box_remove);
	document.getElementById("box_"+box_remove+"_"+y+"").classList.remove(classes[class_i]);
	remove_value(box_remove,y);
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
	remove_value(x,y);
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
				remove_value(x,y);
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
				remove_value(y,x_val);
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
				remove_value(y,x_val);
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
				remove_value(x,y);
				document.getElementById("box_"+x_val+"_"+y+"").classList.add(c);
				add_value(x_val,y);
				swap='Yes';
			}
		}	
		//x_val=x+1;
		//document.write(x+','+y+','+x_val+'</br>');
	}
}

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
	}else{
		gameover();
	}
}
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
	}else{
		gameover();
	}
}
 
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
	}else{
		gameover();
	}	
}
  
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
	}else{
		gameover();
	}
}
//end of swap left
function gameover(){
	no=false;
	full=false;
	for(i=0;i<=3;i++){
		for(j=0;j<=3;j++){
			if(document.getElementById("box_"+i+"_"+j+"").className === 'gameBox'){
				full=true;
				no=true;
			}
		}
	}
	//document.write(full+','+no);
	if(full===false){	
		for(y=0;y<=3;y++){	
				for(class_i=classes.length-1;class_i>=0;class_i--){
					no_gamebox=0;
					for(x=0;x<=3;x++){
						str1="gameBox ";
						str2=classes[class_i];
						game_box=str1.concat(str2);
						
						if(x===0){
							if(document.getElementById("box_"+x+"_"+y+"").className === game_box){
								no_gamebox++;
							}	
						}
						
						if(x===1){
							if(document.getElementById("box_"+x+"_"+y+"").className === game_box){
								no_gamebox++;
								if(no_gamebox==2){
									no=true;
								}
							}else{
								no_gamebox=0;
							}		
						}
						
						if(x===2){
							if(document.getElementById("box_"+x+"_"+y+"").className === game_box){
								no_gamebox++;
								if(no_gamebox==2){
									no=true;
								}
							}else{
								no_gamebox=0;
							}		
						}
						
						if(x===3){
							if(document.getElementById("box_"+x+"_"+y+"").className === game_box){
								no_gamebox++;
								if(no_gamebox==2){
									no=true;
								}
							}else{
								no_gamebox=0;
							}		
						}
						//document.write(x+','+y+'<br>');
					}
					
				}	
		}
		
		for(y=0;y<=3;y++){
			
				for(class_i=classes.length-1;class_i>=0;class_i--){
					no_gamebox=0;
					for(x=0;x<=3;x++){
						str1="gameBox ";
						str2=classes[class_i];
						game_box=str1.concat(str2);
						
						if(x===0){
							if(document.getElementById("box_"+y+"_"+x+"").className === game_box){
								no_gamebox++;
							}	
						}
						
						if(x===1){
							if(document.getElementById("box_"+y+"_"+x+"").className === game_box){
								no_gamebox++;
								if(no_gamebox==2){
									no=true;
								}
							}else{
								no_gamebox=0;
							}		
						}
						
						if(x===2){
							if(document.getElementById("box_"+y+"_"+x+"").className === game_box){
								no_gamebox++;
								if(no_gamebox==2){
									no=true;
								}
							}else{
								no_gamebox=0;
							}		
						}
						
						if(x===3){
							if(document.getElementById("box_"+y+"_"+x+"").className === game_box){
								no_gamebox++;
								if(no_gamebox==2){
									no=true;
								}
							}else{
								no_gamebox=0;
							}		
						}
						//document.write(y+','+x+'<br>');
					}
					
				}	
		}
	}
	//document.write(full+','+no);
	if(no===false){
		document.write('Ooops gameover you lose try agine!');
	}
}