import { createApp } from 'vue'
import App from './App.vue'

// Глобальный сброс стилей (как на Tilda)
import './styles/tilda-reset.css'

const app = createApp(App)
app.mount('#app')
