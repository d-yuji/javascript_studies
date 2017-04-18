var timer1;
var audio = new Audio("res/se_maoudamashii_chime02.mp3");

var timerH,timerM,timerS;

var timerText = document.getElementById("finish");
var countText = document.getElementById("count");

function cntStart(){
	timerText.innerHTML = 'COUNTING ...'
	setInputState(false);
	setButtonState(false,true,false);
	timer1 = setInterval("countDown()",1000);
}

function cntStop(){
	setInputState(true)
	setButtonState(true,false,true);
	timerText.innerHTML = 'STOP';
	clearInterval(timer1);
}

function countDown(){
	var min = document.timer.elements[0].value;
	var sec = document.timer.elements[1].value;
	var minI,secI;
	if (min==""){
		min = 0;
	}
	if (sec==""){
		sec = 0;
	}
	minI = parseInt(min,10);
	secI = parseInt(sec,10);

	if(minI < 0 || minI > 59 || secI < 0 || secI >59){
		alert("正しい値(0~59)を入れてください")
		reSet();
	}else{
		tmWrite( minI*60 + secI-1);
	}
}

function tmWrite(time){
	var int = time;
	if (int <= 0){
		reSet();
		timerText.innerHTML = 'FINISH'
		audio.play();
	}else{
		countText.innerHTML = (Math.floor(int/60)) + ':' + (int % 60);
		document.timer.elements[0].value = Math.floor(int/60);
		document.timer.elements[1].value = int % 60;
	}
}

function reSet(){
	document.timer.elements[0].value = "0";
	document.timer.elements[1].value = "0";
	countText.innerHTML = '0:00';
	timerText.innerHTML = 'SET TIME';
	setInputState(true);
	setButtonState(true,false,true);
	clearInterval(timer1);
}

function setInputState(state){
	document.timer.elements[0].disabled = !state;
	document.timer.elements[1].disabled = !state;
}
function setButtonState(start,stop,reset){
	document.timer.elements[2].disabled = !start;
	document.timer.elements[3].disabled = !stop;
	document.timer.elements[4].disabled = !reset;
}