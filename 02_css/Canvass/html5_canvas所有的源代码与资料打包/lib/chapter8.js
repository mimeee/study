/**
 * Created by ghostwu(Îâ»ª).
 */
window.onload = function(){

    var oCanvas = document.querySelector( '#myCanvas'),
        oGc = oCanvas.getContext( '2d'),
        width = oCanvas.width, height = oCanvas.height;

        //oGc.lineWidth = 1;
        //oGc.strokeStyle = 'red';
        //
        //oGc.moveTo( 100, 100 );
        //oGc.lineTo( 500, 100 );
        //oGc.stroke();
        //
        //oGc.moveTo( 100.5, 200.5 );
        //oGc.lineTo( 500.5, 200.5 );
        //oGc.stroke();


        function drawGrid( color, stepX, stepY ){
            oGc.beginPath();
            oGc.strokeStyle = color;
            oGc.lineWidth = 0.5;

            for( var i = stepX; i < width; i += stepX ){
                oGc.moveTo( i, 0 );
                oGc.lineTo( i, height );
            }

            for( var j = stepY; j < height; j += stepY ){
                oGc.moveTo( 0, j );
                oGc.lineTo( width, j );
            }
            oGc.closePath();
            oGc.stroke();
        }
        drawGrid( '#09f', 10, 10 );




}