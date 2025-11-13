import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  base:'/',
  sitemap: {
    hostname: 'https://www.zenchyn.com/'
  },
  title: "禅境",
  titleTemplate:"一个论坛、软件库、工具箱一体的系统",
  description: "禅境（原FreePlus Max系统），英文名ZenChyn，一个论坛、软件库、工具箱一体的系统",
  head: [
    ['meta', { name: 'keywords', content: '禅境,FreePlus系统,FreePlus Max系统,云程开源,软盒系统,全能小太阳,ZenChyn' }],
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  locales: {
    root: {
      label: '简体中文',
      lang: 'Zh_CN',
    }
  },
  themeConfig: {
    siteTitle: "ZenChyn",
    logo: '/zenchyn.png',
    outline: {
      level: [2, 3],
      label: '本页内容'
    },
    nav: [
      { text: '首页', link: '/' },
      { text: '介绍', link: '/zenchyn' },
      { text: '赞助商', link: '/sponsor' },
    ],
    footer: {
      message: '<a target="_blank" rel="noopener" href="https://beian.miit.gov.cn/">鄂ICP备2022006206号</a>',
      copyright: 'Copyright © 2024-云程'
    },
    // sidebar: [
    //   {
    //     text: '案例',
    //     items: [
    //       { text: 'MD案例', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   }
    // ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    search: {
      provider: 'local'
    }
  },
})
