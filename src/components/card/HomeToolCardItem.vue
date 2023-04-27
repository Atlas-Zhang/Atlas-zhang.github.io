<template>
  <div
    class="bg-white shadow-md rounded-lg overflow-hidden flex items-center p-3 w-full hover:-translate-y-1 hover:translate-x-1 transition duration-500 ease-in-out"
  >
    <img class="w-auto h-16 object-cover object-center" :src="logo" />
    <div class="pl-5">
      <h2 class="font-bold text-xl mb-1 text-gray-500">{{ title }}</h2>
      <p class="text-gray-500 text-base">
        {{ desc }}
      </p>
      <a style="color: #449cf9" class="text-sm">查看详情</a>
    </div>
  </div>
</template>
<script setup>
import { ref, defineEmits, defineProps } from 'vue'
import { useRouter } from 'vue-router'
const Props = defineProps({
  title: {
    type: String,
    default: ''
  },
  logo: {
    type: String,
    default: ''
  },
  link: {
    type: String,
    default: 'www.baidu.com'
  },
  desc: {
    type: String,
    default: ''
  }
})
</script>
<style lang=""></style>
