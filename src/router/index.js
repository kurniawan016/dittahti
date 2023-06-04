import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/berita',
      name: 'berita',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Berita.vue')
    },
    {
      path: '/daftarbarang',
      name: 'daftarbarang',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/daftarbarang.vue')
    },
    {
      path: '/aturan',
      name: 'aturan',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Aturan.vue')
    },
    {
      path: '/layanan',
      name: 'layanan',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Layanan.vue')
    },
    {
      path: '/dbt',
      name: 'dbt',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Dbt.vue')
    },
    {
      path: '/bts',
      name: 'bts',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Bts.vue')
    },
    {
      path: '/bselengkapnya',
      name: 'bselengkapnya',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../components/bselengkapnya.vue')
    },
    {
      path: '/dbtditreskrimum',
      name: 'dbtditreskrimum',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/dbtditreskrimum.vue')
    },
    {
      path: '/dbtditlantas',
      name: 'dbtditlantas',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/dbtditlantas.vue')
    },
    {
      path: '/dbtditreskrimsus',
      name: 'dbtditreskrimsus',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/dbtditreskrimsus.vue')
    },
    {
      path: '/dbtditresnarkoba',
      name: 'dbtditresnarkoba',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/dbtditresnarkoba.vue')
    },
    {
      path: '/dbtditpolairud',
      name: 'dbtditpolairud',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/dbtditpolairud.vue')
    },

    {
      path: '/btsditreskrimum',
      name: 'btsditreskrimum',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/btsditreskrimum.vue')
    },
    {
      path: '/btsditlantas',
      name: 'btsditlantas',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/btsditlantas.vue')
    },
    {
      path: '/btsditreskrimsus',
      name: 'btsditreskrimsus',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/btsditreskrimsus.vue')
    },
    {
      path: '/btsditresnarkoba',
      name: 'btsditresnarkoba',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/btsditresnarkoba.vue')
    },
    {
      path: '/btsditpolairud',
      name: 'btsditpolairud',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/btsditpolairud.vue')
    },
  ]
})

export default router
