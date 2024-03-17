import {createRouter, createWebHistory} from 'vue-router'
import Login from '@/components/Login'
import Hello from '@/components/Hello'
import Home from '@/views/Home.vue'
import Dashboard from '@/views/Dashboard.vue'
import About from '@/views/About.vue'
import AuthenticationService from '@/services/AuthenticationService';


const routes = [
    {
        path:'/',
        name:'Hello',
        component:Hello,
    },
    {
        path:'/login',
        name:'login',
        component:Login
    },
    {
        path: "/home",
        name: "Home",
        component:Home,
        beforeEnter: async (to, from, next) => {
          if (await AuthenticationService.isloggedin()) {
            next('/home'); // Redirect to login if not logged in
          } else {
            next()// Continue to the route
          }
        },
    },
    {
        path: "/dashboard",
        name: "Dashboard",
        component:Dashboard,
        beforeEnter: (to, from, next) => {
            if (AuthenticationService.isloggedin()) {
              next('/login'); // Redirect to login if not logged in
            } else {
              next(); // Continue to the route
            }
          },
    },
    {
        path: "/about",
        name: "About",
        component: About,
        beforeEnter: (to, from, next) => {
            if (AuthenticationService.isloggedin()) {
              next('/login'); // Redirect to login if not logged in
            } else {
              next(); // Continue to the route
            }
          },
    },
]

const router = createRouter({
    history:createWebHistory(process.env.BASE_URL),
    routes
})

export default router