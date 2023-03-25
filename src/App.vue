<script setup lang="ts">
import { ref,onMounted,watch} from 'vue';
import { useRouter } from "vue-router";
import { RouterLink, RouterView } from 'vue-router'

import RouterSwitchView from './components/router/RouterSwitchView.vue';
import  HomeView from '@/views/home/HomeView.vue';
import HelloWorld from './components/HelloWorld.vue'

const test = ref('OPEN TOOL')
const currentPath = ref('null')
const router = useRouter();


onMounted(() => {
  currentPath.value = router.currentRoute.value.path
  const  appDoc = document.getElementById('app')
    if(appDoc){
      // if('/' === currentPath.value){
          appDoc.classList.remove('home-class')
      // }else{
      //   appDoc.classList.add('home-class')
      // }
    }
})


// 监听
watch(() => router.currentRoute.value.path,
  (n, o) => {
    currentPath.value = n
    const  appDoc = document.getElementById('app')
    if(appDoc){
      // if('/' === currentPath.value){
          appDoc.classList.remove('home-class')
      // }else{
      //   appDoc.classList.add('home-class')
      // }
    }
  }
)
</script>

<template>
  <!-- <header v-if="currentPath !== '/'">
    <HelloWorld :msg="test" />
    <div class="wrapper">
      <router-switch-view></router-switch-view>
    </div>
  </header> -->
  <RouterView/>
</template>
<style scoped>

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {

  margin: 0 auto 2rem;
}

nav {
  width: 100%;

  text-align: center;
  margin-top: 4rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    /* display: flex; */
    /* place-items: center; */
    /* padding-right: calc(var(--section-gap) / 2); */
  }


  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {

    font-size: 1rem;


    
  }

}

</style>
