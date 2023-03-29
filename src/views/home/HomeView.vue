<script setup>
import {ref} from 'vue'

import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const data = ref({
  desc: '立志做一个有用的工具箱 \n 还在不断完善中'
})



</script>

<template>
<div class=" bg-black p-3 h-full text-white flex flex-col justify-start items-center">

  <!--头像描述 -->
  <div class=" h-1/2 flex flex-col items-center pt-20">
    <img src="@/assets/logo.jpg" class=" w-20 h-auto rounded-md hover:translate-x-1 hover:translate-y-1 hover:scale-110 transition-all transform"/>
    <h2 class="green font-mono  text-2xl mt-10 font-normal hover:font-bold hover:text-3xl transition-all transform"> OPEN TOOLS</h2>
    <span class=" mt-28 text-gray-400 text-xl tracking-wider whitespace-pre-line text-center">{{ data.desc}}</span>
  </div>

  <div class="footer flex justify-between space-x-3 items-center h-full p-1 w-full sm:w-full md:w-1/2 lg:w-1/3 sm:p-5">
    <a @click="() => {router.push('/')}">首页</a>
    <a @click="() => {router.push('/excel-process')}">EXCEL模块</a>
    <a @click="() => {console.log('测试121')}">展览模块</a>
  </div>

</div>

</template>