import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "wuc656 blog",
  description: "吳彥東(東東wuc656) blog",
  themeConfig: {
    logo: '/dong.svg',
    outlineTitle: "目錄",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首頁', link: '/' },
      { text: '個人介紹', link: '/wuc656' },
      { text: '自介(gemini產生)', link: '/gemini' },
      { text: '自介(copilot產生)', link: '/copilot' },
      { text: '自介(chatgpt產生)', link: '/chatgpt' }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/wuc656' },
      { icon: 'youtube', link: 'https://www.youtube.com/@wuc656' },
      { icon: 'facebook', link: 'https://www.facebook.com/wut656' },
      { icon: 'instagram', link: 'https://www.instagram.com/wuc656' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/wuyandong' },
      { icon: 'twitter', link: 'https://x.com/wuc656' },
      { icon: { svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><text x="50%" y="50%" font-size="20" fill="#ff0000" font-family="system-ui, sans-serif" text-anchor="middle" dominant-baseline="middle">東</text></svg>' }, link: 'https://www.wuc656.com/' },
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
