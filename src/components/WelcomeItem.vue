<script setup>
defineProps({
  link: {
    type: String,
    required: true
  },
  imgSrc: {
    type: String,
    required: true
  },

})
</script>

<template>
  <a :href="link" target="_blank">
    <img :src="imgSrc" class="rounded"/>
    <div class="details">
      <h3 class="text-lg font-bold text-green">
        <slot name="heading"></slot>
      </h3>
      <slot></slot>
    </div>
  </a>
</template>