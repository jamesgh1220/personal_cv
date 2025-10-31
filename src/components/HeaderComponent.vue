<template>
  <header class="flex items-center justify-between text-black p-4 shadow-sm lg:px-32 lg:py-5 dark:shadow-sky-50">
    <side-menu v-model="theme" />
    <div class="hidden lg:flex lg:justify-between w-full gap-8">
      <h1 class="lg:text-lg lg:tracking-tight lg:font-extrabold lg:flex-1 dark:text-white">{{ logo }}</h1>
      <ul
      class="relative flex gap-8 text-body font-semibold dark:text-white
        [&>li]:relative
        [&>li]:cursor-pointer
        [&>li]:overflow-hidden
        [&>li]:z-10
        [&>li:hover]:text-green
        [&>li:hover]:transition-colors
        [&>li:hover]:duration-200

        /* ::before inicial */
        [&>li::before]:content-['']
        [&>li::before]:absolute
        [&>li::before]:left-0
        [&>li::before]:bottom-0
        [&>li::before]:h-0.5
        [&>li::before]:w-0
        [&>li::before]:bg-green
        [&>li::before]:transition-all
        [&>li::before]:duration-300
        [&>li::before]:z-0

        /* ::before en hover (ancho completo) */
        [&>li:hover::before]:w-full
      "
    >
        <li>Inicio</li>
        <li>Sobre mi</li>
        <li>Proyectos</li>
        <li>Habilidades</li>
        <li>Contacto</li>
      </ul>
      <svg @click="toggleTheme" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun-icon lucide-sun cursor-pointer transition-all duration-200 hover:text-green hover:scale-110 dark:text-white"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
    </div>
  </header>
</template>

<script setup>
import SideMenu from "@/components/commons/SideMenu.vue";

const theme = defineModel();
const logo = `<James = () => { code } />`;

function toggleTheme() {
  theme.value = theme.value === "dark" ? "light" : "dark";
}
</script>
