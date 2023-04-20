<template>
  <div class="card rounded-lg shadow-lg mx-auto max-w-md">
    <div class="flex items-center justify-between bg-white rounded-t-lg px-4 py-2">
      <h5 class="card-title text-xl font-bold">{{ title }}</h5>
      <img
        src="https://via.placeholder.com/50x50"
        alt="Logo Image"
        class="w-8 h-8 object-cover object-center rounded-full"
      />
    </div>
    <div class="card-body p-4">
      <p class="card-text text-gray-700 leading-snug">{{ desc }}</p>
      <a
        href="#"
        class="btn btn-primary inline-block mt-2 px-4 py-2 rounded-full bg-green-500 hover:bg-green-600 text-white font-bold"
        >Read More</a
      >
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
  desc: {
    type: String,
    default: ''
  }
})
</script>
<style scoped lang="less"></style>
