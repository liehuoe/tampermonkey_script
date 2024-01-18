/**
 * 添加 load 事件处理
 * @param {() => void} func
 */
export function onLoad(func) {
  window.addEventListener('load', func, { once: true });
}

/**
 * 监听节点变化事件
 * @param {(item: MutationRecord) => void} func
 * @param {Element | null | undefined} root
 * @returns {MutationObserver}
 */
export function watch(func, root) {
  if (!root) root = document.body;
  const observer = new MutationObserver((mutations) => mutations.forEach(func));
  observer.observe(root, { childList: true, subtree: true });
  return observer;
}

/**
 * 监听节点变化, 检测到 style 样式被清除则重新添加
 * @param {() => HTMLStyleElement | undefined} addStyle
*/
export function watchStyle(addStyle) {
  let el = addStyle();
  if (!el) return;

  const w = watch(() => {
    if (el.parentElement) return;
    el = addStyle();
  }, el.parentElement);
  onLoad(() => w.disconnect());
}
