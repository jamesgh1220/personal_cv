<template>
  <header class="flex items-center justify-between text-black px-8 py-4 shadow-sm">
    <side-menu />
    <h1 class="hidden lg:block lg:text-lg lg:tracking-tight lg:font-extrabold lg:flex-1">{{ logo }}</h1>
  </header>
</template>

<script setup>
import SideMenu from "@/components/commons/SideMenu.vue";

const logo = `<James = () => { code } />`;
</script>
