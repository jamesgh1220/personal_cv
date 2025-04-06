<template>
  <div
    class="fixed top-[64px] left-0 right-0 h-40 pointer-events-none z-30 transition-opacity duration-300"
    :style="{
      background: 'linear-gradient(to bottom, #001427 20%, transparent 100%)',
    }"
    v-if="activeClass"
  />

  <div
    class="absolute w-48 h-48 bg-blue rounded-full opacity-40 blur-2xl"
    :style="bubbleStyle(25, 5)"
  ></div>
  <div
    class="absolute w-48 h-48 bg-blue rounded-full opacity-30 blur-2xl"
    :style="bubbleStyle(70, 30)"
  ></div>
</template>

<script setup>
import { onMounted, ref } from "vue";

const activeClass = defineModel();
const blueBubble = ref({ x: 0, y: 0 });
const greenBubble = ref({ x: 0, y: 0 });

const animateBubble = (bubble, xRange, yRange) => {
  setInterval(() => {
    bubble.value.x = Math.random() * xRange - xRange / 2;
    bubble.value.y = Math.random() * yRange - yRange / 2;
  }, 1000);
};

onMounted(() => {
  animateBubble(blueBubble, 50, 150);
  animateBubble(greenBubble, 150, 50);
});

const bubbleStyle = (top, left) => {
  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(${blueBubble.value.x}px, ${blueBubble.value.y}px)`,
    transition: "transform 2s ease-in-out",
  };
};
</script>
