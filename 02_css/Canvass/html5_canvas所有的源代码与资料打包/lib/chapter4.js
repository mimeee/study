/**
 * Created by ghostwu(Îâ»ª).
 */
window.onload = function(){
    var oCanvas = document.querySelector( '#myCanvas'),
        oGc = oCanvas.getContext( '2d'),
        width = oCanvas.width, height = oCanvas.height;

        //oGc.arc( width / 2, height / 2, 100, 0, 90 * Math.PI / 180, false );
        //oGc.arc( width / 2, height / 2, 100, 0, 90 * Math.PI / 180, true );
        //oGc.arc( width / 2, height / 2, 100, 0, 270 * Math.PI / 180, false );
        //oGc.arc( width / 2, height / 2, 100, 0, 270 * Math.PI / 180, true );
        //oGc.stroke();

        //oGc.arc( width / 2, height / 2, 100, 0, 270 * Math.PI / 180, false );
        //oGc.arc( width / 2, height / 2, 100, 0, 270 * Math.PI / 180, true );
        //oGc.closePath();
        //oGc.stroke();


        //oGc.fillStyle = 'red';
        //oGc.arc( width / 2, height / 2, 100, 0, 2 * Math.PI );
        //oGc.stroke();
        //oGc.fill();

        //oGc.beginPath();
        //oGc.strokeStyle = 'red';
        //oGc.arc( 200, 200, 100, 0, 2 * Math.PI );
        //oGc.stroke();
        //
        //oGc.beginPath();
        //oGc.strokeStyle = 'blue';
        //oGc.arc( 400, 200, 100, 0, 2 * Math.PI );
        //oGc.stroke();


        oGc.moveTo( 150, 50 );
        oGc.lineTo( 250, 50 );
        oGc.stroke();

        oGc.beginPath();
        oGc.arc( 250, 100, 50, 270 * Math.PI / 180, 0, false );
        oGc.moveTo( 300, 100 );
        oGc.lineTo( 300, 200 );
        oGc.stroke();


}
