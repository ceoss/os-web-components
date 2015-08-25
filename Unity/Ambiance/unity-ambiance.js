function unityAmbianceIni() {
	var buttons = document.getElementsByClassName('unity-ambiance-button');
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
	unityAmbianceIni();
},false);