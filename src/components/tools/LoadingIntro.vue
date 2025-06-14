<template>
  <div
    :class="customClass"
    class="flex justify-center items-center bg-black absolute top-0 z-100 h-screen w-full transition-all duration-[2s]"
  >
    <svg
      class="absolute left-1/2 top-1/2 -translate-1/2"
      width="300"
      height="300"
      xmlns="http://w3.org/2000/svg"
      viewBox="0 0 204 204"
    >
      <path
        class="cls-1 fill-none stroke-emerald-300 stroke-4"
        d="m2,102c0,82.11,17.89,100,100,100,82.11,0,100-17.89,100-100,0-82.11-17.89-100-100-100C19.89,2,2,19.89,2,102Z"
      />
    </svg>
    <p class="textLoading text-white text-7xl absolute left-1/2 top-1/2 -translate-1/2 m-0">0</p>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);
const isLoadingActive = defineModel();
const customClass = ref("");

onMounted(() => {
  gsap.from(".cls-1", { duration: 1.5, drawSVG: 0, ease: "none" });

  const obj = { v: 0 };

  gsap.to(obj, {
    v: 100,
    duration: 1.5,
    ease: "none",
    onUpdate: () => {
      document.getElementsByClassName("textLoading")[0].textContent = "%" + Math.round(obj.v);
    },
    onComplete: () => {
      customClass.value = "!h-0 !opacity-0";
      setTimeout(() => {
        isLoadingActive.value = false;
      }, 1500);
    },
  });
});
</script>
