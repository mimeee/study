/**
 * History 拦截器
 * 解决百度进入某些结果时，使用 replaceState 或 pushState 改变 URL，但页面并不发生跳转
 *
 * case: 百度-轮回乐园-www.booktxt.net
 */
const EventEmitter = require('events').EventEmitter;

const isFunction = require('hy-libs/isFunction');

let event = new EventEmitter();
let _replaceState;
let _pushState;

class HistoryInterceptor {

    static getInstance() {
        if (HistoryInterceptor._instance) {
            HistoryInterceptor._instance = new HistoryInterceptor();
        }
        return HistoryInterceptor._instance;
    }

    constructor(options) {
        if (!_replaceState) {
            _replaceState = history.replaceState;
            _pushState = history.pushState;

            history.replaceState = function () {
                _replaceState.apply(history, arguments);
                event.emit('replace');
            };

            history.pushState = function () {
                _pushState.apply(history, arguments);
                event.emit('push');
            };

            window.addEventListener('popstate', function () {
                event.emit('pop');
            });
        }

        if (isFunction(options.replace)) {
            event.on('replace', options.replace);
        }
        if (isFunction(options.push)) {
            event.on('push', options.push);
        }
        if (isFunction(options.pop)) {
            event.on('pop', options.push);
        }

        this._options = options;
    }

    destory() {
        event.removeEventListener('push', this._options.push);
        event.removeEventListener('replace', this._options.replace);
        event.removeEventListener('pop', this._options.pop);
    }
}

module.exports = HistoryInterceptor;