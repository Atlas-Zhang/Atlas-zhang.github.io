<template>
  <button
    data-drawer-target="default-sidebar"
    data-drawer-toggle="default-sidebar"
    aria-controls="default-sidebar"
    type="button"
    id="default-sidebar-btn"
    class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-[#6e6e73] rounded-lg sm:hidden hover:bg-[#f5f5f7] focus:outline-none transition-colors"
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
    class="fixed top-2 mt-14 left-0 z-40 w-56 h-screen transition-transform -translate-x-full sm:translate-x-0"
    aria-label="Sidebar"
  >
    <div class="h-full px-2 py-3 overflow-y-auto bg-zinc-50 border-r border-zinc-100">
      <p class="px-2 pb-2 text-xs font-semibold text-zinc-400 uppercase tracking-wider">分类</p>
      <ul class="space-y-0.5">
        <li>
          <a
            href="#"
            class="flex items-center px-2.5 py-1.5 text-sm text-zinc-600 rounded-lg hover:bg-white cursor-pointer transition-colors"
          >
            <span class="flex-1">全部</span>
            <span class="text-xs text-zinc-400 bg-zinc-200 rounded-full px-2 py-0.5">{{ itemData.totalNum }}</span>
          </a>
        </li>
        <sider-bar-item
          v-for="(item, index) in resultTags"
          :key="index"
          :tagId="item.id"
          :name="item.name"
          :total-num="item.number"
          @changeTagId="clickTagIdList"
        />
      </ul>
    </div>
  </aside>

  <div class="sm:absolute sm:left-56 sm:top-0 sm:right-0 sm:bottom-0 bg-white p-4 sm:p-6">
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

function clickTagIdList(tagId) {
  itemData.value.tagId = tagId
  const asideBar = document.getElementById('default-sidebar')
  const defaultSiderBtn = document.getElementById('default-sidebar-btn')
  if (asideBar.classList.contains('transform-none')) {
    defaultSiderBtn.click()
    searchList()
  } else {
    searchList()
  }
}

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
    itemData.value.data = result.content
    itemData.value.pageObj.total = result.totalElements
  }
}

async function queryAllTags() {
  const result = await _queryArticleTags()
  if (result) {
    resultTags.value = result
  }
}

onMounted(async () => {
  initFlowbite()
  queryAllTags()
  searchList()
})
</script>
