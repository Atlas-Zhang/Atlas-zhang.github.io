<template>
  <div class="bg-white shadow-md rounded-lg overflow-hidden">
    <div class="p-4">
      <h2 class="font-bold text-xl mb-2 text-black">{{ title }}</h2>
      <p class="text-base text-black">
        {{ desc }}
      </p>
      <div class="flex mt-2 lg:mt-1 items-center lg:items-start">
        <p class="text-gray-500 text-sm">
          {{ author }}
        </p>
        <a @click="skipDetail" class="text-sm ml-3 lg:ml-2 lg:mt-1 lg:text-xs cursor-pointer">
          查看详情
        </a>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, defineEmits, defineProps } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const Props = defineProps({
  keyId: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    default: ''
  },
  author: {
    type: String,
    default: ''
  },
  desc: {
    type: String,
    default: ''
  }
})

function skipDetail() {
  router.push(`/article/${Props.keyId}/detail`)
}
</script>
<style lang=""></style>
