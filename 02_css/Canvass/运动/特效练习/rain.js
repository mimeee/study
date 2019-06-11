

function Rain(width,height,speed){
	this.width = width;
	this.height = height;
	this.vy = speed;
	this.init();
}

Rain.prototype = {
	init:function(){
		this.x = random(this.width,10);
		this.y = random(400,-200);
		this.r = 1;
		this.alpha = 1;
		this.vAlpha = 0.98;
		this.boundary = random(100,this.height*0.7);
	},
	draw:function(cxt){
		if(this.y<this.boundary){
			cxt.beginPath();
			cxt.fillStyle = "rgba(23,155,112,0.7)";
			cxt.fillRect(this.x,this.y,2,6);
			cxt.closePath();
		}else if(this.y>this.boundary){
			cxt.beginPath();
			cxt.strokeStyle = "rgba(23,155,112,"+this.alpha+")";
			cxt.arc(this.x,this.y,this.r,0,2*Math.PI);
			cxt.stroke();
			cxt.closePath();
		}
		this.update();
	},
	update:function(){
		if(this.y<this.boundary){
			this.y += this.vy;
		}else if(this.y>this.boundary){
			if(this.alpha > 0.2){
				this.r ++;
				if(this.r > 50){
					this.alpha *= this.vAlpha;
				}				
			}else{
				this.init();
			}
		}
	}
}


function random(mul,add){
	return Math.random()*mul + add;
}