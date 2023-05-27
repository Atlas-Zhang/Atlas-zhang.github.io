<template >
    <ClipboardDocumentIcon
      @click="copyPaste"
      data-tooltip-target="tooltip-light"
      data-tooltip-style="light"
      class="w-5 lg:w-6 text-gray-400 cursor-pointer"
    ></ClipboardDocumentIcon>
</template>
<script setup>
import { ClipboardDocumentIcon } from '@heroicons/vue/24/outline'
import {  defineProps,getCurrentInstance,watch } from 'vue'
const { proxy } = getCurrentInstance()
const Props = defineProps({
  value: {
    type: String,
    default: ''
  }
})

watch(() => Props.value,(newVal) =>{

})


function copyPaste(){


    if(Props.value){
        let textarea = document.createElement('textarea');
        textarea.value = Props.value;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        proxy.$message('粘贴成功','success')
    }else{
        proxy.$message('暂无数据,粘贴失败','warning')
    }

}

</script>
<style >
    
</style>