<template>
  <div class="site-card tool-card" @click="skipDetail">
    <div class="tool-icon">
      <img
        :src="logo.replace('http://', 'https://') + '?timestamp=' + Date.parse(new Date()) / 1000"
        alt=""
      />
    </div>
    <div class="tool-body">
      <h3 class="tool-title">{{ title }}</h3>
      <p class="tool-desc">{{ desc }}</p>
    </div>
    <span class="tool-arrow">→</span>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const Props = defineProps({
  keyId: { type: String, default: '' },
  title: { type: String, default: '' },
  logo: { type: String, default: '' },
  desc: { type: String, default: '' },
})

function skipDetail() {
  router.push(`/ai-tool-item/${Props.keyId}/detail`)
}
</script>

<style scoped>
.tool-card {
  display: flex;
  align-items: center;
  padding: 16px;
  gap: 14px;
}

.tool-icon {
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  border-radius: 12px;
  overflow: hidden;
  background: #f4f4f5;
}

.tool-icon img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.tool-body {
  flex: 1;
  min-width: 0;
}

.tool-title {
  font-size: 0.9375rem;
  font-weight: 600;
  color: #09090b;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.tool-desc {
  font-size: 0.8125rem;
  color: #71717a;
  margin-top: 3px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 1.5;
}

.tool-arrow {
  flex-shrink: 0;
  font-size: 1rem;
  color: #a1a1aa;
  transition: color 0.15s, transform 0.15s;
}

.tool-card:hover .tool-arrow {
  color: #2563eb;
  transform: translateX(2px);
}
</style>
