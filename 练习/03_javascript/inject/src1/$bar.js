const $ = require('./$');
const catpng = require('./catpng');
const fishpng = require('./fishpng');
const arrowpng = require('./arrowpng');
const closepng = require('./closepng');
const whiteArrowpng = require('./whiteArrowpng');
const blackArrowpng = require('./blackArrowpng');
const logopng = require('./logopng');
const bellpng = require('./bellpng');
const defaultLoading = require('./defaultLoadingpng');

const track = require('./monitor');
const cssText = require('./cssText');

let resultArray = [];

const textNode = document.createTextNode(cssText);
let animStyle = document.createElement('style');
animStyle.type = 'text/css';
animStyle.appendChild(textNode);
document.head.appendChild(animStyle);

let fishBg = defaultLoading;
let bellSrc = bellpng.vest;
let imgWidth = '44px';
let Arrowpng = whiteArrowpng;

try {
    // $appId$ 占位符

    if ($appId$ === 0) {
        fishBg = fishpng;
        bellSrc = bellpng.hhm;
        imgWidth = '83px';
    }

} catch(e) {
    console.error(e);
}

// 小鬼快搜
let bgColor = '#4F91FF';    
let fontColor = '#FFFFFF';  
let arrowWidth = '26px';    
let arrowHeight = '26px';
let arrowPadding = '0px';   
let arrowTop = '0px';
try {
    if ($appId$ === 3) {
        bgColor = '#FEE437';
        fontColor = '#000000';
        bellSrc = bellpng.ghost;
        Arrowpng = blackArrowpng;
        arrowWidth = '15px';
        arrowHeight = '9px';
        arrowPadding = '15px';
        arrowTop = '8px';
    }
} catch(e) {
    console.error(e);
}

// 工具条
let $bar = $('<div class="hhm-bar">').css({
    position: 'fixed',
    top: '0',
    bottom: '0',
    left: '0',
    right: '0',
    background: 'rgba(0, 0, 0, .2)',
    'z-index': 9998,
    'box-sizing': 'border-box',
    color: '#0cc',
    transition: 'background 0.5s linear',
    '-webkit-transition': 'background 0.5s linear',
});

$bar.on('click', panelToggle);

let barBoxBottom = '10px';
try {
    // $versionName$ 占位符
    if ($versionName$.charAt(0) == 0 && 
        $versionName$.charAt(2) < 8 || 
        $versionName$.charAt(2) == 7 && 
        $versionName$.charAt(4) < 4) {
        barBoxBottom= '52px';
    }
        // $bar.attr('versionname',$versionName$);
        // $bar.attr('appId',$appId$);
} catch(e) {

    console.error(e);
}

let $barBox = $('<div>').css({
    position: 'absolute',
    bottom: barBoxBottom,
    left: '10px',
    right: '10px',
    'border-radius': '4px',
    background: '#fff',
    'z-index': 9999,
    'box-sizing': 'border-box',
    'box-shadow': '0 2px 4px rgba(0, 0, 0, 0.18)',
    overflow: 'hidden',
    transition: 'max-height 0.3s ease, background 0.2s 0.3s',
    '-webkit-transition': 'max-height 0.3s ease, background 0.2s 0.3s',
}).appendTo($bar);

$barBox.on('click', (event) => {
    event.stopPropagation();
});

// 面板收起开关
let $toggleBtn = $('<div>').css({
    position: 'relative',
    display: 'flex',
    'justify-content': 'center',
    'align-items': 'center',
    padding: '4px 0 10px'
}).appendTo($barBox);

let $bell = $('<img>').css({
    width: '18px',
    height: '18px',
    display: 'none',
}).attr('src', bellSrc).appendTo($toggleBtn);


let $btnText = $('<span>').css({
    display: 'none',
    'line-height': 'normal',
    'font-size': '11px',
    color: fontColor,
    'font-weight': 'bold',
    'padding': '0 6px',
}).text('展开精准搜索结果').appendTo($toggleBtn);

let $arrow = $('<img>').css({
    position: 'relative',
    'padding-right': '0px',
    width: '26px',
    height: '26px',
    transform: 'rotate(0)',
    transition: 'all 0.3s ease 0',
    '-webkit-transition': 'all 0.3s ease 0',
}).attr('src', arrowpng).appendTo($toggleBtn);

// 内容区域
let $content = $('<div>').css({
    display: 'none',
    position: 'relative',
}).appendTo($barBox);

