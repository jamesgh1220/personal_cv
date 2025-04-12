<template>
  <div id="worked" class="scroll-mt-16">
    <title-component title="Proyectos" class="my-8" />
    <div class="text-light p-4">
      <div class="outline outline-sky-300 rounded-lg p-4">
        <h1 class="text-2xl font-bold">Chat</h1>
        <div class="aspect-video outline outline-blue rounded-lg my-2"></div>
        <div>
          <h4 class="text-base font-bold text-blue">Descripcion:</h4>
          <h4 class="text-base font-plex">Chat en tiempo real para los usuarios.</h4>
        </div>
        <div class="flex flex-wrap gap-1 mt-2 max-w-[90%]">
          <!-- TODO: to component badge -->
          <div class="outline-1 outline-blue w-fit px-4 py-1 rounded-full">
            <p class="text-base font-medium">Vue.js</p>
          </div>
          <div class="outline-1 outline-blue w-fit px-4 py-1 rounded-full">
            <p class="text-base font-medium">Pinia.js</p>
          </div>
          <div class="outline-1 outline-blue w-fit px-4 py-1 rounded-full">
            <p class="text-base font-medium">Firebase</p>
          </div>
        </div>
        <div class="flex flex-wrap gap-2 mt-6">
          <button-component :label="'GitHub'" :icon="Github" />
          <button-component :label="'Demo'" :icon="ExternalLink" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ButtonComponent from "@/components/commons/ButtonComponent.vue";
import TitleComponent from "@/components/commons/TitleComponent.vue";
import { Github } from "lucide-vue-next";
import { ExternalLink } from "lucide-vue-next";
</script>
