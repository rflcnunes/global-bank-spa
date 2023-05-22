<script setup>
import { RouterView } from 'vue-router'
import AmNavbar from './components/molecules/AmNavbar/AmNavbar.vue'
</script>

<template>
  <header>
    <AmNavbar />
  </header>

  <RouterView />
</template>
