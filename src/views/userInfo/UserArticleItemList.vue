<template>
  <div>
    <h1 class="pl-4 text-xl lg:text-2xl font-semibold head-title">文章收藏列表</h1>
    <div class="p-4 lg:px-6 h-auto">
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
  </div>

  <el-pagination
    v-if="itemData.pageObj.total > 0"
    class="flex-wrap space-y-2 lg:flex-nowrap lg:space-y-0 font-bold"
    v-model:current-page="itemData.pageObj.page"
    v-model:page-size="itemData.pageObj.size"
    :page-sizes="[12, 48, 96, 128]"
    :small="small"
    :disabled="disabled"
    :background="background"
    layout="total, sizes, prev, pager, next, jumper"
    :total="itemData.pageObj.total"
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
  />
</template>
<script setup>
import { onMounted, ref, defineProps } from 'vue'
import ArticleCardItem from '@/components/card/ArticleCardItem.vue'
import { _queryArticleItemsForUser } from '@/api/user/userItemApi.js'
const Props = defineProps({
  userId: {
    type: String,
    default: ''
  }
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
const small = ref(false)
const background = ref(false)
const disabled = ref(false)

const handleSizeChange = (val) => {
  itemData.value.pageObj.size = val
  queryItems()
}
const handleCurrentChange = (val) => {
  itemData.value.pageObj.page = val
  queryItems()
}

async function queryItems() {
  const result = await _queryArticleItemsForUser({
    page: itemData.value.pageObj.page,
    size: itemData.value.pageObj.size,
    order: itemData.value.pageObj.sort.order,
    direction: itemData.value.pageObj.sort.direction
  })
  if (result) {
    itemData.value.data = result.content
    itemData.value.pageObj.total = result.totalElements
  }
}

onMounted(() => {
  queryItems()
})
</script>
<style lang="less" scoped>
.head-title {
  border-left: 0.5rem solid #f1404b;
}
</style>
