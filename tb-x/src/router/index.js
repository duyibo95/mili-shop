import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/list',
    name: 'List',
    component: () => import('../views/List/List.vue')
  },
  {
    path: '/user',
    name: 'User',
    component: () => import('../views/User/User.vue')
  },
  {
    path: '/details',
    name: 'Details',
    component: () => import('../views/Details/Details.vue')
  },
  {
    path: '/group',
    name: 'Group',
    component: () => import('../views/Group/Group.vue')
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('../views/Cart/Cart.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
