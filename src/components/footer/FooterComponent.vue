<template>
  <div class="mt-20 flex-1 p-4 border-t border-light/30 lg:border-t-0">
    <div
      class="flex flex-col justify-center text-body text-start w-fit mx-auto mt-4 custom-opacity gap-y-4"
      v-animate-on-scroll
    >
      <div class="inline-flex">
        <Mail class="size-8 text-green mr-3" />
        <p class="w-full text-light text-center">jamesgh.1220@gmail.com</p>
      </div>
      <div class="inline-flex">
        <MessageCircle class="size-8 text-green mr-3" />
        <p class="w-full text-light text-center">+57 313 360 4722</p>
      </div>
      <div class="inline-flex">
        <MapPin class="size-8 text-green mr-3" />
        <p class="w-full text-light text-center">Medellín, Colombia</p>
      </div>
    </div>
    <div class="container mx-auto my-10 text-light">
      <div class="text-body text-center custom-opacity" v-animate-on-scroll>
        <p>John James Gallego Hernández. <br> Todos los derechos reservados.</p>
        <p>&copy; {{ new Date().getFullYear() }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Mail } from "lucide-vue-next";
import { MessageCircle } from "lucide-vue-next";
import { MapPin } from "lucide-vue-next";
import { Linkedin } from "lucide-vue-next";
</script>
