

import { createApp } from 'vue'
import App from './App.vue'
import './tailwind.css'
import InstagramFeed from "vue3-instagram-feed";

// createApp(App).mount('#app')
createApp(App).use(InstagramFeed).mount("#app");
