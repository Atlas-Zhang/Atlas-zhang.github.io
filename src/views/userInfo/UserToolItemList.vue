<template>
  <div>
    <h1 class="pl-4 text-xl lg:text-2xl font-semibold head-title">工具收藏列表</h1>
    <div class="grid grid-cols-1 xl:grid-cols-3 gap-2 lg:gap-2 mb-4 py-10">
      <CardContentInfo
        v-for="(item, index) in itemData.data"
        :key="index"
        :title="item.title"
        :desc="item.description"
        :logo="item.logo"
        :itemId="item.id"
        :tags="item.tags"
      >
      </CardContentInfo
      >`
    </div>

    <el-pagination
      v-if="itemData.pageObj.total > 0"
      class="flex-wrap space-y-2 lg:flex-nowrap lg:space-y-0"
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
  </div>
</template>
<script setup>
import { onMounted, ref, defineProps } from 'vue'
import CardContentInfo from '@/components/card/CardContentInfo.vue'
import { _queryToolItemForUser } from '@/api/user/userItemApi.js'
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
  const result = await _queryToolItemForUser({
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
