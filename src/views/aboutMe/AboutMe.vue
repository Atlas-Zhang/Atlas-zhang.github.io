<template>
  <div class="page">

    <!-- ── Hero ─────────────────────────────────────── -->
    <section class="hero">
      <div class="hero-glow" />
      <div class="hero-inner">
        <p class="hero-eyebrow">About Me</p>
        <h1 class="hero-headline">Atlas Zhang</h1>
        <p class="hero-sub">Frontend · Backend · DevOps · CV Algorithm</p>
        <div class="hero-chips">
          <span v-for="s in heroSkills" :key="s">{{ s }}</span>
        </div>
        <a class="github-btn" href="https://github.com/Largefreedom" target="_blank" rel="noopener">
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
          </svg>
          GitHub
          <svg class="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M7 17L17 7M17 7H7M17 7v10" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
      </div>
    </section>

    <!-- ── Main ──────────────────────────────────────── -->
    <main class="main">

      <!-- Bio -->
      <section class="block">
        <h2 class="block-label">技术栈</h2>
        <div class="bio-list">
          <div class="bio-row">
            <span class="bio-key">专业方向</span>
            <span class="bio-val">前端 React / Vue · 后端 Spring Boot / Django · 运维 · CV 算法</span>
          </div>
          <div class="bio-row">
            <span class="bio-key">编程语言</span>
            <span class="bio-val">Python · Java · JavaScript · HTML · CSS</span>
          </div>
          <div class="bio-row">
            <span class="bio-key">数据库</span>
            <span class="bio-val">MySQL · Redis · MongoDB</span>
          </div>
        </div>
      </section>

      <!-- Identity -->
      <section class="block">
        <h2 class="block-label">个人标签</h2>
        <div class="tag-row">
          <span class="tag">Software Engineer</span>
          <span class="tag">English Learner</span>
          <span class="tag">Book Reader</span>
        </div>
      </section>

      <!-- Projects -->
      <section class="block">
        <h2 class="block-label">个人项目 <span class="block-note">业余开发</span></h2>

        <!-- Project 1 -->
        <div class="proj-card">
          <div class="proj-meta">
            <div class="proj-head">
              <span class="proj-num">01</span>
              <div>
                <h3 class="proj-name">SD 绘画助手</h3>
                <p class="proj-type">微信小程序</p>
              </div>
            </div>
            <p class="proj-desc">用于展示 Stable Diffusion AI 绘画作品壁纸上传、技术博客预览，SD 模型上传，ComfyUI 工作流上传等功能</p>
            <p class="proj-stack">uni-app · Vue3 · Tailwindcss · Spring Boot · MySQL · Redis · Nginx · Ant-design-vue</p>
            <div class="badge-row">
              <span class="badge">小程序</span>
              <span class="badge">壁纸 · 模型下载</span>
            </div>
            <div class="qr-wrap">
              <p class="qr-label">微信扫码体验</p>
              <img class="qr-img" src="../../../public/sd_qr_code.jpg" alt="QR code" />
            </div>
          </div>
          <div class="gallery">
            <div class="gallery-track" :style="{ transform: `translateX(-${slides1 * 100}%)` }">
              <div class="gallery-slide" v-for="(item, i) in project1Data.pics" :key="i">
                <img :src="'/sd_mini/' + item.img" loading="lazy" />
                <div class="slide-caption">{{ item.title }}</div>
              </div>
            </div>
            <button class="nav-btn nav-prev" @click="prev(slides1, project1Data.pics.length, v => slides1 = v)" aria-label="prev">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M15 18l-6-6 6-6" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </button>
            <button class="nav-btn nav-next" @click="next(slides1, project1Data.pics.length, v => slides1 = v)" aria-label="next">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M9 18l6-6-6-6" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </button>
            <div class="dots">
              <span v-for="(_, i) in project1Data.pics" :key="i" class="dot" :class="{ active: i === slides1 }" @click="slides1 = i" />
            </div>
          </div>
        </div>

        <!-- Project 4 -->
        <div class="proj-card">
          <div class="proj-meta">
            <div class="proj-head">
              <span class="proj-num">02</span>
              <div>
                <h3 class="proj-name">在线简历网站</h3>
                <p class="proj-type">个人简历 · 网站</p>
              </div>
            </div>
            <p class="proj-desc">基于现代前端技术栈构建的在线简历展示平台，支持项目展示、技能介绍、工作经历等模块，响应式布局适配多端访问</p>
            <p class="proj-stack">Vue3 · Vite · Tailwind CSS</p>
            <div class="badge-row">
              <span class="badge">网站</span>
              <span class="badge badge-blue">响应式</span>
            </div>
          </div>
          <div class="gallery">
            <div class="gallery-track" :style="{ transform: `translateX(-${slides4 * 100}%)` }">
              <div class="gallery-slide" v-for="(item, i) in project4Data.pics" :key="i">
                <img :src="'/resume_web/' + item.img" loading="lazy" />
                <div class="slide-caption">{{ item.title }}</div>
              </div>
            </div>
            <button class="nav-btn nav-prev" @click="prev(slides4, project4Data.pics.length, v => slides4 = v)" aria-label="prev">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M15 18l-6-6 6-6" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </button>
            <button class="nav-btn nav-next" @click="next(slides4, project4Data.pics.length, v => slides4 = v)" aria-label="next">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M9 18l6-6-6-6" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </button>
            <div class="dots">
              <span v-for="(_, i) in project4Data.pics" :key="i" class="dot" :class="{ active: i === slides4 }" @click="slides4 = i" />
            </div>
          </div>
        </div>

        <!-- Project 5 -->
        <div class="proj-card">
          <div class="proj-meta">
            <div class="proj-head">
              <span class="proj-num">03</span>
              <div>
                <h3 class="proj-name">Live Swap</h3>
                <p class="proj-type">Windows 桌面应用 · 实时换脸 / 换装</p>
              </div>
            </div>
            <p class="proj-desc">本地实时换脸、换发、换装与变声工具，通过摄像头对画面进行四阶段流水线处理——发型替换、人脸交换、服装叠加、帧平滑，全程离线运行无需联网</p>
            <p class="proj-stack">Python · PyQt6 · InsightFace · SegFormer · YOLOv8 · ONNX Runtime · OpenCV · Pedalboard</p>
            <div class="badge-row">
              <span class="badge">Windows</span>
              <span class="badge">本地推理</span>
              <span class="badge badge-blue">实时换脸</span>
              <span class="badge">变声器</span>
            </div>
            <a class="proj-github-link" href="https://github.com/Largefreedom/FaceSwap" target="_blank" rel="noopener">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
              </svg>
              View on GitHub
              <svg class="proj-link-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M7 17L17 7M17 7H7M17 7v10" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
          </div>
          <div class="gallery">
            <div class="gallery-track" :style="{ transform: `translateX(-${slides5 * 100}%)` }">
              <div class="gallery-slide" v-for="(item, i) in project5Data.pics" :key="i">
                <img :src="'/live-swap/' + item.img" loading="lazy" />
                <div class="slide-caption">{{ item.title }}</div>
              </div>
            </div>
            <button class="nav-btn nav-prev" @click="prev(slides5, project5Data.pics.length, v => slides5 = v)" aria-label="prev">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M15 18l-6-6 6-6" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </button>
            <button class="nav-btn nav-next" @click="next(slides5, project5Data.pics.length, v => slides5 = v)" aria-label="next">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M9 18l6-6-6-6" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </button>
            <div class="dots">
              <span v-for="(_, i) in project5Data.pics" :key="i" class="dot" :class="{ active: i === slides5 }" @click="slides5 = i" />
            </div>
          </div>
        </div>


        <!-- Project 2 -->
        <div class="proj-card">
          <div class="proj-meta">
            <div class="proj-head">
              <span class="proj-num">04</span>
              <div>
                <h3 class="proj-name">智能图像工具箱</h3>
                <p class="proj-type">AI 图像处理网站</p>
              </div>
            </div>
            <p class="proj-desc">集成多个 CV 模型：AI 换脸、扩图、抠图、更换背景、智能换装等功能，通过 API 与后端 CV 模型推理交互</p>
            <p class="proj-stack">React · Material UI · Django · Redis · ComfyUI · MySQL</p>
            <div class="badge-row">
              <span class="badge">网站</span>
              <span class="badge badge-blue">AI + 图像处理</span>
            </div>
          </div>
          <div class="gallery">
            <div class="gallery-track" :style="{ transform: `translateX(-${slides2 * 100}%)` }">
              <div class="gallery-slide" v-for="(item, i) in project2Data.pics" :key="i">
                <img :src="'/ai_tools/' + item.img" loading="lazy" />
                <div class="slide-caption">{{ item.title }}</div>
              </div>
            </div>
            <button class="nav-btn nav-prev" @click="prev(slides2, project2Data.pics.length, v => slides2 = v)" aria-label="prev">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M15 18l-6-6 6-6" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </button>
            <button class="nav-btn nav-next" @click="next(slides2, project2Data.pics.length, v => slides2 = v)" aria-label="next">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M9 18l6-6-6-6" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </button>
            <div class="dots">
              <span v-for="(_, i) in project2Data.pics" :key="i" class="dot" :class="{ active: i === slides2 }" @click="slides2 = i" />
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- ── Footer ────────────────────────────────────── -->
    <footer class="footer">
      <div class="footer-divider" />
      <p class="footer-contact">个人微信 · a460467324</p>
      <p class="footer-note">更多内容持续补充中...</p>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const heroSkills = ['Python', 'Java', 'JavaScript', 'React', 'Vue', 'Spring Boot', 'Django', 'MySQL']

