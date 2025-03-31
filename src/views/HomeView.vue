<template>
  <div class="relative flex flex-col w-screen mt-80">
    <HeroComponent />
    <WorkComponent />
    <ProjectsComponent id="portfolio" />
    <StudyComponent id="study" />
  </div>
</template>

<script setup>
import HeroComponent from "@/components/hero/HeroComponent.vue";
import WorkComponent from "@/components/work/WorkComponent.vue";
import ProjectsComponent from "@/components/projects/ProjectsComponent.vue";
import StudyComponent from "@/components/info/InfoComponent.vue";
</script>
