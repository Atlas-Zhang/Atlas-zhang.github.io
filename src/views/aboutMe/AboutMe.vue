<template>
  <div class="page">
    <section class="hero">
      <div class="hero-glow" />
      <div class="language-switch" :aria-label="content.aria.languageSwitch">
        <button
          v-for="item in languages"
          :key="item"
          class="language-btn"
          :class="{ active: language === item }"
          type="button"
          @click="setLanguage(item)"
        >
          {{ siteContent.languageLabels[item] }}
        </button>
      </div>

      <div class="hero-inner">
        <p class="hero-eyebrow">{{ content.hero.eyebrow }}</p>
        <h1 class="hero-headline">{{ profile.name }}</h1>
        <p class="hero-sub">{{ content.hero.subtitle }}</p>
        <div class="hero-chips">
          <span v-for="skill in shared.heroSkills" :key="skill">{{ skill }}</span>
        </div>
        <a class="github-btn" :href="profile.githubUrl" target="_blank" rel="noopener">
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path :d="assets.icons.githubPath" />
          </svg>
          {{ content.hero.githubLabel }}
          <svg class="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M7 17L17 7M17 7H7M17 7v10" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </a>
      </div>
    </section>

    <main class="main">
      <section class="block">
        <h2 class="block-label">{{ content.sections.techStack }}</h2>
        <div class="bio-list">
          <div v-for="item in content.bio" :key="item.key" class="bio-row">
            <span class="bio-key">{{ item.key }}</span>
            <span class="bio-val">{{ item.value }}</span>
          </div>
        </div>
      </section>

      <section class="block">
        <h2 class="block-label">{{ content.sections.identity }}</h2>
        <div class="tag-row">
          <span v-for="tag in shared.identityTags" :key="tag" class="tag">{{ tag }}</span>
        </div>
      </section>

      <section class="block">
        <h2 class="block-label">
          {{ content.sections.projects }}
          <span class="block-note">{{ content.sections.projectNote }}</span>
        </h2>

        <article v-for="project in content.projects" :key="project.key" class="proj-card">
          <div class="proj-meta">
            <div class="proj-head">
              <span class="proj-num">{{ project.number }}</span>
              <div>
                <h3 class="proj-name">{{ project.name }}</h3>
                <p class="proj-type">{{ project.type }}</p>
              </div>
            </div>
            <p class="proj-desc">{{ project.description }}</p>
            <p class="proj-stack">{{ shared.stacks[project.key] }}</p>
            <div class="badge-row">
              <span
                v-for="(badge, index) in project.badges"
                :key="badge"
                class="badge"
                :class="{ 'badge-blue': index === project.badges.length - 1 }"
              >
                {{ badge }}
              </span>
            </div>

            <div v-if="project.showQrCode" class="qr-wrap">
              <p class="qr-label">{{ content.qrLabel }}</p>
              <img class="qr-img" :src="assets.sdQrCode" alt="QR code" />
            </div>

            <a
              v-if="project.githubUrl"
              class="proj-github-link"
              :href="project.githubUrl"
              target="_blank"
              rel="noopener"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path :d="assets.icons.githubPath" />
              </svg>
              {{ content.githubProjectLabel }}
              <svg class="proj-link-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M7 17L17 7M17 7H7M17 7v10" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </a>
          </div>

          <div class="gallery">
            <div class="gallery-track" :style="{ transform: `translateX(-${slideIndexes[project.key] * 100}%)` }">
              <div v-for="item in localizedGallery(project.key)" :key="item.img" class="gallery-slide">
                <img :src="projectImageSrc(project.key, item.img)" loading="lazy" :alt="item.title" />
                <div class="slide-caption">{{ item.title }}</div>
              </div>
            </div>
            <button
              class="nav-btn nav-prev"
              type="button"
              :aria-label="content.aria.previousSlide"
              @click="moveSlide(project.key, -1)"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                <path d="M15 18l-6-6 6-6" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
            <button
              class="nav-btn nav-next"
              type="button"
              :aria-label="content.aria.nextSlide"
              @click="moveSlide(project.key, 1)"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                <path d="M9 18l6-6-6-6" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
            <div class="dots">
              <button
                v-for="(_, index) in localizedGallery(project.key)"
                :key="index"
                class="dot"
                :class="{ active: index === slideIndexes[project.key] }"
                type="button"
                :aria-label="`${content.aria.goToSlide} ${index + 1}`"
                @click="slideIndexes[project.key] = index"
              />
            </div>
          </div>
        </article>
      </section>
    </main>

    <footer class="footer">
      <div class="footer-divider" />
      <p class="footer-contact">{{ content.footerContactLabel }} · {{ profile.contactWechat }}</p>
      <p class="footer-note">{{ content.footerNote }}</p>
    </footer>
  </div>
