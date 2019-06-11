window.onload = function(){
	function getScroll(ev){
		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		var scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
		var x = ev.pageX || scrollTop + ev.clientX;
		var y = ev.pageY || scrollLeft + ev.clientY;
		return {
			"xx": x + "px",
			"yy": y + "px",
			"x" : x,
			"y" : y
		}
	}
}