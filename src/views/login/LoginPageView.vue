<template>
  <div class="bg-white text-black flex flex-col items-center p-8 justify-center h-screen">
    <div class="flex flex-col items-center mb-3 lg:mb-5">
      <h1 class="text-3xl font-bold tracking-normal">ShareToolz</h1>
    </div>
    <div class="qrcode mt-1 border-gray-500 p-2 lg:p-2 pb-2">
      <div class="flex flex-col items-center">
        <img src="../../assets/qr_cde.jpg" class="w-40 lg:w-80" />
        <p class="whitespace-pre-wrap break-words text-center lg:text-xl">
          扫描上方二维码。关注微信公号，<br class="lg:hidden" />发送关键字
          <span class="font-bold">验证码 </span>即可获取
        </p>
      </div>
      <div class="p-3">
        <input
          placeholder="请输入验证码"
          v-model="inputCode"
          class="border-2 text-center w-full text-xl rounded-md py-1 font-mono"
        />
      </div>
      <div class="w-full flex justify-center p-1">
        <el-button
          type="primary"
          class="btn-class text-md xl:text-lg font-bold text-center p-4 rounded-sm cursor-pointer lg:p-6"
          @click="loginPage"
          :disabled="inputCode === ''"
          >公众号登录</el-button
        >
      </div>
    </div>
    <span
      class="whitespace-pre-wrap w-4/5 text-center lg:w-2/5 mt-5 lg:mt-10 lg:text-xl text-gray-500 hover:text-black"
      >ShareToolz 提供广泛的 AI
      工具和文件转换服务，可让用户快速轻松地创建、编辑和共享各种文件。我们不断推出新功能和工具，以确保您始终处于技术领先地位。</span
    >
  </div>
</template>

<script setup>
import { ref, defineEmits, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { ElMessage } from 'element-plus'
import { _validateCode } from '@/api/wxPublicApi.js'
import { isEightDigitNumber } from '@/utils/tool.js'

const router = useRouter()

const inputCode = ref('')

async function loginPage() {
  console.log('input Code is ------------------', inputCode.value)
  if (!isEightDigitNumber(inputCode.value)) {
    ElMessage.error('输入验证码不合法')
    return
  }

  const result = await _validateCode({ code: inputCode.value })
  if (result) {
    console.log('result is', result)
    ElMessage.success('登录成功')
    var currentTimestamp = Date.now()
    //todo 加入验证码校验
    localStorage.setItem('timestamp', currentTimestamp)
    localStorage.setItem('wechat-public', result.userId)
    localStorage.setItem('token', result.token)
    // 获取原始路由
    var originPath = localStorage.getItem('origin-routine')
    if (originPath && '/login-page' !== originPath) {
      // 请求原始路由
      router.push(originPath)
    } else {
      router.push('/')
    }
  }
}
</script>
<style lang="less">
.qrcode {
  border-width: 1.5rem;
}

@media (min-width: 1024px) {
  .qrcode {
    border: none;
  }
}
.btn-class {
  background-color: #4582e7;
  width: 100%;
}
.btn-class:active {
  background-color: gray;
  color: white;
}
</style>
