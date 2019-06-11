/**
 * Created by ghostwu(吴华).
 */
window.onload = function(){
    var oCanvas = document.querySelector( '#myCanvas' );
        oGc = oCanvas.getContext( '2d' ),
        txt = '跟着ghostwu学习canvas动画教程',
            width = oCanvas.width;

        oGc.font = 'bold 30px 微软雅黑';
        oGc.strokeStyle = '#09f';
        //oGc.strokeText( txt, 100, 100, 200 );
    oGc.strokeText( txt, width / 2 - oGc.measureText( txt).width / 2 , 100 );

    //oGc.font = 'bold 30px 微软雅黑';
    //oGc.fillStyle = '#09f';
    //oGc.fillText( txt, 100, 100 );
}
