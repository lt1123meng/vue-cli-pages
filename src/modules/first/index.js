import Vue from 'vue'
import router from './router'
import App from './app.vue'

new Vue({
    el: '#app',
    router,
    data: {
        message: '这是一个vue项目'
    },
    components: {
        App
    },
    template: '<app/>'
})