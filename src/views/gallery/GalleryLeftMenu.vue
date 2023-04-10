<!-- 左侧菜单栏 -->
<template>
    <div class=" w-full max-full  ">
        <div  class=" flex flex-wrap  gap-5  w-full p-3 h-full">
            <span v-for=" (item,index) in tagData" :key="index"  
            class=" font-mono border border-grey-200 p-3 text-white text-2xl  cursor-pointer rounded-2xl hover:bg-grey-400 hover:text-3xl hover:text-blue-500 transition-all ease-out-cubic" 
            :class="[item.isEnabled ? ' bg-yellow-200 text-black text-3xl':'']" 
            @click="()=>changeEnable(item)">
            {{ item.value }}
            </span >
            <span class="font-mono h-3/4 mt-1.5 border border-gray-800 p-2 rounded-xl bg-gray-500 text-gray-300 text-2xl  cursor-pointer flex items-end ">待补充...</span>
        </div>    
</div>
 
</template>

<script setup>
import { ref,defineEmits} from 'vue'

const emitFunc =defineEmits(['valueChange'])


const tagData = ref([
   
    {
        "id": 2,
        "value": "视频",
        "isEnabled": true
    },
    {
        "id": 1,
        "value": "AI绘画",
        "isEnabled": false
    },
    {
        "id": 3,
        "value": "社交",
        "isEnabled": false
    },
    {
        "id": 4,
        "value": "数据",
        "isEnabled": false
    },
    {
        "id": 5,
        "value": "视频剪辑",
        "isEnabled": false
    },
    {
        "id": 6,
        "value": "商业",
        "isEnabled": false
    },
    {
        "id": 7,
        "value": "AI聊天机器人",
        "isEnabled": false
    }
])


function changeEnable(val) {
    
    console.log('val is ',val)
    val.isEnabled =!val.isEnabled
    tagData.value.forEach(item =>{
        if (item.id !== val.id) {
          item.isEnabled = false
        }
    })
    emitFunc('valueChange',val.value)
}

</script>
<style scoped>



</style>