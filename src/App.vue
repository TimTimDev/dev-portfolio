<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Projects from './components/Projects.vue';
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/" class="text-green">Home</RouterLink>
      <RouterLink to="/about" class="text-green">Projects</RouterLink>
    </nav>
    
  </header>
  <div class="flex flex-col items-center text-center">
    <HelloWorld msg="Hello there!" />
    <Projects />

  </div>

  <RouterView />
</template>