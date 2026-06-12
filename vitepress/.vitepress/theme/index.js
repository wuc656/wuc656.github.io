// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'

export default {
    extends: DefaultTheme,

    enhanceApp({ app, router, siteData }) {
        // 使用 JavaScript 強制在第7個按鈕前換行並置中
        if (typeof window !== 'undefined') {
            setTimeout(() => {
                const actions = document.querySelector('.VPHomeHero .actions')
                if (actions) {
                    // 設定置中
                    actions.style.display = 'flex'
                    actions.style.flexWrap = 'wrap'
                    actions.style.justifyContent = 'center'

                    const buttons = actions.querySelectorAll('.action')
                    if (buttons.length >= 4) {
                        // 在第7個按鈕前插入一個換行元素
                        const br = document.createElement('div')
                        br.style.width = '100%'
                        br.style.height = '0'
                        buttons[3].parentNode.insertBefore(br, buttons[3])
                    }
                    if (buttons.length >= 7) {
                        // 在第7個按鈕前插入一個換行元素
                        const br = document.createElement('div')
                        br.style.width = '100%'
                        br.style.height = '0'
                        buttons[6].parentNode.insertBefore(br, buttons[6])
                    }
                    if (buttons.length >= 9) {
                        // 在第7個按鈕前插入一個換行元素
                        const br = document.createElement('div')
                        br.style.width = '100%'
                        br.style.height = '0'
                        buttons[8].parentNode.insertBefore(br, buttons[8])
                    }
                }
            }, 100)
        }
    }
}