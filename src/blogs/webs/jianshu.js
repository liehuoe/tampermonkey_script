import { autoWidthDisabled } from '../menu';

export const jianshu = { blog };

/** 简书 博客 */
function blog() {
  // 右边悬浮工具栏
  GM_addStyle('footer + div{display:none !important;}');
  // 右下热门故事
  GM_addStyle('aside > section + div{display:none !important;}');
  // 宽屏
  if (!autoWidthDisabled) {
    GM_addStyle('div[role="main"]{width:auto !important;}');
    GM_addStyle('div[role="main"] > div:first-child{flex:1 !important;width:0 !important;}');
  }
  // 文章下方的故事和推荐阅读
  GM_addStyle(
    'div[role="main"] > div:first-child > section:first-child ~ section{display:none !important;}',
  );
}
