<template>
  <div class="site-card article-card" @click="skipDetail">
    <div class="article-top">
      <h3 class="article-title">{{ title }}</h3>
      <p class="article-desc">{{ desc }}</p>
    </div>
    <div class="article-foot">
      <span class="article-author">{{ author }}</span>
      <span class="article-link">阅读全文 →</span>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const Props = defineProps({
  keyId: { type: String, default: '' },
  title: { type: String, default: '' },
  author: { type: String, default: '' },
  desc: { type: String, default: '' },
})

function skipDetail() {
  router.push(`/article/${Props.keyId}/detail`)
}
</script>

<style scoped>
.article-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 18px 20px;
  min-height: 116px;
}

.article-top {
  flex: 1;
}

.article-title {
  font-size: 0.9375rem;
  font-weight: 600;
  color: #09090b;
  line-height: 1.45;
}

.article-desc {
  font-size: 0.8125rem;
  color: #71717a;
  margin-top: 6px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 1.55;
}

.article-foot {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 14px;
}

.article-author {
  font-size: 0.75rem;
  color: #a1a1aa;
}

.article-link {
  font-size: 0.8125rem;
  font-weight: 500;
  color: #2563eb;
  transition: opacity 0.15s;
}

.article-card:hover .article-link {
  opacity: 0.75;
}
</style>
