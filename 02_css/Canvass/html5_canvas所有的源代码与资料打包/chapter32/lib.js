window.onload = function () {
    var Canvas = function (w, h) {
        this.width = w;
        this.height = h;
    }
    Canvas.prototype = {
        init: function () {
            var oC = document.createElement("canvas");
            oC.setAttribute('width', this.width);
            oC.setAttribute('height', this.height);
            oC.setAttribute('id', 'canvas');
            oC.style.backgroundColor = '#000';
            document.body.appendChild(oC);
        }
    }
    var curWinWidth = window.innerWidth,
        curWinHeight = window.innerHeight;
    var oCanvas = new Canvas(curWinWidth, curWinHeight);
    oCanvas.init();

    var oC = document.querySelector('#canvas');
    var width = oC.width, height = oC.height, oGc = oC.getContext('2d');

    function random(min, max) {
        return Math.random() * (max - min) + min;
    }
    var Rain = function () {

    }
    Rain.prototype = {
        init: function () {
            this.x = random(0, width);
            this.y = 0;
            this.vy = random(3, 5);
            this.border = random(height * 0.8, height * 0.9);
            this.r = 1;
            this.vr = 1;
            // this.circleBorder = 50; //圆的半径边界
            this.alpha = 1; //圆的透明度1--->0
            this.vAlpha = 0.96;
        },
        draw: function (cxt) {
            if (this.y > this.border) { //雨滴大于边界，开始绘制圆
                cxt.beginPath();
                cxt.strokeStyle = 'rgba( 0, 153, 255,' + this.alpha + ')';
                cxt.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
                cxt.stroke();
                cxt.closePath();
            } else {
                cxt.fillStyle = '#09f';
                cxt.fillRect(this.x, this.y, 1, 20);
            }
            this.update(cxt);
        },
        update: function (cxt) {
            if (this.y < this.border) {
                this.y += this.vy;
            } else {
                if (this.alpha > 0.03) { //根据透明度 让半径消失
                    this.r += this.vr;
                    if (this.r > 50) { //半径 > 50
                        this.alpha *= this.vAlpha;
                    }
                } else {
                    //重新初始化雨滴
                    this.init();
                }
            }
        }
    }

    var rains = [];
    for (var i = 0; i < 40; i++) {
        setTimeout(function () {
            var oRain = new Rain();
            oRain.init();
            rains.push(oRain);
        }, 300 * i);
    }

    (function move() {
        // oGc.clearRect( 0, 0, width, height );
        oGc.fillStyle = 'rgba( 0, 0, 0, 0.1 )';
        oGc.fillRect(0, 0, width, height);
        for (var i = 0; i < rains.length; i++) {
            rains[i].draw(oGc);
        }
        requestAnimationFrame(move);
    })();
}