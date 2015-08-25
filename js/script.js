// Remove Element(s)
Element.prototype.remove = function() {
	this.parentElement.removeChild(this);
}
NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
	for(var i = this.length - 1; i >= 0; i--) {
		if(this[i] && this[i].parentElement) {
			this[i].parentElement.removeChild(this[i]);
		}
	}
}
// Wait Function
function wait(t, callback) {
	if (typeof callback === "undefined") {return;};
	var removeInt = function(id, callback) {
		if (id) {
			window.clearInterval(id);
			callback();
			return;
		}
	}
	var id = window.setInterval(function() {removeInt(id, callback);}, t);
}
// Select Text
function selectText(event) {
	var doc = document
		, text = event.currentTarget
		, range, selection
	;	
	if (doc.body.createTextRange) {
		range = document.body.createTextRange();
		range.moveToElementText(text);
		range.select();
	} else if (window.getSelection) {
		selection = window.getSelection();
		range = document.createRange();
		range.selectNodeContents(text);
		selection.removeAllRanges();
		selection.addRange(range);
	}
}
// CSS Testing Function
function getDeviceState() {
	deviceState = parseInt(window.getComputedStyle(indicator).getPropertyValue('z-index'), 10);
	if (deviceState == 2) {
		deviceState = true;
	} else {
		deviceState = false;
	}
}
window.addEventListener("load", function load(event){
	// CSS Testing
	window.removeEventListener("load", load, false);
	var indicator = document.createElement("span");
	indicator.id = "indicator";
	document.body.appendChild(indicator);
	// Post JS
	document.body.classList.remove("prejs")
	document.body.classList.add("postjs")
},false);