const slides1 = ref(0)
const slides2 = ref(0)
const slides3 = ref(0)
const slides4 = ref(0)
const slides5 = ref(0)

function prev(current, total, set) {
  set(current <= 0 ? total - 1 : current - 1)
}
function next(current, total, set) {
  set(current >= total - 1 ? 0 : current + 1)
}

const project1Data = ref({
  pics: [
    { title: 'Lora 模型预览下载', img: '1.jpg' },
    { title: 'ComfyUI 工作流预览下载', img: '2.jpg' },
    { title: '个人中心', img: '3.jpg' },
    { title: 'Mini Program 首页', img: '4.jpg' },
    { title: '模型 / 工作流列表', img: '5.jpg' },
    { title: 'AI 作品详情', img: '6.jpg' },
  ],
})

const project2Data = ref({
  pics: [
    { title: '首页一', img: '1.jpg' },
    { title: '首页二', img: '2.jpg' },
    { title: 'AI 扩图（处理中）', img: '3.jpg' },
    { title: 'AI 扩图（已完成）', img: '4.jpg' },
    { title: 'AI 分割人像，可指定背景（处理中）', img: '6.jpg' },
    { title: 'AI 分割人像，可指定背景（已完成）', img: '7.jpg' },
    { title: '多图拼接海报', img: '5.jpg' },
  ],
})

