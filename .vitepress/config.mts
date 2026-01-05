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
      label: '页面导航'
    },
    nav: [
      { text: '首页', link: '/' },
      {
        text: '指南',
        items: [
          { text: '介绍', link: '/zenchyn' },
          { text: '快速开始', link: '/start' },
          { text: '更新日志', link: '/download' },
          { text: '接口文档', link: 'https://doc.zenchyn.com/' },
          { text: '常见问题', link: '/faq' }
        ]
      },
      { text: '🥤一杯咖啡', link: '/thanks' },
      { text: '官方论坛', link: 'https://bbs.zenchyn.com/' }
    ],
    footer: {
      message: '<a target="_blank" rel="noopener" href="https://beian.miit.gov.cn/">鄂ICP备2022006206号</a>',
      copyright: 'Copyright © 2025-云程'
    },
    sidebar: {
      '/zenchyn': [
        {
          items: [
            { text: '介绍', link: '/zenchyn' },
            { text: '快速开始', link: '/start' },
            { text: '更新日志', link: '/download' },
            { text: '常见问题', link: '/faq' },
          ]
        }
      ],
      '/start': [
        {
          items: [
            { text: '介绍', link: '/zenchyn' },
            { text: '快速开始', link: '/start' },
            { text: '更新日志', link: '/download' },
            { text: '常见问题', link: '/faq' },
          ]
        }
      ],
      '/download': [
        {
          items: [
            { text: '介绍', link: '/zenchyn' },
            { text: '快速开始', link: '/start' },
            { text: '更新日志', link: '/download' },
            { text: '常见问题', link: '/faq' },
          ]
        }
      ],
      '/faq': [
        {
          items: [
            { text: '介绍', link: '/zenchyn' },
            { text: '快速开始', link: '/start' },
            { text: '更新日志', link: '/download' },
            { text: '常见问题', link: '/faq' },
          ]
        }
      ],
      '/thanks': [
        {
          text: '🥤一杯咖啡',
          items: [
            { text: '榜上有名', link: '/thanks' },
            { text: '成为赞助者', link: '/sponsor' },
          ]
        }
      ],
      '/sponsor': [
        {
          text: '🥤一杯咖啡',
          items: [
            { text: '榜上有名', link: '/thanks' },
            { text: '成为赞助者', link: '/sponsor' },
          ]
        }
      ]
    },
    search: {
      provider: 'local'
    }
  },
})
