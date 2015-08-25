function getCode(event) {
	endSelectCode();
	var html = event.currentTarget.innerHTML;
	alert(html);
	var htmlC = /class="([\w-]+)"/gi.exec(html);
	alert(htmlC);
	var htmlI = /id="([\w-]+)"/gi.exec(html);
	alert(htmlI);
	var htmlT = /<([\w-]+)/gi.exec(html);
	alert(htmlT);
}

// Select Code
function startSelectCode() {
	endAllCode();
	selectCodeTrigger.removeEventListener("click", startSelectCode, false);
	selectCodeTrigger.childNodes[0].style.color = "#2196f3";
	// Code Screen
	codeScreen.style.backgroundColor = "rgba(0,0,0,0.5)";
	codeScreen.style.pointerEvents = "all";
	codeScreen.addEventListener('click', endSelectCode, false);
	// Buttons
	var buttons = document.getElementsByClassName('kde-breeze-button-code');
	for (var i = buttons.length - 1; i >= 0; i--) {
		buttons[i].classList.add("code");
		buttons[i].addEventListener('click', getCode, false);
	};
	selectCodeTrigger.addEventListener("click", endSelectCode, false);
}
function endSelectCode() {
	selectCodeTrigger.removeEventListener("click", endSelectCode, false);
	selectCodeTrigger.childNodes[0].style.color = "#fff";
	// Code Screen
	codeScreen.style.backgroundColor = "rgba(0,0,0,0)";
	codeScreen.style.pointerEvents = "none";
	codeScreen.removeEventListener('click', endSelectCode, false);
	// Buttons
	var buttons = document.getElementsByClassName('kde-breeze-button-code');
	for (var i = buttons.length - 1; i >= 0; i--) {
		buttons[i].classList.remove("code");
		buttons[i].removeEventListener('click', getCode, false);
	};
	selectCodeTrigger.addEventListener("click", startSelectCode, false);
}

// All Code
function startAllCode() {
	endSelectCode();
	// Listeners
	codeScreen.addEventListener('click', endAllCode, false);
	allCodeTrigger.addEventListener("click", endAllCode, false);
	allCodeTrigger.removeEventListener("click", startAllCode, false);
	// Tigger
	allCodeTrigger.childNodes[0].style.color = "#2196f3";
	// Code Screen
	codeScreen.style.backgroundColor = "rgba(0,0,0,0.5)";
	codeScreen.style.pointerEvents = "all";
	allCode.style.top = "12.5%";
	allCode.style.position = "relative";
}
function endAllCode() {
	// Listeners
	codeScreen.removeEventListener('click', endAllCode, false);
	allCodeTrigger.addEventListener("click", startAllCode, false);
	allCodeTrigger.removeEventListener("click", endAllCode, false);
	// Tigger
	allCodeTrigger.childNodes[0].style.color = "#fff";
	// Code Screen
	codeScreen.style.backgroundColor = "rgba(0,0,0,0)";
	codeScreen.style.pointerEvents = "none";
	allCode.style.top = "200%";
	allCode.style.position = "fixed";
}

window.addEventListener("load", function load(event){
	window.removeEventListener("load", load, false);
	selectCodeTrigger = document.getElementById("selectCodeTrigger");
	selectCodeTrigger.addEventListener("click", startSelectCode, false);
	allCodeTrigger = document.getElementById("allCodeTrigger");
	allCodeTrigger.addEventListener("click", startAllCode, false);
	allCode = document.getElementById("allCode");
	codeScreen = document.getElementsByClassName("code-screen")[0];
	getDeviceState();
	if (deviceState) {
		document.getElementsByClassName("code-sidebar")[0].style.bottom = "0";
	} else {
		document.getElementsByClassName("code-sidebar")[0].style.left = "0";
	};
	pre = document.getElementsByTagName('pre');
	for (var i = pre.length - 1; i >= 0; i--) {
		pre[i].addEventListener('click', selectText ,false);
	};
},false);