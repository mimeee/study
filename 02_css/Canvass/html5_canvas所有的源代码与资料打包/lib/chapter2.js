/**
 * Created by ghostwu(吴华).
 */

window.onload = function(){
    var oCanvas = document.querySelector( 'canvas'),
        //用canvas对象获取到绘制区域的上下文
        oGc = oCanvas.getContext( '2d' );

        //oGc.moveTo( 100, 100 );
        //oGc.lineTo( 300, 100 );
        //oGc.stroke();
        //
        //
        //oGc.moveTo( 100, 200 );
        //oGc.lineTo( 300, 200 );
        //oGc.stroke();

    //oGc.strokeStyle = 'red';
    //oGc.moveTo( 100, 100 );
    //oGc.lineTo( 300, 100 );
    //oGc.stroke();
    //
    //oGc.moveTo( 100, 200 );
    //oGc.lineTo( 300, 200 );
    //oGc.stroke();
    //
    //oGc.moveTo( 400, 100 );
    //oGc.lineTo( 600, 100 );
    //oGc.lineTo( 400, 200 );
    //oGc.lineTo( 600, 200 );
    //oGc.stroke();


    //oGc.moveTo( 200, 100 );
    //oGc.lineTo( 300, 200 );
    //oGc.lineTo( 100, 200 );
    //oGc.lineTo( 200, 100 );
    //oGc.stroke();

    //oGc.strokeStyle = 'red';
    //oGc.strokeStyle = 'rgb( 255, 0, 0 )';
    //oGc.strokeStyle = '#f00';
    //oGc.strokeStyle = 'rgba( 255, 0, 0, 0.3 )';
    //oGc.moveTo( 100, 100 );
    //oGc.lineTo( 300, 100 );
    //oGc.lineTo( 300, 200 );
    //oGc.lineTo( 100, 200 );
    //oGc.lineTo( 100, 100 );
    //oGc.stroke();

    oGc.fillRect( 100, 100, 200, 100 );

    oGc.fillStyle = 'red';
    oGc.fillRect( 400, 100, 200, 100 );

    //oGc.clearRect( 0, 0, oCanvas.width, oCanvas.height );

    //清空画布内容
    oGc.clearRect( 0, 0, oGc.canvas.width, oGc.canvas.height );

    //oGc.fillStyle = 'red';
    //oGc.rect( 400, 100, 200, 100 );
    //oGc.fill();

    //oGc.strokeStyle = 'red';
    //oGc.rect( 400, 100, 200, 100 );
    //oGc.stroke();

    //oGc.clearRect( 400, 100, 200, 100 );

}