// loading动画
let $loadingBox = $('<div>').css({
    position: 'relative',
    padding: '20px 0 50px'
}).appendTo($barBox);

let $loading = $('<div>').css({
    position: 'relative',
    width: imgWidth,
    height: imgWidth,
    margin: '0 auto',
}).appendTo($loadingBox);

let $fish = $('<div>').css({
    position: 'relative',
    width: imgWidth,
    height: imgWidth,
    animation: 'hhm-loading 1.2s linear infinite',
    'background-image': `url(${fishBg})`,
    'background-size': '100%',
    'background-repeat': 'no-repeat'
}).appendTo($loading);

let $cat = $('<div>').css({
    position: 'absolute',
    width: '80px',
    height: '80px',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    'background-image': `url(${catpng})`,
    'background-size': '100%',
    'background-repeat': 'no-repeat'
});
try {
    if ($appId$ === 0) {
        $cat.appendTo($loading);
    }
} catch(e) {
    console.error(e);
}


let $loadingText = $('<div>').css({
    'padding-top': '5px',
    'font-size': '11px',
    color: '#C1C1C1',
    'line-height': '16px',
    'text-align': 'center'
}).appendTo($loadingBox);

// 标题元素
let $title = $('<div>').css({
    display: 'flex',
    'align-items': 'flex-start',
    'text-align': 'left',
    'padding': '0px 20px',
}).appendTo($content);

let $totalResult = $('<div>').css({
    'line-height': '14px',
    'font-size': '12px',
    'text-align': 'left',
    color: '#353538',
    padding: '8px 42px 6px',
}).appendTo($content);

let $logo = $('<img>').css({
    width: '16px',
    height: '16px',
    'margin-right': '6px',
}).appendTo($title);

let $titleText = $('<div>').css({
    display: 'inline-block',
    'line-height': '16px',
    'font-size': '15px',
    color: '#353538',
    'font-weight': 'bold',
}).appendTo($title);

// 搜索结果列表
let $list = $('<div>').css({
    'font-size': '13px',
    'max-height': '300px',
    'font-size': '11px',
    color: '#53535F',
    'text-align': 'left',
    'overflow-y': 'scroll',
    '-webkit-overflow-scrolling': 'touch',
}).attr('class', 'hhm-bar-list').appendTo($content);

let $itemBox = $('<div>').appendTo($list);

// 搜索结果条目
let $itemWrap = $('<div class="hhm-bar-item">').css({
    padding: '16px 12px',
    background: '#fff',
    'box-shadow': '0 0 4px rgba(0, 0, 0, 0.1)',
    color: '#353538',
    'margin': '4px 20px 14px',
    'text-decoration': 'none',
    'border-radius': '4px',
});

let $itemBody = $('<div>').css({
    display: 'flex',
});

// 结果标题
let $itemTitle = $('<div>').css({
    flex: 1,
    'font-size': '12px',
    color: '#232300',
    'font-weight': 'bold',
    'line-height': '17px',
    'margin-bottom': '8px',
    display: '-webkit-box',
    'text-align': 'left',
    '-webkit-line-clamp': 1,
    '-webkit-box-orient': 'vertical',
    overflow: 'hidden',
    'text-overflow': 'ellipsis',
});

let $itemAuthor = $('<div>').css({
    display: '-webkit-box',
    'font-size': '10px',
    color: '#53535F',
    'text-align': 'left',
    'line-height': 'normal',
    '-webkit-line-clamp': 1,
    '-webkit-box-orient': 'vertical',
    overflow: 'hidden',
    'text-overflow': 'ellipsis',
    'margin-bottom': '4px'
});

let $itemChapter = $('<div>').css({
    display: '-webkit-box',
    'font-size': '10px',
    color: '#53535F',
    'text-align': 'left',
    'line-height': 'normal',
    '-webkit-line-clamp': 1,
    '-webkit-box-orient': 'vertical',
    overflow: 'hidden',
    'text-overflow': 'ellipsis',
    'margin-bottom': '4px'
});

let $itemSite = $('<div>').css({
    display: '-webkit-box',
    'font-size': '8px',
    color: '#c1c1c1',
    'text-align': 'left',
    'line-height': 'normal',
    '-webkit-line-clamp': 1,
    '-webkit-box-orient': 'vertical',
    overflow: 'hidden',
    'text-overflow': 'ellipsis',
});