const project4Data = ref({
  pics: [
    { title: '页面一', img: '1.jpg' },
    { title: '页面二', img: '2.jpg' },
    { title: '页面三', img: '3.jpg' },
    { title: '页面四', img: '4.jpg' },
    { title: '页面五', img: '5.jpg' },
    { title: '页面六', img: '6.jpg' },
    { title: '页面七', img: '7.jpg' },
  ],
})

const project5Data = ref({
  pics: [
    { title: '原始摄像头（全效果关闭）', img: '3.jpg' },
    { title: '人脸交换已开启', img: '1.jpg' },
    { title: '换脸 + 换发 + 变声全开', img: '2.jpg' },
    { title: '切换不同源人脸', img: '4.jpg' },
  ],
})
</script>

<style scoped>
/* ─── Base ─────────────────────────────────────────── */
.page {
  min-height: 100vh;
  background: #000;
  color: #f5f5f7;
  font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text',
    'Helvetica Neue', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
}

/* ─── Hero ─────────────────────────────────────────── */
.hero {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 52px 24px 44px;
  overflow: hidden;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.hero-glow {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse 90% 55% at 50% -5%, rgba(41, 151, 255, 0.18), transparent 65%);
  pointer-events: none;
}

.hero-inner {
  position: relative;
  max-width: 900px;
  animation: fadeUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}

.hero-eyebrow {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #2997ff;
  margin-bottom: 22px;
}

.hero-headline {
  font-size: clamp(2.2rem, 6vw, 3.8rem);
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.08;
  color: #f5f5f7;
  margin-bottom: 18px;
}

