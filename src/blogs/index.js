import { zhihu } from './webs/zhihu';
import { jianshu } from './webs/jianshu';
import { cto } from './webs/51cto';
import { doc360 } from './webs/360doc';
import { bilibili } from './webs/bilibili';
import { juejin } from './webs/juejin';
import { csdn } from './webs/csdn';
import { segmentfault } from './webs/segmentfault';

const root = {
  com: {
    zhihu: {
      func: zhihu.global,
      zhuanlan: {
        func: zhihu.zhuanlan,
      },
      www: {
        leaf: zhihu.home,
        follow: {
          leaf: zhihu.home,
        },
        hot: {
          leaf: zhihu.home,
        },
        zvideo: {
          leaf: zhihu.home,
          func: zhihu.video,
        },

        question: {
          func: zhihu.question,
        },
        tardis: {
          zm: {
            func: zhihu.tardis_zm,
          },
          bd: {
            func: zhihu.tardis_zm,
          },
        },
        topic: {
          func: zhihu.topic,
        },
        column: {
          func: zhihu.zhuanlan,
        }
      },
    },
    jianshu: {
      www: {
        p: {
          func: jianshu.blog,
        },
      },
    },
    '51cto': {
      blog: {
        func: cto.blog,
      },
      www: {
        article: {
          func: cto.article,
        },
      },
    },
    '360doc': {
      www: {
        content: {
          func: doc360.blog,
        },
      },
    },
    bilibili: {
      www: {
        read: {
          func: bilibili.blog,
        },
        opus: {
          func: bilibili.blog_new,
        }
      },
    },
    segmentfault: {
      func: segmentfault.global,
      q: {
        func: segmentfault.wenda,
      },
      a: {
        func: segmentfault.blog,
      }
    }
  },
  cn: {
    juejin: {
      post: {
        func: juejin.blog,
      },
    },
  },
  net: {
    csdn: {
      func: csdn.global,
      blog: {
        func: csdn.blog,
      },
      wenku: {
        func: csdn.wenku,
      },
    },
  },
};
/**
 * 返回false表示禁止递归处理
 * @param route root/children
 * @param paths {string[]}
 */
function exec(route, paths) {
  const item = route[paths[0]];
  paths = paths.slice(1);
  let rc = true;
  if (item) {
    if (paths.length === 0) {
      if (item.leaf) {
        rc = item.leaf() !== false;
      }
    } else {
      rc = exec(item, paths) !== false;
    }
  }
  if (rc && route.func) {
    rc = route.func() !== false;
  }
  return rc;
}

/** @type {string[]} */
let paths = unsafeWindow.location.pathname.split('/').slice(1);
/** @type {string[]} */
let domains = unsafeWindow.location.hostname.split('.');
exec(root, [...domains.reverse(), ...paths].filter((v) => v));
