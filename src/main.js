import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './main.css'

import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init({
    duration: 1000,
    once: true,
    easing: 'ease-in-out',
})

const app = createApp(App)

app.use(router)

app.mount('#app')
