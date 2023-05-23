<template>
  <el-tooltip
    class="box-item text-2xl"
    effect="dark"
    :content="isLike === 'NO' ? '点击关注' : '取消关注'"
    placement="top"
  >
    <OutlineHeartIcon
      @click="changeLike('YES')"
      data-tooltip-target="tooltip-light"
      data-tooltip-style="light"
      class="w-5 lg:w-6 text-gray-400 cursor-pointer"
      v-if="isLike === 'NO'"
    ></OutlineHeartIcon>
    <HeartIcon
      data-tooltip-target="tooltip-light"
      data-tooltip-style="light"
      @click="changeLike('NO')"
      class="w-5 lg:w-6 text-gray-400 cursor-pointer"
      v-if="isLike === 'YES'"
    ></HeartIcon>
  </el-tooltip>
</template>
<script setup>
import { onMounted, ref, defineProps } from 'vue'
import { HeartIcon } from '@heroicons/vue/24/solid'
import { HeartIcon as OutlineHeartIcon } from '@heroicons/vue/24/outline'
const emitFunc = defineEmits(['changeLike'])
const props = defineProps({
  isLike: {
    type: String,
    default: 'NO'
  }
})

function changeLike(val) {
  emitFunc('changeLike', val)
}

onMounted(() => {})
</script>
<style lang=""></style>
