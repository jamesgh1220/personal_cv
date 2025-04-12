<template>
  <div>
    <nav-bar />
    <profile-pic v-model="activeClass" />
    <div
      ref="scrollContainer"
      class="relative h-[calc(100vh-64px)] mt-[64px] overflow-y-auto scroll-smooth z-20"
      @scroll="handleScroll"
    >
      <content-view />
    </div>
  </div>

  <background-component v-model="activeClass" />
</template>

<script setup>
import { ref, watch } from "vue";
import ContentView from "./ContentView.vue";
import NavBar from "@/components/commons/NavBar.vue";
import ProfilePic from "@/components/commons/ProfilePic.vue";
import BackgroundComponent from "@/components/tools/BackgroundComponent.vue";

const scrollContainer = ref(null);
const scrollY = ref(0);
const activeClass = ref(false);

const handleScroll = () => {
  scrollY.value = scrollContainer.value?.scrollTop || 0;
};

watch(
  scrollY,
  (newVal) => {
    activeClass.value = newVal > 50 ? true : false;
  },
  { immediate: true }
);
</script>
