window.onload = function(){
	var oCanva = document.querySelector("#mycanvas");
	var oGc = oCanva.getContext("2d");
	var timer = null;

	var x = 10;
	var y = 10;
	var r = 10;
	var ax = 2;
	var ay = 2;
	var ar = 1;


console.log(oGc);
	// timer = setInterval(function go(){

	// },10)
	
	function go(){
		x += ax;
		y += ay;
		r += ar;
		oGc.clearRect(0,0,oCanva.width,oCanva.height);
		oGc.beginPath();
		oGc.arc(x,y,r,0,2*Math.PI);
		var linear = oGc.createRadialGradient(x,y,r,x,y,0.5*r);
		linear.addColorStop(0.2,"red");
		linear.addColorStop(0.6,"yellow");
		linear.addColorStop(1,"blue");
		oGc.fillStyle = linear;
		oGc.fill();
		oGc.closePath();
		requestAnimationFrame(go);
	}

	go();



}