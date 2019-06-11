window.onload = function(){
	var oCanvas = document.querySelector("#mycanvas");
	var width = oCanvas.width;
	var height = oCanvas.height;
	var oGc = oCanvas.getContext("2d");

	// var centerX = 20;
	// var centerY = 20;
	// var radius = 20;
	// var av = 2;
	// var percent = 2;
	// (function go(){
	// 	oGc.clearRect(0,0,width,height);
	// 	oGc.beginPath();		
	// 	oGc.arc(centerX,centerY,radius,0,percent*Math.PI);
	// 	oGc.fill();
	// 	oGc.closePath();
	// 	centerY = centerY + av;
	// 	centerX = centerX + 0.2*av;
	// 	var timer = requestAnimationFrame(go);
	// })();
	oGc.moveTo(50,50);
	oGc.lineTo(100,100);
	oGc.lineTo(2,200);
	oGc.lineTo(50,50);
	oGc.fill()
	oGc.clearRect(0,0,500,500);
	oGc.lineTo(7,512);
	oGc.lineTo(44,25);
	oGc.lineTo(414,25);
	oGc.lineTo(7,512);
	oGc.fill()
}