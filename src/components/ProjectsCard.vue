<script setup>
import ProjectCards from "../assets/cards.json"
</script>

<template>

  <a v-for="card in ProjectCards.cards"
  :href="card.link" target="_blank"
  class="col-span-2 hover:scale-105 rounded-t" >
    <img :src="card.imgSrc" class="rounded"/>
    <div class="details">
      <h3 class="text-lg font-bold text-green mt-4">
        {{ card.title }}
      </h3>
      <ul class="flex justify-evenly py-4">
        <li v-for="tech in card.techs">
          {{ tech }}
        </li>
      </ul>
    </div>
  </a>
</template>