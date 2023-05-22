<script setup>
import AmNavbar from './components/molecules/AmNavbar/AmNavbar.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <header>
    <AmNavbar />
  </header>

  <section id="home" class="min-h-screen">
    <RouterView />
  </section>
</template>
