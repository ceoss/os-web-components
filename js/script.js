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