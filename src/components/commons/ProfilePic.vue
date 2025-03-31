<template>
  <div
    class="fixed top-[4rem] w-full h-fit z-10 pt-6 perspective-[400px] transition-all duration-500"
    :class="{ '!top-[1rem]': activeClass }"
  >
    <div
      class="w-40 h-44 pt-4 mx-auto bg-center bg-cover rounded transition-all duration-100 rotate-x-0"
      :class="{ 'rotate-x-30': activeClass }"
      :style="{
        backgroundImage:
          'url(https://img.freepik.com/vector-gratis/diseno-plantilla-imagen-perfil_742173-22027.jpg?t=st=1743375710~exp=1743379310~hmac=27767a3eab810ada5b3f92d3950b2534dc8596bb00746796d3fa34edfa46f231&w=740)',
      }"
    ></div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const scrollY = defineModel();
const activeClass = ref(false);

watch(
  scrollY,
  (newVal) => {
    activeClass.value = newVal > 50 ? true : false;
  },
  { immediate: true }
);
</script>

<style>
.rotate-x-0 {
  opacity: 1;
  transform: rotateX(0deg);
  transform-origin: bottom;
  transition: transform 0.5s ease-in-out;
}
.rotate-x-30 {
  opacity: 0.2;
  transform: rotateX(-50deg) !important;
  transform-origin: bottom !important;
}
</style>
