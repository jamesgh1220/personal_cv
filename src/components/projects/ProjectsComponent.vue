<template>
  <div id="portfolio" class="mb-10">
    <title-component title="Proyectos" class="my-8" />
    <div class="text-light p-4 lg:px-12">
      <div
        class="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-2 min-lg:grid-cols-3 xl:grid-cols-4"
      >
        <div class="outline outline-sky-300 rounded-lg p-4 custom-opacity" v-animate-on-scroll>
          <h1 class="text-2xl font-bold text-blue lg:text-3xl">Chat</h1>
          <div class="aspect-video outline outline-blue rounded-lg my-2"></div>
          <div>
            <h4 class="text-base font-bold lg:text-lg">Descripción:</h4>
            <h4 class="text-sm font-plex lg:text-base">Chat en tiempo real para los usuarios.</h4>
          </div>
          <div class="flex flex-wrap gap-1 mt-2 max-w-[90%]">
            <badge-component label="Vue.js" />
            <badge-component label="Pinia.js" />
            <badge-component label="Firebase" />
          </div>
          <div class="flex flex-wrap gap-2 mt-6 custom-opacity" v-animate-on-scroll>
            <button-component :label="'GitHub'" :icon="Github" />
            <button-component :label="'Demo'" :icon="ExternalLink" />
          </div>
        </div>

        <div class="outline outline-sky-300 rounded-lg p-4 custom-opacity" v-animate-on-scroll>
          <h1 class="text-2xl font-bold text-blue lg:text-3xl">Chat</h1>
          <div class="aspect-video outline outline-blue rounded-lg my-2"></div>
          <div>
            <h4 class="text-base font-bold lg:text-lg">Descripción:</h4>
            <h4 class="text-sm font-plex lg:text-base">Chat en tiempo real para los usuarios.</h4>
          </div>
          <div class="flex flex-wrap gap-1 mt-2 max-w-[90%]">
            <badge-component label="Vue.js" />
            <badge-component label="Pinia.js" />
            <badge-component label="Firebase" />
          </div>
          <div class="flex flex-wrap gap-2 mt-6 custom-opacity" v-animate-on-scroll>
            <button-component :label="'GitHub'" :icon="Github" />
            <button-component :label="'Demo'" :icon="ExternalLink" />
          </div>
        </div>

        <div class="outline outline-sky-300 rounded-lg p-4 custom-opacity" v-animate-on-scroll>
          <h1 class="text-2xl font-bold text-blue lg:text-3xl">Chat</h1>
          <div class="aspect-video outline outline-blue rounded-lg my-2"></div>
          <div>
            <h4 class="text-base font-bold lg:text-lg">Descripción:</h4>
            <h4 class="text-sm font-plex lg:text-base">Chat en tiempo real para los usuarios.</h4>
          </div>
          <div class="flex flex-wrap gap-1 mt-2 max-w-[90%]">
            <badge-component label="Vue.js" />
            <badge-component label="Pinia.js" />
            <badge-component label="Firebase" />
          </div>
          <div class="flex flex-wrap gap-2 mt-6 custom-opacity" v-animate-on-scroll>
            <button-component :label="'GitHub'" :icon="Github" />
            <button-component :label="'Demo'" :icon="ExternalLink" />
          </div>
        </div>

        <div class="outline outline-sky-300 rounded-lg p-4 custom-opacity" v-animate-on-scroll>
          <h1 class="text-2xl font-bold text-blue lg:text-3xl">Chat</h1>
          <div class="aspect-video outline outline-blue rounded-lg my-2"></div>
          <div>
            <h4 class="text-base font-bold lg:text-lg">Descripción:</h4>
            <h4 class="text-sm font-plex lg:text-base">Chat en tiempo real para los usuarios.</h4>
          </div>
          <div class="flex flex-wrap gap-1 mt-2 max-w-[90%]">
            <badge-component label="Vue.js" />
            <badge-component label="Pinia.js" />
            <badge-component label="Firebase" />
          </div>
          <div class="flex flex-wrap gap-2 mt-6 custom-opacity" v-animate-on-scroll>
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
