import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-TW',
  title: "wuc656 blog",
  description: "吳彥東(東東wuc656) blog",
  cleanUrls: true,
  markdown: {
    image: {
      lazyLoading: true
    },
    toc: {
      level: [2, 3]
    },
    container: {
      infoLabel: '資訊',
      tipLabel: '重點',
      warningLabel: '注意',
      dangerLabel: '風險'
    }
  },
  themeConfig: {
    logo: { light: '/dong.svg', dark: '/dong.svg', alt: 'wuc656' },
    siteTitle: 'wuc656',
    outlineTitle: "目錄",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首頁', link: '/' },
      { text: '個人介紹', link: '/wuc656' },
      { text: '關於我', link: '/about' },
      { text: '技術能力', link: '/skills' },
      { text: '專案作品', link: '/projects' },
      { text: '職涯歷程', link: '/career' },
      { text: '聯絡方式', link: '/links' },
      {
        text: '更多',
        items: [
          { text: '履歷摘要', link: '/resume' },
          { text: '使用工具', link: '/uses' },
          { text: 'Minecraft 伺服器', link: '/minecraft' },
          {
            text: 'AI 介紹集',
            items: [
              { text: 'Gemini 介紹', link: '/gemini' },
              { text: 'Copilot 介紹', link: '/copilot' },
              { text: 'ChatGPT 介紹', link: '/chatgpt' }
            ]
          }
        ]
      }
    ],
    sidebar: [
      {
        text: '個人資料',
        items: [
          { text: '個人介紹', link: '/wuc656' },
          { text: '關於我', link: '/about' },
          { text: '履歷摘要', link: '/resume' },
          { text: '聯絡方式', link: '/links' }
        ]
      },
      {
        text: '工程與作品',
        items: [
          { text: '技術能力', link: '/skills' },
          { text: '使用工具', link: '/uses' },
          { text: '專案作品', link: '/projects' },
          { text: 'Minecraft 伺服器', link: '/minecraft' },
          { text: '職涯歷程', link: '/career' }
        ]
      },
      {
        text: 'AI 介紹集',
        collapsed: true,
        items: [
          { text: 'Gemini 介紹', link: '/gemini' },
          { text: 'Copilot 介紹', link: '/copilot' },
          { text: 'ChatGPT 介紹', link: '/chatgpt' }
        ]
      },
      {
        text: 'VitePress 實驗',
        collapsed: true,
        items: [
          { text: 'Runtime API', link: '/api-examples' },
          { text: '測試頁', link: '/test' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/wuc656' },
      { icon: 'youtube', link: 'https://www.youtube.com/@wuc656' },
      { icon: 'facebook', link: 'https://www.facebook.com/wut656' },
      { icon: 'instagram', link: 'https://www.instagram.com/wuc656' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/wuyandong' },
      { icon: 'twitter', link: 'https://x.com/wuc656' },
      { icon: { svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><text x="50%" y="50%" font-size="20" fill="#ff0000" font-family="system-ui, sans-serif" text-anchor="middle" dominant-baseline="middle">東</text></svg>' }, link: 'https://www.wuc656.com/' },
    ],
    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '搜尋', buttonAriaLabel: '搜尋' },
          modal: {
            noResultsText: '找不到相關結果',
            resetButtonTitle: '清除查詢條件',
            footer: { selectText: '選擇', navigateText: '切換', closeText: '關閉' }
          }
        }
      }
    },
    outline: {
      label: '頁面導覽',
      level: [2, 3]
    },
    editLink: {
      pattern: 'https://github.com/wuc656/wuc656.github.io/edit/main/vitepress/:path',
      text: '在 GitHub 編輯此頁'
    },
    docFooter: {
      prev: '上一頁',
      next: '下一頁'
    },
    lastUpdated: {
      text: '最後更新於',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'full'
      }
    },
    externalLinkIcon: true,
    darkModeSwitchLabel: '外觀',
    lightModeSwitchTitle: '切換成淺色模式',
    darkModeSwitchTitle: '切換成深色模式',
    sidebarMenuLabel: '選單',
    returnToTopLabel: '回到上方'
  },
  head: [
    ['link', { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'wuc656 | 吳彥東' }],
    ['meta', { property: 'og:description', content: "吳彥東(東東wuc656) blog" }],
    ['meta', { property: 'og:image', content: 'https://wuc656.github.io/wuc656.png' }],
    ['meta', { property: 'og:url', content: 'https://wuc656.github.io/' }]
  ],
  sitemap: {
    hostname: 'https://wuc656.github.io'
  },
  lastUpdated: true
})
