<template>
  <div
    class="card rounded-2xl shadow-md w-fill hover:-translate-y-1 hover:translate-x-1 hover:shadow-lg hover:scale-102 transition duration-500 ease-in-out"
  >
    <div class="flex items-center bg-gray-100 rounded-lg px-4 lg:px-2 py-2 lg:py-2">
      <img
        :src="logo.replace('https://', 'http://') + '?timestamp=' + Date.parse(new Date()) / 1000"
        alt="Logo Image"
        class="w-auto h-16 lg:h-10 object-cover object-center rounded-full"
      />
      <div class="ml-1 lg:ml-5 pl-2">
        <el-tooltip class="text-2xl" effect="dark" :content="title" placement="left">
          <h5
            class="card-title text-xl font-bold lg:text-md text-black mb-0 lg:mb-1 whitespace-nowrap overflow-ellipsis block overflow-hidden w-64 cursor-default"
          >
            {{ title }}
          </h5>
        </el-tooltip>

        <el-tooltip class="text-2xl" effect="dark" :content="desc" placement="top">
          <p
            class="text-gray-700 w-full pr-2 lg:p-0 lg:text-sm lg:whitespace-nowrap lg:overflow-ellipsis block lg:overflow-hidden lg:w-64 cursor-default"
          >
            {{ desc }}
          </p>
        </el-tooltip>

        <div class="text-sm flex space-x-2 mt-1">
          <p
            class="rounded-lg text-white p-1 cursor-pointer"
            v-for="(item, index) in tags"
            :key="index"
            :style="{
              backgroundColor: item.color
            }"
          >
            {{ item.name }}
          </p>
        </div>
        <a
          v-if="itemId"
          @click="
            () => {
              router.push(`/ai-tool-item/${itemId}/detail`)
            }
          "
          class="inline-block py-1 rounded-lg hover:bg-gray-200 text-blue-600 cursor-pointer text-sm"
          >查看详情</a
        >
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, defineEmits, defineProps, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const Props = defineProps({
  title: {
    type: String,
    default: ''
  },
  tags: {
    type: Array,
    default: () => []
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
  },
  itemId: {
    type: String,
    default: ''
  }
})
</script>
<style scoped lang="less"></style>
