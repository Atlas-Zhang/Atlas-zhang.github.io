<template>
  <div class="flex">
    <div>
      <img :src="image" />
    </div>

    <div class="flex flex-col">
      <FormInput :label="'生成时间'" :val="createAt"></FormInput>
      <FormInput :label="'Prompt'" :val="prompt"></FormInput>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref, defineProps } from 'vue'
import FormInput from '@/components/form/FormInput.vue'

const Props = defineProps({
  image: {
    type: String,
    default: ''
  },
  createAt: {
    type: String,
    default: ''
  },
  prompt: {
    type: String,
    default: ''
  }
})
</script>
<style lang=""></style>
