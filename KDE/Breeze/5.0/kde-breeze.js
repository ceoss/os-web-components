function kdeBreezeIni() {
	var buttons = document.getElementsByClassName('kde-breeze-button');
	for (var i = buttons.length - 1; i >= 0; i--) {
		if (buttons[i].classList.contains("disabled")) {
			if (buttons[i].tagName = "button") {
				buttons[i].tabIndex = "-1";
			}
		} else {
			buttons[i].tabIndex = "0";
		};
	};
}
window.addEventListener("load", function load(event){
	window.removeEventListener("load", load, false);
	kdeBreezeIni();
},false);