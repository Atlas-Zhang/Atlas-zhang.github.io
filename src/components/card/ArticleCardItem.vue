<template>
  <div class="site-card article-card" @click="() => router.push(`/article/${articleId}/detail`)">
    <div class="article-head" v-if="type === 'VIP'">
      <span class="vip-badge">VIP</span>
    </div>
    <h3 class="article-title">{{ title }}</h3>
    <p class="article-desc">{{ desc }}</p>
    <span class="article-link">阅读全文 →</span>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
defineProps({
  title: { type: String, default: '' },
  desc: { type: String, default: '' },
  type: { type: String, default: 'NORMAL' },
  articleId: { type: String, default: '' },
})
</script>

<style scoped>
.article-card {
  padding: 18px 20px;
  margin-bottom: 10px;
}

.article-head {
  margin-bottom: 6px;
}

.vip-badge {
  font-size: 0.6875rem;
  font-weight: 700;
  color: #ef4444;
  background: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: 4px;
  padding: 1px 6px;
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

.article-link {
  display: inline-block;
  margin-top: 12px;
  font-size: 0.8125rem;
  font-weight: 500;
  color: #2563eb;
}

.article-card:hover .article-link {
  opacity: 0.75;
}
</style>
