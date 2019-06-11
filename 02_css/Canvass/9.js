window.onload = function(){

	var oBox = document.querySelector("#box");

	document.onmousemove = function(ev){
		var oEvent = ev || event;
		var pos = getScroll(oEvent);
		var left = pos.x ;
		var top = pos.y ;
		oBox.style.left = left+"px";
		oBox.style.top = top+"px"; 
	}

	function getScroll(e){
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        var scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
		return {
			"x": scrollLeft+ e.clientX,
			"y": scrollTop + e.clientY
		}
	}
}