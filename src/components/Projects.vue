<script setup>
import ProjectCards from "../assets/cards.json"
import ProjectsCard from './ProjectsCard.vue'
</script>

<template>
  <div id="projects" class="mb-10">
    <h2 class="font-semibold text-green text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-4">Client Projects</h2>
    <p class="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mt-2">Client projects I have worked on as part of a team.</p>
  </div>
  
  <div class="flex flex-col sm:grid sm:grid-cols-6 gap-6 mt-8">

    <ProjectsCard  />

  </div>
</template>
