import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import 'animate.css';
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import VueSmoothScroll from 'v-smooth-scroll'
import VueObserveVisibility from 'vue-observe-visibility';

const app = createApp(App)

const vuetify = createVuetify({
  components,
  directives,
  ssr: true,
})

app.use(router)
app.use(vuetify)
app.use(VueSmoothScroll)
app.use(VueObserveVisibility)

app.mount('#app')
