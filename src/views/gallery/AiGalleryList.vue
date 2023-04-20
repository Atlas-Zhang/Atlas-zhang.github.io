<template>
  <div class="flex bg-slate-600 h-full">
    <div class="w-full px-0 bg-slate-600 h-full bg-clip-content sm:px-0 xl:px-20">
      <div class="mt-16 ml-12">
        <a
          class="text-blue-400 hover:text-white cursor-pointer"
          @click="
            () => {
              router.push('/')
            }
          "
          >返回首页</a
        >
      </div>
      <div
        class="m-10 mt-5 flex items-center border rounded-md px-2 bg-clip-border py-3 transition duration-500 hover:scale-105 hover:shadow-xl sm:px-2 xl:px-5"
      >
        <input
          type="text"
          placeholder="输入AI工具关键词，快捷键 Enter 触发搜索指令"
          v-model="searchValue"
          @keydown.enter="searchList"
          class="flex-grow px-4 w-full rounded-xl text-xl py-4 focus:outline-none sm:text-xl xl:text-3xl text-black"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="h-5 w-5 text-white ml-1 hover:text-blue-700 sm:w-5 sm:h-5 sm:ml-1 xl:w-10 xl:h-10 xl:ml-5"
          @click="
            () => {
              searchList()
            }
          "
        >
          <path
            fill-rule="evenodd"
            d="M9 3a6 6 0 100 12 6 6 0 000-12zm0 10a4 4 0 110-8 4 4 0 010 8z"
            clip-rule="evenodd"
          />
          <path
            fill-rule="evenodd"
            d="M10.707 11.293a1 1 0 00-1.414-1.414l-2 2a1 1 0 001.414 1.414l2-2z"
            clip-rule="evenodd"
          />
        </svg>
      </div>

      <GalleryLeftMenu class="mb-5"></GalleryLeftMenu>
      <div class="flex flex-wrap gap-6 sm:gap-6 xl:gap-10 justify-between p-5 sm:px-5 xl:p-0">
        <CardContentInfo
          v-for="(item, index) in resultList"
          :key="index"
          :id="item.id"
          :img="item.img"
          :title="item.title"
          :description="item.description"
          :tags="item.tags"
        >
        </CardContentInfo>
      </div>
    </div>
  </div>
</template>

<script setup>
import CardContentInfo from '@/components/card/CardContentInfo.vue'
import GalleryLeftMenu from './GalleryLeftMenu.vue'
import { fuzzyMatch } from '@/utils/tool.js'
import { ref, defineEmits, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()

const cardList = ref([
  {
    img: 'https://images.zeroingpython.top//img/1_jewaay.png',
    title: '标1',
    id: 1,
    description: 'https://images.zeroingpython.to',
    tags: ['tag1', 'tag22']
  },
  {
    img: 'https://images.zeroingpython.top//img/1_jewaay.png',
    title: '标1测试',
    id: 2,
    description: 'https://images.zeroingpython.top//img/1_jewaay.png',
    tags: ['tag1', 'tag22']
  },
  {
    img: 'https://images.zeroingpython.top//img/1_jewaay.png',
    title: '提示1测试',
    id: 3,
    description: 'https://images.zeroingpython.top//img/1_jewaay.png',
    tags: ['tag1', 'tag22']
  },
  {
    img: 'https://images.zeroingpython.top//img/1_jewaay.png',
    title: '题测试',
    id: 4,
    description: 'https://images.zeroingpython.top//img/1_jewaay.png',
    tags: ['tag1', 'tag22']
  },
  {
    img: 'https://images.zeroingpython.top//img/1_jewaay.png',
    title: 'A测试',
    id: 5,
    description: 'https://images.zeroingpython.top//img/1_jewaay.png',
    tags: ['tag1', 'tag22']
  },
  {
    img: 'https://images.zeroingpython.top//img/1_jewaay.png',
    title: 'Windows激活',
    id: 6,
    description: 'https://images.zeroingpython.top//img/1_jewaay.png',
    tags: ['tag1', 'tag22']
  },
  {
    img: 'https://images.zeroingpython.top//img/1_jewaay.png',
    title: '转到',
    id: 7,
    description: 'https://images.zeroingpython.top//img/1_jewaay.png',
    tags: ['tag1', 'tag22']
  },
  {
    img: 'https://images.zeroingpython.top//img/1_jewaay.png',
    title: '测试激活',
    id: 8,
    description: 'https://images.zeroingpython.top//img/1_jewaay.png',
    tags: ['tag1', 'tag22']
  }
])

const resultList = ref([])

const searchValue = ref('')

function searchList() {
  console.log('searchValue is ', searchValue.value)
  if (searchValue.value) {
    resultList.value = []
    cardList.value.forEach((item) => {
      if (fuzzyMatch(item.title, searchValue.value)) {
        resultList.value.push(item)
      }
    })
    console.log('resultList is ', resultList.value)
  } else {
    resultList.value = cardList.value
  }
}

onMounted(() => {
  console.log('-----------------------------')
  resultList.value = cardList.value
})

function valueChanges(val) {
  console.log('parentValue is ', val)
}
</script>
