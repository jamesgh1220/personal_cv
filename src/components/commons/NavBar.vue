<template>
  <div
    class="fixed top-0 w-full flex justify-between items-center h-[4rem] bg-dark cursor-pointer z-40 lg:px-4"
  >
    <div class="flex flex-col ml-3 text-light text-sm">
      <div class="inline-flex items-center">
        <MapPin class="w-4 mr-1 text-green" />
        <p>Medellin, Colombia.</p>
      </div>
    </div>
    <SideMenu />
  </div>
</template>

<script setup>
import SideMenu from "./SideMenu.vue";
import { MapPin } from "lucide-vue-next";
</script>
