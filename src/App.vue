<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'

const test = ref('OPEN TOOL')
const currentPath = ref('null')
const router = useRouter()

onMounted(() => {
  currentPath.value = router.currentRoute.value.path
  const appDoc = document.getElementById('app')
  if (appDoc) {
    if ('/' === currentPath.value) {
      appDoc.classList.remove('home-class')
    }
    judgeToken()
  }
})

function judgeToken() {
  const tokenObj = localStorage.getItem('wechat-public')
  const token = JSON.stringify(tokenObj)
  const timeStampObj = localStorage.getItem('timestamp')
  const timeStamp = JSON.stringify(timeStampObj)
  console.log('----------------------token is --------------', token, timeStamp)
  // 不存在 token，直接报错

  if (tokenObj === null || timeStampObj === null) {
    if (currentPath.value !== '/') {
      localStorage.setItem('origin-routine', currentPath.value)
    }
    router.push('/login-page')
    return
  }

  // Wait for some time...
  var currentTimestamp = Date.now()
  var difference = (currentTimestamp - parseInt(timeStamp)) / 1000 / 60 / 60
  if (difference < 48) {
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
    judgeToken()
  }
)
</script>

<template>
  <RouterView />
</template>
<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  text-align: center;
  margin-top: 4rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    /* display: flex; */
    /* place-items: center; */
    /* padding-right: calc(var(--section-gap) / 2); */
  }

  nav {
    font-size: 1rem;
  }
}
</style>
