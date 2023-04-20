<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const data = ref({
  desc: '做一个有用的工具箱, 功能在不断完善中'
})
</script>

<template>
  <nav class="bg-white shadow">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex">
          <!-- Logo -->
          <div class="flex-shrink-0 flex items-center">
            <a href="/">
              <img
                class="block lg:hidden h-8 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark-on-white.svg"
                alt="Workflow logo"
              />
              <img
                class="hidden lg:block h-8 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark-on-white.svg"
                alt="Workflow logo"
              />
            </a>
          </div>
          <!-- Navigation Links -->
          <div class="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
            <a
              href="/"
              class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-no-wrap py-4 px-1 border-b-2 font-medium"
              >Home</a
            >
            <a
              href="/blog"
              class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-no-wrap py-4 px-1 border-b-2 font-medium"
              >Blog</a
            >
            <a
              href="/contact"
              class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-no-wrap py-4 px-1 border-b-2 font-medium"
              >Contact Us</a
            >
          </div>
        </div>
        <!-- Search Box and Auth Dropdown -->
        <div class="flex items-center">
          <!-- Search Box -->
          <div class="hidden sm:flex sm:items-center sm:ml-6">
            <div class="relative rounded-md shadow-sm">
              <input
                class="form-input py-2 px-3 block w-64 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                type="search"
                placeholder="Search..."
              />
              <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <svg class="h-4 w-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M9 16a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-1.2a5.8 5.8 0 1 0 0-11.6 5.8 5.8 0 0 0 0 11.6z"
                  />
                  <path
                    d="M12.6 11.4l2.8 2.8c.2.2.2.5 0 .7-.2.2-.5.2-.7 0l-2.8-2.8a5.5 5.5 0 1 1 .7-.7zM6.5 10a3.5 3.5 0 1 0 7 0 3.5 3.5 0 0 0-7 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <!-- Auth Dropdown -->
          <div class="hidden sm:flex sm:items-center sm:ml-6">
            <div class="relative flex-shrink-0">
              <button
                class="bg-white rounded-full flex text-sm focus:outline-none focus:shadow-outline-blue"
                id="user-menu"
                aria-haspopup="true"
              >
                <span class="sr-only">Open user menu</span>
                <img
                  class="h-8 w-8 rounded-full"
                  src="https://randomuser.me/api/portraits/women/82.jpg"
                  alt=""
                />
              </button>
              <!-- Dropdown panel -->
              <div
                class="origin-top-right absolute right-0 mt-2 w-48 hidden rounded-md shadow-lg user-drop-down"
              >
                <div
                  class="py-1 rounded-md bg-white shadow-xs"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu"
                >
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition duration-150 ease-in-out"
                    role="menuitem"
                    >Your Profile</a
                  >
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition duration-150 ease-in-out"
                    role="menuitem"
                    >Settings</a
                  >
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition duration-150 ease-in-out"
                    role="menuitem"
                    >Sign out</a
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
    </div>

    <!-- Mobile Menu -->
    <div class="hidden sm:hidden mobile-drop-down">
      <div class="px-2 pt-2 pb-3">
        <a
          href="/"
          class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 bg-gray-200"
          >Home</a
        >
        <a
          href="/blog"
          class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
          >Blog</a
        >
        <a
          href="/contact"
          class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
          >Contact Us</a
        >

        <!-- Search Box for Mobile Devices -->
        <div class="mt-4">
          <div class="relative flex items-center justify-center">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg class="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.285 13.673a7.5 7.5 0 1 1 .828.828l3.563 3.563a1 1 0 0 1-1.414 1.414l-3.563-3.563a7.5 7.5 0 0 1-.828-.828zM5.5 10a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0z"
                />
              </svg>
            </div>
            <input
              class="block w-full py-2 pl-10 pr-3 leading-5 rounded-md sm:text-sm placeholder-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out"
              type="search"
              placeholder="Search..."
            />
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped lang="less">
.home-page {
  background-color: rgb(74, 85, 103);
}

.bottom-nav {
  a {
    letter-spacing: 1px;
    background-color: rgba(0, 0, 0, 0.4);
    padding: 0.4rem;
    padding-left: 0.6rem;
    padding-right: 0.6rem;
    border-radius: 0.5rem;
  }
  a:hover {
    font-size: larger;
    font-weight: bold;
    color: white;
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.8);
  }
}
</style>
