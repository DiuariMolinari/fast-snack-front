import Vue  from 'vue'
import Router from 'vue-router'
import Register from '@/views/Register'
import Login from '@/views/Login'
import CardContainer from '@/views/CardContainer'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/register',
            component: Register
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/catalog',
            component: CardContainer
        },



        {
            path: '*',
            redirect: "/login"
        }
    ]
})

// router.beforeEach((to, from, next) => {
//     //aqui valido o usuario esta logado antes de ir para o catalogo
// })

export default router;