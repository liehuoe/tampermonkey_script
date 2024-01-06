import { onLoad } from '@/utils/func';
import { autoWidthDisabled } from '../menu';

export const bilibili = { blog };

/** bilibili 博客 */
function blog() {
  // 去除右上方的登录提示框
  onLoad(() => {
    document.querySelectorAll('.van-popover:has(> .unlogin-popover)').forEach((e) => {
      e.style.display = 'none';
    });
  });
  // 去除滚动时弹出的登录提示
  GM_addStyle('.login-tip{display:none !important;}');
  // 宽屏调整
  if (!autoWidthDisabled) {
    GM_addStyle(
      '.article-detail{width:calc(100% - 90px) !important;margin-right:80px !important;}',
    );
    GM_addStyle('.right-side-bar{margin-left:0 !important;right:10px !important;}');
    GM_addStyle('#article-content{padding:0 !important;}');
  }
}
