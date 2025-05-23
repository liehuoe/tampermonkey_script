import { onLoad, watch } from '@/utils/func';
import { autoWidthDisabled } from '../menu';

export const zhihu = { global, home, video, zhuanlan, tardis_zm, question, topic };

/** 知乎 */
function global() {
  // 去除滚动时弹出登录弹窗
  document.addEventListener('scroll', (e) => e.stopPropagation(), true);
  // 去除中间登录弹窗
  const loginStyle = [
    GM_addStyle('.Modal-wrapper{display:none !important}'),
    GM_addStyle('html{overflow:auto !important; margin-right: 0 !important}'),
  ];
  onLoad(() => {
    document.querySelector('.signFlowModal>.Modal-closeButton')?.click();
    loginStyle.forEach((v) => v?.remove());
  });
  // 右上登录弹窗
  GM_addStyle('div[style*="margin-top: 16px"][style*="position: fixed"]{display:none !important}');
  // 右下登录弹窗
  GM_addStyle(
    'div[style*="transform-origin: center bottom"][style*="margin-top: -6px"]{display:none !important}',
  );
  // 站外直链
  onLoad(() => {
    watch((item) => {
      const token = 'link.zhihu.com/?target=';
      [
        ...item.target.querySelectorAll(`a.external[href*="${token}"]`),
        ...item.target.querySelectorAll(`a.LinkCard[href*="${token}"]`),
      ].forEach((el) => {
        el.href = decodeURIComponent(el.href.slice(el.href.indexOf(token) + token.length));
      });
    });
  });
  if (!autoWidthDisabled) {
    // 评论"查看全部回复"的弹窗
    GM_addStyle('div[tabindex="0"]:has(.Modal-content){width:calc(100vw - 150px)}');
  }
}
function home() {
  if (!autoWidthDisabled) {
    GM_addStyle('.Topstory-container{width:auto !important}');
    GM_addStyle('.Topstory-mainColumn{flex:1 !important}');
  }
}
function video() {
  if (!autoWidthDisabled) {
    GM_addStyle('.ZVideo{max-width:unset !important}');
  }
}
/**
 * 知乎 专栏
 * https://zhuanlan.zhihu.com/p/237952115 (外链)
 * https://zhuanlan.zhihu.com/p/594226178 (带目录, 宽度溢出)
 */
function zhuanlan() {
  // 上方header不要固定位置
  GM_addStyle('.ColumnPageHeader.is-fixed{display:none !important}');
  // 隐藏footer, 优化阅读高度
  GM_addStyle('.RichContent-actions.is-fixed{display:none !important}');
  // 宽屏
  if (!autoWidthDisabled) {
    GM_addStyle('.Post-Row-Content-right{display:none !important}');
    GM_addStyle('.Post-Row-Content,.Post-Row-Content-left{width:auto !important;flex:1 !important;}');
  }
}
/**
 * 知乎 文章(有专栏,问答的内容)
 * https://www.zhihu.com/tardis/zm/art/217881116
 * https://www.zhihu.com/tardis/bd/ans/1575858277
 */
function tardis_zm() {
  // 上方header不要固定位置
  GM_addStyle('.sgui-header{display:none !important}');
  GM_addStyle('.Container{margin-top: 0 !important}');
  // 宽屏
  if (!autoWidthDisabled) {
    GM_addStyle('.Container{max-width:unset !important}');
    GM_addStyle('.Container>.Question-main img{width:auto !important}');
  }
}
/**
 * 知乎 问答
 * https://www.zhihu.com/question/53591010
 */
function question() {
  // 宽屏
  if (!autoWidthDisabled) {
    GM_addStyle('.Question-main{width: auto !important;max-width: 100%;}');
    GM_addStyle('.Question-main > .ListShortcut{flex:1 !important; min-width:0 !important; display: flex;}');
    GM_addStyle(
      '.Question-mainColumn{flex: 1 !important; min-width:0 !important; margin-right:10px !important}',
    );
    GM_addStyle('.Question-mainColumn img{width:auto !important}');
    GM_addStyle('.AuthorInfo{max-width: none !important;}');
  }
  // 右边下载知乎客户端
  GM_addStyle('.AppBanner{display: none !important;}');
  // 上方的"登录后你可以"
  GM_addStyle('.Question-mainColumnLogin{display: none !important;}');
  // 隐藏滚动时的header, 优化阅读高度
  GM_addStyle('.AppHeader.is-fixed{display:none !important}');
  // 隐藏footer, 优化阅读高度
  GM_addStyle('.RichContent-actions.is-fixed{display:none !important}');
  // 避免拷贝代码时带上作者声明
  document.addEventListener('copy', (e) => e.stopPropagation(), true);
}

/**
 * 知乎 话题
 * https://www.zhihu.com/topic/19574086/intro
 */
function topic() {
  // 宽屏
  if (!autoWidthDisabled) {
    GM_addStyle('#root .App-main > div:has(#TopicMain){max-width: calc(100% - 20px) !important;}');
  }
}