</template>

<script setup>
import { computed, onMounted, reactive, ref } from 'vue'
import { siteContent } from '@/constants/siteContent'

const profile = siteContent.profile
const shared = siteContent.shared
const assets = siteContent.assets
const languages = siteContent.supportedLanguages

const language = ref(siteContent.defaultLanguage)
const slideIndexes = reactive(
  Object.fromEntries(siteContent.copy[siteContent.defaultLanguage].projects.map((project) => [project.key, 0]))
)

const content = computed(() => siteContent.copy[language.value])

function setLanguage(nextLanguage) {
  if (languages.includes(nextLanguage)) {
    language.value = nextLanguage
    document.documentElement.lang = siteContent.htmlLanguages[nextLanguage]
  }
}

function browserLanguage() {
  return navigator.language.toLowerCase().startsWith('zh') ? 'cn' : siteContent.defaultLanguage
}

async function detectLanguageByIp() {
  try {
    const response = await fetch(siteContent.ipLanguage.endpoint)
    if (!response.ok) {
      return browserLanguage()
    }

    const result = await response.json()
    return result.country_code === siteContent.ipLanguage.chinaCountryCode ? 'cn' : 'en'
  } catch {
    return browserLanguage()
  }
}

function localizedGallery(projectKey) {
  return shared.galleries[projectKey].map((item) => ({
    img: item.img,
    title: item.title[language.value]
  }))
}

function projectImageSrc(projectKey, imageName) {
  return `${assets.projects[projectKey]}${imageName}`
}

function moveSlide(projectKey, direction) {
  const total = shared.galleries[projectKey].length
  const nextIndex = slideIndexes[projectKey] + direction
  slideIndexes[projectKey] = nextIndex < 0 ? total - 1 : nextIndex >= total ? 0 : nextIndex
}

onMounted(async () => {
  setLanguage(await detectLanguageByIp())
})
</script>

<style scoped>
.page {
  min-height: 100vh;
  background: #000;
  color: #f5f5f7;
  font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', 'Helvetica Neue', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
}

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

.language-switch {
  position: absolute;
  top: 18px;
  right: 20px;
  z-index: 2;
  display: inline-flex;
  padding: 3px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(8px);
}

.language-btn {
  min-width: 42px;
  height: 28px;
  border: 0;
  border-radius: 999px;
  background: transparent;
  color: #86868b;
  font-size: 0.75rem;
  font-weight: 600;
  cursor: pointer;
}

.language-btn.active {
  background: #f5f5f7;
  color: #111;
}

.hero-inner {
  position: relative;
  max-width: 900px;
  animation: fadeUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}

