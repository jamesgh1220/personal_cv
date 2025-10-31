<template>
  <ul class="space-y-6 lg:flex lg:gap-10 lg:space-y-0 pb-20">
    <li class="space-y-2 lg:p-4 lg:flex-1 lg:rounded-2xl lg:inset-shadow-sm">
      <CodeXml class="size-8 text-green" />
      <p class="text-body font-bold dark:text-white">Código limpio</p>
      <span class="text-base text-light">Escribo código mantenible y escalable siguiendo las mejores prácticas</span>
    </li>
    <li class="space-y-2 lg:p-4 lg:flex-1 lg:rounded-2xl lg:inset-shadow-sm">
      <Rocket class="size-8 text-green" />
      <p class="text-body font-bold dark:text-white">Código limpio</p>
      <span class="text-base text-light">Siempre explorando nuevas tecnologías y metodologías</span>
    </li>
    <li class="space-y-2 lg:p-4 lg:flex-1 lg:rounded-2xl lg:inset-shadow-sm">
      <Zap class="size-8 text-green" />
      <p class="text-body font-bold dark:text-white">Código limpio</p>
      <span class="text-base text-light">Optimización constante para experiencias rápidas y fluidas</span>
    </li>
    <li class="space-y-2 lg:p-4 lg:flex-1 lg:rounded-2xl lg:inset-shadow-sm">
      <Users class="size-8 text-green" />
      <p class="text-body font-bold dark:text-white">Código limpio</p>
      <span class="text-base text-light">Trabajo efectivo en equipo y comunicación clara</span>
    </li>
  </ul>
</template>

<script setup>
import { CodeXml, Rocket, Zap, Users } from "lucide-vue-next";
</script>
