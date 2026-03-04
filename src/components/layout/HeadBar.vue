<template>
  <nav class="nav-bar z-20 left-0 right-0 w-full fixed top-0">
    <div class="max-w-5xl mx-auto px-5 h-14 flex items-center justify-between">
      <!-- Brand -->
      <a @click="() => router.push('/')" class="flex items-center gap-2.5 cursor-pointer flex-shrink-0">
        <img class="h-7 w-auto" src="../../assets/pic/logo.png" alt="Logo" />
        <span class="nav-brand hidden sm:block">工具平台</span>
      </a>

      <!-- Desktop nav links -->
      <div class="hidden sm:flex items-center gap-1">
        <a
          v-for="link in navLinks"
          :key="link.path"
          @click="() => router.push(link.path)"
          class="nav-link cursor-pointer px-3.5 py-1.5 rounded-full text-sm transition-all duration-150"
          :class="router.currentRoute.value.path === link.path ? 'nav-active' : ''"
        >{{ link.label }}</a>
      </div>

      <!-- Right: user avatar (desktop) + mobile hamburger -->
      <div class="flex items-center gap-2">
        <div class="relative hidden sm:block" v-if="userId">
          <button class="flex items-center focus:outline-none" @mouseover="isUserMenuVisiable = true" @mouseout="isUserMenuVisiable = false">
            <img class="h-7 w-7 rounded-full ring-1 ring-zinc-200" src="../../assets/pic/user.png" alt="" />
          </button>
          <div
            @mouseover="isUserMenuVisiable = true" @mouseout="isUserMenuVisiable = false"
            class="absolute right-0 top-full mt-1.5 w-36 rounded-xl bg-white border border-zinc-100 shadow-lg overflow-hidden py-1"
            :class="isUserMenuVisiable ? '' : 'hidden'"
          >
            <a @click="skipUserInfo" class="block px-4 py-2 text-sm text-zinc-700 hover:bg-zinc-50 cursor-pointer">个人中心</a>
            <a @click="loginOut" class="block px-4 py-2 text-sm text-zinc-700 hover:bg-zinc-50 cursor-pointer">退出登录</a>
          </div>
        </div>
        <!-- Mobile hamburger -->
        <button class="sm:hidden p-1.5 rounded-lg text-zinc-500 hover:bg-zinc-100 transition-colors" @click="isMobileShow = !isMobileShow">
          <svg v-if="!isMobileShow" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="1.75" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
          <svg v-else class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="1.75" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile drawer -->
    <div v-if="isMobileShow" class="sm:hidden bg-white border-t border-zinc-100 px-4 py-3 space-y-1">
      <a
        v-for="link in navLinks"
        :key="link.path"
        @click="() => { router.push(link.path); isMobileShow = false }"
        class="block px-3 py-2.5 rounded-xl text-sm text-zinc-700 hover:bg-zinc-50 cursor-pointer transition-colors"
        :class="router.currentRoute.value.path === link.path ? 'bg-blue-50 text-blue-600 font-medium' : ''"
      >{{ link.label }}</a>
    </div>
  </nav>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { ref, watch, getCurrentInstance } from 'vue'
const { proxy } = getCurrentInstance()
const userId = ref('')
const router = useRouter()
const isUserMenuVisiable = ref(false)
const isMobileShow = ref(false)

const navLinks = [
  { path: '/', label: '首页' },
  { path: '/ai-tools/list', label: 'AI 工具' },
  { path: '/article/list', label: '文章教程' },
  { path: '/tool-box/list', label: '工具箱' },
  { path: '/about/me', label: '关于我' },
]

watch(() => router.currentRoute.value.path, () => {
  if (localStorage.getItem('userId')) userId.value = localStorage.getItem('userId')
})

function skipUserInfo() { router.push(`/userInfo/${userId.value}/detail`) }
function loginOut() {
  localStorage.clear()
  isMobileShow.value = false
  router.go()
  proxy.$message('账号退出成功', 'success')
}
</script>

<style scoped>
.nav-bar {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border-bottom: 1px solid #f0f0f0;
}

.nav-brand {
  font-size: 0.9375rem;
  font-weight: 600;
  color: #09090b;
  letter-spacing: -0.01em;
}

.nav-link {
  color: #52525b;
  font-weight: 400;
}
.nav-link:hover {
  color: #09090b;
  background: rgba(0, 0, 0, 0.04);
}
.nav-active {
  color: #2563eb;
  font-weight: 500;
  background: #eff6ff;
}
.nav-active:hover {
  background: #dbeafe;
}
</style>
