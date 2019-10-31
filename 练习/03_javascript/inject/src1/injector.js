const LABEL_CLASS_NAME = 'hhm-label';

const isString = require('hy-libs/isString');
const some = require('hy-libs/some');
const map = require('hy-libs/map');
const forEachArray = require('hy-libs/forEachArray');
const trim = require('hy-libs/trim');
const $ = require('./$');
const XHRInterceptor = require('./xhr_interceptor');
const track = require('./monitor');

const OFFSET_Y = 120; // 保证展示结果不被 bar 挡住

// let scrollTimer;

// const scrollTo = require('./scrollTo');
// const hostList = require('./host-list');
// const findIndex = require('hy-libs/findIndex');

/**
 * 注入器
 */
class Injector {

    constructor() {
        this.version = '0.8';

        this.currentPage = 0;

        this.isFristIneject = true;

        this.autoPageTurning = true;

        this.wapHostList = map(window.WAP_HOST_LIST || [], host => new RegExp(host.replace(/\./g, '\\.')));

        this.legalWapHostList = map(['book.zongheng.com', 'book.qidian.com', 'www.jjwxc.net', 'www.jingyu.com'], host => new RegExp(host.replace(/\./g, '\\.')));

        this.$label = require('./$label');

        this.$labelList = $(`.${LABEL_CLASS_NAME}`);

        // 插入 bar
        this.$bar = require('./$bar');
        this.$bar.nextClick(this._nextPageOnClick);
        this.$bar.preClick(this._prePageOnClick);

        // this.$bar.on('click', () => {
        //     if (this.$labelList.length === 0) {
        //         this._nextPageOnClick();
        //     } else {
        //         track('hhm_inject_btn_next_click');
        //         this.scrollToNext();
        //     }
        // });

        // this.scrollToNext = () => {
        //     let index = (this.index % this.$labelList.length) + 1;
        //     let y = this.getLabelScrollY(index - 1);

        //     scrollTo(y, 150, () => {
        //         this.index = index ? index : this.index;
        //         // this.$bar.text(this.index, this.$labelList.length);
        //     });
        // };

        let self = this;

        // 榜单滚动事件
        // $(window).on('scroll', () => {
        //     // 节流
        //     if (!scrollTimer) {
        //         scrollTimer = setTimeout(() => {
        //             let scrollY = window.scrollY;
        //             self.index = findIndex(this.$labelList, (value, index, array) => {
        //                 let thisY = this.getLabelScrollY(index);
        //                 let nextY = this.getLabelScrollY(index + 1) || Infinity;

        //                 return scrollY >= thisY && scrollY < nextY;
        //             }) + 1;
        //             // self.$bar.text(self.index, self.$labelList.length);
        //             scrollTimer = null;
        //         }, 300);
        //     }
        // });
    }

    /**
     * 首次净化结果
     */
    onReady() {

    }

    /**
     * 获取搜索结果元素列表
     * @returns {Array}
     * @protected
     */
    _queryResultElementList() {
        return [];
    }

    /**
     * 从搜索结果中解析出 Host
     * @param element
     * @returns {string}
     * @protected
     */
    _parseHost(element) {
        return trim($(element).find('a')[0].href);
    }

    /**
     * 解析网站名称
     * @param {*} element
     * @returns { string }
     */
    _parseHostName(element) {
    }

    /**
     * 从搜索结果中解析出 Url
     * @param element
     * @returns {string}
     * @protected
     */
    _parseUrl(element) {
        return trim($(element).find('a')[0].href);
    }

    /**
     * 解析页码
     */
    _parsePageNumber() {

    }

    /**
     * 插入标签
     * @param element
     * @protected
     */
    _insertLabel(element) {
        // 元素添加打点计数
        $(element).on('click', () => {
            track('hhm_inject_btn_jump_click');
        });
        let $element = $(element).css({
            position: 'relative'
        });
        this.$label.clone().on('click', () => {
            location.href = this._parseUrl(element);
        }).appendTo($element);
    }

    /**
     * 注入点击事件
     * @protected
     */
    _injectOnclick() {
        /* Override */
    }

    /**
     * 触发下一页点击事件
     */
    _nextPageOnClick() {
        /* Override */
    }

    /**
     * 上一页点击事件
     */
    _prePageOnClick() {

    }

    /**
     * 解析出可净化结果的标题
     * @param ele 解析的元素
     */
    _parseTitle(ele) {

    }

    /**
     * 解析出可净化结果的作者和最新章节
     * @param ele 解析的元素
     */
    _parseAuthorChapterInfo(ele){
        return { };
    }

    /**
     * 分析书名、作者
     *
     */
    _parseBookInfo() {

    }

    /**
     * 获取搜索关键字
     * @key 搜索关键字query键名
     */

    _parseKeywords() {

    }

    initBar() {
        if (document.body && $('.hhm-bar').length === 0) {
            document.body.insertBefore(this.$bar[0], document.body.childNodes[0]);
            this.$bar.show();
            this.onReady();
        }
    }

    _parseElementInfo(element, host, title) {
        const hostName = this._parseHostName(element);
        const authorAndChapter = this._parseAuthorChapterInfo(element);
        return Object.assign({ element, host, hostName, title }, authorAndChapter);
    }

