const $ = require('./$');
const parseQueryString = require('hy-libs/parseQueryString');
const trim = require('hy-libs/trim');
const forEachArray = require('hy-libs/forEachArray');
// const jsBridge = require('@huayue/js-bridge/hhm/showToast');
const scrollTo = require('./scrollTo');

const Injector = require('./injector');


/**
 * 360搜索注入器
 */
class SoInjector extends Injector {

    constructor() {
        super();
        this.intercept(/m\.so\.com\/nextpage/, '.r-results', '.res-list'); // .g-card .og
        // const key = this._parseKeywords();
        // this.$bar.loadingText(`正从360搜索“${key}”`);
    }

    onReady() {
        console.log('onReady');
        const that = this;
        $(function() {
            if (!that.currentPage) {
                that.inject();
            }
        })
    }

    _queryResultElementList() {
        return $('.res-list');
    }

    _parseKeywords() {
        const queryObj = parseQueryString(location.search);
        return decodeURIComponent(queryObj.q || '');
    }

    _parseHost(element) {
        let $link = $(element).find('.alink');
        if ($link.length) {
            let searchParams = parseQueryString($link[0].search);
            if (searchParams.u) {
                return trim(searchParams.u);
            }
        }

        return trim($('.res-site-url', element).text());
    }

    _parseHostName(element) {
        const siteName = $(element).find('.res-site-name');
        const moheSite = $(element).find('.mohe-site');
        const hostName = siteName.length ? siteName.text() : moheSite.text();
        return hostName ? trim(hostName) : hostName;
    }

    _parseUrl(element) {
        let $link = $(element).find('.alink');
        if ($link.length) {
            let searchParams = parseQueryString($link[0].search);
            if (searchParams.u) {
                return trim(searchParams.u);
            }
        }

        return super._parseUrl(element);
    }

    _parseTitle(element) {
        return element.querySelector('.res-title').innerHTML;
        // return domStr.replace(/<\/?.+?>/gi, '')
    }

    _parseAuthorChapterInfo(ele){
        let info = { };
        if (ele.querySelector('.res-con .info span:nth-child(2)')) {
            info['author'] = ele.querySelector('.res-con .info span:nth-child(2)').innerText;
        }
        if (ele.querySelector('.res-con .latest')) {
            info['chapter'] = ele.querySelector('.res-con .latest').innerText;
        }
        if (info['chapter'] == '' && ele.querySelector('.mohe-cont li.mh-items:first-child .mh-text')){
            info['chapter'] = ele.querySelector('.mohe-cont li.mh-items:first-child .mh-text').innerText;
        }
        if ( info['author'] == undefined || info['chapter'] == undefined) {
            let childs = ele.childNodes;
            function findTextNode(childs,info){
                forEachArray(childs, (e)=>{
                    if (e.nodeType == 3) {
                        if (info['author'] == undefined && e.nodeValue.match(/作者:/)) {
                            info['author'] = e.nodeValue.match(/作者:\S+ /) || e.nodeValue;
                        }
                        if (info['chapter'] == undefined && e.nodeValue.match(/最新:/)) {
                            info['chapter'] = `最新：${e.parentElement.nextElementSibling.innerText}`;
                        }
                    }
                    if(e.childNodes){
                        findTextNode(e.childNodes,info);
                    }
                });
            }
            findTextNode(childs,info);
        }
        return info;
    }

    _parseBookInfo() {
        let $ = window.$;
        let query = $('#q')[0].value;
        let author = $(this).find('.info') ? $(this).find('.info').text() : '';

        if (author && author.indexOf('作者:') !== -1) {
            author = author.split('作者:')[1].trim();
            author = author.split(' ')[0].trim();
        }

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
        if (_author == '') {
            _author = author;
        }
        if (_bookName && _author) {
            window.WebViewJavascriptBridge.callHandler('onBookInfo', JSON.stringify({bookName: _bookName.trim(), author: _author.trim()}));
        }
    }

    autoTurnPage() {
        const timeId = setTimeout(() => {
            this._nextPageOnClick();
            //jsBridge.showToast(`第${this.currentPage}页无结果，正为您自动翻页`);
            clearTimeout(timeId);
        }, 1000)
    }

    inject() {
        this.currentPage ++;
        console.log(this.currentPage);
        super.inject();
    }

    _injectOnclick(legalList, list) {
        const key = this._parseKeywords();
        this.$bar.update(legalList, list, '360', key);
        $('.g-card').on('click', this._parseBookInfo);
    }

    _nextPageOnClick() {
        if ($('.load-more').length) {
            $('.load-more').trigger('click');
        } else {
            // jsBridge.showToast('已经是最后一页了');
             this.$bar.listLoadingTextTroggle('listEnd');
        }
    }
}

module.exports = SoInjector;