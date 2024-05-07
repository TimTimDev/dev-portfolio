<script setup>
import IconLinkedIn from '../components/icons/IconLinkedIn.vue'
import IconGithub from '../components/icons/IconGithub.vue'
import IconMail from '../components/icons/IconMail.vue'
</script>

<template>
    <div id="contact" class="bg-[#0f0f0f] w-full h-[25vh] text-gray flex flex-col justify-center items-center">
        <div class="flex justify-between sm:justify-evenly w-2/4">
            <a href="https://www.linkedin.com/in/timo-pirn-32b26a232/" target="_blank">
                <IconLinkedIn class="transition duration-300 hover:text-green max-w-8 md:max-w-full"/>
            </a>
            <a href="https://github.com/TimTimDev" target="_blank">
                <IconGithub class="transition duration-300 hover:text-green max-w-8 md:max-w-full"/>
            </a>
        </div>
    </div>
</template>