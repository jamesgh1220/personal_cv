<template>
  <div id="projects" class="flex justify-center items-center w-full py-20">
    <div class="relative w-full h-full">
      <TitleSection title="Projectos" />
      <section class="py-14">
        <div class="min-h-screen px-4">
          <div class="flex flex-col z-1 h-full lg:flex-row">
            <left-content v-model:active-scroll="activeProject" v-model:active-mouse="mouseActiveProject" />
            <div class="w-full lg:w-2/3 lg:flex lg:flex-col lg:justify-evenly">
              <template :key="index" v-for="(project, index) in PROJECTS">
                <div :ref="(el) => (projectsRef[index] = el)" @mouseover="handleActiveProjectMouse(project)">
                  <project-content :project="project" />
                </div>
              </template>
            </div>
          </div>
        </div>
        <!-- <div class="min-h-screen flex">
          <section class="w-full full-h-menu-mobile bg-black rounded-t-4xl">
            <info-component />
          </section>
        </div> -->
      </section>
    </div>
  </div>
</template>

<script setup>
/* eslint-disable */
import { ref, onMounted, nextTick } from "vue";
import { animationsGsap } from "@/helpers/gsap";
import LeftContent from "./LeftContent.vue";
import ProjectContent from "./ProjectContent.vue";
import TitleSection from "../ui/TitleSection.vue";
// import InfoComponent from "../info/InfoComponent.vue";

const { projectsSection } = animationsGsap();
const PROJECTS = [
  {
    id: 1,
    name: 'SpeechRecognitionIos – Plugin de Capacitor para reconocimiento de voz en iOS',
    image: 'https://images.unsplash.com/photo-1580757468214-c73f7062a5cb?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'SpeechRecognitionIos es un plugin nativo para Capacitor (iOS) desarrollado en Swift, que permite integrar fácilmente la funcionalidad de reconocimiento de voz a texto en aplicaciones móviles híbridas. El plugin gestiona los permisos del sistema, inicia y detiene la captura de audio, y devuelve el texto transcrito en tiempo real a la capa de JavaScript.',
    technologies: ['Swift', 'Capacitor', 'TypeScript / JavaScript '],
  },
  {
    id: 2,
    name: 'QRStock: Sistema de Inventario Inteligente',
    image: 'https://images.unsplash.com/photo-1558637845-c8b7ead71a3e?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'App móvil de gestión de inventarios con Ionic + Angular. Genera y escanea códigos QR únicos por producto, almacenando datos localmente. Ideal como ejemplo de integración entre frontend híbrido y capacidades nativas.',
    technologies: ['Ionic', 'Angular', 'TypeScript', 'Capacitor'],
  },
  {
    id: 3,
    name: 'Login rrss y chat firebase',
    image: 'https://images.unsplash.com/photo-1594568284297-7c64464062b1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Ver mas proyectosVer mas proyectosVer mas proyectosVer mas proyectosVer mas proyectosVer mas proyectosVer mas proyectosVer mas proyectosVer mas proyectosVer mas proyectos',
    technologies: ['Vue', 'Firebase', 'Tailwind'],
  },
  {
    id: 4,
    name: 'Repositorio',
    image: 'https://images.unsplash.com/photo-1626593261859-4fe4865d8cb1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Ver mas proyectosVer mas proyectosVer mas proyectosVer mas proyectosVer mas proyectosVer mas proyectosVer mas proyectosVer mas proyectosVer mas proyectosVer mas proyectos',
    technologies: [],
  },
];
const activeProject = ref(PROJECTS[0]);
const mouseActiveProject = ref(PROJECTS[0]);
const projectsRef = [];

const handleActiveProjectMouse = (project) => {
  mouseActiveProject.value = project;
};

onMounted(() => {
  // nextTick(() => {
  //   projectsRef.forEach((el, index) => {
  //     projectsSection({
  //       elements: PROJECTS,
  //       element: el,
  //       activeElement: activeProject,
  //       posElement: index
  //     });
  //   });
  // });
});
</script>