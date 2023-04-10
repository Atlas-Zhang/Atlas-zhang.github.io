<template >
    <div class="flex  flex-col bg-slate-600 h-screen p-20 items-center">
        <div class="flex items-center  gap-4  
  rounded-xl p-6 transform transition duration-500   sm:w-11/12 md:w-11/12 xl:w-3/5">
            <div class="py-10 bg-slate-500 px-10 w-full rounded-lg ">
                <img :src="articleData.img"  class="w-full h-60 object-cover rounded-xl"/>
            </div>
            <div class=" bg-white h-full w-full  rounded-lg p-8 flex flex-col gap-10">
                <div class="flex items-center gap-2 mb-2">
                    <span v-for="(item,index) in articleData.tags" :key="index"
                     class="bg-yellow-200 p-2 text-xl rounded-xl font-mono ">
                    {{ item }}
                    </span>
                </div>
                <h1 class="text-2xl font-bold ">{{ articleData.title }}</h1>
                <p class="text-xl  text-grey-700 ">{{ articleData.description }}</p>
            </div>
        </div>

        

        <div class="h-full  rounded-lg  w-11/12 p-20 mt-20 bg-white mark-content" v-html="articleData.content" >
            
        </div>
      
        
        
    </div>
</template>
<script setup>
import { ref,defineEmits,onMounted,defineProps} from 'vue'


const Props = defineProps({
    articleId: {
        type: Number,
        default: -1
    }
})
const cardList = ref([
    {
        img: 'https://images.zeroingpython.top//img/1_jewaay.png',
        title: '标1',
        id: 1,
        description: 'https://images.zeroingpython.top//img/1_jewaay.pnghttps://images.zeroingpython.top//img/1_jewaay.png',
        tags: ["tag1","tag22"]
    },
    {img: 'https://images.zeroingpython.top//img/1_jewaay.png',
    title: '标1测试',
    id: 2,
    description: 'https://images.zeroingpython.top//img/1_jewaay.png',
    tags: ["tag1","tag22"]},
    {img: 'https://images.zeroingpython.top//img/1_jewaay.png',
    title: '提示1测试',
    id: 3,
    description: 'https://images.zeroingpython.top//img/1_jewaay.png',
    tags: ["tag1","tag22"]},
    {img: 'https://images.zeroingpython.top//img/1_jewaay.png',
    title: '题测试',
    id: 4,
    description: 'https://images.zeroingpython.top//img/1_jewaay.png',
    tags: ["tag1","tag22"]},
    {img: 'https://images.zeroingpython.top//img/1_jewaay.png',
    title: 'A测试',
    id: 5,
    description: 'https://images.zeroingpython.top//img/1_jewaay.png',
    tags: ["tag1","tag22"]},
    {img: 'https://images.zeroingpython.top//img/1_jewaay.png',
    title: 'Windows激活',
    id: 6,
    description: 'https://images.zeroingpython.top//img/1_jewaay.png',
    tags: ["tag1","tag22"]},
    {img: 'https://images.zeroingpython.top//img/1_jewaay.png',
    title: '转到',
    id: 7,
    description: 'https://images.zeroingpython.top//img/1_jewaay.png',
    tags: ["tag1","tag22"]},
    {img: 'https://images.zeroingpython.top//img/1_jewaay.png',
    title: '测试激活',
    id: 8,
    description: 'https://images.zeroingpython.top//img/1_jewaay.png',
    tags: ["tag1","tag22"]}
])

const articleData = ref({
    id: 0,
    title: '',
    description: '',
    tags: [],
    content: '<h2>我们的热门，</h2><p>哈哈哈哈</p><p>谢谢ni好的pp\n pp-----------------------------------dsadsadsadsadsaddasssssssssssssssssssssssss</p><p><br></p><p><br></p><h2>标题副标题</h2>'
})

onMounted(() =>{
    console.log('artileId is ',Props.articleId)
    
    const cardLis = cardList.value.filter(x=> x.id == Props.articleId)
    if(cardLis.length > 0){
        const cardData =  cardLis[0]
        articleData.value.id = cardData.id;
        articleData.value.title = cardData.title;
        articleData.value.description = cardData.description;
        articleData.value.tags = cardData.tags;
        articleData.value.img = cardData.img
    }
    articleData.value.content = '<h1>内容介绍</h1>' + articleData.value.content
    console.log('articleData is  is',articleData.value)
    
})




</script>
<style scoped>
.mark-content >>> h1{
    border-left: 0.4rem solid #f1404b;
    font-size: 2rem;
    font-weight: bold;
    line-height: 2;
    padding: 0.25rem 0 0.25rem 2rem;
    
    margin-bottom: 3rem;
    

}
.mark-content >>> h2 {
    position: relative;
    display: block;
    
    font-size: 1.25rem;
    border-left: 0.3rem solid #f1404b;
    padding: 0.25rem 0 0.25rem 1.25rem;
    border-color: #5961f9;
    font-weight: 500;
    line-height: 1.2;
    margin-bottom: 1.25rem;
}

.mark-content >>> p {
 
    font-size: 1rem;
    line-height: 2;
    word-wrap: break-word;
    color: #1d232b;
    white-space: normal;
    display: block;
  
}

.mark-content {
    font: bold;
    font-size: larger;
    
}

.test-class h1{
    border-left: 3px solid yellow;
}




    
</style>