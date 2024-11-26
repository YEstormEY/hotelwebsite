import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './Router/Router.js'


// Create a new Vue instance
createApp(App)
    // Use the router
    .use(router)
    // Mount the app to the DOM
    .mount('#app')
