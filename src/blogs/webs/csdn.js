import { onLoad, removeAllListeners } from '@/utils/func';
import { autoWidthDisabled } from '../menu';

export const csdn = { global, blog, wenku };

/** CSDN */
function global() {
  // 右上发布文章弹窗
  GM_addStyle('.csdn-toolbar-creative-mp{display:none !important}');
  // 右边工具栏
  GM_addStyle('.csdn-side-toolbar{display:none !important}');
}
/**
 * CSDN 博客
 * https://blog.csdn.net/qq_21197033/category_12436526.html (不应该修改样式)
 * https://blog.csdn.net/JohnnyMartin/article/details/118639569
 */
function blog() {
  // 右上登录提示
  GM_addStyle('#csdn-toolbar-profile-nologin{display:none !important}');
  // 下方"关注博主即可阅读全文"
  GM_addStyle('.hide-article-box{display:none !important}');
  GM_addStyle('#article_content{height:auto !important}');
  // 左边侧栏
  GM_addStyle('.main_father .blog_container_aside{display:none !important}');
  GM_addStyle('.main_father #toolBarBox .left-toolbox{left:0 !important; width:100% !important}');
  // 显示右边目录
  GM_addStyle('.main_father #rightAside{display:none !important}');
  GM_addStyle(
    '.main_father #rightAsideConcision{display:block !important;margin-left:10px !important;}',
  );
  // 宽屏
  if (!autoWidthDisabled) {
    GM_addStyle(
      '.main_father #mainBox{flex:1 !important; width:0 !important; margin-right:0 !important;}',
    );
    GM_addStyle('.main_father #mainBox > main{width:100% !important}');
  } else {
    GM_addStyle('.main_father #mainBox{width:auto !important;margin-right:0 !important;}');
  }
  // 右下"觉得还不错"
  GM_addStyle('.tool-active-list{display:none !important}');
  // 右下分享按钮
  GM_addStyle('#tool-share{display:none !important}');
  // 右下登录弹窗
  GM_addStyle('.passport-login-tip-container{display:none !important}');
  // 滚动时弹出登录弹窗
  document.addEventListener('scroll', (e) => e.stopPropagation(), true);
  // 加载时弹出登录弹窗
  const el = GM_addStyle('.passport-login-container{display:none !important;}');
  onLoad(() => {
    setTimeout(() => {
      el.remove();
      const dom = document.querySelector('.passport-login-container');
      if (dom) dom.remove();
    }, 1000);
  });
  // 免登录复制
  GM_addStyle('#content_views pre code{user-select:text !important}');
  GM_addStyle('#content_views pre{user-select:text !important}');
  GM_addStyle('#content_views{user-select:text !important}');
  GM_addStyle('#articleSearchTip{display:none !important}');
  document.addEventListener('copy', (e) => e.stopPropagation(), true);
  // 站外直链
  onLoad(() => {
    removeAllListeners(document.querySelector('#content_views'));
    document.querySelectorAll('#article_content a:not([href*="csdn.net"])').forEach((el) => {
      el.addEventListener('mouseover', (e) => e.stopPropagation(), true);
      el.addEventListener('click', (e) => e.stopPropagation(), true);
      if (!el.target) el.target = '_blank';
    });
  }, true);
}
/** CSDN文库 */
function wenku() {
  // 去除需要点击"阅读全文"才能展示整篇文章
  GM_addStyle('.article-box > .cont{max-height:unset !important}');
  GM_addStyle('.article-box > .cont > .open {display:none !important}');
  // 去除右栏的个人信息和相关推荐
  GM_addStyle('.layout-right {display:none !important}');
  // 宽屏调整
  if (!autoWidthDisabled) {
    GM_addStyle('.layout-center {width:100% !important}');
  }
}
