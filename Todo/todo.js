document.onkeydown = setEvent;
$(loaded);

function loaded() {
	showText();
	// ボタンをクリックしたときに実行するイベントを設定する
	$("#inputButton").click(
		// コールバックとしてメソッドを引数にわたす
		function() {
			saveText();
			showText();
		});
}

// 入力された内容をローカルストレージに保存する
function saveText() {
	// 時刻をキーにして入力されたテキストを保存する
	var text = $("#formText");
	if(text.val().length> 0){
		var time = new Date();
		localStorage.setItem(time, text.val());
		// テキストボックスを空にする
		text.val("");
	}else{
		alert("input todo task");
	}
}

// ローカルストレージに保存した値を再描画する
function showText() {
	// すでにある要素を削除する
	var list = $("#list");
	list.children().remove();
	// ローカルストレージに保存された値すべてを要素に追加する
	var key, value, html = [];
	for(var i=0, len=localStorage.length; i<len; i++) {
		key = localStorage.key(i);
		value = localStorage.getItem(key);
		html.push(
			$("<li>").text(value)
		);
	}
	list.append(html);
}
function deleteAllText(){
	var list = $('#list');
	localStorage.clear();
	showText();
}
function deleteText(){
	var key = localStorage.key(0);
	localStorage.removeItem(key);
	showText();
}
function setEvent(evt){
	var kc;
	if(document.all){
		kc = event.keyCode;
	}
	else{
		kc = evt.which;
	}
	if(kc == 13){
		saveText();
		showText();
	}else if(kc == 46){
		deleteText();
	}
}