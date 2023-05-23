<template>
  <div class="p-2 lg:px-48 lg:py-20 text-black">
    <div class="border-l-4 pl-5 border-red-500 font-bold my-2">付费计划</div>

    <div class="bg-blue flex flex-wrap gap-5">
      <div
        v-for="(item, index) in dataList"
        @click="selectItem(item)"
        :key="index"
        class="border-2 px-4 py-2 text-center rounded-lg my-2 border-black text-md"
      >
        {{ item.name }}
      </div>
    </div>
    <div
      v-if="itemDesc"
      class="my-2 pl-5 py-5 border-dashed border-2 border-red-300 rounded-md mx-3 font-bold"
    >
      {{ itemDesc }}
    </div>

    <div class="p-2 mt-10 text-gray-400 text-sm text-center tracking-[.1em]">
      <h2 class="text-black mb-2 tracking-wider font-600 text-lg">付费计划说明</h2>
      <span>{{ planIntro }}</span>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, defineProps } from 'vue'
import { _queryPayPlans } from '@/api/pay/PayPlanApi.js'

const planIntro = ref(
  '为了确保我们网站的长期可持续性，我们决定推出付费计划。我们的大部分工具和文章都是免费提供给用户使用的，但是我们也开发了一些专业的工具和提供高级文章只针对 Pro 和 VIP 用户开放。我们希望用户能够理解并支持我们，以便我们能够继续为您提供更好的服务。'
)
const itemDesc = ref(null)
const dataList = ref([])

async function querPayPlans() {
  const result = await _queryPayPlans()
  if (result) {
    dataList.value = result
  }
}

function selectItem(item) {
  if (item.description) {
    itemDesc.value = item.description
  }
}

onMounted(() => {
  querPayPlans()
})
</script>

<style></style>
