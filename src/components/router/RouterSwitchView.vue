<script setup lang="ts">
</script>
<template>
    <nav class=" flex flex-col justify-end h-1/2 pb-20">
        <div class=" flex justify-center">
            <RouterLink to="/">主页</RouterLink>
            <RouterLink to="/excel-process">Excel转SQL</RouterLink>
        </div>
      
      </nav>
</template>

<style scoped>

nav a:not(:first-child) {
    margin-left: 20px;
   
}

</style>