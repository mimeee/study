/**
 * Created by ghostwu(吴华).
 */
window.onload = function(){
    var oCanvas = document.querySelector( '#myCanvas'),
        oGc = oCanvas.getContext( '2d' );

    //oGc.beginPath();
    //oGc.strokeStyle = '#09f';
    //oGc.arc( 100, 100, 100, 0, 2 * Math.PI, false );
    //oGc.closePath();
    //oGc.stroke();
    //
    //oGc.clip();
    //
    //oGc.beginPath();
    //oGc.fillStyle = 'red';
    //oGc.fillRect( 100, 100, 200, 100 );
    //oGc.closePath();

    //oGc.beginPath();
    ////oGc.strokeStyle = '#09f';
    //oGc.rect( 0, 0, 100, 100 );
    //oGc.closePath();
    ////oGc.stroke();
    //
    //oGc.clip();
    //
    //oGc.beginPath();
    //oGc.fillStyle = 'red';
    //oGc.arc( 100, 100, 100, 0, 2 * Math.PI, false );
    //oGc.fill();
    //oGc.closePath();


    //oGc.beginPath();
    //oGc.arc( 200, 200, 100, 0, 360 * Math.PI / 180, false );
    //oGc.closePath();
    //
    //oGc.clip();
    //
    //var oImg = new Image();
    //oImg.src = './img/mv.jpg';
    //oImg.onload = function(){
    //    oGc.drawImage( oImg, 100, 100 );
    //}

    //oGc.beginPath();
    //oGc.rect( 10, 10, 150, 150 );
    //oGc.closePath();
    //
    //oGc.clip();
    //
    //var oImg = new Image();
    //oImg.src = './img/mv.jpg';
    //oImg.onload = function(){
    //    oGc.drawImage( oImg, 0, 0 );
    //}

    var oNewCanvas = document.createElement( "canvas" );
        oNewCanvas.setAttribute( 'width', 200 );
        oNewCanvas.setAttribute( 'height', 200 );
    var oNewGc = oNewCanvas.getContext( '2d' );

        oNewGc.beginPath();
        oNewGc.arc( 100, 100, 100, 0, 2 * Math.PI, false );
        oNewGc.closePath();

        oNewGc.clip();

    var oImg = new Image();
    oImg.src = './img/mv.jpg';
    oImg.onload = function(){
        oNewGc.drawImage( oImg, 0, 0 );
        var pattern = oGc.createPattern( oNewCanvas, 'repeat' );
        oGc.fillStyle = pattern;
        oGc.fillRect( 0, 0, oCanvas.width, oCanvas.height );
    }



}
