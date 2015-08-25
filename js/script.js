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