<template>
  <div id="projects" class="flex justify-center items-center h-screen w-full bg-white">
    <div class="relative w-full px-4">
      <section class="h-[calc(100vh-152px)]">
        <div class="min-h-screen">
          <div class="flex flex-col z-1 h-full lg:flex-row">
            <div
              class="w-full lg:w-1/3 sticky top-0 lg:h-screen flex flex-col items-center justify-center bg-white lg:border-r lg:border-gray-200 z-1"
            >
              <p
                class="text-7xl pt-10 text-transparent bg-clip-text bg-gradient-to-b from-slate-300 to-slate-50 font-black text-start"
              >
                Projectos
              </p>
              <p class="text-start w-full text-3xl font-bold py-4 text-dark drop-shadow-lg drop-shadow-slate-400">{{ activeProject?.id }}. {{ activeProject?.name || '' }}</p>
            </div>
            <div class="w-full lg:w-2/3">
              <section
                v-for="(project, index) in PROJECTS"
                :key="index"
                class="mb-24 p-4 mt-10 rounded-lg border border-gray-300"
                :ref="(el) => (projectsRef[index] = el)"
              >
                <h2 class="text-2xl font-semibold mb-2">{{ project.name }}</h2>
                <div class="aspect-video bg-light rounded-lg"></div>
                <p class="pt-4">{{ project.description }}</p>
              </section>
            </div>
          </div>
        </div>
        <div class="bg-yellow-300 h-screen flex items-center justify-center">a</div>
      </section>
    </div>
  </div>
</template>

<script setup>
/* eslint-disable */
import { ref, onMounted, nextTick } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { animationsGsap } from "@/helpers/gsap";

const { projectsSection } = animationsGsap();
gsap.registerPlugin(ScrollTrigger);
const PROJECTS = [
  {
    id: 1,
    name: 'Mobile ionic angular',
    image: '',
    description: 'Descripcion Mobile ionic angular',
    tecnologies: [],
  },
  {
    id: 2,
    name: 'Login rrss y chat firebase',
    image: '',
    description: 'Descripcion Login rrss y chat firebase',
    tecnologies: [],
  },
  {
    id: 3,
    name: 'todo react',
    image: '',
    description: 'Descripcion todo react',
    tecnologies: [],
  },
  {
    id: 4,
    name: 'Repositorio',
    image: '',
    description: 'Ver mas proyectos',
    tecnologies: [],
  },
];
const activeProject = ref(PROJECTS[0]);
const projectsRef = [];

onMounted(() => {
  nextTick(() => {
    projectsRef.forEach((el, index) => {
      projectsSection({
        elements: PROJECTS,
        element: el,
        activeElement: activeProject,
        posElement: index
      });
    });
  });
});
</script>