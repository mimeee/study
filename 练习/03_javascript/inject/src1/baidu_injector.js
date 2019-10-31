const trim = require('hy-libs/trim');
const parseQueryString = require('hy-libs/parseQueryString');
const forEachArray = require('hy-libs/forEachArray');

const jsBridge = require('@huayue/js-bridge/hhm/showToast');
const Injector = require('./injector');

const $ = require('./$');

const track = require('./monitor');

const HistoryIntercaptor = require('./history_interceptor');

/**
 * 百度搜索注入器
 */
class BaiduInjector extends Injector {

    constructor() {
        super();
        this.intercept(/baidu\.com\/s\?/, '#page', '#page-bd'); // .c-result .result .c-clk-recommend
        let _this = this;

        // $('body').on('click', event => {
        //     let $target = $(event.target);

        //     if ($target.closest('.new-firstpage').length ||
        //         $target.closest('.new-prepage').length ||
        //         $target.closest('.new-nextpage').length) {
        //         setTimeout(() => {
        //             _this.inject();
        //         }, 1000);
        //     }
        // });

        // new HistoryIntercaptor({
        //     push: () => {
        //         this.inject();
        //     },
        //     pop: () => {
        //         this.inject();
        //     }
        // });
        const key = this._parseKeywords();
        this.$bar.loadingText(`正从百度搜索“${key}”`, );
    }

    onReady() {
        if ($('#results').length) {
            this.inject();
        } else {
            const that = this;
            $(function () {
                that.inject();
            });
        }
    }

    inject() {
        // this.$bar.hide();
        // this.index = 0; // 百度翻页则重新定位 index
        this.currentPage = this._parsePageNumber();
        console.log(this.currentPage);
        if (/\/s$/.test(location.pathname)) {
            super.initBar();
            super.inject();
        }
        
    }

    _queryResultElementList() {
        return $('.result');
    }

    _parseHost(element) {
        let $element = $(element);

        let match = /'mu'\s*:\s*'([^']+)'/.exec($element.attr('data-log'));
        if (match && match[1]) {
            return trim(match[1]);
        } else {
            return trim($element.find('span.c-showurl').text());
        }
    }

    _parsePageNumber() {
        return (parseQueryString(location.search).pn / 10 || 0) + 1;
    }

    _parseHostName(element) {
        const hostName = $(element).find('span.c-color-gray').text();
        return hostName ? trim(hostName) : hostName;
        // return $(element).find('span.c-color-gray').html().replace(/<\/?.+?>/gi, '');
    }

    _parseUrl(element) {
        let $element = $(element);

        let match = /'mu'\s*:\s*'([^']+)'/.exec($element.attr('data-log'));
        if (match && match[1]) {
            return trim(match[1]);
        }

        return super._parseUrl(element);
    }

    _parseKeywords() {
        const queryObj = parseQueryString(location.search);
        return decodeURIComponent(queryObj.word || queryObj.wd || '');
    }

    _parseTitle(element) {
        return element.querySelector('.c-title-text').innerHTML;
        // return domStr.replace(/<\/?.+?>/gi, '')
    }

    _parseAuthorChapterInfo(ele){
        var info = { };
        if (ele.querySelector('.c-gap-right')) {
            info['author'] = ele.querySelector('.c-gap-right').innerText;
        }
        if (ele.querySelector('[data-a-a8d15b0c]')) {
            info['chapter'] = ele.querySelector('[data-a-a8d15b0c]').innerText;
        }
        if ( info['author'] == undefined || info['chapter'] == undefined) {
            let childs = ele.childNodes;
            function findTextNode(childs,info){
                forEachArray(childs, (e) =>{
                    if (e.nodeType == 3) {
                        if (info['author'] == undefined && e.nodeValue.match(/作者：/)) {
                            info['author'] = e.nodeValue;
                        }
                        if (info['chapter'] == undefined && e.nodeValue.match(/最新章节：/)) {
                            info['chapter'] = e.nodeValue;
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

    /**
     * @override
     * @param element
     */
    _insertLabel(element) {
        $(element).on('click', () => {
            track('hhm_inject_btn_jump_click');
        });
        let $container = $(element).find('.c-container').css({
            position: 'relative'
        });
        this.$label.clone().on('click', () => {
            location.href = this._parseUrl(element);
        }).appendTo($container);
    }

    _nextPageOnClick() {
        if ($('.new-nextpage').length || $('.new-nextpage-only').length) {
            $('.new-nextpage-only').trigger('click');
            $('.new-nextpage').trigger('click');
        } else {
            jsBridge.showToast('已经是最后一页了');
        }
    }

    _prePageOnClick() {
        if ($('.new-prepage').length) {
            $('.new-prepage').trigger('click');
        }
    }

    autoTurnPage() {
        $(() => {
            this._nextPageOnClick();
            jsBridge.showToast(`第${this.currentPage}页无结果，正为您自动翻页`);
        });
    }

    _parseBookInfo() {
        let $ = window.$;
        let query = $('#kw')[0].value;
        let author = $(this).find('.c-gap-right') ? $(this).find('.c-gap-right').text() : '';
        if (author && author.indexOf('作者：') !== -1) {
            author = author.split('作者：')[1];
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
            window.WebViewJavascriptBridge.callHandler('onBookInfo', JSON.stringify({
                bookName: _bookName.trim(),
                author: _author.trim()
            }));
        }
    }

    _injectOnclick(legalList, list) {
        const key = this._parseKeywords();
        this.$bar.update(legalList, list, '百度', key, this.currentPage);
        $('.c-container').on('click', this._parseBookInfo);
    }
}

module.exports = BaiduInjector;