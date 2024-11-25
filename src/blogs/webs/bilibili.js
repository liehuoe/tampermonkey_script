import { onLoad } from '@/utils/func';
import { autoWidthDisabled } from '../menu';

export const bilibili = { blog, blog_new };

/** bilibili 博客 */
function blog() {
  // 去除右上方的登录提示框
  GM_addStyle('.login-panel-popover{display:none !important;}');
  // 优化标题栏, 增加阅读高度
  GM_addStyle('.fixed-top-header{display:none !important;}');
  GM_addStyle('.fixed-header{position:unset !important;}');
  // 滚动时弹出登录弹窗
  document.addEventListener('scroll', (e) => e.stopPropagation(), true);
  // 宽屏调整
  if (!autoWidthDisabled) {
    GM_addStyle(
      '.article-detail{width:calc(100% - 90px) !important;margin-right:80px !important;}',
    );
    GM_addStyle('.right-side-bar{margin-left:0 !important;right:10px !important;}');
    GM_addStyle('#article-content{padding:0 !important;}');
  }
}

/** bilibili 新版博客 */
function blog_new() {
  // 去除右上方的登录提示框
  GM_addStyle('.login-panel-popover{display:none !important;}');
  // 优化标题栏, 增加阅读高度
  GM_addStyle('.fixed-author-header{display:none !important;}');
  GM_addStyle('.fixed-header{position:unset !important;}');
  // 滚动时弹出登录弹窗
  document.addEventListener('scroll', (e) => e.stopPropagation(), true);
  // 宽屏调整
  if (!autoWidthDisabled) {
    GM_addStyle('.opus-detail{width:calc(100% - 90px) !important;margin:0 10px !important;}');
    GM_addStyle('.right-sidebar-wrap{margin-left:0 !important;right:10px !important;}');
  }
}
