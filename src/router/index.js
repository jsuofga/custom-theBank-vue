// Composables
import { useStateStore} from '@/stores/StateStore'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '/',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
    ],
  },
  {
    path: '/bank',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '/bank',
        name: 'Bank',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Bank.vue'),
      },
    ],
  },
  {
    path: '/vault',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '/vault',
        name: 'Vault',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Vault.vue'),
      },
    ],
  },
  {
    path: '/videoinputs',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '/videoinputs',
        name: 'VideoInputs',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/VideoInputs.vue'),
      },
    ],
  },
  {
    path: '/update',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '/update',
        name: 'Update',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Update.vue'),
        beforeEnter: (to, from, next) => {
          const  StateStore = useStateStore(); // <-- passing Pinia instance directly
          if (to.name !== 'AccessControl' && !StateStore.isAuthenticated) {
            next({ name: 'AccessControl' });
          } else {
            next();
          }
        }
      },
    ],
  },
  {
    path: '/accesscontrol',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '/accesscontrol',
        name: 'AccessControl',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/AccessControl.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
