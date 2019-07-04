import Vue from 'vue'
import App from './App.vue'
import router from './router'


Vue.config.production = false
const authData = localStorage.getItem('auth');

new Vue({
    router,
    data: {
        auth: authData ? JSON.parse(authData) : {}
    },
    render: h => h(App)
}).$mount('#app')