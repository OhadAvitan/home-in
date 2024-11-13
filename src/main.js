/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins

import { registerPlugins } from '/src/plugins'
// import { registerPlugins } from '@/plugins'

// Components
// import App from './App.vue'
import App from '@/App.vue'
import router from '@/router/index.js'

// Composables
import { createApp } from 'vue'


// import emailjs from '@emailjs/browser';
// emailjs.init({publicKey: "G7VPrLPZtTI0HAYKM"});

const app = createApp(App)


registerPlugins(app)
app.use(router).mount('#app')
