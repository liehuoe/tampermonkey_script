import { autoWidthDisabled } from '../menu';

export const cto = { blog, article };

/**
 * 51cto 博客
 * https://blog.51cto.com/51ctoblog/8633619
 */
function blog() {
  // 推荐视频
  GM_addStyle('.recommend-video{display:none !important;}');
  // 去除左边悬浮工具栏
  GM_addStyle('.action-aside-left{display:none !important;}');
  // 去除右边悬浮工具栏
  GM_addStyle('aside.minmenu{display:none !important;}');
  // 免登录复制
  document.addEventListener('copy', (e) => e.stopPropagation(), true);
  document.addEventListener('keydown', (e) => e.stopPropagation(), true);
  // 宽屏调整
  if (!autoWidthDisabled) {
    // 保留右栏显示目录
    GM_addStyle('#page_center{width: calc(100% - 20px);display: flex;}');
    GM_addStyle('#page_center>.detail-content-left{flex: 1;margin-right: 10px;}');
  }
}
/**
 * 51cto 文章
 * https://www.51cto.com/article/621735.html
 */
function article() {
  // 去除左边浮动工具栏
  GM_addStyle('.left-window{display: none;}');
  // 去除右栏
  GM_addStyle('.article-right{display: none;}');
  // 去除公众号二维码
  GM_addStyle('.suspension-pendant_r{display: none;}');
  // 去除右下方工具栏
  GM_addStyle('.components-common-suspension{display: none !important;}');
  // 宽屏调整
  if (!autoWidthDisabled) {
    GM_addStyle('.article{width: calc(100% - 20px) !important;}');
    GM_addStyle('.article>.article-left{width: 100% !important;}');
  }
}
