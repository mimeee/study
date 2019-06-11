window.onload = function() {
	var oCanvas = document.querySelector("#myCanvas");
	var data = [
		{position:[{x:0,y:0},{x:700,y:0},{x:350,y:350}],color:"#abc123"},
		{position:[{x:0,y:0},{x:0,y:700},{x:350,y:350}],color:"#321abc"},
		{position:[{x:350,y:350},{x:700,y:0},{x:700,y:350},{x:350,y:700}],color:"#85aa11"},
		{position:[{x:0,y:700},{x:175,y:525},{x:175,y:700}],color:"#00aa21"},
		{position:[{x:350,y:700},{x:700,y:700},{x:700,y:350}],color:"#cd6a71"},
		{position:[{x:350,y:350},{x:175,y:525},{x:350,y:525}],color:"#ccc"},
		{position:[{x:175,y:525},{x:350,y:525},{x:350,y:700},{x:175,y:700}],color:"#3ffab1"}
	]
	drawPic(data,oCanvas,"position","color");


	var oCircle = document.querySelector("#myCircle");
	var oGc = oCircle.getContext("2d");
	oGc.beginPath();
	oGc.arc(200,200,50,0*Math.PI,2*Math.PI);
	oGc.moveTo(150,200);
    oGc.lineTo(150,450);  
	oGc.arc(200,450,50,0.3*Math.PI,2*Math.PI,false);

	oGc.stroke();
	oGc.closePath();
	//oGc.clearRect(0,0,700,700);
}

function drawPic(arr,canvas,param1,param2){
	var oGc = canvas.getContext("2d");
	for(var i = 0;i<arr.length;i++){
		oGc.beginPath();
		for(var j = 0;j<arr[i][param1].length;j++){
			oGc.lineTo(arr[i][param1][j]["x"],arr[i][param1][j]["y"]);
		}
		oGc.fillStyle = arr[i][param2];
		oGc.fill();
		oGc.closePath();
	}
}