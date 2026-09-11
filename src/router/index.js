import { createRouter, createWebHistory } from 'vue-router'
import Admissions from '@/view/Admissions.vue'
import About_us from '@/view/About_us.vue'
import Homepage from '@/view/homepage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: Homepage
    },
    {
      path: '/about_us',
      name: 'AboutUs',
      component: About_us
    },
    {
      path: '/admissions',
      name: 'Admissions',
      component: Admissions
    }
  ]
})

export default router