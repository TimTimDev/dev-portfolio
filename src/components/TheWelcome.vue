<script setup>
import WelcomeItem from './WelcomeItem.vue'
</script>

<template>
  <div class="mt-10">
    <h2 class="font-semibold text-green text-3xl">Client Projects</h2>
    <p class="mt-2">Client projects I have worked on as part of a team.</p>
  </div>

  <div class="grid grid-cols-6 gap-4 mt-8">

    <WelcomeItem 
    link="https://www.lapitekk.ee/" 
    imgSrc="src/assets/project_imgs/lapitekk.png"
    class="col-span-2 hover:scale-105">
      <template #heading>Kohala Lapitekk</template>
      This project is served and bundled with
      <a href="https://vitejs.dev/guide/features.html" target="_blank" rel="noopener">Vite</a>. The
      recommended IDE setup is
      <a href="https://code.visualstudio.com/" target="_blank" rel="noopener">VSCode</a> +
      <a href="https://github.com/johnsoncodehk/volar" target="_blank" rel="noopener">Volar</a>. 
    </WelcomeItem>

    <WelcomeItem 
    link="https://valmarifoto.com/"
    imgSrc="src/assets/project_imgs/valmarifoto_suur.png"
    class="col-span-2 hover:scale-105">
      <template #heading>Valmari Foto</template>
      Get official tools and libraries for your project:
      <a href="https://pinia.vuejs.org/" target="_blank" rel="noopener">Pinia</a>,
      <a href="https://router.vuejs.org/" target="_blank" rel="noopener">Vue Router</a>,
      <a href="https://test-utils.vuejs.org/" target="_blank" rel="noopener">Vue Test Utils</a>, and
      <a href="https://github.com/vuejs/devtools" target="_blank" rel="noopener">Vue Dev Tools</a>.
    </WelcomeItem>

    <WelcomeItem 
    link="https://kalmaehitus.ee/" 
    imgSrc="src/assets/project_imgs/kalma.png"
    class="col-span-2 hover:scale-105">
      <template #heading>Kalma Ehitus</template>
      Got stuck? Ask your question on
      <a href="https://chat.vuejs.org" target="_blank" rel="noopener">Vue Land</a>, our official
      Discord server, or
      <a href="https://stackoverflow.com/questions/tagged/vue.js" target="_blank" rel="noopener"
        >StackOverflow</a
      >. You should also subscribe to
      <a href="https://news.vuejs.org" target="_blank" rel="noopener">our mailing list</a> and follow
      the official
      <a href="https://twitter.com/vuejs" target="_blank" rel="noopener">@vuejs</a>
      twitter account for latest news in the Vue world.
    </WelcomeItem>

    <WelcomeItem 
    link="https://www.sepps.eu" 
    imgSrc="src/assets/project_imgs/sepps.png"
    class="col-span-2 hover:scale-105">
      <template #heading>Kalma Ehitus</template>
      Got stuck? Ask your question on
      <a href="https://chat.vuejs.org" target="_blank" rel="noopener">Vue Land</a>, our official
      Discord server, or
      <a href="https://stackoverflow.com/questions/tagged/vue.js" target="_blank" rel="noopener"
        >StackOverflow</a
      >. You should also subscribe to
      <a href="https://news.vuejs.org" target="_blank" rel="noopener">our mailing list</a> and follow
      the official
      <a href="https://twitter.com/vuejs" target="_blank" rel="noopener">@vuejs</a>
      twitter account for latest news in the Vue world.
    </WelcomeItem>

  </div>
</template>
