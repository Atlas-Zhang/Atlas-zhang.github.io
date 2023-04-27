<template>
  <div
    class="flex flex-col bg-gray-50 p-1 pt-5 items-center text-white sm:p-1 sm:pt-5 xl:p-20 xl:pt-10 h-auto"
  >
    <div class="mb-5 w-full pl-3 sm:pl-3 xl:pl-0 flex cursor-pointer">
      <a
        @click="
          () => {
            router.push('/ai-tools/list')
          }
        "
        class="flex items-center font-semibold text-sm lg:text-2xl w-full leading-6 text-slate-700 hover:text-slate-900 dark:text-slate-200 dark:hover:text-white"
      >
        <ArrowSmallLeftIcon class="w-10 font-bold mr-2"></ArrowSmallLeftIcon>

        返回列表
      </a>
    </div>

    <div
      class="flex items-center gap-4 rounded-xl p-3 sm:p-3 xl:p-6 transform transition duration-500 w-11/12 sm:w-11/12 md:w-11/12 xl:w-4/5 bg-gray-400"
    >
      <img
        :src="itemData.logo"
        class="w-40 h-20 sm:w-40 sm:h-20 xl:w-80 xl:h-60 object-cover rounded-lg"
      />
      <div
        class="bg-white h-full w-full rounded-lg p-2 sm:p-2 xl:p-8 flex flex-col gap-2 sm:gap-2 xl:gap-5"
      >
        <div class="flex items-center gap-2 mb-0 sm:mb-0 xl:mb-2">
          <span
            v-for="(item, index) in itemData.tags"
            :key="index"
            class="bg-yellow-200 p-1 sm:p-1 xl:p-2 text-sm font-semibold sm:text-sm xl:text-xl rounded-sm sm:rounded-sm xl:rounded-xl font-mono"
            :style="{ backgroundColor: item.color }"
          >
            {{ item.name }}
          </span>
        </div>
        <h1 class="text-xl sm:text-xl xl:text-2xl text-black font-bold">{{ itemData.title }}</h1>
        <p
          class="text-grey-700 whitespace-normal text-black break-all text-xs sm:text-xs xl:text-xl"
        >
          {{ itemData.description }}
        </p>

        <a
          class="text-blue-500 hover:text-lg hover:text-gray-600 cursor-pointer"
          :href="itemData.link"
          >官网</a
        >
      </div>
    </div>

    <div
      class="h-auto text-black rounded-xl sm:rounded-xl xl:rounded-lg w-11/12 p-4 sm:p-4 xl:p-20 mt-8 sm:mt-8 xl:mt-10 bg-white mark-content"
      v-html="itemData.content"
    ></div>
  </div>
</template>
<script setup>
import { ref, defineEmits, onMounted, defineProps } from 'vue'

import { _queryAiToolItem } from '@/api/items/AiToolItemApi.js'
import { ArrowSmallLeftIcon } from '@heroicons/vue/24/solid'
import { initFlowbite } from 'flowbite'
import { assignCopy } from '@/utils/util.js'
import { useRouter } from 'vue-router'
const router = useRouter()
const Props = defineProps({
  itemId: {
    type: String,
    default: ''
  }
})
const itemData = ref({
  id: 0,
  title: '',
  description: '',
  tags: [],
  builder: '',
  link: '',
  logo: '',

  content: ''
})

async function queryData() {
  if (Props.itemId) {
    console.log('itemId is ', Props.itemId)
    const result = await _queryAiToolItem(Props.itemId)
    if (result) {
      console.log('result', result)
      itemData.value = assignCopy(result, itemData.value)
    }
  }
}

onMounted(() => {
  initFlowbite()
  console.log('itemId is ', Props.itemId)
  queryData()
})
</script>
<style scoped>
.mark-content >>> h1 {
  border-left: 0.4rem solid #f1404b;
  font-size: 2rem;
  font-weight: bold;
  line-height: 2;
  padding: 0.25rem 0 0.25rem 2rem;
  margin-bottom: 3rem;
}
.mark-content >>> h2 {
  position: relative;
  display: block;
  font-size: 1.25rem;
  border-left: 0.3rem solid #f1404b;
  padding: 0.25rem 0 0.25rem 1.25rem;
  border-color: #5961f9;
  font-weight: 500;
  line-height: 1.2;
  margin-bottom: 1.25rem;
}

.mark-content >>> p {
  font-size: 1rem;
  line-height: 2;
  word-wrap: break-word;
  color: #1d232b;
  white-space: normal;
  display: block;
}

.mark-content {
  font: bold;
  font-size: larger;
}

@media (max-width: 768px) {
  .mark-content >>> h1 {
    border-left: 0.3rem solid #f1404b;
    font-size: 1rem;
    font-weight: bold;
    line-height: 2;
    padding: 0.1rem 0 0.1rem 1rem;
    margin-bottom: 1.2rem;
  }

  .mark-content >>> h2 {
    position: relative;
    display: block;
    font-size: 0.4rem;
    border-left: 0.3rem solid #f1404b;
    padding: 0.25rem 0 0.25rem 0.9rem;
    border-color: #5961f9;
    font-weight: 500;
    line-height: 1.6;
    margin-bottom: 1.25rem;
  }

  .mark-content >>> p {
    font-size: 0.2rem;
    line-height: 2;
    word-wrap: break-word;
    color: #1d232b;
    white-space: normal;
    display: block;
  }
}

.btn-class {
  background-color: rgba(0, 0, 0, 0.6);
}

.btn-class:hover {
  background-color: rgb(157, 163, 174);
}
</style>
