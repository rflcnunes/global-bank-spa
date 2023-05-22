<template>
  <div class="animate__animated animate__fadeIn">
    <div class="flex flex-col items-center gap-3">
      <v-chip color="blue-accent-3">Our Features</v-chip>
      <span class="font-bold text-4xl font-sans">Our key benefits</span>
      <span class="font-sans max-w-xs text-slate-700 text-center"
        >Our services are designed to cater to your specific needs and goals</span
      >
    </div>
    <div class="flex flex-col gap-12 p-12 md:items-center lg:mx-20 lg:flex-row">
      <div class="w-full flex flex-col gap-6 items-center">
        <div
          class="flex flex-col gap-4 max-w-lg"
          v-for="article in articles"
          :key="article"
        >
          <v-icon class="icon" :icon="article.icon" color="blue-accent-3"></v-icon>
          <span class="font-bold">{{ article.title }}</span>
          <p>{{ article.description }}</p>
        </div>
      </div>
      <img class="md:w-2/4" src="../assets/group-images.svg" alt="group-image" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'FeaturesView',
  data() {
    return {
      articles: [
        {
          title: 'Project Structure',
          description:
            'Check out our proven methods, guides, and exercises that help make work better, and people happier.',
          icon: 'mdi-check-circle-outline'
        },
        {
          title: 'Responsive',
          description:
            'This Design System and UI kit is coming with full-responsive screens for tablet and mobile devices.',
          icon: 'mdi-cellphone'
        },
        {
          title: 'Messaging',
          description:
            'On mobile, customers can send text, or audio messages to agents, like using any messaging app.',
          icon: 'mdi-email-open-outline'
        }
      ]
    }
  }
}
</script>

<style scoped>
.icon {
  border: 1px solid #f0f6ff;
  padding: 20px;
  background-color: #f0f6ff;
  border-radius: 10px;
}
</style>
