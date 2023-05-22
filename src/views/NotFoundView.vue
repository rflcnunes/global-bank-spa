<template>
  <div class="flex flex-col items-center mt-6 gap-6 p-4">
    <div class="flex flex-row gap-2 items-center justify-center">
      <span class="text-4xl font-bold">Not found... YET!</span>
      <v-icon icon="mdi-account-hard-hat-outline" size="x-large" />
    </div>

    <p class="font-mono text-xl text-slate-600 max-w-md text-center mt-4">This page is still under construction, come back another time.</p>

    <v-btn color="blue-accent-3" prepend-icon="mdi-arrow-left-thin" @click="$router.push({ name: 'home' })">
      Back to Home
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'NotFoundView'
}
</script>
