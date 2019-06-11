window.onload = function(){

	var oIn = document.querySelector("#in");
	var oOut = document.querySelector("#out");

	document.onmousemove = function(e){
		oIn.innerHTML = "client: " + e.clientX + "," + e.clientY + "<br>";
		oIn.innerHTML += "page: " + e.pageX + "," + e.pageY + "<br>";
		oIn.innerHTML += "screen: " + e.screenX + "," + e.screenY + "<br>";
		var scrollHeight = document.documentElement.scrollTop || document.body.scrollTop;
		var scrollWidth = document.documentElement.scrollLeft || document.body.scrollLeft;
		oIn.style.left = e.clientX + scrollWidth + "px";
		oIn.style.top = e.clientY + scrollHeight + "px";
		oOut.style.left = e.pageX + "px";
		oOut.style.top = e.pageY + "px";
	}
}