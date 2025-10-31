<template>
  <section id="about" class="py-20">
    <TitleSection title="Sobre mí" />
    <section class="lg:grid lg:grid-cols-2 lg:place-items-center">
      <div class="py-8 space-y-6 text-body dark:text-light">
        <p>
          Soy un desarrollador de software con más de 5 años de experiencia creando aplicaciones web modernas y escalables. Mi pasión por la tecnología comenzó cuando descubrí el poder de transformar ideas en realidades digitales.</p>
        <p>
          Especializado en el ecosistema de React y Next.js, me enfoco en construir interfaces de usuario intuitivas y experiencias web de alto rendimiento. Disfruto trabajar en proyectos desafiantes que requieren soluciones creativas y pensamiento innovador.
        </p>
        <p>
          Cuando no estoy programando, me encontrarás explorando nuevas tecnologías, contribuyendo a proyectos open source, o compartiendo conocimientos con la comunidad de desarrolladores.
        </p>
      </div>
      <InfoComponent />
    </section>
  </section>
</template>

<script setup>
import InfoComponent from '../info/InfoComponent.vue';
import TitleSection from '../ui/TitleSection.vue';
</script>
