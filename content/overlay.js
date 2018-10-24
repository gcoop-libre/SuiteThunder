window.addEventListener("load", function(e) {
	startup();
}, false);

window.setInterval(
	function() {
		startup();
	}, 6000); //update date every minute

function startup() {
	var myPanel = document.getElementById("my-panel");
	var date = new Date();
	var day = date.getDay();
	var dateString = date.getFullYear() + "." + (date.getMonth()+1) + "." + date.getDate();
	myPanel.label = "Macri Gato: " + dateString;
}
