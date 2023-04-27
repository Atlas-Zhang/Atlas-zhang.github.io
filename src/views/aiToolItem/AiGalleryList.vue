<template>
  <section class="py-12 bg-gray-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2
        class="text-3xl leading-9 font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-10"
      >
        AI 工具合集
      </h2>
      <div class="mt-6 grid gap-16 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
        <card-content-info
          v-for="(item, index) in resultList"
          :key="index"
          :title="item.title"
          :desc="item.description"
          :logo="item.logo"
          :link="item.link"
        ></card-content-info>
      </div>
    </div>
  </section>
</template>

<script setup>
import CardContentInfo from '@/components/card/CardContentInfo.vue'
import GalleryLeftMenu from './GalleryLeftMenu.vue'
import { fuzzyMatch } from '@/utils/tool.js'
import { _queryAiToolItems } from '@/api/items/AiToolItemApi.js'
import { ref, defineEmits, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()

const resultList = ref([])

const searchValue = ref({
  title: '',
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
  const result = await _queryAiToolItems({
    page: searchValue.value.pageObj.page,
    size: searchValue.value.pageObj.size,
    order: searchValue.value.pageObj.sort.order,
    direction: searchValue.value.pageObj.sort.direction,
    title: searchValue.value.title
  })
  if (result) {
    console.log('result is ', result)
    resultList.value = result.content
    resultList.value.push(result.content[0])
    resultList.value.push(result.content[0])
    searchValue.value.total = result.totalElements
  }
}

onMounted(() => {
  console.log('-----------------------------')
  searchList()
})

function valueChanges(val) {
  console.log('parentValue is ', val)
}
</script>
