window.onload = function(){
	
	var oDiv = document.querySelector("#progress");
	oDiv.style.width = 0;


	var timer = window.requestAnimationFrame(function go(){
		var width = parseInt(window.getComputedStyle(oDiv,null)["width"]);
		if(width < 1000){
			oDiv.style.width = width + 10 +"px";
			oDiv.innerHTML = (width + 10)/10 + "%";
			requestAnimationFrame(go);
		}else{
			cancelAnimationFrame(timer);
		}
	})


}