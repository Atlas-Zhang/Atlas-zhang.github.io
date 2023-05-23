<template>
  <div
    class="min-h-screen h-auto pt-5 p-2 bg-gray-700 lg:w-3/5 lg:pt-10 lg:p-5 mt-10 lg:rounded-xl lg:h-auto"
  >
    <ToolBoxDesc :title="toolData.title + '(该服务暂时不可用)'" :desc="toolData.desc">
    </ToolBoxDesc>

    <div class="mt-2 w-full border-2 box-border bg-white rounded-sm p-2">
      <textarea
        :value="submitData.prompt"
        class="w-full bg-gray-600 h-32 rounded-lg border-black border-2 text-sm text-white p-2 focus:border-yellow-300 focus:shadow-sm"
        @input="
          (e) => {
            submitData.prompt = e.target.value
          }
        "
      ></textarea>
      <div
        class="w-[40vw] bg-gray-100 text-black flex justify-center items-center p-1 text-md mt-2 mx-auto border-black border-2 rounded-md focus:border-blue-500"
      >
        Generate
      </div>

      <div class="mt-2 py-2" v-if="submitData.image">
        <span class="border-l-4 border-red-600 text-black text-sm font-bold pl-3">
          生成图片预览</span
        >
        <img
          :src="'data:image/jpeg;base64,' + submitData.image"
          class="w-full rounded-xl object-cover"
        />
      </div>
    </div>
    <div class="bg-white rounded-md mt-2 p-2" v-if="submitData.image">
      <span class="border-l-4 border-red-600 text-black text-sm font-bold pl-3">历史生成记录 </span>
      <div class="mt-2"></div>
    </div>
  </div>
</template>
<script setup>
import { ref, getCurrentInstance, onMounted } from 'vue'
import ToolBoxDesc from '@/components/card/ToolBoxDesc.vue'
import { _submitDataForTextToImage } from '@/api/toolbox/ToolBoxApi.js'
import { _queryAiToolItem } from '@/api/items/AiToolItemApi'
import { assignCopy } from '@/utils/util.js'
const { proxy } = getCurrentInstance()

const toolData = ref({
  loading: false,
  disabled: false,
  title: 'Stability AI 绘画',
  desc: '输入文本信息，片刻中生成你想要的图像'
})

const submitData = ref({
  prompt: '',
  image: '',
  status: 'TO_DO',
  isSuccess: 'NO',
  createdAt: '',
  type: 'STABILITY'
})

function checkData() {
  if (!submitData.value.prompt) {
    // 地理编码;
    proxy.$message('Prompt为空，输入有误', 'warning')
    return false
  }
  return true
}

async function generateImage() {
  if (checkData()) {
    const result = await _submitDataForTextToImage(submitData.value)
    if (result) {
      submitData.value = assignCopy(result, submitData.value)
      proxy.$message('生成成功', 'success')
    }
  }
}

onMounted(() => {})
</script>
<style lang=""></style>
