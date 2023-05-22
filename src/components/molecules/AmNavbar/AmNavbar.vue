<template>
  <nav id="am_navbar" class="flex flex-row justify-between items-center py-4 px-10">
    <LogoText />

    <div id="actions">
      <div class="hidden md:flex md:flex-row md:gap-4 md:items-center">
        <div v-for="route in routes" :key="route.path">
          <RouterLink :to="route.path" class="font-mono hover:text-blue-600 hover:font-semibold">{{
            route.name
          }}</RouterLink>
        </div>
        <v-btn color="blue-accent-3">Start Now</v-btn>
      </div>
    </div>

    <div id="mobile-dropdown" class="md:hidden relative">
      <button @click="toggleMobileMenu" class="focus:outline-none">
        <v-icon icon="mdi-menu"></v-icon>
      </button>

      <div v-if="showMobileMenu" class="fixed inset-0 bg-white z-10">
        <div class="flex flex-row p-4 justify-between">
          <v-btn color="blue-accent-3" size="small">Start Now</v-btn>
          <button @click="toggleMobileMenu" class="focus:outline-none">
            <v-icon icon="mdi-close"></v-icon>
          </button>
        </div>
        <div class="flex flex-col h-screen p-4">
          <div v-for="route in routes" :key="route.path">
            <RouterLink :to="route.path">{{ route.name }}</RouterLink>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import LogoText from '../../icons/LogoText.vue'
import './AmNavbar.scss'
import { RouterLink } from 'vue-router'

export default {
  name: 'AmNavbar',
  components: {
    RouterLink,
    LogoText
  },
  data() {
    return {
      showMobileMenu: false,
      routes: [
        {
          name: 'Home',
          path: '/'
        },
        {
          name: 'Feature',
          path: '/feature'
        },
        {
          name: 'About Us',
          path: '/about-us'
        },
        {
          name: 'News',
          path: '/news'
        },
        {
          name: 'Contact',
          path: '/contact'
        }
      ]
    }
  },
  methods: {
    toggleMobileMenu() {
      this.showMobileMenu = !this.showMobileMenu
    }
  }
}
</script>
