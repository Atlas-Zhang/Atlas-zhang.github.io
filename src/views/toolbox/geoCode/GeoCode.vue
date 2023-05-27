<template>
  <div class="h-screen  p-2  lg:w-4/5 lg:pt-10 lg:p-5 mt-2 lg:rounded-xl lg:h-auto">
    <ToolBoxDesc :title="toolData.title" :desc="toolData.desc"> </ToolBoxDesc>

    <div class="mt-2 bg-white p-2 flex lg:py-10 pb-2  lg:rounded-lg">
      <a
        class="p-2 rounded-t-lg text-white lg:w-1/4 lg:p-3 lg:text-center lg:py-3 cursor-pointer"
        @click="changeType('ENCODE')"
        :class="[
          submitData.type === 'ENCODE'
            ? 'font-bold bg-gray-800 border-gray-200'
            : 'bg-gray-400 border-black'
        ]"
        >地址转经纬度
      </a>
      <a
        class="p-2 rounded-t-lg text-white lg:w-1/4 lg:text-center lg:py-3 cursor-pointer"
        @click="changeType('REVERSE_ENCODE')"
        :class="[
          submitData.type === 'REVERSE_ENCODE'
            ? 'font-bold bg-gray-800 border-gray-200'
            : 'bg-gray-400 border-black'
        ]"
        >经纬度转地址</a
      >
    </div>
    <div
      class=" bg-white p-2  h-64 lg:h-96 lg:p-10 pt-0"
      v-if="submitData.type === 'REVERSE_ENCODE'"
    >
      <FormInputNumber :label="'经度'" v-model:value="submitData.lat" class="py-2 lg:py-5">
      </FormInputNumber>
      <FormInputNumber :label="'纬度'" v-model:value="submitData.lon" class="py-1 lg:py-3">
      </FormInputNumber>
      <FormItemTemp
        :label="'地址'"
        :val="submitData.address"
        class="text-black lg:py-5"
      ></FormItemTemp>
      <div class="pl-3 pr-16 mt-2 lg:mt-5">
        <el-button
          @click="submitDataToBack"
          :disabled="toolData.disabled"
          :loading="toolData.loading"
          class="mt-2 mr-2 w-full lg:w-3/5 lg:ml-10 lg:text-lg bg-gray-200 border-1 border-black p-4 lg:p-4 hover:font-bold focus:font-bold hover:bg-gray-300"
        >
          提交</el-button
        >
      </div>
    </div>

    <div class="mt-2 lg:mt-5 bg-white p-2 h-64 lg:h-96 lg:p-10" v-if="submitData.type === 'ENCODE'">
      <FormInput :label="'地址'" v-model:value="submitData.address" class="py-2 lg:py-5">
      </FormInput>
      <FormItemTempNumber
        :label="'经度'"
        :val="submitData.lon"
        class="text-black py-1 lg:py-3"
      ></FormItemTempNumber>
      <FormItemTempNumber
        :label="'纬度'"
        :val="submitData.lat"
        class="text-black py-2 lg:py-5"
      ></FormItemTempNumber>

      <div class="pl-3 pr-16 mt-2 lg:mt-5">
        <el-button
          @click="submitDataToBack"
          :disabled="toolData.disabled"
          :loading="toolData.loading"
          class="mt-2 mr-2 w-full lg:w-3/5 lg:ml-10 lg:text-lg bg-gray-200 border-1 border-black p-4 lg:p-4 hover:font-bold focus:font-bold hover:bg-gray-300"
        >
          提交</el-button
        >
      </div>
    </div>
    <div class="flex flex-col w-full  p-2 lg:p-10 bg-white mt-10 gap-3 rounded-lg">
      <span class="border-l-4 pl-3 border-blue-600 text-black font-bold  lg:text-2xl mb-5">
        用户评论
      </span>
      <CommentConf
      :relate-id="'geoCode'"
      :type-name="'经纬度转换'"
      :data-type="'TOOL_BOX'">
      </CommentConf>
    </div>
  </div>
</template>
<script setup>
import { useRouter, useRoute } from 'vue-router'
import CommentConf from '@/components/tools/CommentConf.vue'
import { ref, getCurrentInstance } from 'vue'
import FormInput from '@/components/form/FormInput.vue'
import FormInputNumber from '@/components/form/FormInputNumber.vue'
import ToolBoxDesc from '@/components/card/ToolBoxDesc.vue'
import FormItemTemp from '@/components/form/FormItemTemp.vue'
import FormItemTempNumber from '@/components/form/FormItemTempNumber.vue'
import { assignCopy } from '@/utils/util.js'
import { _submitDataForGeoCode } from '@/api/toolbox/ToolBoxApi.js'

const { proxy } = getCurrentInstance()

const toolData = ref({
  loading: false,
  disabled: false,
  title: '经纬度转换',
  desc: '支持两种转换方式：1，地理地址到经纬度转换；2经纬度坐标到地址转换'
})
const submitData = ref({
  lat: 0.0,
  lon: 0.0,
  address: '',
  type: 'ENCODE',
  isMany: 'NO'
})

function resetDataFiled() {
  submitData.value = {
    lat: 0.0,
    lon: 0.0,
    address: '',
    type: 'ENCODE',
    isMany: 'NO'
  }
}

function checkData() {
  if (submitData.value.type === 'REVERSE_ENCODE') {
    // 地理编码;
    if (!submitData.value.lat > 0 && submitData.value.lat < 180) {
      proxy.$message('经纬度输入有误', 'warning')
      return false
    }
    if (!submitData.value.lon > 0 && submitData.value.lon < 90) {
      proxy.$message('经纬度输入有误', 'warning')
      return false
    }
  } else {
    if (!submitData.value.address || submitData.value.address === '') {
      proxy.$message('地址输入有误', 'warning')
      return false
    }
  }
  return true
}

function changeType(val) {
  if (val !== submitData.value.type) {
    resetDataFiled()
    submitData.value.type = val
  }
}

async function submitDataToBack() {
  if (checkData()) {
    toolData.value.disabled = true
    toolData.value.loading = true
    const result = await _submitDataForGeoCode(submitData.value)
    if (result) {
      toolData.value.disabled = false
      toolData.value.loading = false
      submitData.value = assignCopy(result, submitData.value)
      proxy.$message('查询成功')
    } else {
      proxy.$message('查询失败')
    }
  }
}
</script>
<style lang="less"></style>
