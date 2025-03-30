<template>
  <div class="overflow-x-hidden bg-dark scroll-smooth">
    <nav-bar />
    <profile-pic v-model="scrollY" />
    <div class="relative h-screen overflow-x-hidden scroll-smooth z-20" @scroll="handleScroll">
      <home-view />
    </div>
  </div>

  <background-component />
</template>

<script setup>
import { ref } from "vue";
import HomeView from "./HomeView.vue";
import NavBar from "../components/commons/NavBar.vue";
import ProfilePic from "@/components/commons/ProfilePic.vue";
import BackgroundComponent from "@/components/tools/BackgroundComponent.vue";

const scrollY = ref(0);

const handleScroll = (event) => {
  scrollY.value = event.target.scrollTop; // Obtiene el scroll dentro del div
};
</script>
