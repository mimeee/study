/**
 * Created by ghostwu(Îâ»ª).
 */
window.onload = function(){
    var oCanvas = document.querySelector( '#myCanvas'),
        oGc = oCanvas.getContext( '2d' );

    //oGc.moveTo( 140, 75 );
    //oGc.quadraticCurveTo( 380, 67, 328, 236 );
    //oGc.stroke();

    oGc.moveTo( 233, 132 );
    oGc.bezierCurveTo( 297, 376, 149, 307, 704, 171 );
    oGc.stroke();

}
