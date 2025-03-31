<template>
  <div class="fixed top-0 w-full flex justify-between items-center h-[4rem] bg-dark z-100">
    <div class="flex flex-col ml-3 text-light text-sm">
      <div class="inline-flex items-center">
        <MapPin class="w-4 mr-1 text-green" />
        <p>Medellin, Colombia.</p>
      </div>
      <div class="inline-flex items-center">
        <Clock2 class="w-4 mr-1 text-green" />
        <p>{{ currentTime }}</p>
      </div>
    </div>
    <SideMenu />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import SideMenu from "./SideMenu.vue";
import { MapPin } from "lucide-vue-next";
import { Clock2 } from "lucide-vue-next";

const currentTime = ref("");

const updateTime = () => {
  const now = new Date();
  currentTime.value = new Intl.DateTimeFormat("es-CO", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZone: "America/Bogota",
  }).format(now);
};

onMounted(() => {
  updateTime();
  setInterval(updateTime, 1000);
});
</script>
