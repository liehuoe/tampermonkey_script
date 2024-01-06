export let autoWidthDisabled = false;
function initAutoWidthDisabled() {
  const key = 'autoWidthDisabled';
  autoWidthDisabled = GM_getValue(key);
  let menuId = GM_registerMenuCommand(`${autoWidthDisabled ? '🔲' : '✅'}宽屏处理`, () => {
    GM_setValue('autoWidthDisabled', !autoWidthDisabled);
    GM_unregisterMenuCommand(menuId);
    initAutoWidthDisabled();
    location.reload();
  });
}
initAutoWidthDisabled();
