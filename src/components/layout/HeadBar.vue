<template>
  <nav class="bg-white shadow z-20 left-0 right-0 w-full fixed top-0">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex">
          <!-- Logo -->
          <div class="flex-shrink-0 flex items-center hover:bg-white">
            <a @click="() => router.push('/')" class="cursor-default">
              <img
                class="block lg:hidden h-8 w-auto hover:bg-white hover:scale-110 transition duration-500 ease-in-out"
                src="../../assets/pic/logo.png"
                alt="Workflow logo"
              />
              <img
                class="hidden lg:block h-8 w-auto hover:bg-white hover:scale-110 transition duration-500 ease-in-out"
                src="../../assets/pic/logo.png"
                alt="Workflow logo"
              />
            </a>
          </div>
          <!-- Navigation Links -->
          <div class="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
            <a
              @click="() => router.push('/')"
              class="cursor-pointer text-gray-500 hover:border-gray-300 whitespace-no-wrap py-5 px-1 border-b-2 hover:font-bold hover:bg-white"
              :class="[
                router.currentRoute.value.path === '/'
                  ? 'font-bold border-blue-300 border-b-4 text-lg'
                  : 'font-medium  border-transparent'
              ]"
              >首页</a
            >
            <a
              @click="() => router.push('/ai-tools/list')"
              class="cursor-pointer text-gray-500 hover:text-black hover:border-gray-300 whitespace-no-wrap py-5 px-1 border-b-2 hover:font-bold hover:bg-white"
              :class="[
                router.currentRoute.value.path === '/ai-tools/list'
                  ? 'font-bold border-blue-300 border-b-4 text-lg'
                  : 'font-medium  border-transparent'
              ]"
              >AI工具</a
            >
            <a
              @click="() => router.push('/article/list')"
              class="cursor-pointer text-gray-500 hover:text-black hover:border-gray-300 whitespace-no-wrap py-5 px-1 border-b-2 hover:font-bold hover:bg-white"
              :class="[
                router.currentRoute.value.path === '/article/list'
                  ? 'font-bold border-blue-300 border-b-4 text-lg'
                  : 'font-medium  border-transparent'
              ]"
              >文档教程</a
            >
            <a
              @click="() => router.push('/tool-box/list')"
              class="cursor-pointer text-gray-500 hover:text-black hover:border-gray-300 whitespace-no-wrap py-5 px-1 border-b-2 hover:font-bold hover:bg-white"
              :class="[
                router.currentRoute.value.path === '/tool-box/list'
                  ? 'font-bold border-blue-300 border-b-4 text-lg'
                  : 'font-medium  border-transparent'
              ]"
              >工具箱</a
            >


            <a
              @click="() => router.push('/pay-plan/list')"
              class="cursor-pointer text-gray-500 hover:text-black hover:border-gray-300 whitespace-no-wrap py-5 px-1 border-b-2 hover:font-bold hover:bg-white"
              :class="[
                router.currentRoute.value.path === '/pay-plan/list'
                  ? 'font-bold border-blue-300 border-b-4 text-lg'
                  : 'font-medium  border-transparent'
              ]"
              >付费计划</a
            >
          </div>
        </div>

        <div class="hidden sm:flex sm:items-center sm:ml-6">
          <div class="relative flex-shrink-0">
            <button
              class="bg-white rounded-full flex text-sm focus:outline-none focus:shadow-outline-blue"
              id="user-menu"
              @mouseover="handleUserMenuOver"
              @mouseout="handleUserMenuOut"
              aria-haspopup="true"
            >
              <img class="h-8 w-8 rounded-full" src="../../assets/pic/user.png" alt="" />
            </button>
            <!-- Dropdown panel -->
            <div
              @mouseover="handleUserMenuOver"
              @mouseout="handleUserMenuOut"
              class="origin-top-right absolute -right-16 w-48 rounded-md shadow-lg user-drop-down px-2"
              :class="[isUserMenuVisiable ? '' : 'hidden']"
            >
              <div
                class="py-1 rounded-md bg-white shadow-xs"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu"
              >
                <a
                  @click="skipUserInfo"
                  v-if="userId"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition duration-150 ease-in-out cursor-pointer"
                  role="menuitem"
                  >个人中心</a
                >

                <a
                  @click="loginOut"
                  v-if="userId"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition duration-150 ease-in-out cursor-pointer"
                  role="menuitem"
                  >退出登录</a
                >
              </div>
            </div>
          </div>
        </div>
        <!-- Mobile Menu Button -->
        <div class="-mr-2 flex items-center sm:hidden">
          <button
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
            id="mobile-menu-btn"
            aria-label="Main menu"
            @click="mobileBtnClick"
            aria-expanded="false"
          >
            <svg class="block h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
            <svg class="hidden h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div
      class="transition-opacity duration-300"
      :class="[!isMobileShow ? 'hidden opacity-0' : 'opacity-100']"
    >
      <div class="px-2 pt-2 pb-3">
        <a
          @click="
            () => {
              mobileClickMenu = 'HOME'

              router.push('/')
              isMobileShow = false
            }
          "
          class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 transition duration-150 ease-in-out cursor-pointer"
          :class="[mobileClickMenu === 'HOME' ? 'bg-gray-200' : '']"
          >首页</a
        >
        <a
          @click="
            () => {
              mobileClickMenu = 'TOOL_LIST'
              router.push('/ai-tools/list')
              isMobileShow = false
            }
          "
          class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out cursor-pointer"
          :class="[mobileClickMenu === 'TOOL_LIST' ? 'bg-gray-200' : '']"
          >AI工具集</a
        >
        <a
          @click="
            () => {
              mobileClickMenu = 'ARTICLE_LIST'
              router.push('/article/list')
              isMobileShow = false
            }
          "
          class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out cursor-pointer"
          :class="[mobileClickMenu === 'ARTICLE_LIST' ? 'bg-gray-200' : '']"
          >文章教程</a
        >

        <a
          @click="
            () => {
              mobileClickMenu = 'TOOL_BOX'
              router.push('/tool-box/list')
              isMobileShow = false
            }
          "
          class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out cursor-pointer"
          :class="[mobileClickMenu === 'TOOL_BOX' ? 'bg-gray-200' : '']"
          >实用工具集</a
        >

        <a
          v-if="userId"
          @click="
            () => {
              mobileClickMenu = 'USER_INFO'
              router.push(`/userInfo/${userId}/detail`)
              isMobileShow = false
            }
          "
          class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out cursor-pointer"
          :class="[mobileClickMenu === 'USER_INFO' ? 'bg-gray-200' : '']"
          >个人中心</a
        >

        <a
          v-if="userId"
          @click="loginOut"
          class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out cursor-pointer"
          >退出登录</a
        >
      </div>
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
const mobileClickMenu = ref('')
const isMobileShow = ref(false)

function handleUserMenuOver() {
  isUserMenuVisiable.value = true
}

function handleUserMenuOut() {
  isUserMenuVisiable.value = false
}

function skipUserInfo() {
  router.push(`/userInfo/${userId.value}/detail`)
}

function mobileBtnClick() {
  isMobileShow.value = !isMobileShow.value
}

watch(
  () => router.currentRoute.value.path,
  (n, o) => {
    if (localStorage.getItem('userId')) {
      userId.value = localStorage.getItem('userId')
    }
  }
)

function loginOut() {
  localStorage.clear()
  isMobileShow.value = false // 页面刷新
  router.go()
  proxy.$message('账号退出成功', 'success')
}
</script>
<style scoped>
.mobile-drop-down {
  opacity: 100;
  visibility: visible;
}
</style>
