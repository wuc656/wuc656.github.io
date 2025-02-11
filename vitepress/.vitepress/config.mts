import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "wuc656's blog",
  description: "吳彥東(東東wuc656) blog",
  themeConfig: {
    logo: '/dong.svg',
    outlineTitle: "目錄",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首頁', link: '/' },
      { text: '個人介紹', link: '/wuc656' },
      { text: '範例', link: '/markdown-examples' }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/wuc656' }
    ]
  },
  head: [
    ['link', { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  ],
  sitemap: {
    hostname: 'https://wuc656.github.io'
  },
  lastUpdated: true
})
