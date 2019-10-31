const trim = require('hy-libs/trim');
// const jsBridge = require('@huayue/js-bridge/hhm/showToast');
const parseQueryString = require('hy-libs/parseQueryString');

const $ = require('./$');

const Injector = require('./injector');

/**
 * 神马搜索注入器
 */
class SmInjector extends Injector {

    constructor() {
        super();
        this.intercept(/sm\.cn\/s\?.*layout=html/i, '#results', '.c-container'); // .sc
        const key = this._parseKeywords();
    }

    onReady() {
        const that = this;
        $(function() {
            if (!that.currentPage) {
                that.inject();
            }
        });
    }

    _queryResultElementList() {
        return $('.sc');
    }

    _parseKeywords() {
        const queryObj = parseQueryString(location.search);
        return decodeURIComponent(queryObj.q || '');
    }

    _parseHost(element) {
        return trim($('.c-header-inner', element).attr('href'));
    }

    _parseHostName(element) {
        return null;
    }

    _parseTitle(element) {
        return element.querySelector('.c-header-title').innerHTML;
        // return domStr.replace(/<\/?.+?>/gi, '')
    }

    _parseAuthorChapterInfo(ele){
        let info = { };
        if (ele.querySelector('a.c-block span:first-of-type')) {
            info['author'] = `作者：${ele.querySelector('a.c-block span:first-of-type').innerText}`;
        }
        if (ele.querySelector('ul.c-chapter-list li:first-child')) {
            info['chapter'] = `最新章节：${ele.querySelector('ul.c-chapter-list li:first-child').innerText}`;
        }
        return info;
    }

    _parseBookInfo() {
        let $ = window.$;

        let query = $('[name=\'q\']').text();
        let author = $(this).find('.c-e-subtitle-item') ? $(this).find('.c-e-subtitle-item').text() : '';

        if (author) {
            author = author.trim();
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

    inject() {
        this.currentPage ++;
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
        this.$bar.update(legalList, list, '神马', key);
        $('.c-container').on('click', this._parseBookInfo);
    }

    _nextPageOnClick() {
        // if ($('#pager').css('display') === 'none') {
        //     this.$bar.hide();
        // } else {
        // if ($('#pager').length) {
        //     scrollTo(getOffsetY($('#pager')[0]));
        // }
        if ($('#pager').length) {
            $('#pager').trigger('click');
        } else {
            this.$bar.listLoadingTextTroggle('listEnd');
            //jsBridge.showToast('已经是最后一页了');
        }
    }
}

module.exports = SmInjector;