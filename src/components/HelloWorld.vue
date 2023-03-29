<script setup lang="ts">

import { ref } from 'vue';
const  options = ref({
  desc: '一个工具网站，还在不断完善中'
})



defineProps<{
  msg: string
}>()

</script>

<template>
  <div class=" flex flex-col justify-between h-1/2">
  <div class="greetings mt-10">
    <img alt="Vue logo" class="logo" src="@/assets/logo.jpg"/>
    <h1 class="green mt-10 hover:text-3xl hover:mt-12 hover:font-bold transition-all transform" >{{ msg }}</h1>
  </div>

  <div class="desc text-center">
    <span>{{ options.desc }}</span>
  </div>
</div>

  
</template>

<style scoped>


.greetings{
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h1 {
  font-weight: 500;
  font-size: 1.6rem;
}
.logo {
  height: 50px;
  border-radius: 10px;
  margin-right: 10px;
}


.desc{
  margin-top: 20%px;
  padding: 0 10%;
  color: rgba(159, 159, 159,0.7)
}

</style>
