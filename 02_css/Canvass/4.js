window.onload = function(){
	var oCanvas = document.querySelector("#myCanvas");
	var oGc = oCanvas.getContext("2d");

	//画一个饼图
	// oGc.beginPath();
	// oGc.fillStyle = "red";
	// oGc.moveTo(350,350);
	// oGc.arc(350,350,150,0,0.75*Math.PI);
	// oGc.fill();
	// oGc.closePath();

	// oGc.beginPath();
	// oGc.fillStyle = "green";
	// oGc.moveTo(350,350);
	// oGc.arc(350,350,150,0.75*Math.PI,1.88*Math.PI);
	// oGc.fill();
	// oGc.closePath();

	// oGc.beginPath();
	// oGc.fillStyle="blue";
	// oGc.moveTo(350,350);
	// oGc.arc(350,350,150,1.88*Math.PI,2*Math.PI);
	// oGc.fill();
	// oGc.closePath();
	//-------------------------------------------------------------------------

	//arcTo与圆角矩形
	// oGc.beginPath();
	// oGc.moveTo(100,100);
	// oGc.lineTo(200,100);
	// oGc.arcTo(250,100,250,150,50);
	// oGc.lineTo(250,250);
	// oGc.arcTo(250,300,200,300,50);
	// oGc.lineTo(100,300);
	// oGc.arcTo(50,300,50,250,50);
	// oGc.lineTo(50,150);
	// oGc.arcTo(50,100,100,100,50);
	// oGc.fill();
	//-------------------------------------------------------------------------

	//1px像素问题
	// oGc.moveTo(300.5,300.5);
	// oGc.lineTo(400.5,300.5);

	// oGc.moveTo(300,400);
	// oGc.lineTo(400,400);
	// oGc.stroke();
	//--------------------------------------------------------------------------
	

	//赛贝尔曲线
	// oGc.moveTo(261,66);
	// oGc.quadraticCurveTo(357,352,647,227);
	// oGc.stroke();

	// oGc.moveTo(17,227);
	// oGc.bezierCurveTo(186,225,272,226,370,117);
	// oGc.stroke();
	//---------------------------------------------------------------------------
	

	//线条样式
	// oGc.lineWidth = 20;
	// oGc.strokeStyle = "red";
	// oGc.lineCap = "round";
	// oGc.lineJoin = "bevel";
	// oGc.moveTo(300,300);
	// oGc.lineTo(600,300);
	// oGc.lineTo(300,600);
	// oGc.lineTo(600,600);
	// oGc.stroke();
	oGc.lineWidth = 10;
	oGc.lineJoin = "round";
	oGc.setLineDash([10,2,20,3]);
	oGc.moveTo(300,300);
	oGc.lineTo(600,300);
	oGc.lineTo(300,600);
	oGc.lineTo(600,600);
	oGc.stroke();
}