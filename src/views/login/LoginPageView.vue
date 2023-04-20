<template>
  <div class="h-screen bg-white text-black flex flex-col justify-center items-center">
    <div class="flex flex-col items-center">
      <h1 class="text-3xl font-bold mb-6 tracking-widest">AI工具合集</h1>
      <span class="text-2xl tracking-wide text-gray-600">一个有用的工具网站</span>
    </div>
    <div class="qrcode mt-10 border-gray-400 p-6 pb-2">
      <div class="flex flex-col items-center">
        <img src="../../assets/qr_cde.jpg" class="w-80" />
        <p class="whitespace-pre-wrap break-words text-center">
          扫描上方二维码。关注微信公号，<br />发送关键字
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
          class="btn-class text-xl font-bold text-center p-4 rounded-sm cursor-pointer"
          @click="loginPage"
          :disabled="inputCode === ''"
          >用户登录</el-button
        >
      </div>
    </div>
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

.btn-class {
  background-color: #4582e7;
  width: 100%;
}
.btn-class:active {
  background-color: gray;
  color: white;
}
</style>
