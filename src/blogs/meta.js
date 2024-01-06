// ==UserScript==
// @name         博客网站的精简和宽屏处理
// @namespace    https://github.com/liehuoe/tampermonkey_script
// @version      0.2.0
// @author       liehuoe
// @description  自用
// @license      GPLv3
// @match        https://*.zhihu.com/*
// @match        https://*.csdn.net/*
// @match        https://*.jianshu.com/*
// @match        https://*.juejin.cn/*
// @match        https://*.51cto.com/*
// @match        http://*.360doc.com/*
// @match        https://*.bilibili.com/*
// @icon         data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNzAxNDAzMDEwODAzIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9Ijg1NTgiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjU2IiBoZWlnaHQ9IjI1NiI+PHBhdGggZD0iTTMyIDY0TDk2IDB2MTAyNGwtNjQtNjRoOTI2LjQ3NmwtNjQgNjRWMGw2NCA2NEgzMnpNOTU4LjQ3NiAwdjEwMjRIMzJWMGg5MjYuNDc2eiIgcC1pZD0iODU1OSIgZmlsbD0iI2Q0MjM3YSI+PC9wYXRoPjxwYXRoIGQ9Ik0xNzguMjg2IDIxMC4yODZsNjQtNjR2MjkyLjU3MWwtNjQtNjRIODEyLjE5bC02NCA2NFYxNDYuMjg2bDY0IDY0SDE3OC4yODZ6IG02MzMuOTA0LTY0djI5Mi41NzFIMTc4LjI4NlYxNDYuMjg2SDgxMi4xOXpNMTc4LjI4NiA3NDYuNjY3bDY0LTY0djE5NS4wNDdsLTY0LTY0SDgxMi4xOWwtNjQgNjRWNjgyLjY2N2w2NCA2NEgxNzguMjg2eiBtNjMzLjkwNC02NHYxOTUuMDQ3SDE3OC4yODZWNjgyLjY2N0g4MTIuMTl6TTc4Ny44MSA1OTIuNzYyYzE3LjY3MyAwIDMyLTE0LjMyNyAzMi0zMiAwLTE3LjY3My0xNC4zMjctMzItMzItMzJIMjAyLjY2N2MtMTcuNjczIDAtMzIgMTQuMzI3LTMyIDMyIDAgMTcuNjczIDE0LjMyNyAzMiAzMiAzMkg3ODcuODF6IiBwLWlkPSI4NTYwIiBmaWxsPSIjZDQyMzdhIj48L3BhdGg+PC9zdmc+
// @run-at       document-start
// @grant        GM_addStyle
// @grant        unsafeWindow
// @grant        GM_registerMenuCommand
// @grant        GM_unregisterMenuCommand
// @grant        GM_getValue
// @grant        GM_setValue
// ==/UserScript==
