const $ = require('./$');
const trim = require('hy-libs/trim');
const parseQueryString = require('hy-libs/parseQueryString');
// const jsBridge = require('@huayue/js-bridge/hhm/showToast');
// const scrollTo = require('./scrollTo');

const Injector = require('./injector');

/**
 * 搜狗搜索注入器
 */
class SogouInjector extends Injector {

    constructor() {
        super();
        this.intercept(/sogou.com\/web\/search\/ajax_query/i, '#resultsWrap', '.results'); //  .vr-topic .JS-extquery
        const key = this._parseKeywords();
        // this.$bar.loadingText(`正从搜狗搜索“${key}”`);
    }

    onReady() {
        console.log('onReady')
        const that = this;
        $(function() {
            if (!that.currentPage) {
                that.inject();
            }
        })
    }

    _queryResultElementList() {
        return $('.vrResult');
    }

    _parseKeywords() {
        const queryObj = parseQueryString(location.search);
        return decodeURIComponent(queryObj.keyword || '');
    }

    _parseHost(element) {
        let $link = $(element).find('a.resultLink');

        if ($link.length) {
            let searchParams = parseQueryString($link[0].search);
            if (searchParams.url) {
                return trim(searchParams.url);
            }
        }

        return trim($('.citeurl', element).text());
    }

    _parseHostName(element) {
        const siteName = $(element).find('.citeurl');
        const moheSite = $(element).find('.part-left');
        const hostName = siteName.length ? siteName.text() : moheSite.text();
        return hostName ? trim(hostName) : hostName;
    }

    _parseUrl(element) {
        let $link = $(element).find('a.resultLink');

        if ($link.length) {
            let searchParams = parseQueryString($link[0].search);
            if (searchParams.url) {
                return trim(searchParams.url);
            } else {
                return trim($link[0].href);
            }
        }

        return '';
    }

    _parseTitle(element) {
        return element.querySelector('.link-sizing') ? element.querySelector('.link-sizing').innerHTML : "";
        // return domStr.replace(/<\/?.+?>/gi, '')
    }

    _parseBookInfo() {
        let $ = window.$;
        let query = document.querySelector('#keyword').value;
        let author = '';//搜狗找不到作者

        let _bookName = '';
        let _author = '';
        if (query) {
            let wordList = query.split(' ');
            if (wordList.length == 2 && wordList[0] && wordList[1]) {
                _bookName = wordList[0];
                if (wordList[1] != '小说' && !author) {
                    _author = wordList[1];
                }
            }
        }
        if (_bookName == '') {
            _bookName = query;
        }

        if (_bookName && _author) {
            window.WebViewJavascriptBridge.callHandler('onBookInfo', JSON.stringify({bookName: _bookName.trim(), author: _author.trim()}));
        }
    }

    inject() {
        this.currentPage ++;
        console.log(this.currentPage);
        super.inject();
    }

    autoTurnPage() {
        const timeId = setTimeout(() => {
            this._nextPageOnClick();
            //jsBridge.showToast(`第${this.currentPage}页无结果，正为您自动翻页`);
            clearTimeout(timeId);
        }, 1000)
    }

    _injectOnclick(legalList, list) {
        const key = this._parseKeywords();
        this.$bar.update(legalList, list, '搜狗', key);
    }

    _nextPageOnClick() {
        // if ($('#ajax_next_page').length) {
        //     scrollTo(getOffsetY($('#ajax_next_page')[0]));
        // }
        const timer = setInterval(function(){
            console.log($('#ajax_next_page')[0])
            if($('#ajax_next_page')[0]){
                $('#ajax_next_page')[0].click();
                clearInterval(timer);
            }
        }, 0);
    }
}

module.exports = SogouInjector;