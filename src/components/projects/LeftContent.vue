<template>
  <div
    class="w-full flex flex-col items-center justify-center z-1 lg:w-1/3 lg:h-screen"
  >
    <!-- <p
    class="text-7xl pt-10 text-transparent bg-clip-text bg-gradient-to-b from-slate-300 to-white font-black text-start lg:absolute lg:left-0 lg:top-0"
    >
      Proyectos
    </p> -->
    <!-- <p class="text-start w-full text-3xl font-bold py-4 text-dark drop-shadow-lg drop-shadow-slate-400 lg:hidden">{{ activeProjectScroll?.id }}. {{ activeProjectScroll?.name || '' }}</p> -->
    <img :class="customClassImg" class="hidden lg:aspect-video lg:rounded-lg lg:block" :src="activeProjectMouse?.image || ''" alt="project image" />
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const customClassImg = ref('');
const activeProjectScroll = defineModel('active-scroll');
const activeProjectMouse = defineModel('active-mouse');

watch(activeProjectMouse, () => {
  // customClassImg.value = 'fadeInUp';
  // setTimeout(() => {
  //   customClassImg.value = '';
  //   console.log('customClassImg 2', customClassImg.value);
  // }, 700);
});
</script>