    /**
     * 自动翻页
     */
    autoTurnPage() {

    }

    /**
     * 
     */
    filterKeyword(keyword, title) {
        return some(keyword.split(''), ele => title.includes(ele))
    }
    

    /**
     * 注入函数
     */
    inject() {
        // console.debug(`Url: ${location.href}`);
        let legalUpdateList = [];
        let updateList = [];
        let resultElementList = this._queryResultElementList();
        const keyword = this._parseKeywords();
        // console.debug(`Result Element Count: ${resultElementList.length}`);

        forEachArray(resultElementList, element => {
            let $element = $(element);
            let host = this._parseHost(element);


            // 对每个结果元素进行注入，已经注入过则不再注入
            if ($element.find(`.${LABEL_CLASS_NAME}`).length) {
                const title = trim(this._parseTitle(element));
                updateList.push(this._parseElementInfo(element, host, title));
                return;
            } else if ($element.css('display') == 'none') {
                return;
            }
            // if (host && some(this.legalWapHostList, item => item.test(host))) {
            //      console.debug(`Inject Host: ${host}`, element);
            //      this._insertLabel(element);
            //      const title = this._parseTitle(element);

            //     if (title.includes(keyword)) {
            //         legalUpdateList.push(this._parseElementInfo(element, host, title));
            //     }
            //     return;                
            // }

            if (host && some(this.wapHostList, item => item.test(host))) {
                // console.debug(`Inject Host: ${host}`, element);
                const title = trim(this._parseTitle(element));
                // this._insertLabel(element);
                // updateList.push(this._parseElementInfo(element, host, title));

                if (this.filterKeyword(keyword, title)) {
                    this._insertLabel(element);
                    updateList.push(this._parseElementInfo(element, host, title));
                }
            }
        });

        // 重新计算注入的元素
        this.$labelList = $(`.${LABEL_CLASS_NAME}`);

        // console.debug(`Result Inject Count: ${this.$labelList.length}`);

        if (this.isFristIneject) {
            setTimeout(() => {
                {
                   this.isFristIneject = false;
                   // this.scrollToNext();
               }
           }, 0);
        }
        
        if (updateList.length < 1 && this.currentPage < 3 && this.autoPageTurning) {
            this.autoTurnPage();
            this.$bar.loadingText('当前页无相关结果，正为您自动翻页');
        } else {
            this.autoPageTurning = false;
            this._injectOnclick(legalUpdateList, updateList);
        }
    }

    /**
     * 计算label的滚动条高度
     * @param {*} index
     */
    getLabelScrollY(index) {
        return this.$labelList[index] && Math.max(1, getOffsetY(this.$labelList[index].parentNode) - OFFSET_Y);
    }

    /**
     * 计算label的滚动条高度
     * @param element 净化筛选出的元素
     */
    getAllChildNodes(element) {
        let arr = [];
        function findNodes(ele) {
            if (ele.childNodes.length) {
                let childs = ele.childNodes;
                for (let i = 0;i < childs.length;i++) {
                    arr.push(childs[i]);
                    findNodes(childs[i]);
                }
            }
        }
        findNodes(element);
        return arr;
    }
    // let childs = getAllChildNodes(ele);
    //     for (let i = 0;i < childs.length;i++) {
    //         if (childs[i].nodeType == 3 && childs[i].nodeValue.match(/最新章节：/) ) {
    //             chapter = childs[i].nodeValue;
    //         }
    //         if (childs[i].nodeType == 3 && childs[i].nodeValue.match(/作者：/)) {
    //             author = childs[i].nodeValue;
    //         }
    //     }
     

    /**
     * 请求拦截器
     * @param pattern
     * @param target
     */
    intercept(pattern, target, result) {
        if (!this._callback) {
            // Create Callback
            if ('MutationObserver' in window) {
                let isLock = true;

                let observer = new MutationObserver((matationList) => {
                    if (result) {
                        const type = result[0] === '#' ? 'id' : 'className';
                        const isLoaded = some(matationList, e => some(e.addedNodes, node => {
                            return node[type] && node[type].includes(result.slice(1));
                        }));
                        console.log(isLoaded);

                        if (isLoaded) {
                            const timeId = setTimeout(() => {
                                this.inject();
                                clearTimeout(timeId);
                            }, 0);

                        }
                    }  else if (!isLock) {
                        console.log('inject direct');
                        this.inject();
                        isLock = true;
                    }
                });

                if (isString(target)) {
                    target = $(target)[0];
                }

                observer.observe(target, {
                    childList: true
                });

                this._callback = function () {
                    console.debug('Intercept!');
                    isLock = false;
                };
            } else {
                this._callback = function () {
                    console.debug('Intercept!');
                    setTimeout(() => {
                        console.log('else', target);
                        this.inject();
                    }, 300);
                };
            }
        }

        XHRInterceptor.getInstance().on(pattern, this._callback);

        return this;
    }
}

function getOffsetY(element) {
    return element.offsetTop + (element.offsetParent ? getOffsetY(element.offsetParent) : 0);
}

window.getOffsetY = getOffsetY;

module.exports = Injector;
