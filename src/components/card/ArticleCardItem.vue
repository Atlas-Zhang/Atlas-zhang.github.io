<template>
  <div
    class="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 cursor-pointer"
  >
    <div
      class="p-4 bg-white rounded-lg md:p-6 dark:bg-gray-800"
      id="about"
      role="tabpanel"
      aria-labelledby="about-tab"
    >
      <h2 class="mb-2 text-xl font-extrabold tracking-tight text-gray-900 dark:text-white">
        <span v-if="type === 'VIP'" class="text-red-600 mr-1 font-bold">[VIP]</span>
        {{ title }}
      </h2>
      <p class="mb-2 text-gray-500 dark:text-gray-400">
        {{ desc }}
      </p>
      <a
        href="#"
        @click="
          () => {
            router.push(`/article/${articleId}/detail`)
          }
        "
        class="inline-flex items-center font-medium text-blue-600 hover:text-blue-800 dark:text-blue-500 dark:hover:text-blue-700"
      >
        详情
        <svg
          class="w-6 h-6 ml-1"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </a>
    </div>
  </div>
  >
</template>
<script setup>
import { ref, defineEmits, defineProps } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const Props = defineProps({
  title: {
    type: String,
    default: ''
  },
  desc: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'NORMAL'
  },
  articleId: {
    type: String,
    default: ''
  }
})
</script>
<style scoped lang="less"></style>