.hero-sub {
  font-size: 1.125rem;
  color: #86868b;
  letter-spacing: 0.01em;
  margin-bottom: 36px;
  font-weight: 300;
}

.hero-chips {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
}

.hero-chips span {
  font-size: 0.8rem;
  font-weight: 500;
  padding: 5px 14px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  color: #a1a1a6;
  letter-spacing: 0.02em;
  transition: border-color 0.2s, color 0.2s;
}
.hero-chips span:hover {
  border-color: rgba(41, 151, 255, 0.4);
  color: #f5f5f7;
}

.github-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 28px;
  padding: 10px 22px;
  border-radius: 980px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  background: rgba(255, 255, 255, 0.06);
  color: #f5f5f7;
  font-size: 0.9rem;
  font-weight: 500;
  text-decoration: none;
  letter-spacing: 0.01em;
  transition: background 0.2s, border-color 0.2s, transform 0.2s;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}
.github-btn svg:first-child {
  width: 18px;
  height: 18px;
  flex-shrink: 0;
}
.github-btn .arrow-icon {
  width: 13px;
  height: 13px;
  flex-shrink: 0;
  color: #636366;
  transition: transform 0.2s, color 0.2s;
}
.github-btn:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.3);
  transform: translateY(-1px);
}
.github-btn:hover .arrow-icon {
  transform: translate(2px, -2px);
  color: #f5f5f7;
}

/* ─── Main ─────────────────────────────────────────── */
.main {
  max-width: 1280px;
  margin: 0 auto;
  padding: 36px 40px 48px;
}

/* ─── Block ─────────────────────────────────────────── */
.block {
  margin-bottom: 48px;
}

.block-label {
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #636366;
  margin-bottom: 18px;
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.block-note {
  font-weight: 400;
  letter-spacing: 0;
  text-transform: none;
  font-size: 0.6875rem;
  color: #3a3a3c;
}

/* ─── Bio ───────────────────────────────────────────── */
.bio-list {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 16px;
  padding: 24px 28px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.bio-row {
  display: flex;
  gap: 20px;
  align-items: baseline;
}

.bio-key {
  font-size: 0.8125rem;
  color: #636366;
  min-width: 58px;
  flex-shrink: 0;
}

.bio-val {
  font-size: 0.9375rem;
  color: #d1d1d6;
  line-height: 1.55;
}

/* ─── Tags ──────────────────────────────────────────── */
.tag-row {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.tag {
  font-size: 0.875rem;
  font-weight: 500;
  padding: 7px 18px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  color: #c7c7cc;
  transition: border-color 0.2s, color 0.2s, background 0.2s;
}
.tag:hover {
  background: rgba(255, 255, 255, 0.07);
  border-color: rgba(255, 255, 255, 0.18);
  color: #f5f5f7;
}

/* ─── Project Cards ─────────────────────────────────── */
.proj-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  margin-bottom: 20px;
  overflow: hidden;
  transition: border-color 0.25s;
}
.proj-card:hover {
  border-color: rgba(255, 255, 255, 0.13);
}

.proj-meta {
  padding: 24px 28px 20px;
}

.proj-head {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 12px;
}

.proj-num {
  font-size: 0.6875rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: #2997ff;
  padding-top: 5px;
  flex-shrink: 0;
}

.proj-name {
  font-size: 1.125rem;
  font-weight: 700;
  color: #f5f5f7;
  letter-spacing: -0.015em;
  line-height: 1.2;
}

.proj-type {
  font-size: 0.8125rem;
  color: #636366;
  margin-top: 3px;
}

.proj-desc {
  font-size: 0.9rem;
  color: #a1a1a6;
  line-height: 1.7;
  margin-bottom: 8px;
}

.proj-stack {
  font-size: 0.75rem;
  color: #48484a;
  margin-bottom: 14px;
  line-height: 1.5;
}

/* ─── Badges ────────────────────────────────────────── */
.badge-row {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 14px;
}

.badge {
  font-size: 0.725rem;
  font-weight: 500;
  padding: 3px 11px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  color: #86868b;
}

.badge-blue {
  background: rgba(41, 151, 255, 0.1);
  border-color: rgba(41, 151, 255, 0.25);
  color: #2997ff;
}

/* ─── Project GitHub link ───────────────────────────── */
.proj-github-link {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  margin-top: 14px;
  padding: 6px 14px 6px 11px;
  border-radius: 980px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.04);
  color: #a1a1a6;
  font-size: 0.8125rem;
  font-weight: 500;
  text-decoration: none;
  transition: background 0.2s, border-color 0.2s, color 0.2s;
}
.proj-github-link svg:first-child {
  width: 15px;
  height: 15px;
  flex-shrink: 0;
}
.proj-link-arrow {
  width: 11px;
  height: 11px;
  flex-shrink: 0;
  color: #48484a;
  transition: transform 0.2s, color 0.2s;
}
.proj-github-link:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.22);
  color: #f5f5f7;
}
.proj-github-link:hover .proj-link-arrow {
  transform: translate(2px, -2px);
  color: #f5f5f7;
}

