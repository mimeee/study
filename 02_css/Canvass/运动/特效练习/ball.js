
	function Ball(x,y,r,first,second,width,height,color){
		this.x = x || 0;
		this.y = y || 0;
		this.r = r || 0;
		this.first = first || 0;
		this.second = second*Math.PI || 2*Math.PI;
		this.width = width || 1000;
		this.height = height || 1000;
		this.color = color;
	}

	Ball.prototype={
		constructor:Ball,
		update:function(x,y,r){
			this.x = x;
			this.y = y;
			this.r = r;
		},
		stroke:function(cxt){
			cxt.beginPath();
			cxt.moveTo(this.x,this.y);
			cxt.arc(this.x,this.y,this.r,this.first,this.second);
			cxt.closePath();
			cxt.stroke();
		},

		fill:function(cxt){
			cxt.beginPath()
			cxt.fillStyle = this.color;
			cxt.moveTo(this.x,this.y);
			cxt.arc(this.x,this.y,this.r,this.first,this.second);
			cxt.fill();
			cxt.closePath();			
		},
		line:function(cxt){
			cxt.clearRect(0,0,this.width,this.height);
			cxt.lineTo(this.x,this.y);
			cxt.stroke();	
		},
		innerBoundary:function(){
			if(this.x < this.r){
				//this.x = this.r;
				return "x-left";
			}else if(this.x > this.width - this.r){
				//this.x = this.width - this.r
				return "x-right";
			}else if(this.y < this.r){
				//this.y = this.r;
				return "y-top";
			}else if(this.y > this.height - this.r){
				//this.y = this.height - this.r;	
				return "y-bottom";
			}
		},
		outterBoundary:function(){
			if(this.x < -this.r){
				//this.x = this.width + this.r;
				return "x-left";
			}else if(this.x > this.width + this.r){
				//this.x = -this.r
				return "x-right";
			}else if(this.y < -this.r){
				//this.y = this.r + this.height;
				return "y-top";
			}else if(this.y > this.r + this.height){
				//this.y = -this.r;	
				return "y-bottom";
			}
		}


	}
