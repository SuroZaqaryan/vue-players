import { createApp } from 'vue';
import App from './App.vue';
import { VueQueryPlugin } from "@tanstack/vue-query";
import router from './router/index';

// Pinia
import { createPinia } from 'pinia';
const pinia = createPinia()

createApp(App)
    .use(router)
    .use(VueQueryPlugin)
    .use(pinia)
    .mount('#app');