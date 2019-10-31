// 引入打点
(function (para) {
    var p = para.sdk_url, n = para.name, w = window, d = document, s = 'script', x = null, y = null;
    w.sensorsDataAnalytic201505 = n;
    w[n] = w[n] || function (a) {
        return function () {
            (w[n]._q = w[n]._q || []).push([a, arguments]);
        };
    };
    var ifs = ['track', 'quick', 'register', 'registerPage', 'registerOnce', 'trackSignup', 'trackAbtest', 'setProfile', 'setOnceProfile', 'appendProfile', 'incrementProfile', 'deleteProfile', 'unsetProfile', 'identify', 'login', 'logout', 'trackLink', 'clearAllRegister', 'getAppStatus'];
    for (var i = 0; i < ifs.length; i++) {
        w[n][ifs[i]] = w[n].call(null, ifs[i]);
    }
    if (!w[n]._t) {
        x = d.createElement(s), y = d.getElementsByTagName(s)[0];
        x.async = 1;
        x.src = p;
        x.setAttribute('charset', 'UTF-8');
        y.parentNode.insertBefore(x, y);
        w[n].para = para;
    }
})({
    sdk_url: '//file.ihuayue.cn/static/77949779e5b709e6474043a7fa926b61/sensorsdata.min.js',
    name: 'sa',
    server_url: 'https://bi.sooshu.net:9106/sa?project=hhm_project',
    show_log: false,
    debug_mode: false,
    use_app_track: false,
    use_client_time: false
});
sa.quick('autoTrackWithoutProfile');

module.exports = function (content) {
    try {
        sa.login(sessionStorage.getItem('userInfo'));
    } catch (err) {
        console.log(err);
    }

    sa.track('webButClick', {
        $element_content: content
    });
};