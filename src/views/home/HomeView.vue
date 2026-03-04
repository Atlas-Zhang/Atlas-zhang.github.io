<template>
  <div class="w-full">
    <!-- ── Hero ─────────────────────────────────── -->
    <div class="hero">
      <div class="hero-inner">
        <h1 class="hero-title">智能工具平台</h1>
        <p class="hero-sub">AI 工具 · 技术教程 · 实用工具箱，一站式探索</p>
        <div class="hero-pills">
          <a class="hero-pill" @click="() => router.push('/ai-tools/list')">AI 工具</a>
          <a class="hero-pill" @click="() => router.push('/article/list')">文章教程</a>
          <a class="hero-pill" @click="() => router.push('/tool-box/list')">工具箱</a>
        </div>
      </div>
    </div>

    <!-- ── AI 工具 ────────────────────────────────── -->
    <section class="content-section">
      <div class="section-wrap">
        <div class="section-head">
          <div>
            <h2 class="section-title">AI 工具</h2>
            <p class="section-sub">发现最新 AI 工具与开源项目</p>
          </div>
          <a class="see-all" @click="() => router.push('/ai-tools/list')">查看全部 →</a>
        </div>
        <div class="card-grid">
          <HomeToolCardItem
            v-for="(item, index) in data.toolItems"
            :key="index"
            :title="item.title"
            :logo="item.logo"
            :desc="item.description"
            :key-id="item.id"
          />
        </div>
      </div>
    </section>

    <!-- ── 教程文章 ───────────────────────────────── -->
    <section class="content-section section-alt">
      <div class="section-wrap">
        <div class="section-head">
          <div>
            <h2 class="section-title">教程文章</h2>
            <p class="section-sub">技术文档与工具使用指南</p>
          </div>
          <a class="see-all" @click="() => router.push('/article/list')">查看全部 →</a>
        </div>
        <div class="card-grid">
          <HomeArticleCardItem
            v-for="(item, index) in data.articleItems"
            :key="index"
            :title="item.title"
            :author="item.author"
            :desc="item.description"
            :key-id="item.id"
          />
        </div>
      </div>
    </section>

    <!-- ── 实用工具 ───────────────────────────────── -->
    <section class="content-section">
      <div class="section-wrap">
        <div class="section-head">
          <div>
            <h2 class="section-title">实用工具</h2>
            <p class="section-sub">内嵌工具集，提升工作效率</p>
          </div>
          <a class="see-all" @click="() => router.push('/tool-box/list')">查看全部 →</a>
        </div>
        <div class="card-grid">
          <ToolBoxCardContentInfo
            v-for="(item, index) in data.toolBoxItemVos"
            :key="index"
            :title="item.title"
            :logo="item.logo"
            :desc="item.description"
            :key-id="item.id"
            :link="item.link"
          />
        </div>
      </div>
    </section>

    <footer class="site-footer">© 2024 智能工具平台 · 持续更新中</footer>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { _queryHomeItems } from '@/api/HomeApi.js'
import HomeArticleCardItem from '@/components/card/HomeArticleCardItem.vue'
import HomeToolCardItem from '@/components/card/HomeToolCardItem.vue'
import ToolBoxCardContentInfo from '@/components/card/ToolBoxCardContentInfo.vue'

const router = useRouter()
const data = ref({ toolItems: [], articleItems: [], toolBoxItemVos: [] })

async function getHomeData() {
  const result = await _queryHomeItems()
  if (result) {
    data.value.toolItems = result.tools
    data.value.articleItems = result.articleVos
    data.value.toolBoxItemVos = result.toolBoxItemVos
  }
}

onMounted(() => getHomeData())
</script>

<style scoped>
/* ── Hero ──────────────────────────────────────── */
.hero {
  background: linear-gradient(160deg, #0f0c29 0%, #1a1535 45%, #0d1b2e 100%);
  padding: 72px 20px 64px;
  text-align: center;
}

.hero-inner {
  max-width: 600px;
  margin: 0 auto;
}

.hero-title {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 700;
  color: #ffffff;
  letter-spacing: -0.03em;
  line-height: 1.15;
}

.hero-sub {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 12px;
}

.hero-pills {
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-top: 28px;
  flex-wrap: wrap;
}

.hero-pill {
  font-size: 0.875rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.7);
  background: rgba(255, 255, 255, 0.07);
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 999px;
  padding: 8px 20px;
  cursor: pointer;
  transition: background 0.15s, color 0.15s;
}

.hero-pill:hover {
  background: rgba(255, 255, 255, 0.14);
  color: #ffffff;
}

/* ── Sections ──────────────────────────────────── */
.content-section {
  background: #ffffff;
  padding: 48px 0;
}

.content-section.section-alt {
  background: #f9f9fb;
}

.section-wrap {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 24px;
  box-sizing: border-box;
}

.section-head {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 20px;
}

.section-title {
  font-size: 1.375rem;
  font-weight: 700;
  color: #09090b;
  letter-spacing: -0.02em;
}

.section-sub {
  font-size: 0.875rem;
  color: #a1a1aa;
  margin-top: 2px;
}

.see-all {
  font-size: 0.875rem;
  color: #2563eb;
  font-weight: 500;
  cursor: pointer;
  white-space: nowrap;
  flex-shrink: 0;
}

.see-all:hover { opacity: 0.75; }

/* ── Card grid ─────────────────────────────────── */
.card-grid {
  display: grid;
  /* minmax(0, 1fr) prevents tracks from expanding beyond their share */
  grid-template-columns: minmax(0, 1fr);
  gap: 12px;
}

@media (min-width: 640px) {
  .card-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 1024px) {
  .card-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

/* ── Footer ────────────────────────────────────── */
.site-footer {
  text-align: center;
  padding: 24px 20px;
  font-size: 0.8125rem;
  color: #a1a1aa;
  border-top: 1px solid #f0f0f2;
  background: #ffffff;
}
</style>
