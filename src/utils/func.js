/**
 *
 * @param {() => void} func
 */
export function onLoad(func) {
  window.addEventListener('load', func, { once: true });
}

/**
 *
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
