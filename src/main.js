import { configureCompat } from '@vue/compat'
import { createApp } from 'vue'
import App from './App.vue'

// disable compat for certain features
configureCompat({})

createApp(App).mount('#app')
