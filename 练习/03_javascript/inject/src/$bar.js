const $ = require('./$');
const catpng = require('./catpng');
const fishpng = require('./fishpng');
const arrowpng = require('./arrowpng');
const closepng = require('./closepng');
const logopng = require('./logopng');
const bellpng = require('./bellpng');
const defaultLoading = require('./defaultLoadingpng');

const track = require('./monitor');
const html = require('./htmlText');

let resultArray = [];


let loadingSrc = defaultLoading;
let bellSrc = bellpng.vest;
let imgWidth = '44px';

try {
    // $appId$ 占位符

    if ($appId$ === 0) {
        bellSrc = bellpng.hhm;
        imgWidth = '83px';
    }

} catch(e) {
    console.error(e);
}

// 小鬼快搜
let bgColor = '#4F91FF';
let fontColor = '#FFFFFF';
try {
    if ($appId$ === 3) {
        bgColor = '#FEE437';
        fontColor = '#000000';
        bellSrc = bellpng.ghost;
    }
} catch(e) {
    console.error(e);
}


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

let shrinkLogoSrc = bellSrc;
let closeIcon = closepng;
let logoSrc = "";

let htmlText = html.html(logoSrc);
let cssText = html.css({barBoxBottom,bgColor,fontColor,imgWidth,loadingSrc,shrinkLogoSrc,closeIcon});
const textNode = document.createTextNode(cssText);
let animStyle = document.createElement('style');
animStyle.type = 'text/css';
animStyle.appendChild(textNode);
document.head.appendChild(animStyle);


let $bar = $(htmlText);
let $logo = $bar.find('[data-tag="logo"]');
let $bottomBox = $bar.find('[data-tag="bottomBox"]');
let $list = $bar.find('[data-tag="list"]');
let $itemBox = $bar.find('[data-tag="itemBox"]');
let $totalResult = $bar.find('[data-tag="totalResult"]');
let $keepLoadding = $bar.find('[data-tag="keepLoadding"]');
let $listLoadding = $bar.find('[data-tag="listLoadding"]');
let $loading = $bar.find('[data-tag="loading"]');
let $shrinkBox = $bar.find('[data-tag="shrinkBox"]');
let $shinkLogo = $shrinkBox.find('[data-tag="shinkLogo"]');
let $shrinkText = $shrinkBox.find('[data-tag="shrinkText"]');
let $content = $bar.find('[data-tag="content"]');
let $extendBox = $bar.find('[data-tag="extendBox"]');
let $barBox = $bar.find('[data-tag="barBox"]');
let $loadingText = $bar.find("[data-tag='loadingText']");
let $titleText = $bar.find("[data-tag='titleText']");
let $slideLoading = $bar.find("[data-tag='slide-loading']");
let $listEnd = $bar.find("[data-tag='listEnd']");
let $noResultClick = $bar.find('[data-tag="noResultClick"]');
let $closeIcon = $bar.find('[data-tag="closeIcon"]');

$bar.on('click', panelToggle);
$barBox.on('click', (event) => {
    event.stopPropagation();
});

$bar.noResultClick = function(listener) {
    $noResultClick.on('click',function(){
        console.log('搜索');
        $slideLoading.addClass('h-hide');
        $loading.removeClass('h-hide');
        $shinkLogo.addClass('h-hide');
        $shrinkText.text("正在寻找相关可净化结果");
        listener();
    });
}


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

$barBox.on("webkitTransitionEnd", function(){
    $closeIcon.css({
        'animation' : 'hhm-opacity 0.5s 1',
        'animation-fill-mode': 'forwards'
    })
});

// 收起打开面板按钮事件
function panelToggle(event) {
    let flag = $('[data-tag="content"]').hasClass('h-hide');
    if(flag){
        $barBox.css({
            'border-radius': '4px',
            'max-height': '1000px',
            transition: 'max-height 0.3s linear,border-radius 0.3 linear',
            '-webkit-transition': 'max-height 0.3s linear 0.3s, background 0.5s',
        });
        $content.removeClass('h-hide');
        $extendBox.removeClass('h-hide');
        $shrinkBox.addClass('h-hide');
        $bar.css({
            top: '0',
            background: 'rgba(0, 0, 0, .2)',
            'border-radius': '0'
        });
        $shrinkBox.css({opacity: 0.8})

        ModalHelper.afterOpen();
    }else{
        $content.addClass('h-hide');
        $extendBox.addClass('h-hide');
        $shrinkBox.removeClass('h-hide');
        $barBox.css({
            'border-radius': '20px 20px 4px 4px',
            'max-height': '48px',
            transition: 'max-height 0.3s linear,border-radius 0.3 linear',
            '-webkit-transition': 'max-height 0.3s linear, background 0.2s linear 0.4s',
        });
        $bar.css({
            top: 'auto',
            background: 'transparent',
        });
        $shrinkBox.css({opacity: 1})

        ModalHelper.beforeClose();
    }
}


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

