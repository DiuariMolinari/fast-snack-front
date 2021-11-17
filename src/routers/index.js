import { createRouter, createWebHistory } from 'vue-router'
import LoginForm from '../views/LoginForm'


const routes = [
  {
    path: '/',
    name: 'Login',
    component: LoginForm
  },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })
  
  export default router