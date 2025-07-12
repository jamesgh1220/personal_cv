<template>
  <section id="portfolio" class="min-h-screen bg-[linear-gradient(to_bottom,_black_0%,_white_2%)]" ref="sectionContainer">
    <p
      id="scroll-title"
      v-animate-on-scroll
      class="bg-white z-10 sticky top-16 flex flex-col pt-6 mt-28 w-full text-center text-3xl font-bold lg:pb-8 lg:mt-16 lg:overflow-hidden"
    >
      <span class="lg:hidden">Proyectos</span>
      <span class="line-1 w-full h-1 bg-black inline-block my-2 lg:!hidden"></span>
      <ul id="scroll-text" class="hidden lg:flex whitespace-nowrap will-change-transform">
        <li
          class="flex items-center text-3xl font-bold"
          v-for="index in 15"
          :key="index"
        >
          <span class="h-2 w-2 bg-black mx-10 rounded-full"></span>
            {{ 'Proyectos' }}
        </li>
      </ul>
    </p>
    <div class="flex flex-col z-1 lg:flex-row">
      <!-- Sticky sidebar a la izquierda -->
      <div
        class="w-full lg:w-1/3 sticky top-36 lg:h-screen flex items-center justify-center bg-white border-r border-gray-200 z-10"
      >
        <div class="text-center px-4">
          <p class="text-2xl font-bold p-3 text-blue-600" v-text="activeStep"></p>
        </div>
      </div>

      <!-- Steps a la derecha -->
      <div class="w-full lg:w-2/3 p-8">
        <section
          v-for="(step, index) in steps"
          :key="index"
          class="mb-24 p-6 rounded-lg border border-gray-300"
          :ref="(el) => (stepRefs[index] = el)"
        >
          <h2 class="text-2xl font-semibold mb-2">{{ step }}</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt, nunc eget.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt, nunc eget.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt, nunc eget.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt, nunc eget.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt, nunc eget.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt, nunc eget.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt, nunc eget.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt, nunc eget.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt, nunc eget.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt, nunc eget.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt, nunc eget.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt, nunc eget.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt, nunc eget.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt, nunc eget.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt, nunc eget.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt, nunc eget.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt, nunc eget.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt, nunc eget.
          </p>
        </section>
      </div>
    </div>
  </section>
</template>

<script setup>
/* eslint-disable */
import { ref, onMounted, nextTick } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = ["Paso 1", "Paso 2", "Paso 3", "Paso 4"];
const activeStep = ref(steps[0]);
const sectionContainer = ref(null);
const stepRefs = [];

onMounted(() => {
  nextTick(() => {
    stepRefs.forEach((el, index) => {
      gsap.fromTo(
        el,
        { opacity: 0 },
        {
          opacity: 1,
          scrollTrigger: {
            trigger: el,
            start: "top center",
            end: "bottom center",
            onEnter: () => (activeStep.value = steps[index]),
            onEnterBack: () => (activeStep.value = steps[index]),
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    gsap.fromTo(
      ".line-1",
      { scaleX: 0 },
      {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: "#portfolio",
          scrub: true,
          start: "top 90%", // comienza cuando #portfolio entra en la vista
          end: "bottom 10%", // termina cuando casi sale por arriba
        },
      }
    );

    gsap.to("#scroll-text", {
      xPercent: -100, // Mueve el texto a la izquierda
      ease: "none",
      scrollTrigger: {
        trigger: "#portfolio",
        start: "top 90%",
        end: "bottom 10%",
        scrub: true,
      },
    });
  });
});
</script>

<style scoped>
[data-step] {
  min-height: 150px;
}

.line {
  width: 100%;
  height: 4px;
  display: inline-block;
  background-color: black;
}
</style>
