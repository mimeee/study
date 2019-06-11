window.onload = function(){
	var oCanvas = document.getElementById("myCanvas");
	var oGc = oCanvas.getContext("2d");

	//两点一直线
	oGc.beginPath();
	oGc.lineTo(50,50);
	oGc.lineTo(50,100);
	oGc.lineTo(100,100);
	oGc.closePath();
	// oGc.moveTo(100,50);
	// oGc.lineTo(100,100);
	oGc.fill();

	//连续画直线
	// oGc.moveTo(150,50);
	// oGc.lineTo(200,50);
	// oGc.lineTo(200,100);
	// oGc.lineTo(150,100);
	// oGc.lineTo(150,50);
	// oGc.stroke();


	//画矩形的API
	// oGc.strokeStyle = "red";
	// oGc.strokeRect(250,50,100,100);
	// oGc.fillRect(300,300,100,200);
	// oGc.clearRect(0,0,oGc.canvas.width,oGc.canvas.height)
}