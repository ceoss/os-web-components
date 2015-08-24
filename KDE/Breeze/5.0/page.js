function getCodeForButton(event) {
	alert(event.currentTarget.innerHTML);
}
function startCode() {
	selectCodeTrigger.removeEventListener("click", startCode, false);
	selectCodeTrigger.childNodes[0].style.color = "#2196f3";
	// Code Screen
	var codeScreen = document.createElement("div");
	codeScreen.className = "code-screen";
	document.body.appendChild(codeScreen);
	codeScreen.addEventListener('click', function() {endCode()}, false);
	// Buttons
	var buttons = document.getElementsByClassName('kde-breeze-button-code');
	for (var i = buttons.length - 1; i >= 0; i--) {
		buttons[i].classList.add("code");
		buttons[i].addEventListener('click', getCodeForButton, false);
	};
	selectCodeTrigger.addEventListener("click", endCode, false);
}
function endCode() {
	selectCodeTrigger.removeEventListener("click", endCode, false);
	selectCodeTrigger.childNodes[0].style.color = "#fff";
	// Code Screen
	var codeScreen = document.getElementsByClassName('code-screen')[0];
	codeScreen.remove();
	// Buttons
	var buttons = document.getElementsByClassName('kde-breeze-button-code');
	for (var i = buttons.length - 1; i >= 0; i--) {
		buttons[i].classList.remove("code");
		buttons[i].removeEventListener('click', getCodeForButton, false);
	};
	selectCodeTrigger.addEventListener("click", startCode, false);
}
window.addEventListener("load", function load(event){
	selectCodeTrigger = document.getElementById("selectCodeTrigger");
	allCodeTrigger = document.getElementById("allCodeTrigger");
	window.removeEventListener("load", load, false);
	selectCodeTrigger.addEventListener("click", startCode, false);
	document.getElementsByClassName("code-sidebar")[0].style.left = "0"
},false);