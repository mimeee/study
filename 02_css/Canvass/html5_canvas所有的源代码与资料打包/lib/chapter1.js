/**
 * Created by ghostwu(Îâ»ª).
 */
window.onload = function(){
    //var oCanvas = document.querySelector( 'canvas' );
    ////console.log( oCanvas.width, oCanvas.height );
    //oCanvas.setAttribute( 'id', 'myCanvas' );
    //oCanvas.setAttribute( 'width', 800 );
    //oCanvas.setAttribute( 'height', 450 );


   function createCanvas(){
       var oCanvas = document.createElement( 'canvas' );
       oCanvas.setAttribute( 'id', 'myCanvas' );
       oCanvas.setAttribute( 'width', 400 );
       oCanvas.setAttribute( 'height', 400 );
       document.body.appendChild( oCanvas );
   }
   createCanvas();


}