/* ─── QR ────────────────────────────────────────────── */
.qr-wrap {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 0;
}

.qr-label {
  font-size: 0.8125rem;
  color: #636366;
}

.qr-img {
  width: 76px;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: #fff;
  padding: 4px;
}

/* ─── Gallery (custom carousel) ─────────────────────── */
.gallery {
  position: relative;
  overflow: hidden;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  background: #0a0a0a;
  /* height is driven by the slide images */
}

.gallery-track {
  display: flex;
  transition: transform 0.48s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  will-change: transform;
}

.gallery-slide {
  min-width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 280px;
  background: #0a0a0a;
}

.gallery-slide img {
  display: block;
  max-height: 480px;
  width: auto;
  max-width: 100%;
  object-fit: contain;
  /* subtle padding so image doesn't hard-clip at card edges */
  padding: 20px 0;
}

/* gradient caption overlay */
.slide-caption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 36px 20px 14px;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.72) 0%, transparent 100%);
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.55);
  text-align: center;
  pointer-events: none;
}

/* ─── Nav Buttons ───────────────────────────────────── */
.nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 38px;
  height: 38px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.16);
  background: rgba(10, 10, 10, 0.72);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: #f5f5f7;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.2s, border-color 0.2s, transform 0.2s;
  z-index: 10;
  padding: 0;
}
.nav-btn svg {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
}
.nav-prev { left: 14px; }
.nav-next { right: 14px; }

.nav-btn:hover {
  background: rgba(41, 151, 255, 0.28);
  border-color: rgba(41, 151, 255, 0.5);
  transform: translateY(-50%) scale(1.07);
}
.nav-btn:active {
  transform: translateY(-50%) scale(0.96);
}

/* ─── Dots ──────────────────────────────────────────── */
.dots {
  position: absolute;
  bottom: 12px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 5px;
  z-index: 10;
}

.dot {
  width: 5px;
  height: 5px;
  border-radius: 3px;
  background: rgba(255, 255, 255, 0.28);
  cursor: pointer;
  transition: width 0.28s cubic-bezier(0.25, 0.46, 0.45, 0.94), background 0.28s;
}

.dot.active {
  width: 18px;
  background: #2997ff;
}

/* ─── Footer ────────────────────────────────────────── */
.footer {
  text-align: center;
  padding: 0 24px 72px;
}

.footer-divider {
  height: 1px;
  background: rgba(255, 255, 255, 0.06);
  margin-bottom: 36px;
}

.footer-contact {
  font-size: 0.875rem;
  color: #48484a;
  margin-bottom: 6px;
}

.footer-note {
  font-size: 0.75rem;
  color: #3a3a3c;
}

/* ─── Animation ─────────────────────────────────────── */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* ─── Mobile ────────────────────────────────────────── */
@media (max-width: 700px) {
  .main {
    padding: 28px 16px 40px;
  }

  .bio-list {
    padding: 18px 20px;
  }

  .bio-row {
    flex-direction: column;
    gap: 4px;
  }

  .bio-key {
    min-width: unset;
  }

  .proj-meta {
    padding: 18px 18px 16px;
  }

  .gallery-slide img {
    max-height: 300px;
  }

  .nav-btn {
    width: 32px;
    height: 32px;
  }
  .nav-btn svg {
    width: 13px;
    height: 13px;
  }
}
</style>
