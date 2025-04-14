<template>
  <div
    class="perspective-[600px] h-52 aspect-square mt-64 mx-auto bg-center bg-cover rounded transition-all duration-500"
    :class="{ 'rotate-x-30': activeClass }"
    :style="{
      backgroundImage:
        'url(https://img.freepik.com/vector-gratis/diseno-plantilla-imagen-perfil_742173-22027.jpg?t=st=1743375710~exp=1743379310~hmac=27767a3eab810ada5b3f92d3950b2534dc8596bb00746796d3fa34edfa46f231&w=740)',
    }"
  ></div>
</template>

<script setup>
const activeClass = defineModel();
</script>

<style>
.rotate-x-30 {
  opacity: 0.2;
  transform: rotateX(-55deg) !important;
  transform-origin: bottom !important;
}
</style>
