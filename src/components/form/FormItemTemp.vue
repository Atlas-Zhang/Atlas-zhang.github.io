<template>
  <div class="flex justify-start">
    <span class="font-bold w-16 lg:w-20">{{ label + ':' }}</span>
    <span class="w-full ml-1">{{ val }}</span>
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
    type: String,
    default: ''
  }
})
</script>
<style></style>
