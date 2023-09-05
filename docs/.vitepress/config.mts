import { defineConfig } from 'vitepress'

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
    ["link", { rel: "icon", type: "image/png", href: "/logo.png" }],
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
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '作者博客', link: 'https://0206.ink/' },
    ],

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

    socialLinks: [
      { icon: 'github', link: 'https://github.com/chengzhongxue/halo-theme-timeplus' }
    ],
    search: {
      provider: "algolia",
      options: {
        appId: "Q74OQRXAR7",
        apiKey: "eca77082cba7324afee4d6b0ed1acba7",
        indexName: "timeplus",
        placeholder: "搜索文档",
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            searchBox: {
              resetButtonTitle: "清除查询条件",
              resetButtonAriaLabel: "清除查询条件",
              cancelButtonText: "取消",
              cancelButtonAriaLabel: "取消",
            },
            startScreen: {
              recentSearchesTitle: "搜索历史",
              noRecentSearchesText: "没有搜索历史",
              saveRecentSearchButtonTitle: "保存至搜索历史",
              removeRecentSearchButtonTitle: "从搜索历史中移除",
              favoriteSearchesTitle: "收藏",
              removeFavoriteSearchButtonTitle: "从收藏中移除",
            },
            errorScreen: {
              titleText: "无法获取结果",
              helpText: "你可能需要检查你的网络连接",
            },
            footer: {
              selectText: "选择",
              navigateText: "切换",
              closeText: "关闭",
              searchByText: "搜索提供者",
            },
            noResultsScreen: {
              noResultsText: "无法找到相关结果",
              suggestedQueryText: "你可以尝试查询",
              reportMissingResultsText: "你认为该查询应该有结果？",
              reportMissingResultsLinkText: "点击反馈",
            },
          },
        },
      },
    },
    footer: {
      message: `Released under the MIT License. (dev)`,
      copyright: "Copyright © 2023 困困鱼",
    },

    editLink: {
      pattern: "https://github.com/chengzhongxue/halo-timeplus-editor/edit/main/:path",
      text: "Edit this page on GitHub",
    },
  },
  locales: {
    root: { label: "简体中文", lang: "zh" },
  },
})
