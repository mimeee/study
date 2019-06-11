/**
 * Created by ghostwu(吴华).
 */
window.onload = function(){
    var oCanvas = document.querySelector( '#myCanvas'),
        oGc = oCanvas.getContext( '2d'),
        oBtn = document.querySelector( 'input'),
        txt = '跟着ghostwu学习canvas动画';



    // oGc.font = 'bold 30px 微软雅黑';
    // oGc.fillStyle = '#09f';
    // oGc.save(); //保存状态
    // oGc.fillText( txt, 100, 100 );

    // oGc.fillStyle = 'red';
    // oGc.fillText( txt, 100, 200 );

    // oGc.restore();//恢复状态
    // oGc.fillText( txt, 100, 300 );







    oGc.save();//保存当前的画布状态, 保存没有裁剪区域的画布
    oGc.beginPath();
    oGc.arc( 100, 100, 100, 0, 2 * Math.PI, false );
    oGc.closePath();
    
    oGc.clip();
    
    function loadImg( imgPath ){
       var oImg = new Image();
       oImg.src = imgPath;
       oImg.onload = function(){
           oGc.drawImage( oImg, 0, 0 );
       }
    }
    
    loadImg( './img/mv.jpg' );
    
    oBtn.onclick = function(){
       oGc.restore();
       loadImg( './img/timg.jpg' );
    }

}
