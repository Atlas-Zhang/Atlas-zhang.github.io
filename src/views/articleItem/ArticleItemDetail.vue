<template>
  <div class="flex min-h-screen flex-col w-full lg:w-3/4 mt-3 justify-start overflow-hidden bg-gray-50 py-8 lg:py-8">
    <div class="max-w-8xl lg:ml-5">
      <div class="flex px-4 lg:pt-4 lg:pb-10  w-auto">
        <a
          @click="
            () => {
              router.push('/article/list')
            }
          "
          class="flex items-center font-semibold text-sm lg:text-2xl w-full leading-6 text-slate-700 dark:text-slate-200 cursor-pointer hover:bg-transparent hover:scale-105"
        >
          <ArrowSmallLeftIcon class="w-10 font-bold mr-2"></ArrowSmallLeftIcon>
          返回
        </a>
      </div>
    </div>
    <article class="prose w-full lg:prose-xl max-w-full p-5 bg-white  rounded-2xl">
      <h1 class="text-4xl lg:text-5xl">{{ itemData.title }}</h1>
      <div class="flex flex-col justify-between text-sm lg:flex-row cursor-pointer">
        <time class="mb-1"
          ><span class="text-sm mr-2 text-gray-400 font-serif">发表于:</span
          >{{ itemData.createAt }}</time
        >
        <time class="mb-1"
          ><span class="text-sm mr-2 text-gray-500 font-serif">最近更新:</span
          >{{ itemData.updateAt }}</time
        >
      </div>
      <div class="text-sm">
        <span class="font-500">
          <span class="text-gray-500 font-serif mr-2">作者:</span>
          {{ itemData.author }}
        </span>
      </div>
      <!-- <div class="flex items-center mt-2">
        <div class="pl-2">
          <LikeIcon :is-like="itemData.isLike" @changeLike="changeLikeStatus"> </LikeIcon>
        </div>

        <span class="ml-2 text-gray-400 text-xl">{{ itemData.favoriNum }}</span>
      </div> -->
      <div v-html="itemData.htmlContent" class="article-content" v-highlight></div>
      <!-- ... -->
    </article>

    <div class="flex flex-col w-full  p-2 lg:p-10 bg-white mt-10 gap-3 rounded-lg">
      <span class="border-l-4 pl-3 border-blue-600 text-black font-bold  lg:text-2xl mb-5">
        用户评论
      </span>
      <CommentConf
      :relate-id="articleId"
      :type-name="itemData.title"
      :data-type="'ARTICLE'">
      </CommentConf>
    </div>

  </div>
</template>

<script setup>
import { onMounted, ref, defineProps, getCurrentInstance } from 'vue'
import { initFlowbite } from 'flowbite'
import { ArrowSmallLeftIcon } from '@heroicons/vue/24/solid'
import { assignCopy } from '@/utils/util.js'
import { _likeArticle, _cancelLikeArticle, _queryArticleItem } from '@/api/items/ArticleItemApi.js'
import { useRouter } from 'vue-router'
import LikeIcon from '@/components/icons/LikeIcon.vue'
import { ElLoading } from 'element-plus'
import CommentConf from '@/components/tools/CommentConf.vue'
const router = useRouter()
const { proxy } = getCurrentInstance()
const Props = defineProps({
  articleId: {
    type: String,
    default: ''
  }
})

const resultTags = ref({
  data: []
})
const itemData = ref({
  tags: [],
  title: '',
  author: '',
  type: '',
  description: '',
  content: '',
  createAt: '',
  htmlContent: '',
  updateAt: '',
  isLike: 'NO',
  favoriNum: 0,

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

async function changeLikeStatus(val) {
  if (val === 'NO') {
    const result = await _cancelLikeArticle(Props.articleId)
    if (result) {
      queryData()
    }
    proxy.$message('操作成功', 'success')
  } else if (val === 'YES') {
    const result = await _likeArticle(Props.articleId)
    if (result) {
      queryData()
    }
    proxy.$message('操作成功', 'success')
  } else {
    proxy.$message('操作异常', 'error')
  }
}

async function queryData() {
  if (Props.articleId) {
    const loading = ElLoading.service({
      lock: true,
      text: '加载中',
      background: 'rgba(0, 0, 0, 0.3)'
    })
    const result = await _queryArticleItem(Props.articleId)
    if (result) {
      itemData.value = assignCopy(result, itemData.value)
      loading.close()
    }
  }
}
onMounted(async () => {
  initFlowbite()

  queryData()
})
</script>

<style scoped lang="less">
.article-content {
  /deep/ li p {
    margin-top: 0px !important;
    margin-bottom: 0px !important;
    overflow-wrap: break-word;
    white-space: pre-wrap;
  }


  /deep/  p {
    overflow-wrap: break-word;
    white-space: pre-wrap;
  }
}
</style>
