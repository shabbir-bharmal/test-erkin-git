require('./bootstrap');
require('alpinejs');
// import Alpine from 'alpinejs';
import { createApp } from 'vue';
import router from './router'

import Users from './Components/Users.vue';

createApp({
    components: {
        Users
    }
}).use(router).mount('#app')
// window.Alpine = Alpine;
// Alpine.start();
