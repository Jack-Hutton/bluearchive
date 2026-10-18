// https://vitepress.dev/guide/custom-theme
import Layout from './Layout.vue'
// 强行劫持并插入 Giscus
const OriginalLayout = Layout;
const NewLayout = {
  ...OriginalLayout,
  setup(props: any, { slots }: any) {
    import { onMounted } from 'vue';
    onMounted(() => {
      const timer = setInterval(() => {
        const content = document.querySelector('.vp-doc');
        // 如果页面有正文，并且还没有评论框，就塞进去
        if (content && !document.querySelector('.giscus')) {
          const div = document.createElement('div');
          div.className = 'giscus';
          div.style.marginTop = '40px';
          content.appendChild(div);
          
          const script = document.createElement('script');
          script.src = 'https://giscus.app/client.js';
          script.setAttribute('data-repo', 'Jack-Hutton/bluearchive');
          script.setAttribute('data-repo-id', 'R_kgDOVNiH6w');
          script.setAttribute('data-category', 'Announcements');
          script.setAttribute('data-category-id', 'DIC_kwDOVNiH684DI23f');
          script.setAttribute('data-mapping', 'pathname');
          script.setAttribute('data-strict', '0');
          script.setAttribute('data-reactions-enabled', '1');
          script.setAttribute('data-emit-metadata', '0');
          script.setAttribute('data-input-position', 'bottom');
          script.setAttribute('data-theme', 'preferred_color_scheme');
          script.setAttribute('data-lang', 'zh-CN');
          script.crossOrigin = 'anonymous';
          script.async = true;
          div.appendChild(script);
          
          clearInterval(timer); // 塞进去之后停止寻找
        }
      }, 500);
    });
    // 这里调用原版 Layout 的 setup，确保原页面功能正常
    return (OriginalLayout as any).setup?.(props, { slots, expose: () => {} });
  }
};

export default {
  Layout: NewLayout, // 使用我们修改后的 Layout
  enhanceApp({ app, router, siteData }) {
    // ...
  },
} satisfies Theme
import type { Theme } from 'vitepress'
import 'normalize.css'
import '@fontsource/jetbrains-mono'
import './assets/icon/iconfont.css'
import './styles/index.less'
import './components/Spine-Player/spine-player.css'

