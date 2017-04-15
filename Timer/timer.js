(function(){
	'use strict';
	var startTime;
	var timerId;
	var elapsedTime = 0;
	var startButton = document.getElementById("start");
	var stopButton = document.getElementById("stop");
	var resetButton = document.getElementById("reset");
	var timerText = document.getElementById("timerText");

	startButton.addEventListener('click', function(){
		startTime = Date.now();
		updateTimerText();
	});
	stopButton.addEventListener('click', function(){
		elapsedTime += Date.now() - startTime;
		clearTimeout(timerId);
	});
	resetButton.addEventListener('click', function(){
		timerText.innerHTML = '0.00';
		elapsedTime = 0;
	});

	function updateTimerText(){
		timerId = setTimeout(function(){
			var t = Date.now() - startTime + elapsedTime;
			timerText.innerHTML = ( t / 1000).toFixed(2);
			updateTimerText();
		}, 10);
	}
})();