<template>
  <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
    <div class="flex-shrink-0">
      <img
        class="h-48 w-full object-cover"
        src="https://images.unsplash.com/photo-1573497490109-eefc69027c1b"
        alt=""
      />
    </div>
    <div class="flex-1 bg-white p-6 flex flex-col justify-between">
      <div class="flex-1">
        <p class="text-sm leading-5 font-medium text-indigo-600">
          <a href="#" class="hover:underline">{{ title }}</a>
        </p>
        <a href="#" class="block">
          <h3 class="mt-2 text-xl leading-7 font-semibold text-gray-900">
            {{ subTitle }}
          </h3>
        </a>
      </div>
      <div class="mt-6 flex items-center">
        <div class="flex-shrink-0">
          <a href="#">
            <img
              class="h-10 w-10 rounded-full"
              src="https://images.unsplash.com/photo-1547721064-da6cfb341d50"
              alt=""
            />
          </a>
        </div>
        <div class="ml-3">
          <p class="text-sm leading-5 font-medium text-gray-900">
            <a href="#" class="hover:underline">{{ author }}</a>
          </p>
          <div class="flex text-sm leading-5 text-gray-500">
            <time datetime="2020-03-16">{{ title }}</time>
            <!-- <span class="mx-1">&middot;</span>
            <span>6 min read</span> -->
          </div>
        </div>
      </div>
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
  subTitle: {
    type: String,
    default: ''
  },
  author: {
    type: String,
    default: ''
  },
  desc: {
    type: String,
    default: ''
  },
  time: {
    type: String,
    default: ''
  }
})
</script>
<style scoped lang="less"></style>
