<template>
  <div class="detail-page">
    <div class="detail-container">

      <!-- Back -->
      <a class="back-link" @click="() => router.push('/article/list')">
        <ArrowSmallLeftIcon class="w-4 h-4" />
        返回列表
      </a>

      <!-- Article -->
      <article class="article-card">
        <h1 class="article-title">{{ itemData.title }}</h1>

        <div class="article-meta">
          <span>{{ itemData.author }}</span>
          <span class="meta-dot">·</span>
          <span>发表于 {{ itemData.createAt }}</span>
          <span class="meta-dot">·</span>
          <span>更新于 {{ itemData.updateAt }}</span>
        </div>

        <div class="article-divider"></div>

        <div class="article-body" v-html="itemData.htmlContent" v-highlight></div>
      </article>

      <!-- Comments -->
      <section class="comment-card">
        <h2 class="comment-heading">用户评论</h2>
        <CommentConf
          :relate-id="articleId"
          :type-name="itemData.title"
          :data-type="'ARTICLE'"
        />
      </section>

    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, defineProps, getCurrentInstance } from 'vue'
import { initFlowbite } from 'flowbite'
import { ArrowSmallLeftIcon } from '@heroicons/vue/24/solid'
import { assignCopy } from '@/utils/util.js'
import { _likeArticle, _cancelLikeArticle, _queryArticleItem } from '@/api/items/ArticleItemApi.js'
import { useRouter } from 'vue-router'
import { ElLoading } from 'element-plus'
import CommentConf from '@/components/tools/CommentConf.vue'

const router = useRouter()
const { proxy } = getCurrentInstance()
const Props = defineProps({
  articleId: { type: String, default: '' }
})

const itemData = ref({
  tags: [],
  title: '',
  author: '',
  type: '',
  description: '',
  content: '',
  createAt: '',
  htmlContent: '',
  updateAt: '',
  isLike: 'NO',
  favoriNum: 0,
})

async function queryData() {
  if (Props.articleId) {
    const loading = ElLoading.service({
      lock: true, text: '加载中', background: 'rgba(0, 0, 0, 0.3)'
    })
    const result = await _queryArticleItem(Props.articleId)
    if (result) {
      itemData.value = assignCopy(result, itemData.value)
      loading.close()
    }
  }
}

onMounted(async () => {
  initFlowbite()
  queryData()
})
</script>

<style scoped>
/* ── Page shell ──────────────────────────────── */
.detail-page {
  min-height: 100vh;
  background: #f4f5f7;
  padding: 32px 20px 80px;
}

.detail-container {
  max-width: 760px;
  margin: 0 auto;
}

/* ── Back link ───────────────────────────────── */
.back-link {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 0.875rem;
  font-weight: 500;
  color: #71717a;
  cursor: pointer;
  margin-bottom: 20px;
  transition: color 0.15s;
}

.back-link:hover {
  color: #09090b;
}

/* ── Article card ────────────────────────────── */
.article-card {
  background: #ffffff;
  border-radius: 14px;
  border: 1px solid #e4e4e7;
  padding: 40px 48px;
}

.article-title {
  font-size: 1.875rem;
  font-weight: 700;
  color: #09090b;
  letter-spacing: -0.025em;
  line-height: 1.25;
}

.article-meta {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 12px;
  font-size: 0.875rem;
  color: #a1a1aa;
}

.meta-dot {
  color: #d4d4d8;
}

.article-divider {
  height: 1px;
  background: #f4f4f5;
  margin: 24px 0;
}

/* ── Article body ────────────────────────────── */
.article-body {
  font-size: 1rem;
  line-height: 1.8;
  color: #3f3f46;
  word-break: break-word;
  overflow-wrap: break-word;
}

/* Headings */
.article-body :deep(h1),
.article-body :deep(h2),
.article-body :deep(h3),
.article-body :deep(h4) {
  font-weight: 700;
  color: #09090b;
  letter-spacing: -0.015em;
  margin-top: 2em;
  margin-bottom: 0.6em;
  line-height: 1.3;
}

.article-body :deep(h1) { font-size: 1.625rem; }
.article-body :deep(h2) { font-size: 1.375rem; border-bottom: 1px solid #f4f4f5; padding-bottom: 0.4em; }
.article-body :deep(h3) { font-size: 1.125rem; }
.article-body :deep(h4) { font-size: 1rem; }

/* Paragraphs */
.article-body :deep(p) {
  margin-top: 0;
  margin-bottom: 1.25em;
  white-space: pre-wrap;
  overflow-wrap: break-word;
}

/* Lists */
.article-body :deep(ul),
.article-body :deep(ol) {
  padding-left: 1.5em;
  margin-bottom: 1.25em;
}

.article-body :deep(li) {
  margin-bottom: 0.35em;
}

.article-body :deep(li p) {
  margin-top: 0;
  margin-bottom: 0;
  white-space: pre-wrap;
  overflow-wrap: break-word;
}

/* Code inline */
.article-body :deep(code) {
  font-family: 'SF Mono', 'Fira Code', 'Consolas', monospace;
  font-size: 0.875em;
  background: #f4f4f5;
  color: #e11d48;
  padding: 2px 6px;
  border-radius: 4px;
}

/* Code block */
.article-body :deep(pre) {
  background: #18181b;
  border-radius: 10px;
  padding: 20px 24px;
  overflow-x: auto;
  margin-bottom: 1.5em;
}

.article-body :deep(pre code) {
  background: none;
  color: #e4e4e7;
  padding: 0;
  font-size: 0.875rem;
  line-height: 1.65;
}

/* Blockquote */
.article-body :deep(blockquote) {
  border-left: 3px solid #2563eb;
  padding-left: 16px;
  margin-left: 0;
  color: #71717a;
  font-style: italic;
  margin-bottom: 1.25em;
}

/* Links */
.article-body :deep(a) {
  color: #2563eb;
  text-decoration: underline;
  text-underline-offset: 2px;
}

/* Images */
.article-body :deep(img) {
  max-width: 100%;
  border-radius: 8px;
  border: 1px solid #e4e4e7;
  margin: 8px 0;
}

/* Tables */
.article-body :deep(table) {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.9375rem;
  margin-bottom: 1.5em;
}

.article-body :deep(th) {
  background: #f4f4f5;
  font-weight: 600;
  color: #09090b;
  text-align: left;
  padding: 10px 14px;
  border: 1px solid #e4e4e7;
}

.article-body :deep(td) {
  padding: 9px 14px;
  border: 1px solid #e4e4e7;
  color: #3f3f46;
}

/* ── Comment card ────────────────────────────── */
.comment-card {
  background: #ffffff;
  border-radius: 14px;
  border: 1px solid #e4e4e7;
  padding: 32px 48px;
  margin-top: 20px;
}

.comment-heading {
  font-size: 1.0625rem;
  font-weight: 700;
  color: #09090b;
  margin-bottom: 20px;
  padding-bottom: 14px;
  border-bottom: 1px solid #f4f4f5;
}

/* ── Mobile ──────────────────────────────────── */
@media (max-width: 640px) {
  .article-card,
  .comment-card {
    padding: 24px 20px;
  }

  .article-title {
    font-size: 1.5rem;
  }
}
</style>
