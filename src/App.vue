<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'
import HeadBar from '@/components/layout/HeadBar.vue'

const currentPath = ref('null')
const router = useRouter()

onMounted(() => {
  currentPath.value = router.currentRoute.value.path
  const appDoc = document.getElementById('app')
  if (appDoc) {
    if ('/' === currentPath.value) {
      appDoc.classList.remove('home-class')
    }
    // judgeToken()
  }
})

function judgeToken() {
  const tokenObj = localStorage.getItem('wechat-public')
  const token = JSON.stringify(tokenObj)
  const timeStampObj = localStorage.getItem('timestamp')
  const timeStamp = JSON.stringify(timeStampObj)
  // 不存在 token，直接报错

  if ((tokenObj === null || timeStampObj === null) &&  currentPath.value !== '/' ) {
    if (currentPath.value !== '/') {
      localStorage.setItem('origin-routine', currentPath.value)
    }
    router.push('/login-page')
    return
  }

  // Wait for some time...
  var currentTimestamp = Date.now()
  var difference = (currentTimestamp - parseInt(timeStamp)) / 1000 / 60 / 60
  if (difference < 48 &&  currentPath.value !== '/' ) {
    if (currentPath.value !== '/') {
      localStorage.setItem('origin-routine', currentPath.value)
    }
    router.push('/login-page')
    return
  }
}

// 监听
watch(
  () => router.currentRoute.value.path,
  (n, o) => {
    currentPath.value = n
    const appDoc = document.getElementById('app')
    if (appDoc) {
      if ('/' === currentPath.value) {
        appDoc.classList.remove('home-class')
      } else {
        // appDoc.classList.add('home-class')
      }
    }
    // judgeToken()
  }
)
</script>

<template>
  <div>
    <div class="relative h-full">
      <HeadBar></HeadBar>
    </div>
    <div class="mt-16 relative lg:flex lg:flex-col lg:items-center">
      <RouterView />
    </div>
  </div>
</template>
<style scoped></style>
