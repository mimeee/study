const $ = require('./$');
const SoInjector = require('./so_injector');
const BaiduInjector = require('./baidu_injector');
const SogouInjector = require('./sogou_injector');
const SmInjector = require('./sm_injector');
const decodeUS = require('hy-libs/decodeUS');

if (window.WebViewJavascriptBridge) {
    jsbridgeCallback(window.WebViewJavascriptBridge);
} else {
    document.addEventListener('WebViewJavascriptBridgeReady', function () {
        jsbridgeCallback(window.WebViewJavascriptBridge);
    }, false);
}

function jsbridgeCallback(bridge) {
    bridge.callHandler('getUserInfo', {}, (res) => {
        const us = JSON.parse(res).us;
        let userInfo = JSON.parse(res).distinc_id;
        if (us) {
            const [u, s] = us.split(',');
            userInfo = decodeUS(u, s).qid;
        }
        sessionStorage.setItem('userInfo', userInfo);
    });
}

/**
 * 注入器
 */

try {
    if (!window.hhmInjector) {

        const InjectorFactory = {
            create(host) {
                let injector = {
                    initBar: () => {}
                };
        
                if (/so\.com/.test(host)) {
                    injector = new SoInjector();
                } else if (/baidu\.com/.test(host)) {
                    injector = new BaiduInjector();
                } else if (/sogou\.com/.test(host)) {
                    injector = new SogouInjector();
                } else if (/sm\.cn/.test(host)) {
                    injector = new SmInjector();
                }

                return injector;
            }
        };
        window.hhmInjector = InjectorFactory.create(location.host);
    }
    window.hhmInjector.initBar();
} catch (e) {
    console.error(e);
}