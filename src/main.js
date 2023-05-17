import { createApp } from 'vue'
import App from './App.vue'
import './css/index.css'
import './css/style.css'
import router from './routers/routes.js'  

createApp(App).use(router).mount('#app')
