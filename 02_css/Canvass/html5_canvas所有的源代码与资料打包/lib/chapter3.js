/**
 * Created by ghostwu(Îâ»ª).
 */
window.onload = function(){
    var oCanvas = document.querySelector( '#myCanvas'),
        oGc = oCanvas.getContext( '2d');

    //oGc.beginPath();
    //oGc.strokeStyle = 'red';
    //oGc.moveTo( 100, 100 );
    //oGc.lineTo( 300, 100 );
    //oGc.stroke();
    //
    //oGc.beginPath();
    //oGc.strokeStyle = 'green';
    //oGc.moveTo( 100, 200 );
    //oGc.lineTo( 300, 200 );
    //oGc.stroke();
    //
    //oGc.beginPath();
    //oGc.strokeStyle = 'blue';
    //oGc.moveTo( 100, 300 );
    //oGc.lineTo( 300, 300 );
    //oGc.stroke();


    //oGc.moveTo( 100, 100 );
    //oGc.lineTo( 300, 100 );
    //oGc.lineTo( 200, 200 );
    //oGc.lineTo( 100, 100 );
    //oGc.stroke();

    oGc.beginPath();
    oGc.strokeStyle = 'red';
    oGc.moveTo( 100, 100 );
    oGc.lineTo( 300, 100 );
    oGc.lineTo( 200, 200 );
    oGc.closePath();
    oGc.stroke();

    oGc.beginPath();
    oGc.strokeStyle = 'blue';
    oGc.moveTo( 100, 300 );
    oGc.lineTo( 300, 300 );
    oGc.lineTo( 200, 400 );
    oGc.closePath();
    oGc.stroke();

}