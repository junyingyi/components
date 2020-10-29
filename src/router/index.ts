import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/showRollover',
    name: 'ShowRollover',
    component: () => import(/* webpackChunkName: "about" */ '@/views/showRollover.vue')
  },
  {
    path: '/showCollapse',
    name: 'ShowCollapse',
    component: () => import(/* webpackChunkName: "about" */ '@/views/showCollapse.vue')
  },
  {
    path: '/showStart',
    name: 'ShowStart',
    component: () => import(/* webpackChunkName: "about" */ '@/views/showStart.vue')
  },
  {
    path: '/showTabbar',
    name: 'ShowTabbar',
    component: () => import(/* webpackChunkName: "about" */ '@/views/showTabbar.vue')
  },
  {
    path: '/showSwiper',
    name: 'ShowSwiper',
    component: () => import(/* webpackChunkName: "about" */ '@/views/showSwiper.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
