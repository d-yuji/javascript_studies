document.onkeydown = typeGame;
var mozi = new Array("A","B","C","D","E","F","G","H","I","J",
	"K","L","M","N","O","P","Q","R",
	"S","T","U","V","W","X","Y","Z");
var kcode = new Array(65,66,67,68,69,70,71,72,73,74,75,
	76,77,78,79,80,81,82,
	83,84,85,86,87,88,89,90);

var rand = new Array();
var mondai = "";
var count = 0;
var typeNum = 10;
var typeStart,typeEnd;

// var audio = new Audio("keytype.wav");
var audioKeytype = new Array();
var audioClear = new Audio("se_onepoint23.mp3");
var audioReset = new Audio("se_maoudamashii_system07.mp3");

var result = new Array();

function randomization(){
	// document.getElementById("rand").innerHTML = "debug2";
	for( var i = 0; i< typeNum; i++){
		rand[i] = Math.floor(Math.random() * 26 );
	}
}
function gameSet(){
	// document.getElementById("title").innerHTML = "debug1";
	mondai = "";
	count = 0;
	randomization();
	for(var i = 0; i<typeNum; i++){
		mondai = mondai + mozi[rand[i]];
	}
	for(var i = 0;i<10;i++){
		audioKeytype[i] = new Audio("keytype.wav");
	}
	document.getElementById("window").innerHTML = mondai;
	getCSV("sample.csv");
	// convertCSVtoArray("aaaa,aaaa");
	document.getElementById("debug").innerHTML = result[0][0];
}
function typeGame(evt){
	var kc;
	if(document.all){
		kc = event.keyCode;
	}
	else{
		kc = evt.which;
	}

	if(kc == 13){
		audioReset.play();
		gameSet();
	}
	else if(kc == kcode[rand[count]]){
		if(count == 0){
			typeStart = new Date();
		}
		count++;
		for(var i = 0; i< 10; i++){
			if(audioKeytype[i].currentTime <= 0 || audioKeytype[i].ended){
				audioKeytype[i].play();
				// document.getElementById("title").innerHTML = "debug" + i;
				break;
			}
		}
		if(count < typeNum){
			mondai = mondai.substring(1,mondai.Length);
			document.getElementById("window").innerHTML = mondai;
		}else{
			audioClear.play();
			typeEnd = new Date();
			var timeScore = typeEnd - typeStart;
			var timeSec = Math.floor(timeScore/1000);
			var timeMin = timeScore % 1000;
			var fin = "Game Finish : time " + timeSec + "." + timeMin;
			document.getElementById("window").innerHTML = fin;
		}
	}
}
function getCSV(src){
	var req = new XMLHttpRequest();
	req.open("get",src,true);
	req.send(null);
	req.onload = function(){
		convertCSVtoArray(req.responseText);
	};
}
function convertCSVtoArray(str){
	var tmp = str.split("\n");
	for(var i=0;i<tmp.length;++i){
		result[i] = tmp[i].split(',');
	}
}