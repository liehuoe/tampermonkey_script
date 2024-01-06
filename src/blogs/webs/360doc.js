import { onLoad } from '@/utils/func';
import { autoWidthDisabled } from '../menu';

export const doc360 = { blog };

/** 360doc */
function blog() {
  // 居中
  GM_addStyle('.doc360article_content{width:fit-content !important;padding:0 !important;}');
  // 去除滚动时弹出登录弹窗
  document.addEventListener('scroll', (e) => e.stopPropagation(), true);
  // 去除右栏
  GM_addStyle('.doc360article_content>.a_right{display:none !important;}');
  // 去除左下角的工具栏
  GM_addStyle('#goTop2{display:none !important;}');
  // 去除左边的二维码
  GM_addStyle('.floatqrcode{display:none !important;}');
  // 去除下方的"猜你喜欢"
  GM_addStyle('#divyoulikeadtitle{display:none !important;}');
  // 去除选中文字的浮动工具栏
  GM_addStyle('#contextmenudivmouseup{display:none !important;}');
  // 去除上方的header, 增加阅读高度
  GM_addStyle('.atfixednav{display:none !important;}');
  // 免登录复制
  document.addEventListener('copy', (e) => e.stopPropagation(), true);
  document.addEventListener('contextmenu', (e) => e.stopPropagation(), true);
  document.addEventListener('keydown', (e) => e.stopPropagation(), true); // ctrl + p 弹出登录框
  // 宽屏调整
  if (!autoWidthDisabled) {
    GM_addStyle('.doc360article_content>.a_left{width:100% !important;}');
    GM_addStyle(
      '.doc360article_content>.a_left>#bgchange{width:100% !important;padding:18px 20px 0 !important;box-sizing:border-box !important;}',
    );
    GM_addStyle('#articlecontent>table{width:100% !important;}');
    onLoad(() => {
      const ctx = document.getElementById('articlecontent');
      ctx.querySelectorAll('*[style*="max-width:"]').forEach((e) => {
        e.style.maxWidth = 'unset';
      });
    });
  }
}
