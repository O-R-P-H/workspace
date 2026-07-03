import { createApp } from 'vue'
import App from './App.vue'

// Глобальный сброс стилей (как на Tilda)
import './styles/tilda-reset.css'
import router from "@/router/index.js";

const app = createApp(App)
app.use(router).mount('#app')
