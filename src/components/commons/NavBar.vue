<template>
  <div
    class="bg-white fixed top-0 w-full flex items-center h-[4rem] z-40 transition-colors lg:px-4"
  >
    <div class="block lg:hidden">
      <side-menu v-model="scrollToSection" />
    </div>
  </div>
</template>

<script setup>
import SideMenu from "./SideMenu.vue";

const scrollToSection = defineModel();
</script>
