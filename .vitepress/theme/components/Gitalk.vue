<template>
  <div class="giscus-container">
    <div class="giscus"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, watch } from 'vue'
import { useRoute } from 'vitepress'

const route = useRoute()

const loadGiscus = () => {
  // 清除之前的评论框（切换页面时防止叠加）
  const container = document.querySelector('.giscus')
  if (container) container.innerHTML = ''

  // 创建 Giscus 脚本
  const script = document.createElement('script')
  script.src = 'https://giscus.app/client.js'
  script.setAttribute('data-repo', 'Jack-Hutton/bluearchive')
  script.setAttribute('data-repo-id', 'R_kgDOVNiH6w')
  script.setAttribute('data-category', 'Announcements')
  script.setAttribute('data-category-id', 'DIC_kwDOVNiH684DI23f')
  script.setAttribute('data-mapping', 'pathname')
  script.setAttribute('data-strict', '0')
  script.setAttribute('data-reactions-enabled', '1')
  script.setAttribute('data-emit-metadata', '0')
  script.setAttribute('data-input-position', 'bottom')
  script.setAttribute('data-theme', 'preferred_color_scheme')
  script.setAttribute('data-lang', 'zh-CN')
  script.setAttribute('crossorigin', 'anonymous')
  script.async = true

  // 把脚本塞进容器里
  if (container) {
    container.appendChild(script)
  }
}

onMounted(() => {
  loadGiscus()
})

// 监听路由变化，切换到新文章时重新加载评论
watch(
  () => route.path,
  () => {
    setTimeout(loadGiscus, 500)
  }
)
</script>

<style scoped>
.giscus-container {
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px dashed var(--vp-c-divider);
}
</style>
