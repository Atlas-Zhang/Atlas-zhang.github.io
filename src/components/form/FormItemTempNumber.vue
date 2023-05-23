<template>
  <div class="flex justify-start">
    <span class="font-bold w-1/3 lg:w-20">{{ label + ':' }}</span>
    <span class="w-full ml-2 lg:ml-5">{{ val }}</span>
  </div>
</template>
<script setup>
import { defineProps, onMounted } from 'vue'

const Props = defineProps({
  label: {
    type: String,
    default: ''
  },
  val: {
    type: Number,
    default: 0
  }
})
</script>
<style></style>
