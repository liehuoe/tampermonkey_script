import { autoWidthDisabled } from '../menu';
import { onLoad } from '@/utils/func';

export const juejin = { blog };

/**
 * 掘金 博客
 * https://juejin.cn/post/7063852731340947487#heading-5
 */
function blog() {
  // 左边悬浮工具栏
  GM_addStyle('.article-suspended-panel{display:none !important;}');
  // 右边相关推荐和精选内容
  GM_addStyle('.article-catalog ~ div{display:none !important;}');
  GM_addStyle('.article-catalog .catalog-body{max-height:unset !important;}');
  // 右下的"登录掘金领取礼包"
  GM_addStyle('.bottom-login-guide{display:none !important;}');
  // 右下的除回到顶部外的悬浮按钮
  GM_addStyle('*:has(~ .to-top-btn){display:none !important;}');
  // 去除右下方的浮动图标"创作者榜单"
  GM_addStyle('.global-float-banner{display:none !important;}');
  // 去除右下方的"关注掘金公众号"
  GM_addStyle('.post-bottom-right{display:none !important;}');
  // 下方的为你推荐
  GM_addStyle('.recommended-area{display:none !important;}');
  // 宽屏调整
  if (!autoWidthDisabled) {
    GM_addStyle('.main-container{max-width:unset !important;width:calc(100% - 30px) !important;}');
    GM_addStyle('.main-area{width:calc(100% - 25rem - 20px) !important;}');
  }
  // 站外直链
  onLoad(() => {
    const root = document.getElementById('article-root');
    if (!root) return;
    const tokens = ['link.juejin.cn?target=', 'link.juejin.cn/?target='];
    tokens
      .map((token) => root.querySelectorAll(`a[href*="${token}"]`))
      .reduce((r, v) => [...r, ...v], [])
      .forEach((el) => {
        for (const token of tokens) {
          const pos = el.href.indexOf(token);
          if (pos === -1) continue;
          el.href = decodeURIComponent(el.href.slice(pos + token.length));
          break;
        }
      });
  });
}
