<template>
  <li v-if="children && children.length > 0">
    <button
      type="button"
      class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
      aria-controls="dropdown-example"
      data-collapse-toggle="dropdown-example"
    >
      <span class="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item>{{ name }}</span>
      <span
        class="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300"
        >{{ children ? children.length : 0 }}</span
      >
      <svg
        sidebar-toggle-item
        class="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </button>

    <ul id="dropdown-example" class="hidden py-2 space-y-2">
      <li v-for="(item, index) in children" :key="index">
        <a
          @click="skipView(item)"
          class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 cursor-pointer"
          >{{ item.name }}</a
        >
      </li>
    </ul>
  </li>

  <li v-else>
    <a
      @click="changeTag"
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
import router from '@/router'
import { ref, defineEmits, defineProps, onMounted } from 'vue'

const emitFunc = defineEmits(['changeTagId'])

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
  },
  children: {
    type: Array,
    default: () => []
  }
})

function skipView(item) {
  if (item.link) {
    router.push(item.link)
    emitFunc('changeTagId', item.link)
  }
}

function changeTag() {
  emitFunc('changeTagId', Props.tagId)
}
</script>
<style lang=""></style>
