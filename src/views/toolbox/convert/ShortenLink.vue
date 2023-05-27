<template>
  <div class="h-screen pt-0 p-2  lg:w-4/5 lg:pt-10 lg:p-5 mt-2 lg:rounded-xl lg:h-auto text-black">
    <ToolBoxDesc :title="toolData.title" :desc="toolData.desc"> </ToolBoxDesc>
    <div class="mt-5 p-2 bg-white lg:p-5 ">
        <h1 class="text-xl font-bold border-l-4 border-l-blue-500 pl-6">请输入链接</h1>
        <div class="flex mt-10 w-full  items-center flex-col p-2 pb-10  h-auto">
            <div class="w-full lg:w-3/4  justify-center  flex gap-3 lg:h-24 py-2
                ">
                <input placeholder="请输入输入链接"
                v-model="formData.originUrl"
                class="rounded-lg  
                bg-gray-50
                border 
                border-gray-500  lg:w-5/6 text-center
                focus:border-parmary-500
                block
                px-2
                py-2
                placeholder-gray-400
                focus:ring-primary-500
                text-2xl "/>
                <button 
                @click="generateUrl"
                class="
                rounded-xl
                text-[1rem]
                px-2
                py-1
                lg:text-[1.5rem]
                bg-blue-300 lg:w-1/6
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
    <div class="flex flex-col w-full  p-2 lg:p-10 bg-white mt-10 gap-3 rounded-lg">
      <span class="border-l-4 pl-3 border-blue-600 text-black font-bold  lg:text-2xl mb-5">
        用户评论
      </span>
      <CommentConf
      :relate-id="'ShortenLink'"
      :type-name="'短链服务'"
      :data-type="'TOOL_BOX'">
      </CommentConf>
    </div>
  </div>
</template>

<script setup>
import { ref, getCurrentInstance, onMounted } from 'vue'
import ToolBoxDesc from '@/components/card/ToolBoxDesc.vue'
import {_shortenUrl} from  '@/api/toolbox/ToolBoxApi.js'
import {isValidUrl,loadingMsg}  from '@/utils/tool.js'
import  ClipboardItem  from '@/components/tools/ClipboardItem.vue'
import CommentConf from '@/components/tools/CommentConf.vue'
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
        formData.value.shortenUrl = result
        loading.close()
    }
    
}



onMounted(() => {
  
})


</script>

<style>

</style>