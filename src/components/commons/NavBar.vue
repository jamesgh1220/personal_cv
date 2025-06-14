<template>
  <div class="fixed top-0 w-full flex items-center h-[4rem] z-40 lg:px-4">
    <div class="block w-full h-full lg:hidden">
      <side-menu v-model="scrollToSection" />
    </div>
  </div>
</template>

<script setup>
import SideMenu from "./SideMenu.vue";

const scrollToSection = defineModel();
</script>
