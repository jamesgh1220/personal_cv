<template>
  <div class="relative flex flex-col">
    <HeroComponent v-model="scrollToSection" />
    <ProjectsComponent />
    <!-- <WorkComponent />
    <StudyComponent />
    <StackComponent />
    <FooterComponent /> -->
  </div>
</template>

<script setup>
import HeroComponent from "@/components/hero/HeroComponent.vue";
import WorkComponent from "@/components/work/WorkComponent.vue";
import ProjectsComponent from "@/components/projects/ProjectsComponent.vue";
import StudyComponent from "@/components/info/InfoComponent.vue";
import StackComponent from "@/components/stack/StackComponent.vue";
import FooterComponent from "@/components/footer/FooterComponent.vue";

const scrollToSection = defineModel();
</script>
