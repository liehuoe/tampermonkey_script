import { onLoad, watch } from "@/utils/func";
import { autoWidthDisabled } from "../menu";

export const segmentfault = { wenda, blog };

// 网页会做重置 head 节点, 监听节点重新添加
function watchStyle(addStyle) {
    /** @type {HTMLStyleElement} */
    let el = addStyle();
    if (!el) return;

    const w = watch(() => {
        if (el.parentElement) return;
        el = addStyle();
    }, el.parentElement);
    onLoad(() => w.disconnect());
}

function wenda() {
    // 去除滚动时弹出登录弹窗
    document.addEventListener('scroll', (e) => e.stopPropagation(), true);
    watchStyle(() => {
        let el;
        // 优化标题栏, 增加阅读高度
        el = GM_addStyle('#sf-header{position:relative !important;}');
        if (!autoWidthDisabled) {
            // 宽屏调整
            GM_addStyle('#question-wrap{max-width:unset !important;}');
            // 去除左边的按钮
            GM_addStyle('#questionMain .functional-area-left{display:none !important;}');
            // 去除右边的相似问题
            GM_addStyle('#questionMain+.right-side{display:none !important;}');
        }
        return el;
    });
}

function blog() {
    watchStyle(() => {
        let el;
        if (!autoWidthDisabled) {
            // 宽屏调整
            el = GM_addStyle('.article-wrap{max-width:unset !important;}');
            GM_addStyle('.article-wrap .row>div:has(.article.article-content ){flex:1;}');
            // 去除左边的按钮
            GM_addStyle('.article-wrap .row>div:has(>.functional-area-left){display:none !important;}');
            // 没有目录时隐藏右边栏
            GM_addStyle('.article-wrap .row>div:has(.article.article-content )+div:not(:has(#article-nav-list)){display:none !important;}');
            // 评论区
            GM_addStyle('#__next>.container:has(+footer){max-width:100% !important;}');
            GM_addStyle('#__next>.container:has(+footer)>.row>.mx-auto{flex:1 !important;}');
        }
        return el;
    });
}