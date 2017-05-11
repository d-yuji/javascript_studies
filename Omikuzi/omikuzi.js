(function() {
	"use strict";
	var Button = document.getElementById('button');
	var Result = document.getElementById('results');
	Button.addEventListener('click',function () {
		var omikuziResults = ['大吉','中吉','末吉','小吉','凶','大凶'];
		var Colors = ['red','orange','lime','green','blue','purple'];
		var result = Math.floor(Math.random()*omikuziResults.length);
		Result.innerHTML = omikuziResults[result];
		Result.style.backgroundColor = Colors[result];
	});

	Button.addEventListener('mousedown',function () {
		this.className = 'pushed';
	});

	Button.addEventListener('mouseup',function () {
		this.className = '';
	});
})();