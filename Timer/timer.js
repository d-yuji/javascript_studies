(function(){
	'use strict';
	var startTime;
	var timerId;
	var startButton = document.getElementById("start");
	var stopButton = document.getElementById("stop");
	var resetButton = document.getElementById("reset");
	var timerText = document.getElementById("timerText");

	startButton.addEventListener('click',function(){
		startTime = Date.now();
		updateTimerText();
	});

	function updateTimerText(){
		timerId = setTimeout(function(){
			var t = Date.now() - startTime;
			timerText.innerHTML = ( t / 1000).toFixed(2);
			updateTimerText();
		}, 10);
	}
})();