(function(){
	'use strict';
	var startTime;
	var timerId;
	var elapsedTime = 0;
	var startButton = document.getElementById("start");
	var stopButton = document.getElementById("stop");
	var resetButton = document.getElementById("reset");
	var timerText = document.getElementById("timerText");
	function setButtonState(start,stop,reset){
		startButton.disabled = !start;
		stopButton.disabled = !stop;
		resetButton.disabled = !reset;
	}
	setButtonState(true, false,false);

	startButton.addEventListener('click', function(){
		startTime = Date.now();
		updateTimerText();
		setButtonState(false,true,false);
	});
	stopButton.addEventListener('click', function(){
		elapsedTime += Date.now() - startTime;
		clearTimeout(timerId);
		setButtonState(true,false,true);
	});
	resetButton.addEventListener('click', function(){
		timerText.innerHTML = '0.00';
		elapsedTime = 0;
		setButtonState(true,false,false);
	});

	function updateTimerText(){
		timerId = setTimeout(function(){
			var t = Date.now() - startTime + elapsedTime;
			timerText.innerHTML = ( t / 1000).toFixed(2);
			updateTimerText();
		}, 10);
	}
})();