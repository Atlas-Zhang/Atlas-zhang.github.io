<template>
  <button
    data-drawer-target="default-sidebar"
    data-drawer-toggle="default-sidebar"
    aria-controls="default-sidebar"
    type="button"
    class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
  >
    <span class="sr-only">打开侧边栏</span>
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
          v-for="(item, index) in resultTags.data"
          :key="index"
          :tagId="item.id"
          :name="item.name"
          :total-num="item.number"
        >
        </sider-bar-item>
      </ul>
    </div>
  </aside>

  <div class="p-4 sm:ml-64">
    <div
      class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 h-screen"
    >
      <div class="grid grid-cols-1 xl:grid-cols-3 gap-2 lg:gap-2 mb-4"></div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import { initFlowbite } from 'flowbite'
import SiderBarItem from '@/components/layout/SiderBarItem.vue'

const resultTags = ref({
  data: [
    {
      id: '1',
      name: '数据转换',
      number: 1
    }
  ]
})

const itemData = ref({
  totalNum: 1
})

onMounted(async () => {
  console.log('index is ---------------------. tool box is ')
  initFlowbite()
})
</script>
<style lang=""></style>
