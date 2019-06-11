window.onload = function(){
	
	var oDiv = document.getElementById("progress");
	console.log(oDiv)
	oGc = oDiv.getContext("2d");

	oGc.moveTo(10,10);
	oGc.lineTo(10,100);
	oGc.moveTo(20,20);
	oGc.stroke();


}