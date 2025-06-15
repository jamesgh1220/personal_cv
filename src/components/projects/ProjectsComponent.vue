<template>
  <section
    id="portfolio"
    class="relative mb-10 bg-[linear-gradient(to_bottom,_black_0%,_white_5%)]"
  >
    <p
      id="scroll-title"
      v-animate-on-scroll
      class="sticky top-16 flex flex-col pt-6 mt-28 w-full text-center text-3xl font-bold bg-white lg:pb-8 lg:mt-20 lg:overflow-hidden"
    >
      <span class="lg:hidden">Projectos</span>
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
    <div id="content" class="text-light p-4 lg:px-12">
      <div
        class="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-2 min-lg:grid-cols-3 xl:grid-cols-4"
      >
        <div class="outline outline-black rounded-lg p-4 custom-opacity" v-animate-on-scroll>
          <h1 class="text-2xl font-bold text-black lg:text-3xl">Chat</h1>
          <div class="aspect-video outline outline-black rounded-lg my-2"></div>
          <div>
            <h4 class="text-black text-base font-bold lg:text-lg">Descripción:</h4>
            <h4 class="text-black text-sm font-plex lg:text-base">
              Chat en tiempo real para los usuarios.
            </h4>
          </div>
          <div class="flex flex-wrap gap-1 mt-2 max-w-[90%]">
            <badge-component label="Vue.js" />
            <badge-component label="Pinia.js" />
            <badge-component label="Firebase" />
          </div>
          <div class="flex flex-wrap gap-2 mt-6">
            <button-component :label="'GitHub'" :icon="Github" />
            <button-component :label="'Demo'" :icon="ExternalLink" />
          </div>
        </div>

        <div class="outline outline-black rounded-lg p-4 custom-opacity" v-animate-on-scroll>
          <h1 class="text-2xl font-bold text-black lg:text-3xl">Chat</h1>
          <div class="aspect-video outline outline-black rounded-lg my-2"></div>
          <div>
            <h4 class="text-black text-base font-bold lg:text-lg">Descripción:</h4>
            <h4 class="text-black text-sm font-plex lg:text-base">
              Chat en tiempo real para los usuarios.
            </h4>
          </div>
          <div class="flex flex-wrap gap-1 mt-2 max-w-[90%]">
            <badge-component label="Vue.js" />
            <badge-component label="Pinia.js" />
            <badge-component label="Firebase" />
          </div>
          <div class="flex flex-wrap gap-2 mt-6">
            <button-component :label="'GitHub'" :icon="Github" />
            <button-component :label="'Demo'" :icon="ExternalLink" />
          </div>
        </div>

        <div class="outline outline-black rounded-lg p-4 custom-opacity" v-animate-on-scroll>
          <h1 class="text-2xl font-bold text-black lg:text-3xl">Chat</h1>
          <div class="aspect-video outline outline-black rounded-lg my-2"></div>
          <div>
            <h4 class="text-black text-base font-bold lg:text-lg">Descripción:</h4>
            <h4 class="text-black text-sm font-plex lg:text-base">
              Chat en tiempo real para los usuarios.
            </h4>
          </div>
          <div class="flex flex-wrap gap-1 mt-2 max-w-[90%]">
            <badge-component label="Vue.js" />
            <badge-component label="Pinia.js" />
            <badge-component label="Firebase" />
          </div>
          <div class="flex flex-wrap gap-2 mt-6">
            <button-component :label="'GitHub'" :icon="Github" />
            <button-component :label="'Demo'" :icon="ExternalLink" />
          </div>
        </div>

        <div class="outline outline-black rounded-lg p-4 custom-opacity" v-animate-on-scroll>
          <h1 class="text-2xl font-bold text-black lg:text-3xl">Chat</h1>
          <div class="aspect-video outline outline-black rounded-lg my-2"></div>
          <div>
            <h4 class="text-black text-base font-bold lg:text-lg">Descripción:</h4>
            <h4 class="text-black text-sm font-plex lg:text-base">
              Chat en tiempo real para los usuarios.
            </h4>
          </div>
          <div class="flex flex-wrap gap-1 mt-2 max-w-[90%]">
            <badge-component label="Vue.js" />
            <badge-component label="Pinia.js" />
            <badge-component label="Firebase" />
          </div>
          <div class="flex flex-wrap gap-2 mt-6">
            <button-component :label="'GitHub'" :icon="Github" />
            <button-component :label="'Demo'" :icon="ExternalLink" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import ButtonComponent from "@/components/commons/ButtonComponent.vue";
import BadgeComponent from "@/components/commons/BadgeComponent.vue";
import { Github } from "lucide-vue-next";
import { ExternalLink } from "lucide-vue-next";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { onMounted } from "vue";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
const items = Array.from({ length: 15 });

onMounted(() => {
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
</script>

<style scoped>
.line {
  width: 100%;
  height: 4px;
  display: inline-block;
  background-color: black;
}
</style>
