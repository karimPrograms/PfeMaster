import {createRouter, createWebHistory} from 'vue-router'
import { useStore } from 'vuex';
import Login from '@/components/Login'
import Home from '@/views/Home.vue'
import Transaction from '@/views/Transaction.vue'
import History from '@/views/History.vue'


const routes = [
    {
        path:'/',
        name:'Hello',
        redirect: '/login'
    },
    {
        path:'/login',
        name:'login',
        component:Login,
    },
    {
        path: "/home",
        name: "Home",
        component:Home,
    },
    {
        path: "/transaction",
        name: "Transaction",
        component:Transaction,
    },
    {
        path: "/history",
        name: "History",
        component: History,
    },
]

const router = createRouter({
    history:createWebHistory(process.env.BASE_URL),
    routes
})

router.beforeEach((to, from, next) => {
  const store = useStore(); 
  const id = store.state.id; 
  if (to.path !== '/login' && !id) {
    next('/login'); 
  } else if (to.path === '/login' && id) {
    next('/home'); 
  } else {
    next(); 
  }
});

export default router