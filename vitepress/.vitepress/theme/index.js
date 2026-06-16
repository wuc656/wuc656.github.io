import DefaultTheme from 'vitepress/theme';
import giscusTalk from 'vitepress-plugin-comment-with-giscus';
import { useData, useRoute } from 'vitepress';
import { toRefs } from "vue";

export default {
    extends: DefaultTheme,

    enhanceApp(ctx) {
        DefaultTheme.enhanceApp(ctx);

        // 自訂首頁按鈕排版與 lastUpdated 中文化
        if (typeof window !== 'undefined') {
            setTimeout(() => {
                const actions = document.querySelector('.VPHomeHero .actions')
                if (actions) {
                    actions.style.display = 'flex'
                    actions.style.flexWrap = 'wrap'
                    actions.style.justifyContent = 'center'

                    const buttons = actions.querySelectorAll('.action')
                    if (buttons.length >= 4) {
                        const br = document.createElement('div')
                        br.style.width = '100%'
                        br.style.height = '0'
                        buttons[3].parentNode.insertBefore(br, buttons[3])
                    }
                    if (buttons.length >= 7) {
                        const br = document.createElement('div')
                        br.style.width = '100%'
                        br.style.height = '0'
                        buttons[6].parentNode.insertBefore(br, buttons[6])
                    }
                    if (buttons.length >= 9) {
                        const br = document.createElement('div')
                        br.style.width = '100%'
                        br.style.height = '0'
                        buttons[8].parentNode.insertBefore(br, buttons[8])
                    }
                }

                // 修改 lastUpdated 文字
                const observer = new MutationObserver(() => {
                    const el = document.querySelector('.VPLastUpdated')
                    if (el) {
                        const textEl = el.querySelector('.VPLastUpdated span')
                        if (textEl && textEl.textContent.includes('Last updated')) {
                            textEl.textContent = textEl.textContent.replace('Last updated', '最後更新於')
                        }
                    }
                })
                observer.observe(document.body, { childList: true, subtree: true })

                // 立即執行一次
                const el = document.querySelector('.VPLastUpdated')
                if (el) {
                    const textEl = el.querySelector('.VPLastUpdated span')
                    if (textEl && textEl.textContent.includes('Last updated')) {
                        textEl.textContent = textEl.textContent.replace('Last updated', '最後更新於')
                    }
                }
            }, 100)
        }
    },

    setup() {
        const { frontmatter } = toRefs(useData());
        const route = useRoute();

        // Giscus 留言設定（參數來自 <script> 標籤）
        giscusTalk({
            repo: 'wuc656/wuc656.github.io',
            repoId: 'R_kgDOL5JYbw',
            category: 'Announcements',
            categoryId: 'DIC_kwDOL5JYb84C_POx',
            mapping: 'pathname',
            inputPosition: 'top',
            lang: 'zh-TW',
            strict: true,
            reactionsEnabled: true,
            emitMetadata: true,
            loading: 'lazy',
            homePageShowComment: false,
            lightTheme: 'light',
            darkTheme: 'transparent_dark',
        }, {
            frontmatter, route
        },
            true // 所有頁面啟用留言（除非 frontmatter 設置 comment: false）
        );
    }
};