<template>
  <div class="flex bg-gray-50 h-screen justify-center items-center">
    <div class="flex w-20 h-3/4 md:max-h-2xl rounded shadow flex-col">
      <a
        @click="changeTab($event, 'AI-TOOLS')"
        aria-current="false"
        class="w-full h-1/2 flex justify-center items-center font-medium rounded-l px-5 py-2 border bg-white text-gray-800 border-gray-200 hover:bg-gray-100"
      >
        <span class="inline-block">工具合集收藏</span>
      </a>
      <a
        @click="changeTab($event, 'ARTICLE')"
        aria-current="page"
        class="w-full flex h-1/2 mt-2 justify-center items-center font-medium px-5 py-2 border-t border-b bg-gray-900 text-white border-gray-900 hover:bg-gray-800"
      >
        <span class="inline-block transform">文章收藏</span>
      </a>
    </div>
    <div class="w-3/4 h-3/4 bg-white p-10 text-black">
      <user-article-item-list v-if="activeTab === 'AI-TOOLS'"></user-article-item-list>
      <user-tool-item-list v-if="activeTab === 'ARTICLE'"></user-tool-item-list>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref, defineProps } from 'vue'
import UserArticleItemList from '@/views/userInfo/UserArticleItemList.vue'
import UserToolItemList from '@/views/userInfo/UserToolItemList.vue'

const Props = defineProps({
  userId: {
    type: String,
    default: ''
  }
})

const activeTab = ref('AI-TOOLS')

function changeTab(event, value) {
  activeTab.value = value
  const docu = event.target
  if (!docu.classList.contains('bg-gray-900')) {
    console.log('add')
    docu.classList.remove('text-gray-800')
    docu.classList.remove('border-gray-200')
    docu.classList.remove('bg-white')

    docu.classList.add('border-b')
    docu.classList.add('bg-gray-900')
    docu.classList.add('border-gray-900')
    docu.classList.add('text-white')
  } else {
    docu.classList.remove('bg-gray-900')
    docu.classList.remove('border-gray-900')
    docu.classList.remove('text-white')
    docu.classList.add('border-b')
    docu.classList.add('text-gray-800')
    docu.classList.add('border-gray-200')
    docu.classList.add('bg-white')
  }
}

onMounted(() => {
  console.log('userId is ', Props.userId)
})
</script>
<style lang=""></style>
