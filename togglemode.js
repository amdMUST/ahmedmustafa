
// to toggle dark/light mode //
	function toggleMode() {
		var body = document.getElementById("body");
		var currentClass = body.className;
		body.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode";
	}

// to get the modal //
	function overlayOn() {
		document.getElementById("overlayBig").style.display = "block";
	}
  
	function overlayOff() {
		document.getElementById("overlayBig").style.display = "none";
	}