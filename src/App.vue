<script setup>
import HelloWorld from './components/HelloWorld.vue'
import AboutMe from './components/AboutMe.vue'
import Projects from './components/Projects.vue';
import LogoCarousel from './components/LogoCarousel.vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  
  <header class="max-w-7xl my-0 mx-auto px-8 sticky top-0 z-50">
    <Header />  
  </header>

  <div class="max-w-7xl my-0 mx-auto p-8 flex flex-col items-center text-center font-sans">
    <HelloWorld />
    <AboutMe />
    <Projects />
    <LogoCarousel />
  </div>

  <footer>
    <Footer />
  </footer>
  
</template>