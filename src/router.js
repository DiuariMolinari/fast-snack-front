import Vue  from 'vue'
import Router from 'vue-router'
import UsersControl from '@/views/users/UsersControl'
import Login from '@/views/Login'
import CardContainer from '@/views/catalog/CardContainer'
import DemandStatus from '@/views/demands/DemandStatus'
import DemandsControl from '@/views/demands/DemandsControl'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/login',
            component: Login
        },
        {
            path: '/catalog',
            component: CardContainer
        },
        {
            path: '/demand/:demandId',
            component: DemandStatus,
            props: true
        },
        {
            path: '/demands',
            component: DemandsControl
        },
        {
            path: '/users',
            component: UsersControl
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