let firstUpdate = true;
let updateCount = -1;
// 更新搜索结果
$bar.update = function (legalList, list, name, key, currentPage) {
    console.log('update dom', list);
    console.log('更新条目');
    // 百度每次加载下一页重置了body样式
    // if (!$toggleBtn.hasClass('hide')) {
    //     $('body').css({
    //         position: 'fixed'i,
    //         top: 0 + document.body.style.top,
    //         left: 0,
    //         right: 0
    //     });
    // }
    // 对于baidu的inject
    if(name === '百度') {
        if(sessionStorage.getItem('baiduUpdateList')){
            if(JSON.parse(sessionStorage.getItem('baiduPage')).indexOf(currentPage) === -1){
                list = list.concat(JSON.parse(sessionStorage.getItem('baiduUpdateList')));
                sessionStorage.setItem('baiduUpdateList', JSON.stringify(list));
            }else{
                list = JSON.parse(sessionStorage.getItem('baiduUpdateList'));
            }
        }else{
            sessionStorage.setItem('baiduUpdateList', JSON.stringify(list));
        }
    }

    // $itemBox[0].innerHTML = '';

    // 渲染标题logo
    renderLogo(name);
    // 修改标题文本
    $bar.titleText(list.length, name, key);
    $totalResult.html('当前共<font color="'+ bgColor +'" style="font-weight: bold;">' + list.length + '</font>条结果');

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

        list.forEach((ele, index)=> {
            if(updateCount < index){updateCount = index}else{return false};
            // let wrap = $itemWrap.clone().on('click', function (event) {
            //     $(ele.element).find('a')[0].click();
            // }).appendTo($itemBox);
            // let body = $itemBody.clone().appendTo(wrap);
            console.log(ele);
            var l = {
                title: ele.title,
                author: ele.author || '作者：未知',
                chapter: ele.chapter || '最新章节：未知',
                site: ele.hostName || ele.host.match(/https?:\/\/.*?\//)
            }
            var listText = html.listItem(l);
            var item = $(listText).attr('data-hostUrl',ele.host);
            item.on('click', function (event) {
                // $(ele.element).find('a')[0].click();
                console.log('data-hostUrl: ', $(this).attr('data-hostUrl'));
                location.href = $(this).attr('data-hostUrl');
            })
            $itemBox.append(item);

        });
        secondShrink('查看精准搜索结果');
        $noResultClick.css('display','none');
        if(firstUpdate){
            firstUpdate = false;
            $bottomBox.on('click',panelToggle);
            panelToggle();
        }else{
            listLoadingTextTroggle('keepLoadding');
        }
    } else {
        if(firstUpdate){
            $noResultClick.css('display','block');
            secondShrink('暂无结果,点击继续搜索');
        }
    }

};

$bar.touch = {
    start: {x:0, y:0},
    move:  {x:0, y:0},
    end:   {x:0, y:0},
    offset: 0,
    loadding: false
}


$list.on('scroll',function(events){
    $bar.touch.loadding = false;
    if(event.target.scrollHeight == (events.target.scrollTop + events.target.offsetHeight)){
        $bar.touch.loadding = true;
    }

})

$list.on("touchstart", function(event){
    $bar.touch.start.x  = event.touches[0].clientX;
    $bar.touch.start.y  = event.touches[0].clientY;
    $bar.touch.offset = this.scrollHeight - this.offsetHeight - this.scrollTop;
})

$list.on("touchmove", function(event){
    if(this.scrollTop >= this.scrollHeight - this.offsetHeight - 3 ){
        $itemBox.css({
            transform: 'translateY('+  (event.touches[0].clientY - $bar.touch.start.y + $bar.touch.offset) +'px)'
        })
        $bar.touch.loadding = true;
    }
    $bar.touch.move.x  = event.touches[0].clientX;
    $bar.touch.move.y  = event.touches[0].clientY;
    // console.log(touch)
})


$bar.touchend = function (listener) {
    $list.on('touchend', () => {
        $itemBox.css({
           transform: 'translateY(0px)'
        })
        $bar.touch.start.x  = 0;
        $bar.touch.start.y  = 0;
        $bar.touch.move.x  = 0;
        $bar.touch.move.y  = 0;

        if($bar.touch.loadding){
            listLoadingTextTroggle('listLoadding');
            listener();
            $bar.touch.loadding = false;
            track('hhm_inject_btn_next_click');
        }
    });
    return $bar;
};

$bar.itemClick = function (listener) {
    $button.on('click', listener);
    return $bar;
};



function secondShrink(str){
    //'查看精准搜索结果' : '未搜索到结果，试试其他搜索引擎'; "暂无结果,点击继续搜索"
    $slideLoading.removeClass('h-hide');
    $loading.addClass('h-hide');
    $shinkLogo.removeClass('h-hide');
    $shrinkText.text(str);
}

$bar.secondShrink = function (str){
    //'查看精准搜索结果' : '未搜索到结果，试试其他搜索引擎'; "暂无结果,点击继续搜索"
    $slideLoading.removeClass('h-hide');
    $loading.addClass('h-hide');
    $shinkLogo.removeClass('h-hide');
    $shrinkText.text(str);
}

function listLoadingTextTroggle(str){
    switch(str){
        case 'listLoadding':
            $listLoadding.removeClass('h-hide');
            $keepLoadding.addClass('h-hide');
            $listEnd.addClass('h-hide');
        break;
        case 'keepLoadding':
            $listLoadding.addClass('h-hide');
            $keepLoadding.removeClass('h-hide');
            $listEnd.addClass('h-hide');
        break;
        case 'listEnd':
            $listLoadding.addClass('h-hide');
            $keepLoadding.addClass('h-hide');
            $listEnd.removeClass('h-hide');
        break;

    }

}


function setListForBaidu(list) {
    sessionStorage.setItem('baiduThirdParty',JSON.stringify(list));
}
function getListForBaidu() {
    sessionStorage.getItem('')
}



module.exports = $bar;
