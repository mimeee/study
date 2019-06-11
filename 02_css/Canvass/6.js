window.onload = function(){
	var oCanvas = document.querySelector("#myCanvas");
	var oGc = oCanvas.getContext("2d");
	// var linear = oGc.createLinearGradient(10,500,500,500);
	// linear.addColorStop(0.1,"blue");
	// linear.addColorStop(0.4,"red");
	// linear.addColorStop(0.6,"green");
	// oGc.fillStyle = linear;
	// oGc.fillRect(0,0,1000,1000);

	console.log(oGc);
	// oGc.arc(200,200,200,0,2*Math.PI);
	// var radial = oGc.createRadialGradient(200,200,200,250,300,50);
	// radial.addColorStop(0.1,"#fff");
	// radial.addColorStop(0.2,"#ddd");
	// radial.addColorStop(0.3,"#aaa");
	// radial.addColorStop(0.6,"#666");
	// radial.addColorStop(1,"#000");
	// oGc.fillStyle = radial;
	// oGc.fill();
	

	oGc.rect(0,0,500,500);
	var cerLinear = oGc.createLinearGradient(0,0,0,500);
	cerLinear.addColorStop(0.2,"#fff");
	cerLinear.addColorStop(0.5,"#90CA12");
	cerLinear.addColorStop(1,"#000");
	oGc.fillStyle = cerLinear;

	
	oGc.shadowOffsetX = 10;
	oGc.shadowOffsetY = 10;
	oGc.shadowColor = "#000";
	oGc.shadowBlur = 20;
	oGc.fill(); 

}