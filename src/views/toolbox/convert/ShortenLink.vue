<template>
  <div class="h-screen pt-0 p-2  lg:w-4/5 lg:pt-10 lg:p-5 mt-2 lg:rounded-xl lg:h-auto text-black">
    <ToolBoxDesc :title="toolData.title" :desc="toolData.desc"> </ToolBoxDesc>
    <div class="mt-5 bg-white lg:p-5 ">
        <h1 class="text-xl font-bold border-l-4 border-l-blue-500 pl-6">请输入链接</h1>
        <div class="flex mt-10 w-full  items-center flex-col p-2 h-[400px]">
            <div class="w-3/4 flex gap-3 h-20
                shadow-md">
                <input placeholder="输入链接"
                v-model="formData.originUrl"
                class="rounded-lg  border-2 border-gray-500 w-5/6 text-center
                focus:border-yellow-200
                text-2xl "/>
                <button 
                @click="generateUrl"
                class="
                rounded-xl
                text-[1.5rem]
                bg-blue-300 w-1/6
                hover:text-white">生成短链</button>
            </div>

            <div class="
            rounded-md  p-4  w-3/4 
            text-xl
            shadow-md
            gap-5
            hover:shadow-lg
            cursor-pointer            
            flex flex-col mt-5 pl-10 transition duration-500 ease-in-out bg-gray-100 " v-if="formData.shortenUrl && formData.originUrl">
                <div class="font-semibold flex">
                     缩短后短链：
                     <span class="ml-5 flex">{{ formData.shortenUrl }}
                        <clipboard-item v-model:value="formData.shortenUrl"  class="ml-2"
                        v-if="formData.shortenUrl">
                        </clipboard-item>
                </span>
                </div>
                <div class="font-semibold text-gray-400">
                    原网址:
                    <span class="ml-5">{{ formData.originUrl}}</span>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script setup>
import { ref, getCurrentInstance, onMounted } from 'vue'
import ToolBoxDesc from '@/components/card/ToolBoxDesc.vue'
import {_shortenUrl} from  '@/api/toolbox/ToolBoxApi.js'
import {isValidUrl,loadingMsg}  from '@/utils/tool.js'
import  ClipboardItem  from '@/components/tools/ClipboardItem.vue'
const { proxy } = getCurrentInstance()
const toolData = ref({
  loading: false,
  disabled: false,
  title: '短链转换',
  desc: '将您提供的长链接缩短'
})
const formData = ref({
    shortenUrl: '',
    originUrl: ''
})

async function generateUrl(){
    if(!isValidUrl(formData.value.originUrl)){
        proxy.$message('输入链接不合法，请重新输入','warning')
        return
    }
    const loading = loadingMsg()
    const result = await _shortenUrl({url: formData.value.originUrl})
    if(result){
        console.log('result is ',result)
        formData.value.shortenUrl = result
        loading.close()
    }
    
}








onMounted(() => {
    console.log('开始-------------------')
})


</script>

<style>

</style>