let $itemLabel = $('<div>').css({
    position: 'relative',
    display: 'inline-block',
});

//搜索结果条目的可淨化标签
let $label = $('<div>').css({
    display: '-webkit-box',
    '-webkit-line-clamp': 1,
    '-webkit-box-orient': 'vertical',
    position: 'relative',
    top: '-8px',
    right: '-14px',
    'font-size': '8px',
    color: fontColor,
    background: bgColor,
    'line-height': '9px',
    'border-radius': '8px 2px 2px 8px',
    'font-weight': 'bold',
    'text-align': 'center',
    padding: '3px 6px 3px 8px',
}).text('可净化').appendTo($itemLabel);

let $btnGroup = $('<div>').css({
    position: 'relative',
    display: 'flex',
    'margin': '10px 20px 20px',
}).appendTo($list);

// 下一页按钮
let $nextBtn = $('<div>').css({
    position: 'relative',
    flex: '1',
    'line-height': '16px',
    height: '16px',
    background: bgColor,
    'border-radius': '100px',
    'font-size': '12px',
    color: fontColor,
    'text-align': 'center',
    padding: '8px 0',
    margin: '0 10px'
}).attr('class', 'hhm-btn-active').text('下一页').appendTo($btnGroup);

let $preBtn = $nextBtn.clone().css({
    background: bgColor,
    color: fontColor,
}).text('上一页').attr('class', 'hhm-btn-pre hhm-btn-active');

let $btnLoading = $('<div>').css({
    display: 'none',
    position: 'absolute',
    display: 'none',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    background: '#F3F3F3',
    'border-radius': '100px',
}).appendTo($btnGroup);

let $btnCircle = $('<div class="hhm-btn-circle">').css({
    position: 'absolute',
    top: 'calc(50% - 10px)',
    left: 'calc(50% - 10px)',
    display: 'inline-block',
    width: '16px',
    height: '16px',
    'border': '2px solid #4F91FF',
    'border-radius': '50%',
    animation: 'hhm-btn-loading 1.2s linear infinite'
}).appendTo($btnLoading);

let $closeBtnLoading = $('<div>').css({
    position: 'absolute',
    top: '50%',
    right: '10px',
    transform: 'translateY(-50%)',
    width: '20px',
    height: '20px',
    'background': `url(${closepng}) no-repeat center`,
    'background-size': '16px 16px'
}).appendTo($btnLoading);

var ModalHelper = (function () {
    var scrollTop;
    return {
        afterOpen: function () {
            scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
            $('body').css({
                position: 'fixed',
                left: 0,
                right: 0,
                top: -scrollTop + 'px'
            });
        },
        beforeClose: function () {
            $('body').css({
                position: 'unset',
                top: 'unset',
                left: 'unset',
                right: 'unset',
            });
            document.scrollingElement.scrollTop = scrollTop;
        }
    };
})();

// 收起打开面板按钮事件
function panelToggle(event) {
    if ($toggleBtn.hasClass('hide')) {
        $arrow.css({
            transform: 'rotate(0)',
            width: '26px',
            height: '26px',
            top: '0px',
            paddingTop: '0px'
        }).attr('src', arrowpng);
        $btnText.css({
            display: 'none',
        });
        $bar.css({
            top: '0',
            background: 'rgba(0, 0, 0, .2)',
            'border-radius': '0'
        });

        $barBox.css({
            'max-height': '1000px',
            background: '#fff',
            transition: 'max-height 0.3s linear 0.3s, background 0.5s linear',
            '-webkit-transition': 'max-height 0.3s linear 0.3s, background 0.5s',
        });

        ModalHelper.afterOpen();

        $bell.css({
            display: 'none',
        });

    } else {
        $arrow.css({
            transform: 'rotate(180deg)',
            width: arrowWidth,
            height: arrowHeight,
            paddingTop: arrowPadding,
            top: arrowTop
        }).attr('src', Arrowpng);
        $btnText.css({
            display: 'inline-block',
        });

        $bar.css({
            top: 'auto',
            background: 'transparent',
        });

        $bell.css({
            display: 'inline',
        });

        $barBox.css({
            'max-height': '34px',
            background: bgColor,
            transition: 'max-height 0.3s linear, background 0.5s linear 0.4s',
            '-webkit-transition': 'max-height 0.3s linear, background 0.2s linear 0.4s',
        });
        ModalHelper.beforeClose();
    }
    $toggleBtn.toggleClass('hide');
}
$toggleBtn.on('click', panelToggle);

