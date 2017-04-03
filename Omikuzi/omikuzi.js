(function() {
	"use strict";
	document.getElementById('button').addEventListener('click',function () {
		var omikuziResults = ['大吉','中吉','末吉','小吉','凶','大凶'];
		var result = Math.floor(Math.random()*omikuziResults.length);
		// document.getElementById('results').innerHTML = 'hit';
		document.getElementById('results').innerHTML = omikuziResults[result];
	});
	document.getElementById('button').addEventListener('mousedown',function () {
		this.className = 'pushed';
	});
	document.getElementById('button').addEventListener('mouseup',function () {
		this.className = '';
	});
})();