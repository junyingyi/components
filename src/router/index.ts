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
    component: () => import(/* webpackChunkName: "showRollover" */ '@/views/showRollover.vue')
  },
  {
    path: '/showCollapse',
    name: 'ShowCollapse',
    component: () => import(/* webpackChunkName: "showCollapse" */ '@/views/showCollapse.vue')
  },
  {
    path: '/showStart',
    name: 'ShowStart',
    component: () => import(/* webpackChunkName: "showStart" */ '@/views/showStart.vue')
  },
  {
    path: '/showTabbar',
    name: 'ShowTabbar',
    component: () => import(/* webpackChunkName: "showTabbar" */ '@/views/showTabbar.vue')
  },
  {
    path: '/showSwiper',
    name: 'ShowSwiper',
    component: () => import(/* webpackChunkName: "showSwiper" */ '@/views/showSwiper.vue')
  },
  {
    path: '/showList',
    name: 'ShowList',
    component: () => import(/* webpackChunkName: "showList" */ '@/views/showList.vue')
  }
  ,
  {
    path: '/showMenu',
    name: 'ShowMenu',
    component: () => import(/* webpackChunkName: "showMenu" */ '@/views/showMenu.vue')
  } ,
  {
    path: '/showNumber',
    name: 'showNumber',
    component: () => import(/* webpackChunkName: "showNumber" */ '@/views/showNumber.vue')
  },
  {
    path: '/ShowVirtualScroll',
    name: 'showVirtualScroll',
    component: () => import(/* webpackChunkName: "showVirtualScroll" */ '@/views/showVirtualScroll.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
