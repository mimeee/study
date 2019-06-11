window.onload=function(){
	var bg = document.getElementsByClassName('bg')[0];
	var axis = document.getElementById("axis");
 	var width = getStyle(bg,"width");
	
	var oCanvas = document.getElementsByTagName("canvas")[0];
	var initWidth = oCanvas.width;
	oCanvas.width = parseInt(width);
	oCanvas.height = "500";

	var oGc = oCanvas.getContext("2d");


//按F9查看oGc里面的属性和方法
	var str = "";
	var inner = document.getElementById("obj");
	for(let i in oGc){
		str += i;
		str += " : ";
		str += oGc[i];
		str += "<br/>";
	}
	inner.innerHTML = str;

	document.onkeydown = function(e){
		if(e.keyCode == 120){
			console.log(getStyle(inner,"display"));
			if(getStyle(inner,"display") == "block"){
				inner.style.display = "none";
			}else{
				inner.style.display = "block";
			}
		}
	}
//----------------------------------------------------



//钢管
	// pipe(100.5,100.5,10,600,oGc);
	// pipe(100.5,400.5,10,-300,oGc,2);
	// pipe(700.5,400.5,10,-600,oGc);
	// pipe(700.5,100.5,10,300,oGc,2);
//-----------------------------------------------------

//曲线
	// oGc.beginPath();
	// oGc.moveTo(261,66);
	// oGc.quadraticCurveTo(200,20,500,50);
	// oGc.stroke();
	// oGc.closePath();
//--------------------------------------------------------
	
//加载图片
	// var oImg = new Image();
	// oImg.src = "1.png";
	// oImg.onload = function(){
	// 	// var pattern = oGc.createPattern(oImg,"no-repeat")
	// 	// oGc.fillStyle = pattern;
	// 	// oGc.fillRect(0,0,parseInt(width),500);
		
	// 	oGc.drawImage(oImg,100,100,200,200);
	// }
//---------------------------------------------------------


//裁剪
	// oGc.arc(200,200,100,0,2*Math.PI,false);
	// // oGc.fill();
	// oGc.clip();
	// var oImg = new Image();
	// oImg.src = "1.png";
	// oImg.onload = function(){
	// 	oGc.drawImage(oImg,60,60,260,260);
	// }

//像素处理
	// var oImg = new Image();
	// oImg.src = "1.png";
	// oImg.onload = function(){
	// 	oGc.drawImage(oImg,0,0,300,300);
	// 	var dataArr = oGc.getImageData(0,0,oImg.width,oImg.height);
	// 	var data = dataArr.data;
	// 	var pp = data;
	// 	console.log(dataArr.data);
	// 	for(let i = 0;i<pp.length;i++){
	// 		pp[i] = pp[i]*0.5;

	// 	}
	// 	console.log(dataArr.data);
	// 	oGc.putImageData(dataArr,500,10)
	// }

//渐变色
	//线性
	// var linear = oGc.createLinearGradient(20,20,300,300);
	// console.log(linear);
	// linear.addColorStop("0.6","#52aa86");
	// linear.addColorStop("0.1","#ff7863");
	// // linear.addColorStop("0.1","#52eddd");
	// // linear.addColorStop("0.1","#000000");
	// // linear.addColorStop("0.1","#9520ef");
	// oGc.fillStyle = linear;
	// oGc.arc(120,120,100,100,0,2*Math.PI,true);
	// oGc.fill();















//显示鼠标所到之处的坐标
	oCanvas.onmousemove = function(e){
		axis.innerHTML = "";
		axis.innerHTML += "x:" + e.clientX;
		axis.innerHTML += "y:" + e.clientY;
		axis.style.top = e.clientY +"px";
		axis.style.left = e.clientX+ 20 +"px";
	}
//------------------------------------------------
}
function getStyle(obj,attr,value){
	if(arguments.length === 2){
		return obj.currentStyle ? obj.currentStyle[attr] : window.getComputedStyle(obj,false)[attr];
	}else{
		obj.style[attr] = value;
	}
}



function getStyle(obj,attr){
	if(obj.style[attr]){
		return obj.style[attr];
	}else if(obj.currentStyle){
		var att = obj.currentStyle[attr];
		if(att ==="auto"){
			var padding = (parseInt(obj.currentStyle["paddingLeft"])  +  parseInt(obj.currentStyle["paddingRight"]))
			return obj.clientWidth - parseInt(obj.currentStyle["borderWidth"]) - padding +"px";
		}
		return att;
	}else if(window.getComputedStyle){
		return window.getComputedStyle(obj,false)[attr];
	}else{
		return null;
	}
}


function pipe(x,y,r,width,oGc,type=1){

	if(type === 1){
		oGc.beginPath();
			oGc.strokeStyle = "#fff";
			oGc.lineWidth = 1;
		oGc.arc(x,y,r,0,2*Math.PI,false);
		oGc.moveTo(x,y-r);
		oGc.lineTo(x+width,y-r);
		oGc.moveTo(x+width,y+r);
		var direct = width > 0 ? true : false; 
		oGc.arc(x+width,y,r,0.5*Math.PI,1.5*Math.PI,direct);
		oGc.moveTo(x+width,y+r);
		oGc.lineTo(x,y+r);	
		oGc.stroke();
		oGc.closePath();
	}else if(type === 2){
		oGc.beginPath();
		oGc.arc(x,y,r,0,2*Math.PI,false);
		oGc.moveTo(x-r,y);
		oGc.lineTo(x-r,y+width);
		oGc.moveTo(x+r,y+width);
		console.log(x);
		console.log(y+width);
		var direct = width < 0 ? true : false; 
		oGc.arc(x,y+width,r,0*Math.PI,1*Math.PI,direct);
		oGc.moveTo(x+r,y+width);
		oGc.lineTo(x+r,y);	
		oGc.stroke();
		oGc.closePath();
	}
	
}