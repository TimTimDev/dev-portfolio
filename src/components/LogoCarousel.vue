<script setup>
import Html5 from '../assets/logos/html5.svg'
import Css3 from '../assets/logos/css3.svg'
import Javascript from '../assets/logos/javascript.svg'
import Tailwind from '../assets/logos/tailwindcss.svg'
import Statamic from '../assets/logos/statamic.svg'
import Vue from '../assets/logos/vue.svg'
import Laravel from '../assets/logos/laravel.svg'


const logos = [
  { src: Html5, alt: 'HTML5' },
  { src: Css3, alt: 'CSS3' },
  { src: Javascript, alt: 'Javascript' },
  { src: Tailwind, alt: 'Tailwind' },
  { src: Statamic, alt: 'Statamic' },
  { src: Vue, alt: 'Vue' },
  { src: Laravel, alt: 'Laravel' }
]
</script>

<template>
  <div class="grid grid-cols-8 mt-8 mb-[25vh]">
      <div class="col-start-2 col-span-6 w-full h-28 inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        <ul class="flex items-center justify-center [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
          <template v-for="logo in logos">
            <li>
              <img :src="logo.src" :alt="logo.alt" />
            </li>
          </template>
        </ul>
        <ul class="flex items-center justify-center [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
          <template v-for="logo in logos">
            <li>
              <img :src="logo.src" :alt="logo.alt" />
            </li>
          </template>
        </ul>
      </div>
  </div>
</template>