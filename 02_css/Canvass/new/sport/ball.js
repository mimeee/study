function Ball(obj,panel){
	this.initR = obj.r;
	this.x = obj.x;
	this.y = obj.y;
	this.r = obj.r;
	this.ax = obj.ax;
	this.ay = obj.ay;
	this.ar = obj.ar;
	this.color = obj.color;
	this.width = panel.width;
	this.height = panel.height;	
	this.crt = panel.getContext("2d");
}

Ball.prototype.drawCircle = function(){	
	this.crt.beginPath();
	this.crt.fillStyle = this.color ? this.color : "#000000";
	this.crt.arc(this.x,this.y,this.r,0,2*Math.PI,true);
	this.crt.fill();
	this.crt.closePath();
}

Ball.prototype.innerBorder = function(){
	if(this.x + this.r >= this.width){
		return "left";
	}else if(this.x - this.r <= 0){
		return "right";
	}else if(this.y - this.r <= 0){
		return "top";
	}else if(this.y+this.r >=this.height){
		return "bottom";
	}
} 

Ball.prototype.clearPic = function(){
	this.crt.clearRect(0,0,this.width,this.height);
}