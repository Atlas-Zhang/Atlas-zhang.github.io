<template>
  <div
    class="card rounded-lg shadow-md w-fill hover:-translate-y-1 hover:translate-x-1 hover:shadow-lg hover:scale-102 transition duration-500 ease-in-out"
  >
    <div class="flex items-center bg-white rounded-t-lg px-4 py-2 lg:py-4">
      <img
        :src="logo"
        alt="Logo Image"
        class="w-16 h-16 lg:w-24 lg:h-24 object-cover object-center rounded-full"
      />
      <div class="ml-1 lg:ml-5 pl-2">
        <h5 class="card-title text-xl font-bold text-black mb-0 lg:mb-1">{{ title }}</h5>
        <p class="card-text text-gray-700 leading-snug font-medium">
          {{ desc }}
        </p>
        <div class="text-md flex space-x-2">
          <p
            class="font-bold rounded-sm border-black"
            v-for="(item, index) in tags"
            :key="index"
            :style="{
              color: item.color
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
          class="inline-block py-1 rounded-lg hover:bg-gray-200 text-blue-600 cursor-pointer"
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

onMounted(() => {
  console.log('mount is ', Props.itemId)
  console.log('----------')
  console.log('tags is ', Props.tags)
})
</script>
<style scoped lang="less"></style>
