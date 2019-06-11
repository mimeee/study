/**
 * Created by ghostwu(Îâ»ª).
 */
window.onload = function(){
    var oCanvas = document.querySelector( '#myCanvas'),
        oGc = oCanvas.getContext( '2d' );

    oGc.beginPath();
    oGc.moveTo( 300, 200 );
    oGc.arc( 300, 200, 100, 0, 120 * Math.PI / 180, false );
    oGc.fillStyle = 'red';
    oGc.fill();

    oGc.beginPath();
    oGc.moveTo( 300, 200 );
    oGc.arc( 300, 200, 100, 120 * Math.PI / 180, 240 * Math.PI / 180, false );
    oGc.fillStyle = 'blue';
    oGc.fill();

    oGc.beginPath();
    oGc.moveTo( 300, 200 );
    oGc.arc( 300, 200, 100, 240 * Math.PI / 180, 360 * Math.PI / 180, false );
    oGc.fillStyle = 'yellow';
    oGc.fill();

}