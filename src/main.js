/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins

import { registerPlugins } from '/src/plugins'
// import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// import emailjs from '@emailjs/browser';
// emailjs.init({publicKey: "G7VPrLPZtTI0HAYKM"});

const app = createApp(App)

registerPlugins(app)

app.mount('#app')
