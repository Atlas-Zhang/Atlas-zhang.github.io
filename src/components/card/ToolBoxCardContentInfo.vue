<template>
  <div class="site-card tool-card" @click="routerPush">
    <div class="tool-icon">
      <img
        :src="logo.replace('http://', 'https://') + '?timestamp=' + Date.parse(new Date()) / 1000"
        alt=""
      />
    </div>
    <div class="tool-body">
      <el-tooltip effect="light" :content="title" placement="top">
        <h3 class="tool-title">{{ title }}</h3>
      </el-tooltip>
      <el-tooltip effect="light" :content="desc" placement="bottom">
        <p class="tool-desc">{{ desc }}</p>
      </el-tooltip>
      <div class="tool-tags" v-if="tags && tags.length">
        <span
          v-for="(tag, i) in tags"
          :key="i"
          class="tag"
          :style="{ backgroundColor: tag.color }"
        >{{ tag.name }}</span>
      </div>
    </div>
    <span class="tool-arrow">→</span>
  </div>
</template>

<script setup>
import { defineProps, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const Props = defineProps({
  title: { type: String, default: '' },
  tags: { type: Array, default: () => [] },
  logo: { type: String, default: '' },
  link: { type: String, default: '' },
  desc: { type: String, default: '' },
  itemId: { type: String, default: '' },
})

function routerPush() {
  if (Props.link) router.push(Props.link)
}

onMounted(() => {})
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
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.tool-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-top: 6px;
}

.tag {
  font-size: 0.6875rem;
  font-weight: 500;
  color: #ffffff;
  padding: 2px 8px;
  border-radius: 4px;
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
