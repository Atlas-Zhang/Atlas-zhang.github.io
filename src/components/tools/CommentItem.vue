<template >
    <div class="flex flex-col mb-5">
        <div class="text-md">
            <p>
                <span class="font-bold mr-3">{{ name }}</span>
                {{ comment }}
            </p>

        </div>
        <div class="text-xs text-gray-500 mt-1">
            {{ createAt }}
        </div>
        
    </div>
</template>
<script setup>
import {  ref,onMounted,defineProps,watch } from 'vue'
const Props = defineProps({
    name :{
        type: String,
        default: ''
    },

    comment :{
        type: String,
        default: ''
    },

    createAt :{
        type: String,
        default: ''
    },
})


</script>
<style lang="less" scoped>
    
</style>