<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="text-center flex flex-col items-center">
    <img alt="A picture of Timo" src="@/assets/Timo.webp" class="rounded shadow-inner shadow-black-soft" width="300" height="300" />
    <h1 class="text-green mt-8">{{ msg }}</h1>
    <h3>My name is <span class="text-green font-semibold">Timo</span> and I'm a <span class="text-green font-semibold">Front-end developer</span>.</h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
