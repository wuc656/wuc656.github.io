import DefaultTheme from 'vitepress/theme';
import giscusTalk from 'vitepress-plugin-comment-with-giscus';
import { useData, useRoute } from 'vitepress';
import '@theojs/lumen/style'
import { googleAnalytics } from '@theojs/lumen'


export default {
    extends: DefaultTheme,
    enhanceApp() {
        googleAnalytics({ id: 'G-9BBBQKGV7Y' });
    },
    setup() {
        const { frontmatter } = useData();
        const route = useRoute();
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
        }, { frontmatter, route }, true);
    }
};