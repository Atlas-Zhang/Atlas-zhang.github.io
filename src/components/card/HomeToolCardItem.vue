<template>
  <div
    class="bg-white shadow-md rounded-lg overflow-hidden flex items-center p-3 w-full hover:-translate-y-1 hover:translate-x-1 transition duration-500 ease-in-out"
  >
    <img
      class="w-auto h-16 lg:h-10 object-cover object-center"
      :src="logo.replace('http://', 'https://') + '?timestamp=' + Date.parse(new Date()) / 1000"
    />
    <div class="pl-5">
      <h2 class="font-bold text-xl lg:text-lg mb-1 text-gray-500">{{ title }}</h2>
      <p class="text-gray-500 text-base lg:text-sm">
        {{ desc }}
      </p>
      <a style="color: #449cf9" class="text-sm cursor-pointer lg:text-xs" @click="skipDetail"
        >查看详情</a
      >
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

function skipDetail() {
  router.push(`/ai-tool-item/${Props.keyId}/detail`)
}
</script>
<style lang=""></style>