.hero-eyebrow,
.block-label {
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.hero-eyebrow {
  color: #2997ff;
  margin-bottom: 22px;
}

.hero-headline {
  font-size: clamp(2.2rem, 6vw, 3.8rem);
  font-weight: 700;
  line-height: 1.08;
  color: #f5f5f7;
  margin-bottom: 18px;
}

.hero-sub {
  font-size: 1.125rem;
  color: #86868b;
  margin-bottom: 36px;
  font-weight: 300;
}

.hero-chips,
.tag-row,
.badge-row {
  display: flex;
  flex-wrap: wrap;
}

.hero-chips {
  justify-content: center;
  gap: 8px;
}

.hero-chips span,
.tag,
.badge {
  font-weight: 500;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #a1a1a6;
}

.hero-chips span {
  font-size: 0.8rem;
  padding: 5px 14px;
  border-radius: 20px;
}

.github-btn,
.proj-github-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  border-radius: 980px;
  text-decoration: none;
  transition: background 0.2s, border-color 0.2s, transform 0.2s, color 0.2s;
}

.github-btn {
  margin-top: 28px;
  padding: 10px 22px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  background: rgba(255, 255, 255, 0.06);
  color: #f5f5f7;
  font-size: 0.9rem;
  font-weight: 500;
}

.github-btn svg:first-child,
.proj-github-link svg:first-child {
  width: 18px;
  height: 18px;
  flex-shrink: 0;
}

.arrow-icon,
.proj-link-arrow {
  width: 13px;
  height: 13px;
  flex-shrink: 0;
  color: #636366;
  transition: transform 0.2s, color 0.2s;
}

.github-btn:hover,
.proj-github-link:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.3);
  color: #f5f5f7;
}

.github-btn:hover .arrow-icon,
.proj-github-link:hover .proj-link-arrow {
  transform: translate(2px, -2px);
  color: #f5f5f7;
}

.main {
  max-width: 1280px;
  margin: 0 auto;
  padding: 36px 40px 48px;
}

.block {
  margin-bottom: 48px;
}

.block-label {
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

.bio-list,
.proj-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.07);
}

.bio-list {
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
  min-width: 92px;
  flex-shrink: 0;
}

.bio-val {
  font-size: 0.9375rem;
  color: #d1d1d6;
  line-height: 1.55;
}

.tag-row {
  gap: 10px;
}

.tag {
  font-size: 0.875rem;
  padding: 7px 18px;
  border-radius: 10px;
  color: #c7c7cc;
}

.proj-card {
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
  color: #2997ff;
  padding-top: 5px;
  flex-shrink: 0;
}

.proj-name {
  font-size: 1.125rem;
  font-weight: 700;
  color: #f5f5f7;
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

.badge-row {
  gap: 6px;
  margin-bottom: 14px;
}

.badge {
  font-size: 0.725rem;
  padding: 3px 11px;
  border-radius: 6px;
  color: #86868b;
}

.badge-blue {
  background: rgba(41, 151, 255, 0.1);
  border-color: rgba(41, 151, 255, 0.25);
  color: #2997ff;
}

.qr-wrap {
  display: flex;
  align-items: center;
  gap: 14px;
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

.proj-github-link {
  margin-top: 14px;
  padding: 6px 14px 6px 11px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.04);
  color: #a1a1a6;
  font-size: 0.8125rem;
  font-weight: 500;
}

.gallery {
  position: relative;
  overflow: hidden;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  background: #0a0a0a;
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
  padding: 20px 0;
}

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

.nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 38px;
  height: 38px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.16);
  background: rgba(10, 10, 10, 0.72);
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

.nav-prev {
  left: 14px;
}

.nav-next {
  right: 14px;
}

.nav-btn:hover {
  background: rgba(41, 151, 255, 0.28);
  border-color: rgba(41, 151, 255, 0.5);
  transform: translateY(-50%) scale(1.07);
}

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
  border: 0;
  border-radius: 3px;
  background: rgba(255, 255, 255, 0.28);
  cursor: pointer;
  padding: 0;
  transition: width 0.28s cubic-bezier(0.25, 0.46, 0.45, 0.94), background 0.28s;
}

.dot.active {
  width: 18px;
  background: #2997ff;
}

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

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 700px) {
  .hero {
    padding-top: 72px;
  }

  .language-switch {
    top: 14px;
    right: 14px;
  }

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
