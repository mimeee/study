/**
 * Created by ghostwu(吴华).
 */
window.onload = function(){
    var oCanvas = document.querySelector( '#myCanvas'),
        oGc = oCanvas.getContext( '2d' );

    var oImg = new Image();
    oImg.src = './img/mv.jpg';
    oImg.onload = function(){ //加载完了之后，才能渲染图片
        //oGc.drawImage( oImg, 100, 100, 200, 200 );
        //oGc.drawImage( oImg, 100, 100 );
        //oGc.drawImage( oImg, 20, 20, 100, 100, 100, 100, 100, 100 );

        var pattern = oGc.createPattern( oImg, 'repeat' );
        //var pattern = oGc.createPattern( oImg, 'repeat-y' );
        //var pattern = oGc.createPattern( oImg, 'repeat-x' );
        //var pattern = oGc.createPattern( oImg, 'no-repeat' );
        oGc.fillStyle = pattern;
        oGc.fillRect( 0, 0, oCanvas.width, oCanvas.height );
    }

    //var oImg = document.querySelector( "img" );
    //oGc.drawImage( oImg, 100, 100 );

    // var oNewCanvas = document.createElement( 'canvas' );
    //     oNewCanvas.setAttribute( 'id', 'newCanvas' );
    //     oNewCanvas.setAttribute( 'width', 200 );
    //     oNewCanvas.setAttribute( 'height', 200 );
    //     oNewGc = oNewCanvas.getContext( '2d' );
    //     oNewGc.beginPath();
    //     oNewGc.fillStyle = '#09f';
    //     oNewGc.arc( 100, 100, 100, 0, 2 * Math.PI, false );
    //     oNewGc.closePath();
    //     oNewGc.fill();

    // var pattern = oGc.createPattern( oNewCanvas, 'repeat' );
    // oGc.fillStyle = pattern;
    // oGc.fillRect( 0, 0, oCanvas.width, oCanvas.height );
}