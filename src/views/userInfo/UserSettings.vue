<template>
  <div
    class="flex flex-col lg:flex-row bg-gray-50 h-screen lg:justify-center lg:items-center pt-10 px-1 lg:p-2"
  >
    <div
      class="flex items-center w-full lg:w-20 h-16 lg:h-3/4 md:max-h-2xl rounded shadow lg:flex-col p-2 cursor-pointer"
    >
      <a
        @click="changeTab($event, 'USER_TAB')"
        aria-current="page"
        class="w-full flex h-full lg:h-1/2 lg:mt-2 justify-center items-center font-medium rounded-t-md px-5 py-5 lg:py-2 border-t border-b hover:bg-gray-600"
        :class="[activeTab === 'USER_TAB' ? 'text-white bg-black text-lg' : 'bg-white text-black']"
      >
        <span class="inline-block text-center transform">个人信息</span>
      </a>
      <a
        @click="changeTab($event, 'AI-TOOLS')"
        aria-current="false"
        class="w-full h-full lg:h-1/2 flex justify-center items-center font-medium rounded-t-md px-5 py-5 lg:py-2 border hover:bg-gray-600"
        :class="[activeTab === 'AI-TOOLS' ? 'text-white bg-black text-lg' : 'bg-white text-black']"
      >
        <span class="text-center">AI工具收藏</span>
      </a>
      <a
        @click="changeTab($event, 'ARTICLE')"
        aria-current="page"
        class="w-full flex h-full lg:h-1/2 lg:mt-2 justify-center items-center font-medium px-5 py-5 rounded-t-md lg:py-2 border-t border-b hover:bg-gray-600"
        :class="[activeTab === 'ARTICLE' ? 'text-white bg-black text-lg' : 'bg-white text-black']"
      >
        <span class="inline-block text-center transform">文章收藏</span>
      </a>
    </div>
    <div class="w-full lg:w-3/4 h-auto lg:h-3/4 bg-white p-3 lg:p-10 text-black">
      <user-article-item-list v-if="activeTab === 'ARTICLE'"></user-article-item-list>
      <user-tool-item-list v-if="activeTab === 'AI-TOOLS'"></user-tool-item-list>
      <div v-if="activeTab === 'USER_TAB'" class="space-y-2 lg:p-10 lg:space-y-5">
        <FormItemTemp :label="'用户名'" :val="userId"></FormItemTemp>
        <FormItemTemp :label="'性别'" :val="'未知'"></FormItemTemp>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref, defineProps } from 'vue'
import UserArticleItemList from '@/views/userInfo/UserArticleItemList.vue'
import UserToolItemList from '@/views/userInfo/UserToolItemList.vue'
import FormItemTemp from '@/components/form/FormItemTemp.vue'

const Props = defineProps({
  userId: {
    type: String,
    default: ''
  }
})

const activeTab = ref('USER_TAB')

function changeTab(event, value) {
  activeTab.value = value
}
</script>
<style lang=""></style>
