window.onload = function(){
	var oCanvas = document.querySelector("#myCanvas");
	oGc = oCanvas.getContext("2d");

	//文字样式--------------------------------------------------------------------
	// oGc.font = "normal bold 20px Cambria";
	// oGc.fillText("mimee",500,500);
	// oGc.moveTo(500,0);
	// oGc.lineTo(500,1000);
	// oGc.stroke();
	// console.log(oGc.measureText("mimeemimeemimeemimee").width)

	// oGc.textAlign = "start";
	// oGc.fillText("start",500,530);
	// oGc.textAlign = "end";
	// oGc.fillText("end",500,550);
	// oGc.textAlign = "left";
	// oGc.fillText("left",500,570);
	// oGc.textAlign = "right";
	// oGc.fillText("right",500,590);
	// oGc.textAlign = "center";
	// oGc.fillText("center",500,610);



	//图片加载--------------------------------------------------------------------------
	var oImg = new Image();
	oImg.src = "1.png";
	// oImg.onload = function(){
	// 	//oGc.drawImage(oImg,0,0,20,20,100,100,200,200)
	// 	// var	pattern = oGc.createPattern(oImg,"repeat-y");
	// 	// oGc.fillStyle = pattern;
	// 	// oGc.fillRect(0,0,1000,500);
	// }


	// var oCa = document.createElement("canvas");
	// oCa.width = 100;
	// oCa.height = 100;
	// oG = oCa.getContext("2d");
	// oG.arc(50,50,50,0,2*Math.PI);
	// oG.fill();

	// var pattern = oGc.createPattern(oCa,"repeat-y");
	// oGc.fillStyle = pattern;
	// oGc.fillRect(0,0,1000,1000);


	//clip剪裁
	// //圆形剪裁
	// oGc.arc(100,100,100,0,2*Math.PI);
	// oGc.clip();

	// oImg.onload = function(){
	// 	oGc.drawImage(oImg,0,0);
	// }	
	//矩形剪裁
	// oGc.rect(100,100,100,100);
	// oGc.clip();
	// oImg.onload = function(){
	// 	oGc.drawImage(oImg,0,0);
	// }
	//用canvas剪裁图案，填充canvas
	// oGc.arc(500,500,500,0,2*Math.PI);
	// oGc.clip();

	// var oCa = document.createElement("canvas");
	// oCa.setAttribute("width",40);
	// oCa.setAttribute("height",40);
	// oCac = oCa.getContext("2d");
	// oCac.arc(20,20,10,0,2*Math.PI);
	// oCac.fill();

	// var pattern = oGc.createPattern(oCa,"repeat");
	// oGc.fillStyle = pattern;
	// oGc.fillRect(0,0,1000,1000);
	// var newCanvas = document.createElement("canvas");
	// newCanvas.setAttribute("width",200);
	// newCanvas.setAttribute("height",200);
	// var newCa = newCanvas.getContext("2d");
	// newCa.arc(100,100,100,0,2*Math.PI);
	// newCa.fill();
	// newCa.clip();
	// oImg.onload = function(){
	// 	newCa.drawImage(oImg,0,0);

	// var pattern = oGc.createPattern(newCanvas,"repeat");
	// oGc.fillStyle = pattern;
	// oGc.fillRect(0,0,1000,1000);
	// }



	

	//保存状态---------------------------------------------------------------------------------------
	// oGc.beginPath();
	// oGc.arc(100,100,100,0,2*Math.PI);
	// oGc.clip();
	// oGc.closePath();
	// oGc.save();

	// var path = ["1.jpg","1.png"];
	// var index = 0;
	// function loadPic(path,index){
	// 	var oImg = new Image();
	// 	oImg.src = path[index%2];
	// 	oImg.onload = function(){
	// 		oGc.drawImage(oImg,0,0);
	// 	}
	// }


	// setInterval(function(){
	// 	oGc.restore();
	// 	loadPic(path,index);
	// 	index++;
	// },2000)



	//像素处理
	// oImg.onload = function(){
	// 	oGc.drawImage(oImg, 0 ,0);
	// 	var dateImage = oGc.getImageData(0,0,oImg.width,oImg.height);
	// 	var data = dateImage.data;
	// 	for(let i = 0;i<data.length;i += 4){
	// 		data[i] = 255 - data[i];
	// 		data[i+1] = 255 - data[i+1];
	// 		data[i+2] = 255 - data[i+2];
	// 	}	
	// 	oGc.putImageData(dateImage,300,0);
	// }
	oImg.onload = function(){
		oGc.drawImage(oImg, 0 ,0);
		var dateImage = oGc.getImageData(0,0,oImg.width,oImg.height);
		var data =dateImage.data;
		var a = [0.1,0.8,0.90,1];
		for(let i = 0;i<data.length;i+=4){
			data[i] = data[i] -10;
			data[i + 1] = data[i + 1] - 30;
			data[i + 2] = data[i + 2] - 20;
			data[i + 3] *= a[Math.floor(Math.random()*5)];
		}
		oGc.putImageData(dateImage,300,10);
	}



}