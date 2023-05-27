<template>
    <div class="text-black">
        <div>
            <div class=" flex flex-col  ">
                <textarea
                v-model="dataForm.comment"
                class="w-full h-[100px] lg:h-[200px] text-gray-600  border-gray-600 text-md placeholder-gray-300 rounded-t-lg"
                placeholder="留下你的评论,请文明发言" >
                </textarea>
                <div class="  bg-gray-300   cursor-pointer flex justify-end pr-1 rounded-b-lg py-1 border-b border-x border-black ">
                    <span class="py-1 px-2 hover:bg-gray-400 rounded-lg focus:hover:bg-gray-500">{{'&#128512;'}}</span>
                </div>
            </div>
            <div class="flex  flex-col lg:flex-row gap-2  mt-2 px-2">
                <div class="flex flex-col sm:flex-row gap-4 ">
                    <input placeholder="请输入昵称" 
                    v-model="dataForm.name"
                    class="py-1.5 border text-sm text-black placeholder-gray-300 border-gray-300 rounded-lg px-2.5">
                    <input placeholder="请输入邮箱"
                    v-model="dataForm.email"
                    class="py-1.5 border text-sm text-black placeholder-gray-300 border-gray-300 rounded-lg px-2.5">
                </div>
                <div class="flex justify-end">
                      <div class="text-black border border-gray-500 px-3 py-0.5 rounded-lg bg-gray-200 hover:bg-gray-400 hover:border-black cursor-pointer"
                      @click="submitComment">
                        提交
                      </div>  
                </div>
            </div>
        </div>
        <div class="mt-5  ">
            <span class="text-lg text-gray-500 tracking-wider">{{dataForm.pagination.totalNum}}条评论</span>
            <div class="bg-gray-100  mt-2 p-3 lg:p-8 rounded-lg ">
                <CommentItem v-for="(item,index) in dataForm.data" :key="index"
                :name="item.name"
                :comment="item.comment"
                :createAt="item.createAt">
                </CommentItem>
                <div class="flex justify-center mt-10" v-if="dataForm.data.length < dataForm.pagination.totalNum">
                <div 
                @click="queryMoreComment"
                class=" w-1/2 bg-gray-200 text-center py-1 rounded-md text-gray-800 border-dashed border-gray-800 cursor-pointer ">
                    更多
                </div>
                </div>

            </div>
        </div>
    </div>
</template>
<script setup>
import {  ref,onMounted,defineProps,watch } from 'vue'
import { _submitCommentData,_queryCommentData} from '@/api/comment/CommentApi.js'
import FormInput from '../form/FormInput.vue';
import  {validateEmail} from '../../utils/tool.js'
import { ElMessage, ElMessageBox } from 'element-plus'
import CommentItem from './CommentItem.vue'
import { useRouter } from 'vue-router'
const router = useRouter()


const dataForm = ref({
    totalNum: 0,
    isEmoilVisible: false,
    name: '',
    comment:'',
    email: '',
    emojiList: [
     '&#128512;','&#128512;','&#128536;','&#129322;','&#128077;'],
    pagination: {
        pageSize: 10,
        current: 1,
        sort: 'createAt',
        direction: 'DESC',
        totalNum: 0
    },
    data: []
})
const Props = defineProps({
    totalNum: {
        type: Number,
        default: 0
    },
    dataType :{
        type: String,
        default: 'TOOL_BOX'
    },
    relateId: {
        type: String,
        default: ''
    },
    typeName: {
        type: String,
        default: ''
    }
})

watch(
    ()=> Props.relateId,
    (newVal) => {
        queryCommentData()
    }
)

function validData(){
    if(dataForm.value.email){
        if(!validateEmail(dataForm.value.email)){
            ElMessage({
            type: 'warning',
            message: '提交邮箱格式有误',
            })
            return false;
        }
    }
    if(!dataForm.value.name){
        ElMessage({
            type: 'warning',
            message: '昵称为空，检查后重新提交',
            })
            return false;
     }
     if(!dataForm.value.comment){
        ElMessage({
            type: 'warning',
            message: '评论为空，检查后重新提交',
            })
            return false;
     }
     return true;
    
}

async function queryCommentData(){
    if(Props.relateId){
        const result =  await _queryCommentData({
            relateId: Props.relateId,
            type: Props.dataType,
            page: dataForm.value.pagination.current,
            size: dataForm.value.pagination.pageSize,
            sort: dataForm.value.pagination.sort,
            direction: dataForm.value.pagination.direction
        })
        if(result){
            dataForm.value.data = result.content
            dataForm.value.pagination.totalNum = result.totalElements

        }
    }
}


async function queryMoreComment(){

    if(dataForm.value.data.length < dataForm.value.pagination.totalNum){
        const result =  await _queryCommentData({
            relateId: Props.relateId,
            type: Props.dataType,
            page: dataForm.value.pagination.current,
            size: dataForm.value.pagination.pageSize,
            sort: dataForm.value.pagination.sort,
            direction: dataForm.value.pagination.direction
        })
        if(result){
     
            dataForm.value.data =  dataForm.value.data.concat(result.content)
   
        }
    }
}

/**
 * 数据重置
 */
function resetData(){
    dataForm.value.name = ''
    dataForm.value.comment = ''
    dataForm.value.email = ''
}

async function submitComment(){

    if(!validData()){
        return;
    }

    ElMessageBox.confirm(
    '确定要提交该评论么?',
    '提示',
    {
      confirmButtonText: 'OK',
      cancelButtonText: 'Cancel',
      type: 'warning',
    }
  )
    .then(async () => {
        const result = await _submitCommentData({
            relateId: Props.relateId,
            name: dataForm.value.name,
            email: dataForm.value.email,
            comment: dataForm.value.comment,
            typeName: Props.typeName,
            type: Props.dataType,
            link: window.location.href,
        })
        if(result){
            ElMessage({
            type: 'success',
            message: '提交成功，正则审核中',
            })
            resetData()
        }
    })
    .catch(() => {
      ElMessage({
        type: 'error',
        message: '提交失败',
      })
    })
    
}

onMounted(() => {
    queryCommentData()
})



</script>
<style lang="">
    
</style>