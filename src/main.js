import { createApp } from 'vue'
import axios from 'axios'

import App from './App.vue'
import router from './routes.js'

const vue = createApp(App)

vue.config.globalProperties.$http = axios

vue.use(router)
vue.mount('#app')
