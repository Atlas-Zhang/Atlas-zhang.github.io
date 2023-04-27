<template>
  <button
    data-drawer-target="default-sidebar"
    data-drawer-toggle="default-sidebar"
    aria-controls="default-sidebar"
    type="button"
    class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
  >
    <span class="sr-only">Open sidebar</span>
    <svg
      class="w-6 h-6"
      aria-hidden="true"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clip-rule="evenodd"
        fill-rule="evenodd"
        d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
      ></path>
    </svg>
  </button>

  <aside
    id="default-sidebar"
    class="absolute top-1 left-0 z-10 w-64 transition-transform -translate-x-full sm:translate-x-0 h-full"
    aria-label="Sidebar"
  >
    <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
      <ul class="space-y-2 font-medium">
        <li>
          <a
            href="#"
            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <span class="flex-1 ml-3 whitespace-nowrap">全部</span>
            <span
              class="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300"
              >{{ itemData.totalNum }}</span
            >
          </a>
        </li>
        <sider-bar-item
          v-for="(item, index) in resultTags"
          :key="index"
          :tagId="item.id"
          :name="item.name"
          :total-num="item.number"
          :tags="item.tags"
        >
        </sider-bar-item>
      </ul>
    </div>
  </aside>

  <div class="p-4 lg:px-6 sm:ml-64 h-screen">
    <article-card-item
      v-for="(item, index) in itemData.data"
      :key="index"
      :articleId="item.id"
      :title="item.title"
      :type="item.type"
      :desc="item.description"
    >
    </article-card-item>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { initFlowbite } from 'flowbite'
import { _queryArticleItems } from '@/api/items/ArticleItemApi.js'
import { _queryArticleTags } from '@/api/items/ArticleTagApi.js'
import SiderBarItem from '@/components/layout/SiderBarItem.vue'
import ArticleCardItem from '@/components/card/ArticleCardItem.vue'

const resultTags = ref({
  data: []
})

const itemData = ref({
  tagId: '',
  title: '',
  totalNum: 0,
  data: [],

  pageObj: {
    page: 1,
    size: 12,
    total: 0,
    sort: {
      direction: 'DESC',
      order: 'updateAt'
    }
  }
})

async function searchList() {
  const result = await _queryArticleItems({
    tagId: itemData.value.tagId,
    page: itemData.value.pageObj.page,
    size: itemData.value.pageObj.size,
    order: itemData.value.pageObj.sort.order,
    direction: itemData.value.pageObj.sort.direction,
    title: itemData.value.title
  })
  if (result) {
    console.log('result is ', result)
    itemData.value.data = result.content
    itemData.value.pageObj.total = result.totalElements
  }
}

async function queryAllTags() {
  const result = await _queryArticleTags()
  if (result) {
    console.log('result is', result)
    resultTags.value = result
  }
}

onMounted(async () => {
  initFlowbite()
  queryAllTags()
  searchList()
  console.log('-------------------------------///////////////')
})
</script>
