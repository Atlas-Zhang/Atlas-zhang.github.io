<template>
  <li>
    <a
      href="#"
      class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
    >
      <span class="flex-1 ml-3 whitespace-nowrap">{{ name }}</span>
      <span
        class="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300"
        >{{ totalNum }}</span
      >
    </a>
  </li>
</template>
<script setup>
import { ref, defineEmits, defineProps } from 'vue'

const Props = defineProps({
  name: {
    type: String,
    default: ''
  },
  totalNum: {
    type: Number,
    default: 0
  },
  tagId: {
    type: String,
    default: ''
  }
})
</script>
<style lang=""></style>
