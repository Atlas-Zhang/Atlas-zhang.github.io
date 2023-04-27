<template>
  <div class="bg-white shadow-md rounded-lg overflow-hidden">
    <div class="p-4">
      <h2 class="font-bold text-xl mb-2 text-black">{{ title }}</h2>
      <p class="text-gray-700 text-base text-black">
        {{ desc }}
      </p>
      <p class="text-gray-500 text-sm mt-4">By {{ author }}</p>
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

  author: {
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
