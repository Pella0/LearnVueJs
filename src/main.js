import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import mitt from 'mitt'
import {createRouter, createWebHashHistory} from 'vue-router' 
import routes from './Routes'


export const emitter = mitt()

const router = createRouter({
    history: createWebHashHistory(),
    routes
    }); 

const app = createApp(App).use(router)

app.config.globalProperties.emitter = emitter

app.mount('#app')
