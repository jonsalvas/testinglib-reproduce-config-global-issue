import { createApp } from 'vue'
import App from './App.vue'
import registerUi from "./plugins/registerUi";

createApp(App).use(registerUi).mount('#app')
