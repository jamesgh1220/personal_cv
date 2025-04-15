<template>
  <div>
    <nav-bar />
    <div
      ref="scrollContainer"
      class="relative h-[calc(100vh-64px)] mt-[64px] overflow-y-auto scroll-smooth z-20"
      @scroll="handleScroll"
      v-if="showContent"
    >
      <profile-pic class="animate-entrance" v-model="activeClass" />
      <content-view class="overflow-x-hidden" />
    </div>
  </div>
  <loading-intro @show:content="showContent = true" />
  <background-component v-model="activeClass" />
  <scroll-up v-model:active="activeClass" v-model:container="scrollContainer" />
</template>

<script setup>
import { ref, watch } from "vue";
import ContentView from "./ContentView.vue";
import NavBar from "@/components/commons/NavBar.vue";
import ProfilePic from "@/components/commons/ProfilePic.vue";
import BackgroundComponent from "@/components/tools/BackgroundComponent.vue";
import LoadingIntro from "@/components/tools/LoadingIntro.vue";
import ScrollUp from "@/components/tools/ScrollUp.vue";

const scrollContainer = ref(null);
const scrollY = ref(0);
const showContent = ref(false);
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
