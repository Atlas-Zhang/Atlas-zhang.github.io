<template>
  <div class="bg-white py-10">
    <div class="mx-auto lg:w-[1120px] px-4 sm:px-6 lg:px-8">
      <h2
        class="text-3xl font-extrabold tracking-tight text-center text-gray-900 sm:text-4xl md:text-5xl"
      >
        AI 工具
      </h2>
      <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto text-center">
        介绍最新、最热的AI工具及开源项目的综合平台，为您提供丰富的资源和实用的工具
      </p>

      <div class="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">
        <HomeToolCardItem
          v-for="(item, index) in data.toolItems"
          :key="index"
          :title="item.title"
          :logo="item.logo"
          :desc="item.description"
          :key-id="item.id"
        >
        </HomeToolCardItem>
      </div>
      <div class="flex justify-center mt-5">
        <a
          class="text-lg lg:text-xl hover:font-bold cursor-pointer"
          @click="
            () => {
              router.push('/ai-tools/list')
            }
          "
          >了解更多</a
        >
      </div>
    </div>
  </div>

  <div class="bg-white py-10">
    <div class="lg:w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
      <h2
        class="text-3xl font-extrabold tracking-tight text-center text-gray-900 sm:text-4xl md:text-5xl"
      >
        教程文章
      </h2>
      <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto text-center">
        网站提供详尽的教程文档，涵盖各种技术和以及工具使用技巧，助您轻松掌握相关领域的知识和技能。
      </p>
      <div class="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">
        <!-- Card for each tutorial article -->
        <HomeArticleCardItem
          v-for="(item, index) in data.articleItems"
          :key="index"
          :title="item.title"
          :author="item.author"
          :desc="item.description"
          :key-id="item.id"
        >
        </HomeArticleCardItem>
      </div>

      <div class="flex justify-center mt-5">
        <a
          class="mt-2 text-lg lg:text-xl hover:font-bold cursor-pointer"
          @click="
            () => {
              router.push('/article/list')
            }
          "
          >了解更多</a
        >
      </div>
    </div>
  </div>
  <div class="bg-white py-10">
    <div class="lg:w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
      <h2
        class="text-3xl font-extrabold tracking-tight text-center text-gray-900 sm:text-4xl md:text-5xl"
      >
        实用工具
      </h2>
      <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto text-center">
        我们网站内嵌了一系列实用工具，让您可以更加便捷地完成各种任务和操作，提高您的工作效率和体验。
      </p>
      <div class="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">
        <!-- Card for each tutorial article -->
        <ToolBoxCardContentInfo
          v-for="(item, index) in data.toolBoxItemVos"
          :key="index"
          :title="item.title"
          :author="item.author"
          :logo="item.logo"
          :desc="item.description"
          :key-id="item.id"
          :link="item.link"
        >
        </ToolBoxCardContentInfo>
      </div>
      <div class="flex justify-center mt-5">
        <a
          @click="
            () => {
              router.push('/tool-box/list')
            }
          "
          class="mt-2 text-lg lg:text-xl hover:font-bold cursor-pointer"
          >了解更多</a
        >
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { _queryHomeItems } from '@/api/HomeApi.js'
import HomeArticleCardItem from '@/components/card/HomeArticleCardItem.vue'
import HomeToolCardItem from '@/components/card/HomeToolCardItem.vue'
import ToolBoxCardContentInfo from '@/components/card/ToolBoxCardContentInfo.vue'
const router = useRouter()
const data = ref({
  toolItems: [],
  articleItems: [],
  toolBoxItemVos: []
})

async function getHomeData() {
  const result = await _queryHomeItems()
  if (result) {
    data.value.toolItems = result.tools
    data.value.articleItems = result.articleVos
    data.value.toolBoxItemVos = result.toolBoxItemVos
  }
}

onMounted(() => {
  getHomeData()
})
</script>

<style scoped lang="less">
.home-page {
  background-color: rgb(74, 85, 103);
}

.bottom-nav {
  a {
    letter-spacing: 1px;
    background-color: rgba(0, 0, 0, 0.4);
    padding: 0.4rem;
    padding-left: 0.6rem;
    padding-right: 0.6rem;
    border-radius: 0.5rem;
  }
  a:hover {
    font-size: larger;
    font-weight: bold;
    color: white;
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.8);
  }
}
</style>
