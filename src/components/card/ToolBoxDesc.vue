<!-- 工具箱功能描述 -->
<template>
  <div class="bg-white text-black p-2 pt-5 lg:pt-5 lg:pl-10 lg:pb-5 rounded-lg lg:rounded-xl">
    <h1 class="font-bold lg:text-2xl  lg:mb-3">{{ title }}</h1>
    <span class="text-gray-700">
      <span class="font-bold text-sm text-red-400">功能描述: </span>
      {{ desc }}</span
    >
  </div>
</template>
<script setup>
import { defineProps } from 'vue'
const Props = defineProps({
  title: {
    type: String,
    default: ''
  },
  desc: {
    type: String,
    default: ''
  }
})
</script>
<style lang=""></style>
