module.exports = {
    listItem: function ({title, author, chapter, site}) {
        let text = `
        <div class="hhm-bar-item" data-tag="itemWrap">
            <div class="h-item-body" data-tag="itemBody">
                <div class="h-item-title" data-tag="itemTitle">${title}</div>
                <div class="h-item-label" data-tag="itemLabel">
                    <div class="h-label" data-tag="label">可净化</div>
                </div>
            </div>
            <div class="h-item-author" data-tag="itemAuthor">${author}</div>
            <div class="h-item-chapter" data-tag="itemChapter">${chapter}</div>
            <div class="h-item-site" data-tag="itemSite">${site}</div>
        </div>
        `;
        return text;
    },
    html: function (logoSrc) {
        let text = `
    <div class="hhm-bar">
        <div class="h-bar-box" data-tag="barBox">
            <div class="h-content" data-tag="content" style="display:none;">
                <div class="h-title" data-tag="title">
                    <img class="h-logo" src="${logoSrc}" alt="logo" data-tag="logo" />
                    <div class="h-title-text" data-tag="titleText"></div>
                </div>
                <div class="h-total-result" data-tag="totalResult"></div>
                <div class="hhm-bar-list" data-tag="list">
                    <div class="h-item-box" data-tag="itemBox"></div>
                    <div class="h-list-loadding-box" data-tag="listLoaddingBox">
                        <div data-tag="keepLoadding">
                             <span data-tag="keepLoadding">上滑继续加载</span>
                        </div>
                        <div data-tag="listLoadding"  style="display:none">
                            <span class="h-loadding-text" data-tag="loadingText">正在加载</span> <span class="h-loading" data-tag="loading"></span>
                        </div>
                        <div data-tag="listEnd" style="display:none">
                            <span data-tag="endText">已经到底啦喵～</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="h-bottom-box" data-tag="bottomBox">
                <div class="h-shrink-box" data-tag="shrinkBox">
                    <span class="h-shrink-logo" data-tag="shinkLogo"></span> <span class="h-shrink-text" data-tag="shrinkText">正在寻找相关可净化结果</span> <span class="h-loading" data-tag="loading"></span>
                </div>
                <div class="h-shrink-box h-extend-box" data-tag="extendBox" style="display:none">
                    <span class="h-close" data-tag="closeIcon"></span>
                </div>
            </div>
        </div>
    </div>
    `;
        return text;
    },
    css: function ({barBoxBottom, bgColor, fontColor, imgWidth, loadingSrc, shrinkLogoSrc, closeIcon}) {
        let text = `
    @keyframes hhm-loading {
        from {
            transform: rotate(360deg)
        }

        to {
            transform: rotate(0)
        }
    }

    @keyframes hhm-btn-loading {
        from {
            transform: rotate(0)
        }

        to {
            transform: rotate(360deg)
        }
    }

    .hhm-bar {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0, 0, 0, .2);
        z-index: 9998;
        box-sizing: border-box;
        color: #0cc;
        transition: background 0.5s linear;
        -webkit-transition: background 0.5s linear;
    }

    .h-bar-box {
        position: absolute;
        bottom: ${barBoxBottom};
        left: 10px;
        right: 10px;
        min-height: 48px;
        border-radius: 20px 20px 4px 4px;
        background: #F8F8F8;
        z-index: 999;
        box-sizing: border-box;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18);
        overflow: hidden;
        transition: max-height 0.3s ease, background 0.2s 0.3s;
        -webkit-transition: max-height 0.3s ease, background 0.2s 0.3s;
    }

    .hhm-bar-list {
        font-size: 13px;
        max-height: 336px;
        font-size: 11px;
        color: #53535F;
        text-align: left;
        overflow-y: scroll;
        -webkit-overflow-scrolling: touch;
    }

    .hhm-bar-list::-webkit-scrollbar {
        display: none;
    }

    .h-content {
        position: relative;
        padding-top: 29px;
    }

    .h-list-loadding-box{
        padding-bottom: 60px;
        font-size: 13px;
        color: #999999;
        line-height: 13px;
        text-align:center;
    }

    .h-bottom-box{
        height: 48px;
        position:absolute;
        bottom: 0;
        left: 0;
        width: 100%;
    }

    .h-shrink-box{
        border-radius: 20px 20px 4px 4px;
        background: #4F91FF;
        text-align: center;
        line-height: 48px;
    }


    .h-shrink-logo {
        width: 18px;
        height: 18px;
        display: inline-block;
        background-image: url(${shrinkLogoSrc});
        background-size: 100%;
        vertical-align: middle;
        background-repeat: no-repeat;
        display: none;
    }

    .h-shrink-text {
        font-family: PingFangSC-Medium;
        font-size: 14px;
        color: #FFFFFF;
        letter-spacing: 0;
    }

    .h-loading {
        display: inline-block;
        position: relative;
        width: ${imgWidth};
        height: ${imgWidth};
        animation: hhm-loading 1.2s linear infinite;
        background-image: url(${loadingSrc});
        background-size: 100%;
        background-repeat: no-repeat;
    }

    .h-extend-box{
        opacity: 0.95;
        background: #FFFFFF;
    }

    .h-close {
        width: 22px;
        height: 22px;
        display:inline-block;
        background-image: url(${closeIcon});
        background-size: 100%;
        background-repeat: no-repeat;
        vertical-align: middle;
    }

    .h-title {
        display: flex;
        align-items: flex-start;
        text-align: left;
        padding: 0px 20px;
    }

    .h-total-result {
        line-height: 14px;
        font-size: 12px;
        text-align: left;
        color: #353538;
        padding: 8px 42px 6px;
    }

    .h-logo {
        width: 16px;
        height: 16px;
        margin-right: 6px;
    }

    .h-title-text {
        display: inline-block;
        line-height: 16px;
        font-size: 15px;
        color: #353538;
        font-weight: bold;
    }
    .h-hide{
        display: none;
    }

    /* 每条记录的style */
    .hhm-bar-item {
        padding: 16px 12px;
        background: #fff;
        box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
        color: #353538;
        margin: 4px 20px 14px;
        text-decoration: none;
        border-radius: 4px;
    }

    .hhm-bar-item:active {
        background: #F7F8FA;
    }

    .h-item-body{
        display: flex;
    }

    .h-item-title{
        flex: 1;
        font-size: 12px;
        color: #232300;
        font-weight: bold;
        line-height: 17px;
        margin-bottom: 8px;
        display: -webkit-box;
        text-align: left;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .h-item-author{
        display: -webkit-box;
        font-size: 10px;
        color: #53535F;
        text-align: left;
        line-height: normal;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-bottom: 4px;
    }
    .h-item-chapter{
        display: -webkit-box;
        font-size: 10px;
        color: #53535F;
        text-align: left;
        line-height: normal;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-bottom: 4px;
    }
    .h-item-site{
        display: -webkit-box;
        font-size: 8px;
        color: #c1c1c1;
        text-align: left;
        line-height: normal;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .h-item-label{
        position: relative;
        display: inline-block;
    }
    .h-label{
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        position: relative;
        top: -8px;
        right: -14px;
        font-size: 8px;
        color: ${fontColor};
        background: ${bgColor};
        line-height: 9px;
        border-radius: 8px 2px 2px 8px;
        font-weight: bold;
        text-align: center;
        padding: 3px 6px 3px 8px;
    }
    `;
        return text;
    }
};