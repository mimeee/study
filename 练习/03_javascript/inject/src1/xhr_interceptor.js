const forEachArray = require('hy-libs/forEachArray');

const on = require('hy-dom/on');

let _XMLHttpRequest;
let interceptorQueue = [];

exports.getInstance = function () {
    if (!_XMLHttpRequest) {
        _XMLHttpRequest = window.XMLHttpRequest;
        window.XMLHttpRequest = function () {
            let xhr = new _XMLHttpRequest();
            on(xhr, 'readystatechange', function () {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    forEachArray(interceptorQueue, function ([url, callback]) {
                        if (url.test(xhr.responseURL)) {
                            callback(xhr);
                        }
                    });
                }
            });
            return xhr;
        };
    }

    return {
        on: function (url, callback) {
            interceptorQueue.push([url, callback]);
        }
    };
};