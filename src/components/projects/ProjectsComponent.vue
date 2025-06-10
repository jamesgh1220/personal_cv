<template>
  <div id="portfolio" class="mb-10 bg-[linear-gradient(to_bottom,_black_0%,_white_5%)]">
    <p
      v-animate-on-scroll
      class="relative mt-32 mb-16 w-fit mx-auto text-3xl font-bold before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:-mb-4 before:h-0.5 before:w-48 before:bg-black"
    >
      Projectos
    </p>
    <!-- <title-component title="Proyectos" class="my-20" /> -->
    <div class="text-light p-4 lg:px-12">
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
          <div class="flex flex-wrap gap-2 mt-6 custom-opacity">
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
          <div class="flex flex-wrap gap-2 mt-6 custom-opacity" l>
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
          <div class="flex flex-wrap gap-2 mt-6 custom-opacity">
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
          <div class="flex flex-wrap gap-2 mt-6 custom-opacity">
            <button-component :label="'GitHub'" :icon="Github" />
            <button-component :label="'Demo'" :icon="ExternalLink" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ButtonComponent from "@/components/commons/ButtonComponent.vue";
import TitleComponent from "@/components/commons/TitleComponent.vue";
import BadgeComponent from "@/components/commons/BadgeComponent.vue";
import { Github } from "lucide-vue-next";
import { ExternalLink } from "lucide-vue-next";
</script>
