<template>
  <div
    :class="customClass"
    class="bg-dark relative z-100 h-screen w-full transition-all duration-1000"
  ></div>
  <div>
    <nav-bar />
    <div
      ref="scrollContainer"
      class="relative h-[calc(100vh-64px)] mt-[64px] overflow-y-auto scroll-smooth z-20"
      @scroll="handleScroll"
    >
      <profile-pic v-model="activeClass" />
      <content-view class="overflow-x-hidden" />
    </div>
  </div>
  <background-component v-model="activeClass" />
  <scroll-up v-model:active="activeClass" v-model:container="scrollContainer" />
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import ContentView from "./ContentView.vue";
import NavBar from "@/components/commons/NavBar.vue";
import ProfilePic from "@/components/commons/ProfilePic.vue";
import BackgroundComponent from "@/components/tools/BackgroundComponent.vue";
import ScrollUp from "@/components/tools/ScrollUp.vue";

const scrollContainer = ref(null);
const scrollY = ref(0);
const activeClass = ref(false);
const customClass = ref("");

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

onMounted(() => {
  setTimeout(() => {
    customClass.value = "!h-0";
  }, 1500);
});
</script>
