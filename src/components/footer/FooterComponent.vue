<template>
  <div class="bg-dark p-4">
    <h4 class="text-blue text-center text-2xl font-bold mt-10">Contacto</h4>
    <div class="text-start max-w-[70%] mx-auto mt-4">
      <div class="inline-flex">
        <Mail class="text-blue mr-3" />
        <p class="text-light">jamesgh.1220@gmail.com</p>
      </div>
      <div class="inline-flex">
        <MessageCircle class="text-blue mr-3" />
        <p class="text-light">+57 313 360 4722</p>
      </div>
      <div class="inline-flex">
        <MapPin class="text-blue mr-3" />
        <p class="text-light">Medellín, Colombia</p>
      </div>
    </div>
    <div class="flex justify-center items-center gap-4 my-10">
      <a>
        <img class="w-8" src="https://cdn.simpleicons.org/whatsapp/white" alt="GitHub" />
      </a>
      <a>
        <img class="w-8" src="https://cdn.simpleicons.org/github/white" alt="GitHub" />
      </a>
      <a>
        <Linkedin class="text-light" />
      </a>
    </div>
    <div class="container mx-auto mb-10 text-light">
      <div class="text-center">
        <p class="text-sm">John James Gallego Hernández. Todos los derechos reservados.</p>
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
