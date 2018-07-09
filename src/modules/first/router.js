import Vue from 'vue'
import VueRouter from 'vue-router'
import Hello from './hello/hello.vue'

Vue.use(VueRouter)
export default new VueRouter({
        routes: [
            {
                path: '/',
                redirect: '/hello'

            },
            {
                name: 'hello',
                path: '/hello',
                component: Hello

            }
        ]
    }
)
