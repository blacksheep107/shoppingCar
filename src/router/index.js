import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/production'
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/production',
    name: 'ProductionPage',
    component: () => import('../views/ProductionPage.vue')
  },
  {
    path: '/shoppingcar',
    name: 'ShoppingCar',
    component: () => import('../views/ShoppingCar.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
