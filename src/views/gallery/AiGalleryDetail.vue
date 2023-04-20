<template>
  <div
    class="flex flex-col bg-slate-600 p-1 pt-5 items-center text-black sm:p-1 sm:pt-5 xl:p-20 xl:pt-10 h-auto"
  >
    <div class="mb-5 w-full pl-3 sm:pl-3 xl:pl-0">
      <button
        @click="
          () => {
            router.go(-1)
          }
        "
        class="btn-class rounded-md xl:rounded-xl text-blue-500 font-bold p-3 scale-100 hover:scale-110 hover:text-blue-200 transform transition duration-500"
      >
        返回列表
      </button>
    </div>

    <div
      class="flex items-center gap-4 rounded-xl p-3 sm:p-3 xl:p-6 transform transition duration-500 w-11/12 sm:w-11/12 md:w-11/12 xl:w-4/5 bg-gray-400"
    >
      <img
        :src="articleData.img"
        class="w-40 h-20 sm:w-40 sm:h-20 xl:w-80 xl:h-60 object-cover rounded-lg"
      />
      <div
        class="bg-white h-full w-full rounded-lg p-2 sm:p-2 xl:p-8 flex flex-col gap-2 sm:gap-2 xl:gap-5"
      >
        <div class="flex items-center gap-2 mb-0 sm:mb-0 xl:mb-2">
          <span
            v-for="(item, index) in articleData.tags"
            :key="index"
            class="bg-yellow-200 p-1 sm:p-1 xl:p-2 text-sm sm:text-sm xl:text-xl rounded-sm sm:rounded-sm xl:rounded-xl font-mono"
          >
            {{ item }}
          </span>
        </div>
        <h1 class="text-xl sm:text-xl xl:text-2xl font-bold">{{ articleData.title }}</h1>
        <a class="text-blue-500 hover:text-lg hover:text-gray-600 cursor-pointer">快速体验</a>

        <p class="text-grey-700 whitespace-normal break-all text-xs sm:text-xs xl:text-xl">
          {{ articleData.description }}
        </p>
      </div>
    </div>

    <div
      class="h-screen rounded-xl sm:rounded-xl xl:rounded-lg w-11/12 p-4 sm:p-4 xl:p-20 mt-8 sm:mt-8 xl:mt-10 bg-white mark-content"
      v-html="articleData.content"
    ></div>
  </div>
</template>
<script setup>
import { ref, defineEmits, onMounted, defineProps } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

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
    description:
      'https://images.zeroingpython.top//img/1_jewaay.phttps://images.zeroingpython.top//img/1_jewaay.pnn',
    tags: ['tag1', 'tag22']
  },
  {
    img: 'https://images.zeroingpython.top//img/1_jewaay.png',
    title: '标1测试',
    id: 2,
    description: 'https://images.zeroingpython.top//img/1_jewaay.png',
    tags: ['tag1', 'tag22']
  },
  {
    img: 'https://images.zeroingpython.top//img/1_jewaay.png',
    title: '提示1测试',
    id: 3,
    description: 'https://images.zeroingpython.top//img/1_jewaay.png',
    tags: ['tag1', 'tag22']
  },
  {
    img: 'https://images.zeroingpython.top//img/1_jewaay.png',
    title: '题测试',
    id: 4,
    description: 'https://images.zeroingpython.top//img/1_jewaay.png',
    tags: ['tag1', 'tag22']
  },
  {
    img: 'https://images.zeroingpython.top//img/1_jewaay.png',
    title: 'A测试',
    id: 5,
    description: 'https://images.zeroingpython.top//img/1_jewaay.png',
    tags: ['tag1', 'tag22']
  },
  {
    img: 'https://images.zeroingpython.top//img/1_jewaay.png',
    title: 'Windows激活',
    id: 6,
    description: 'https://images.zeroingpython.top//img/1_jewaay.png',
    tags: ['tag1', 'tag22']
  },
  {
    img: 'https://images.zeroingpython.top//img/1_jewaay.png',
    title: '转到',
    id: 7,
    description: 'https://images.zeroingpython.top//img/1_jewaay.png',
    tags: ['tag1', 'tag22']
  },
  {
    img: 'https://images.zeroingpython.top//img/1_jewaay.png',
    title: '测试激活',
    id: 8,
    description: 'https://images.zeroingpython.top//img/1_jewaay.png',
    tags: ['tag1', 'tag22']
  }
])

const articleData = ref({
  id: 0,
  title: '',
  description: '',
  tags: [],
  content:
    '<h2>我们的热门，</h2><p>哈哈哈哈</p><p>谢谢ni好的pp\n pp-----------------------------------dsadsadsadsadsaddasssssssssssssssssssssssss</p><p><br></p><p><br></p><h2>标题副标题</h2>'
})

onMounted(() => {
  console.log('artileId is ', Props.articleId)

  const cardLis = cardList.value.filter((x) => x.id == Props.articleId)
  if (cardLis.length > 0) {
    const cardData = cardLis[0]
    articleData.value.id = cardData.id
    articleData.value.title = cardData.title
    articleData.value.description = cardData.description
    articleData.value.tags = cardData.tags
    articleData.value.img = cardData.img
  }
  articleData.value.content = '<h1>内容介绍</h1>' + articleData.value.content
  console.log('articleData is  is', articleData.value)
})
</script>
<style scoped>
.mark-content >>> h1 {
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

@media (max-width: 768px) {
  .mark-content >>> h1 {
    border-left: 0.3rem solid #f1404b;
    font-size: 1rem;
    font-weight: bold;
    line-height: 2;
    padding: 0.1rem 0 0.1rem 1rem;
    margin-bottom: 1.2rem;
  }

  .mark-content >>> h2 {
    position: relative;
    display: block;
    font-size: 0.4rem;
    border-left: 0.3rem solid #f1404b;
    padding: 0.25rem 0 0.25rem 0.9rem;
    border-color: #5961f9;
    font-weight: 500;
    line-height: 1.6;
    margin-bottom: 1.25rem;
  }

  .mark-content >>> p {
    font-size: 0.2rem;
    line-height: 2;
    word-wrap: break-word;
    color: #1d232b;
    white-space: normal;
    display: block;
  }
}

.btn-class {
  background-color: rgba(0, 0, 0, 0.6);
}

.btn-class:hover {
  background-color: rgb(157, 163, 174);
}
</style>