$itemLabel.labelText = function (text) {
    $label.text(text);
    return this;
};

// 加载中文本
$bar.loadingText = function (text) {
    $loadingText.text(text);
};

// 替换标题文本
$bar.titleText = function (hasResult, name, key) {
    let text = `无"${key}"相关结果`;
    if (hasResult) {
        text = `"${key}"相关网站`;
    }
    $titleText.text(text);
    return $title;
};

function renderLogo(name) {
    switch (name) {
        case '神马':
            $logo.attr('src', logopng.smlogo);
            break;
        case '360':
            $logo.attr('src', logopng.sologo);
            break;
        case '百度':
            $logo.attr('src', logopng.baidulogo);
            break;
        case '搜狗':
            $logo.attr('src', logopng.sogoulogo);
            break;
        default:
    }
}

// 更新搜索结果
$bar.update = function (legalList, list, name, key, currentPage) {
    console.log('update dom', list);
    console.log('更新条目');
    // 百度每次加载下一页重置了body样式
    if (!$toggleBtn.hasClass('hide')) {
        $('body').css({
            position: 'fixed',
            top: 0 + document.body.style.top,
            left: 0,
            right: 0
        });
    }

    $itemBox[0].innerHTML = '';

    // 渲染标题logo
    renderLogo(name);
    // 修改标题文本
    $bar.titleText(list.length, name, key);
    $totalResult.html('共<font color="'+ bgColor +'" style="font-weight: bold;">' + list.length + '</font>个站点');
    //  || legalList.length
    if (list.length) {
        // legalList.forEach(ele => {
        //     let wrap = $itemWrap.clone().attr('href', ele.host).on('click', fn).appendTo($itemBox);
        //     let body = $itemBody.clone().appendTo(wrap);
        //     $itemLabel.clone().css({
        //         background: '#AFCDFF',
        //     }).labelText('正版付费').appendTo(wrap);

        //     $itemTitle.clone().html(ele.title).appendTo(body);
        //     $itemSite.clone().text(ele.hostName || ele.host).appendTo(body);
        // })
        list.forEach(ele => {
            let wrap = $itemWrap.clone().on('click', function (event) {
                $(ele.element).find('a')[0].click();
            }).appendTo($itemBox);
            let body = $itemBody.clone().appendTo(wrap);

            $itemTitle.clone().html(ele.title).appendTo(body);
            $itemLabel.clone().appendTo(body);

            $itemAuthor.clone().text(ele.author || '作者：未知').appendTo(wrap);
            $itemChapter.clone().text(ele.chapter || '最新章节：未知').appendTo(wrap);
            $itemSite.clone().text(ele.hostName || ele.host.match(/https?:\/\/.*?\//)).appendTo(wrap);
        });
    } else {
        $itemBox.append($('<div>').css({
            margin: '10px 20px 22px'
        }).html('点击<font color="'+bgColor+'">下一页</font>会有更多结果哟~'));
    }

    if (name === '百度' && currentPage !== 1) {
        if (!$btnGroup.find('.hhm-btn-pre').length) {
            $btnGroup[0].insertBefore($preBtn[0], $btnGroup[0].childNodes[0]);
        }
    } else {
        $btnGroup.remove($preBtn);
    }
    // $btnLoading.css({
    //     display: 'none'
    // });
    // } else {
    //     $btnLoading.css({
    //         display: 'block'
    //     });
    // }
    $btnLoading.css({
        display: 'none'
    });

    if ($barBox.find($loadingBox).length) {
        $barBox.remove($loadingBox);
    }

    $content.css({
        display: 'block',
    });
};

$bar.btnClick = function (listener) {
    $button.on('click', listener);
    return $bar;
};

$bar.itemClick = function (listener) {
    $button.on('click', listener);
    return $bar;
};

$bar.nextClick = function (listener) {
    $nextBtn.on('click', () => {

        $btnLoading.css({
            display: 'block'
        });
        listener();
        track('hhm_inject_btn_next_click');
    });
    return $bar;
};

$bar.preClick = function (listener) {
    $preBtn.on('click', () => {
        $btnLoading.css({
            display: 'block'
        });
        listener();
        track('hhm_inject_btn_pre_click');
    });
    return $bar;
};

$closeBtnLoading.on('click', () => {
    $btnLoading.css({
        display: 'none'
    });
});

module.exports = $bar;
