<template>
  <div
    class="flex flex-col bg-gray-50 p-3 pt-5 items-center text-white sm:p-1 sm:pt-5 xl:p-20 xl:pt-10 h-auto"
  >
    <div class="mb-5 w-full pl-0 sm:pl-3 xl:pl-0 flex cursor-pointer">
      <a
        @click="
          () => {
            router.push('/ai-tools/list')
          }
        "
        class="flex items-center font-semibold text-sm lg:text-2xl w-full leading-6 text-slate-700 cursor-pointer hover:bg-transparent hover:scale-105"
      >
        <ArrowSmallLeftIcon class="w-6 lg:w-10 font-bold mr-2"></ArrowSmallLeftIcon>
        返回
      </a>
    </div>

    <div class="flex justify-start w-full my-2 mb-3 ml-3 lg:ml-24 lg:my-8">
      <img
        :src="
          itemData.logo.replace('https://', 'http://') +
          '?timestamp=' +
          Date.parse(new Date()) / 1000
        "
        class="h-10 w-auto lg:h-24 object-cover rounded-lg shadow-md"
      />
    </div>

    <div
      class="flex flex-col lg:flex-row items-center gap-4 rounded-xl lg:p-6 transform transition duration-500 w-full lg:w-11/12 bg-gray-100 lg:bg-gray-400"
    >
      <img
        :src="
          itemData.coverPath.replace('https://', 'http://') +
          '?timestamp=' +
          Date.parse(new Date()) / 1000
        "
        class="w-full h-auto object-cover rounded-lg lg:w-1/4"
      />
      <div
        class="bg-white border-2 border-gray-200 h-full w-full rounded-lg p-2 sm:p-2 xl:p-8 flex flex-col gap-2 sm:gap-2 xl:gap-5"
      >
        <div class="flex items-center gap-2 mb-0 sm:mb-0 xl:mb-2">
          <span
            v-for="(item, index) in itemData.tags"
            :key="index"
            class="bg-yellow-200 p-1 sm:p-1 xl:p-2 text-sm font-semibold sm:text-sm lg:text-md rounded-xl sm:rounded-xl xl:rounded-xl font-mono cursor-default"
            :style="{ backgroundColor: item.color }"
          >
            {{ item.name }}
          </span>
        </div>
        <div class="flex flex-wrap">
          <h1 class="text-xl sm:text-xl xl:text-2xl text-black font-bold mr-5">
            {{ itemData.title }}
          </h1>
          <LikeIcon :is-like="itemData.isLike" @changeLike="changeLikeStatus"> </LikeIcon>
        </div>

        <p class="text-grey-700 whitespace-normal text-black break-all text-sm xl:text-xl">
          {{ itemData.description }}
        </p>
        <span class="font-bold text-gray-500 lg:text-lg">
          付费方式:
          <span class="text-gray-700 ml-2">{{ dictData[itemData.paidType] }}</span>
        </span>
        <div class="flex">
          <a
            class="text-white bg-gray-500 p-2 text-sm rounded-xl hover:font-bold hover:bg-gray-700 lg:text-lg lg:rounded-2xl"
            :href="itemData.link"
          >
            {{ 'Visit ' + itemData.title }}</a
          >
        </div>
      </div>
    </div>
    <!-- 收藏 -->
    <div
      class="h-auto text-black border-2 border-gray-200 rounded-xl sm:rounded-xl xl:rounded-lg w-full lg:w-11/12 p-2 lg:p-10 mt-8 sm:mt-8 xl:mt-10 bg-white mark-content article-content"
      v-html="itemData.htmlContent"
    ></div>
  </div>
</template>
<script setup>
import { ref, defineEmits, onMounted, defineProps, getCurrentInstance } from 'vue'

import {
  _queryAiToolItem,
  _likeAiToolItem,
  _cancelLikeAiToolItem
} from '@/api/items/AiToolItemApi.js'
import { ArrowSmallLeftIcon } from '@heroicons/vue/24/solid'
import { initFlowbite } from 'flowbite'
import { assignCopy } from '@/utils/util.js'
import { useRouter } from 'vue-router'
import LikeIcon from '@/components/icons/LikeIcon.vue'

const { proxy } = getCurrentInstance()

const router = useRouter()
const Props = defineProps({
  itemId: {
    type: String,
    default: ''
  }
})

const dictData = ref({
  FREE: '免费',
  PAID: '付费',
  FREE_PAID: '免费+付费'
})

const itemData = ref({
  id: 0,
  title: '',
  description: '',
  tags: [],
  builder: '',
  link: '',
  logo: '',
  isLike: 'NO',
  coverPath: '',
  paidType: '',
  toolType: '',
  content: '',
  htmlContent: ''
})

async function queryData() {
  if (Props.itemId) {
    const result = await _queryAiToolItem(Props.itemId)
    if (result) {
      itemData.value = assignCopy(result, itemData.value)
    }
  }
}

async function changeLikeStatus(val) {
  if (val === 'NO') {
    const result = await _cancelLikeAiToolItem(Props.itemId)
    if (result) {
      queryData()
    }
    proxy.$message('操作成功', 'success')
  } else if (val === 'YES') {
    const result = await _likeAiToolItem(Props.itemId)
    if (result) {
      queryData()
    }
    proxy.$message('操作成功', 'success')
  } else {
    proxy.$message('操作异常', 'error')
  }
}

onMounted(() => {
  initFlowbite()
  queryData()
})
</script>

<style scoped lang="less">
.mark-content h1 {
  border-left: 0.4rem solid #f1404b;
  font-size: 2rem;
  font-weight: bold;
  line-height: 2;
  padding: 0.25rem 0 0.25rem 2rem;
  margin-bottom: 3rem;
}
.mark-content h2 {
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

.mark-content p {
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
  .mark-content h1 {
    border-left: 0.3rem solid #f1404b;
    font-size: 1rem;
    font-weight: bold;
    line-height: 2;
    padding: 0.1rem 0 0.1rem 1rem;
    margin-bottom: 1.2rem;
  }

  .mark-content h2 {
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

  .mark-content p {
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

.iconClass {
  border: #f1404b;
  border-radius: 2cap;
}

.article-content {
  /deep/ li p {
    margin-top: 0px !important;
    margin-bottom: 0px !important;
  }

  /deep/ h4 {
    font-weight: bold;
    border-left-width: 0.3rem;
    padding-left: 1.5rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    border-color: #f1404b;
  }

  /deep/ p {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    color: gray;

    font-size: 15px;
    word-spacing: 10px;
    letter-spacing: 1px;

    @media screen and (min-width: 800px) {
      font-size: large;
    }
  }
}
</style>
