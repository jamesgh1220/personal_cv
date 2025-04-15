<template>
  <div class="bg-dark p-4">
    <h4
      class="text-blue text-center text-2xl font-bold mt-10 custom-opacity lg:text-3xl"
      v-animate-on-scroll
    >
      Contacto
    </h4>
    <div
      class="flex flex-col justify-center text-start w-fit mx-auto mt-4 custom-opacity"
      v-animate-on-scroll
    >
      <div class="inline-flex">
        <Mail class="text-blue mr-3" />
        <p class="w-full text-light text-center">jamesgh.1220@gmail.com</p>
      </div>
      <div class="inline-flex">
        <MessageCircle class="text-blue mr-3" />
        <p class="w-full text-light text-center">+57 313 360 4722</p>
      </div>
      <div class="inline-flex">
        <MapPin class="text-blue mr-3" />
        <p class="w-full text-light text-center">Medellín, Colombia</p>
      </div>
    </div>
    <div class="flex justify-center items-center gap-4 my-10">
      <a
        href="https://wa.me/+573133604722"
        target="_blank"
        rel="noopener noreferrer"
        class="custom-opacity"
        title="WhatsApp"
        v-animate-on-scroll
      >
        <img class="w-8" src="https://cdn.simpleicons.org/whatsapp/white" alt="GitHub" />
      </a>
      <a
        href="https://github.com/jamesgh1220"
        target="_blank"
        rel="noopener noreferrer"
        class="custom-opacity"
        title="GitHub"
        v-animate-on-scroll
      >
        <img class="w-8" src="https://cdn.simpleicons.org/github/white" alt="GitHub" />
      </a>
      <a
        href="https://www.linkedin.com/in/john-james-gallego-hern%C3%A1ndez/"
        target="_blank"
        rel="noopener noreferrer"
        class="custom-opacity"
        title="Linkedin"
        v-animate-on-scroll
      >
        <Linkedin class="text-light" />
      </a>
    </div>
    <div class="container mx-auto mb-10 text-light">
      <div class="text-center custom-opacity" v-animate-on-scroll>
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
