import { defineConfig } from 'vitepress'
import { localSearchOptions } from './config/local-search';
import { tabsMarkdownPlugin } from "vitepress-plugin-tabs";

const ogDescription = "一款精美的 Halo2.x 图册主题";
const ogImage = "https://0206.ink/upload/cf44650dc27ca55b28bb0f8d3e48a93.png";
const ogTitle = "Halo-TimePlus主题";
const ogUrl = "https://timeplus.yyds.pink";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Halo-TimePlus主题官方文档",
  description: "一款精美的 Halo2.x 图册主题",
  lang: "zh",
  head: [
    ["link", { rel: "icon", type: "image/png", href: "/img/logo.png" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:title", content: ogTitle }],
    ["meta", { property: "og:image", content: ogImage }],
    ["meta", { property: "og:url", content: ogUrl }],
    ["meta", { property: "og:description", content: ogDescription }],
    ["meta", { name: "twitter:card", content: "summary_large_image" }],
    ["meta", { name: "twitter:site", content: "@kunkunyu" }],
    ["meta", { name: "theme-color", content: "#646cff" }],
    // 添加百度统计代码
    [
      "script",
      {},
      `
      var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?2c60ed0407c73c3e27ef53fefbed18fa";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();
       `,
    ],
  ],
  themeConfig: {
    //导航栏配置
    nav: [
      { text: '作者博客', link: 'https://0206.ink/' },
    ],
    //文章
    sidebar: [
      {
        text: '主题简介',
        link: "/intro",
      },
      {
        text: '快速上手',
        items: [
          { text: "安装主题", link: "/initall" },
          { text: "安装图库插件", link: "/initall-plugin" },
          { text: "图库插件配置", link: "/photos" },
          { text: "主题配置", link: "/base" },
        ]
      }

    ],
    outline: {
      level: 'deep', // 右侧大纲标题层级
      label: '目录', // 右侧大纲标题文本配置
    },
    // 搜索配置
    search: {
      provider: "local",
      options: localSearchOptions
    },
    // 导航栏右侧社交链接配置
    socialLinks: [
      { icon: 'github', link: 'https://github.com/chengzhongxue/halo-theme-timeplus' }
    ],
    footer: {
      message: `Released under the MIT License. (dev)`,
      copyright: "Copyright © 2023 困困鱼",
    },
    // 文档页脚文本配置
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
   // 编辑链接配置
    editLink: {
      pattern: "https://github.com/chengzhongxue/halo-timeplus-editor/edit/main/:path",
      text: "不妥之处，敬请雅正",
    },
  },
  markdown: {
    lineNumbers: true,
    config(md) {
      md.use(tabsMarkdownPlugin);
    },
  },
  locales: {
    root: { label: "简体中文", lang: "zh" },
  },
})
