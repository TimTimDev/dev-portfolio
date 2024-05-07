<script setup>
import ProjectCards from "../assets/cards.json"
</script>

<template>

  <a v-for="card in ProjectCards.cards"
  :href="card.link" target="_blank"
  class="sm:col-span-3 lg:col-span-2 transition duration-300 hover:scale-105 rounded bg-black-soft" >
    <img :src="card.imgSrc" :alt="card.imgAlt" class="rounded-t w-full"/>
    <div>
      <h3 class="text-base sm:text-lg font-bold text-green mt-4">
        {{ card.title }}
      </h3>
      <ul class="flex justify-evenly text-xs sm:text-base py-4">
        <li v-for="tech in card.techs">
          {{ tech }}
        </li>
      </ul>
    </div>
  </a>
</template>