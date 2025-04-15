<template>
  <div
    class="fixed top-0 w-full flex justify-between items-center h-[4rem] bg-dark cursor-pointer z-40 lg:px-4"
  >
    <div class="flex flex-col ml-3 text-light text-base">
      <div class="inline-flex items-center">
        <MapPin class="w-6 mr-1 text-blue" />
        <p>Medellín, Colombia.</p>
      </div>
    </div>
    <SideMenu v-model="scrollToSection" />
  </div>
</template>

<script setup>
import SideMenu from "./SideMenu.vue";
import { MapPin } from "lucide-vue-next";

const scrollToSection = defineModel();
</script>
