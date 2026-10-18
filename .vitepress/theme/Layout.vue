<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import Gitalk from './components/Gitalk.vue'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <!-- 在默认布局的底部插槽中，强行塞入评论区 -->
    <template #doc-footer-before>
      <Gitalk />
    </template>
  </Layout>
</template>
