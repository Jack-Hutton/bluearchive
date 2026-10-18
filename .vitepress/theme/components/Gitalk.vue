<template>
  <div class="giscus-container">
    <div class="giscus"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, watch, nextTick } from 'vue'
import { useRoute } from 'vitepress'

const route = useRoute()

const loadGiscus = () => {
  const container = document.querySelector('.giscus')
  if (container) container.innerHTML = ''
  
  const existingScript = document.querySelector('script[src="https://giscus.app/client.js"]')
  if (existingScript) existingScript.remove()

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
  script.crossOrigin = 'anonymous'
  script.async = true

  if (container) {
    container.appendChild(script)
  }
}

onMounted(() => {
  loadGiscus()
})

watch(
  () => route.path,
  () => {
    nextTick(() => {
      setTimeout(loadGiscus, 500)
    })
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
