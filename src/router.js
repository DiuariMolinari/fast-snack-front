import Vue  from 'vue'
import Router from 'vue-router'
import RegisterUser from '@/views/users/RegisterUser'
import Login from '@/views/Login'
import CardContainer from '@/views/catalog/CardContainer'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/register',
            component: RegisterUser
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

router.beforeEach((to, from, next) => {
    if(localStorage.getItem('user_logged') || (to.path == '/login' || '/catalog')) {
        next();
    }
});

export default router;