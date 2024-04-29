<script setup>
import ProjectCards from "../assets/cards.json"
import ProjectsCard from './ProjectsCard.vue'
</script>

<template>
  <div class="mb-10">
    <h2 class="font-semibold text-green text-5xl">Client Projects</h2>
    <p class="text-3xl mt-2">Client projects I have worked on as part of a team.</p>
  </div>
  
  <div class="grid grid-cols-6 gap-6 mt-8">

    <ProjectsCard  />

  </div>
</template>
