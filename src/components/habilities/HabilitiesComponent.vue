<template>
  <section id="habilities" class="py-20">
    <TitleSection title="Habilidades" />
    <ul class="pt-14 space-y-10 lg:grid lg:grid-cols-2 lg:place-items-center lg:space-y-0 lg:gap-10 lg:pb-0">
      <li class="lg:w-80">
        <div class="flex items-center px-4 py-3 rounded-2xl mx-auto gap-3 shadow-lg w-fit lg:mx-0">
          <CodeXml class="size-6 text-green" />
          <span class="text-body font-bold dark:text-white">Frontend</span>
        </div>
        <div class="grid grid-cols-2 place-items-center gap-4 mt-10 lg:place-items-start dark:text-light">
          <badge-component
            class="custom-opacity"
            v-animate-on-scroll
            label="Vue"
          />
          <badge-component
            class="custom-opacity"
            v-animate-on-scroll
            label="TypeScript"
          />
          <badge-component
            class="custom-opacity"
            v-animate-on-scroll
            label="TailwindCSS"
          />
          <badge-component
            class="custom-opacity"
            v-animate-on-scroll
            label="HTML/CSS"
          />
          <badge-component
            class="custom-opacity"
            v-animate-on-scroll
            label="React/Next.js"
          />
        </div>
      </li>
      <li class="lg:h-72 lg:w-80">
        <div class="flex items-center px-4 py-3 rounded-2xl mx-auto gap-3 shadow-lg w-fit lg:mx-0">
          <CodeXml class="size-6 text-green" />
          <span class="text-body font-bold dark:text-white">Backend</span>
        </div>
        <div class="grid grid-cols-2 place-items-center gap-4 mt-10 lg:place-items-start dark:text-light">
          <badge-component
            class="custom-opacity"
            v-animate-on-scroll
            label="Node.js"
          />
          <badge-component
            class="custom-opacity"
            v-animate-on-scroll
            label="PHP/Laravel"
          />
          <badge-component
            class="custom-opacity"
            v-animate-on-scroll
            label="MySql"
          />
          <badge-component
            class="custom-opacity"
            v-animate-on-scroll
            label="REST APIs"
          />
        </div>
      </li>
      <li class="lg:w-80">
        <div class="flex items-center px-4 py-3 rounded-2xl mx-auto gap-3 shadow-lg w-fit lg:mx-0">
          <CodeXml class="size-6 text-green" />
          <span class="text-body font-bold dark:text-white">Mobile</span>
        </div>
        <div class="grid grid-cols-2 place-items-center gap-4 mt-10 lg:place-items-start dark:text-light">
          <badge-component
            class="custom-opacity"
            v-animate-on-scroll
            label="Quasar"
          />
          <badge-component
            class="custom-opacity"
            v-animate-on-scroll
            label="Ionic"
          />
        </div>
      </li>
      <li class="lg:w-80">
        <div class="flex items-center px-4 py-3 rounded-2xl mx-auto gap-3 shadow-lg w-fit lg:mx-0">
          <CodeXml class="size-6 text-green" />
          <span class="text-body font-bold dark:text-white">DevOps</span>
        </div>
        <div class="grid grid-cols-2 place-items-center gap-4 mt-10 lg:place-items-start dark:text-light">
          <badge-component
            class="custom-opacity"
            v-animate-on-scroll
            label="Git/GitHub"
          />
          <badge-component
            class="custom-opacity"
            v-animate-on-scroll
            label="Docker"
          />
        </div>
      </li>
    </ul>
  </section>
</template>

<script setup>
import { CodeXml } from 'lucide-vue-next';
import TitleSection from '../ui/TitleSection.vue';
import BadgeComponent from '../commons/BadgeComponent.vue';
</script>
