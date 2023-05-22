<template>
  <div id="home_view" class="flex flex-col p-4 lg:flex-row lg:justify-between lg:px-20 animate__animated animate__fadeIn">
    <div class="max-w-lg flex flex-col items-center justify-center">
      <span class="text-4xl font-bold"
        >Everything you need to scale a <span class="global-team">global team</span></span
      >
      <p class="text-slate-600 mt-4">
        Check out our proven methods, guides, and exercises that help make work better, and people
        happier.
      </p>
      <div class="mt-8 flex flex-col md:flex-row w-full">
        <v-btn color="blue-accent-3 mb-2 md:mr-4">Learn More</v-btn>
        <v-btn prepend-icon="mdi-play" variant="outlined">Watch demo</v-btn>
      </div>
      <div class="w-full mt-4">
        <p class="text-slate-600 my-2">Trusted by over than 1M customers</p>
        <v-rating v-model="rating" density="comfortable"></v-rating>
      </div>
    </div>
    <div class="mt-10">
      <img src="../assets/girl-image.svg" alt="image-girl" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      rating: 5
    }
  }
}
</script>

<style scoped>
.global-team {
  border-bottom: 2px solid #1a75ff;
}
</style>
