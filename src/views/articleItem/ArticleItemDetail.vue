<template>
  <div class="flex min-h-screen flex-col justify-start overflow-hidden bg-gray-50 py-8 lg:py-8">
    <div class="max-w-8xl lg:ml-5">
      <div class="flex px-4 pt-8 pb-10 lg:px-8 w-auto">
        <a
          @click="
            () => {
              router.push('/article/list')
            }
          "
          class="flex items-center font-semibold text-sm lg:text-2xl w-full leading-6 text-slate-700 hover:text-slate-900 dark:text-slate-200 dark:hover:text-white"
        >
          <ArrowSmallLeftIcon class="w-10 font-bold mr-2"></ArrowSmallLeftIcon>

          返回
        </a>
      </div>
    </div>
    <article class="prose lg:prose-xl mx-auto">
      <h1>Garlic bread with cheese: What the science tells us</h1>
      <div class="flex flex-col justify-between text-sm lg:flex-row cursor-pointer">
        <time class="mb-1"
          ><span class="text-sm mr-2 text-gray-400 font-serif">Create Time:</span>Tuesday, March 28,
          2023</time
        >

        <time class="mb-1"
          ><span class="text-sm mr-2 text-gray-500 font-serif">Update Time:</span>Tuesday, March 28,
          2023</time
        >
      </div>

      <p>
        For years parents have espoused the health benefits of eating garlic bread with cheese to
        their children, with the food earning such an iconic status in our culture that kids will
        often dress up as warm, cheesy loaf for Halloween.
      </p>
      <p>
        But a recent study shows that the celebrated appetizer may be linked to a series of rabies
        cases springing up around the country.
      </p>
      <!-- ... -->
    </article>
  </div>
</template>

<script setup>
import { onMounted, ref, defineProps } from 'vue'
import { initFlowbite } from 'flowbite'
import { ArrowSmallLeftIcon } from '@heroicons/vue/24/solid'
import { useRouter } from 'vue-router'
const router = useRouter()
const Props = defineProps({
  articleId: {
    type: String,
    default: ''
  }
})

const resultTags = ref({
  data: []
})

const itemData = ref({
  tagId: '',
  title: '',
  totalNum: 0,
  data: [],

  pageObj: {
    page: 1,
    size: 12,
    total: 0,
    sort: {
      direction: 'DESC',
      order: 'updateAt'
    }
  }
})

onMounted(async () => {
  initFlowbite()
  console.log('-------------------------------///////////////')
  console.log('articleId is ', Props.articleId)
})
</script>
