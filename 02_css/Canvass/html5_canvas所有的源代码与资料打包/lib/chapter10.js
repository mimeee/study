/**
 * Created by ghostwu(吴华).
 */
window.onload = function(){
    var oCanvas = document.querySelector( '#myCanvas'),
        oGc = oCanvas.getContext( '2d' );

    oGc.beginPath();
    oGc.strokeStyle = 'red';
    oGc.setLineDash( [ 20, 5 ] );
    oGc.moveTo( 100, 100 );
    oGc.lineTo( 400, 100 );
    oGc.stroke();

    oGc.beginPath();
    oGc.strokeStyle = '#09f';
    oGc.setLineDash( [ 20, 5, 10, 5 ] );
    oGc.moveTo( 100, 200 );
    oGc.lineTo( 400, 200 );
    oGc.stroke();



    //oGc.beginPath();
    //oGc.lineWidth = 20;
    //oGc.lineCap = 'round';
    //oGc.lineJoin = 'miter';
    //oGc.lineJoin = 'round';
    //oGc.lineJoin = 'bevel';
    //oGc.moveTo( 100, 100 );
    //oGc.lineTo( 300, 100 );
    //oGc.lineTo( 100, 300 );
    //oGc.lineTo( 300, 300  );
    //oGc.stroke();





    //oGc.beginPath();
    //oGc.lineWidth = 10;
    //oGc.strokeStyle = 'red';
    //oGc.lineCap = 'butt';
    //oGc.moveTo( 100, 100 );
    //oGc.lineTo( 500, 100 );
    //oGc.stroke();
    //
    //oGc.beginPath();
    //oGc.lineCap = 'round';
    //oGc.lineWidth = 20;
    //oGc.strokeStyle = 'green';
    //oGc.moveTo( 100, 200 );
    //oGc.lineTo( 500, 200 );
    //oGc.stroke();
    //
    //oGc.beginPath();
    //oGc.lineCap = 'square';
    //oGc.strokeStyle = 'blue';
    //oGc.lineWidth = 30;
    //oGc.moveTo( 100, 300 );
    //oGc.lineTo( 500, 300 );
    //oGc.stroke();

    //圆的半径  = r(原来的半径) + 10
    //oGc.lineWidth = 10;
    //oGc.arc( 200, 200, 100, 0, 2 * Math.PI, false );
    //oGc.stroke();



}
