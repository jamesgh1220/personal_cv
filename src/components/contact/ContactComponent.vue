<template>
  <section id="contact" class="pt-20">
    <TitleSection title="Contacto" />
    <form @submit.prevent="handleForm" class="mt-10 mb-20 space-y-6 lg:w-[32rem] lg:mx-auto lg:space-y-8">
      <input
        id="name"
        class="w-full ring rounded-xl py-2 px-4 ring-light focus:outline-green lg:px-6 lg:py-4"
        for="name"
        type="text"
        placeholder="Nombre"
        v-model="form.name"
        autocomplete="on"
      />
      <input
        id="email"
        class="w-full ring rounded-xl py-2 px-4 ring-light focus:outline-green lg:px-6 lg:py-4"
        for="email"
        type="email"
        placeholder="Correo electrónico"
        v-model="form.email"
        autocomplete="on"
      />
      <textarea
        id="description"
        class="w-full ring rounded-xl py-2 px-4 ring-light focus:outline-green lg:px-6 lg:py-4"
        for="description"
        placeholder="Información adicional"
        v-model="form.description"
      />
      <button-component
        class="bg-black w-full text-white ring-1 ring-white ring-inset hover:ring-black hover:bg-white dark:bg-white dark:hover:bg-black dark:hover:text-white dark:text-black hover:text-black active:bg-black active:text-white active:ring-white"
        :label="'Enviar mensaje'"
        :icon="SendIcon"
      />
    </form>
    <p class="relative text-green text-subtitle lg:mt-20"># <span class="text-black dark:text-white">Contacta conmigo</span></p>
    <SocialComponent />
  </section>
</template>

<script setup>
import { reactive } from "vue";
import TitleSection from '../ui/TitleSection.vue';
import ButtonComponent from "@/components/commons/ButtonComponent.vue";
import { SendIcon } from "lucide-vue-next";
import SocialComponent from "../social-media/SocialComponent.vue";

const form = reactive({
  name: '',
  email: '',
  description: ''
});

const handleForm = () => {
  console.log('enviando informacion');
};
</script>
