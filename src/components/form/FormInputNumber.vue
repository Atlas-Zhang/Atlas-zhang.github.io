<template>
  <div class="flex flex-wrap items-center">
    <span class="font-bold w-auto lg:w-20 text-black">{{ label + ':' }}</span>
    <input
      class="w-2/3 text-center ml-2 p-1 rounded-lg border-2 border-gray-200 text-black focus:border-r-2 focus:border-blue-500"
      v-model="currentValue"
      :placeholder="'请输入' + label"
      @input="
        (e) => {
          currentValue = e.target.value
        }
      "
    />
  </div>
</template>
<script setup>
import { defineProps, onMounted, ref, watch, defineEmits } from 'vue'
const currentValue = ref('')
const emitFunc = defineEmits(['update:value'])

const Props = defineProps({
  label: {
    type: String,
    default: ''
  },
  value: {
    type: Number,
    default: 0
  }
})

watch(
  () => currentValue.value,
  (newVal) => {
    emitFunc('update:value', newVal)
  }
)

onMounted(() => {
  currentValue.value = Props.val
})
</script>
<style></style>
