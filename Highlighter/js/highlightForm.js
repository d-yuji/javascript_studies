
var highLighted = document.getElementById("styledCode");
function highLighting() {
	var code = document.codeForm.code.value;
	highLighted.innerHTML = code;
	hljs.initHighlightingOnLoad();
}