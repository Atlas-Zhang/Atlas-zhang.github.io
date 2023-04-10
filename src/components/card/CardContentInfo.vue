<template>
  <div class="flex items-center gap-4 shadow-lg bg-gray-200 
  rounded-xl p-6 transform transition duration-500 hover:scale-105 hover:shadow-xl w-5/12 sm:w-full md:w-full xl:w-5/12">
        <img :src="img" alt="Card Image" 
                        class=" w-40 h-40 rounded-lg object-fill scale-100 hover:scale-110 transform transition duration-500">
        <div class="w-4/5">
            <h2 class="text-lg font-bold mb-2">{{ title }}</h2>
            <a @click="viewDetailItem(id)" class="text-sm text-blue-600 ml-1 cursor-pointer">详情</a>
            <p class="text-sm text-gray-700 mb-2  mr-6 truncate">{{ description }}</p>
            <div class="flex items-center gap-2 mb-2">
                <span class="px-2 py-1 bg-yellow-300 text-gray-700 rounded-xl 
                text-sm  transition duration-500 hover:scale-105 hover:shadow-xl"
                v-for="(item,index) in tags" :key="index">
                {{ item }}
                </span>
               
            </div>
        </div>
    </div>
</template>
<script setup>

import { ref,defineEmits, defineProps } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()


const Props = defineProps({
    img: {
        type: String,
        default: ''
    },
    description: {
        type: String,
        default: ''
    },
    title: {
        type: String,
        default: ''
    },
    subTitle: {
        type: String,
        default: ''
    },
    tags: {
        type: Array,
        default: () => []
    },
    id: {
        type: Number,
        default: 0
    }
    
})


function viewDetailItem(id){
    console.log(Props.id)
   
    console.log('详情 ---------------------',Props.id)
    router.push(`/ai-tools/${Props.id}/detail`)
    
}

</script>
<style lang="">
    
</style>