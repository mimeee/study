const now = require('hy-libs/now');

let lock = false;

if (!requestAnimationFrame) {
    requestAnimationFrame = function (callback) {
        setTimeout(callback, 16);
    };
}

module.exports = function (y, duration, callback = () => {/**/}) {
    if (lock) {
        return;
    }

    let startY = window.scrollY;
    let startTime = now();

    // y = k * log2(x + 1)
    let k = (y - startY) / Math.log2(duration + 1);

    lock = true;

    requestAnimationFrame(function fn() {
        let distX = now() - startTime;

        if (distX < duration) {
            let distY = k * Math.log2(distX + 1);
            scrollTo(0, startY + distY);
            requestAnimationFrame(fn);
        } else {
            scrollTo(0, y);
            lock = false;
            callback();
        }
    });
};