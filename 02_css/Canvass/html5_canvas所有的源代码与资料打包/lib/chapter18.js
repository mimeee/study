/**
 * Created by ghostwu(Îâ»ª).
 */

;(function (window) {
    window.G = {};
    function bindEvent(obj, event, fn) {
        if (obj.attachEvent) { //ie
            obj.attachEvent('on' + event, function () {
                fn.call(obj);
            });
        } else {
            //chrome&ff
            obj.addEventListener(event, fn, false);
        }
    }

    G.getPos = function( dom ){
        var oPos = { x : 0, y : 0 };
        bindEvent( dom, 'mousemove', function( ev ){
            var oEvent = ev || event, x, y;

            if ( oEvent.pageX || oEvent.pageY ){
                x = oEvent.pageX;
                y = oEvent.pageY;
            }else {
                x = oEvent.clientX + document.body.scrollLeft || document.documentElement.scrollLeft;
                y = oEvent.clientY + document.body.scrollTop || document.documentElement.scrollTop;
            }
            x -= dom.offsetLeft;
            y -= dom.offsetTop;

            oPos.x = x;
            oPos.y = y;
        } );
        return oPos;
    };

})(window);