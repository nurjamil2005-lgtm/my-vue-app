import { createRouter, createWebHistory } from 'vue-router'
import Admissions from '@/view/Admissions.vue'
import About_us from '@/view/About_us.vue'
import Homepage from '@/view/homepage.vue'
import SampleData from '@/view/SampleData.vue'
import SampleMethods from '@/view/SampleMethods.vue'
import SampleVmodel from '@/view/SampleVmodel.vue'

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
    },
    { path: '/sample-data', 
      name: 'sampleData', 
      component: SampleData 
    },
    { path: '/sample-methods', 
      name: 'sampleMethods', 
      component: SampleMethods
    },
    { path: '/sample-vmodel', 
      name: 'SampleVmodel', 
      component: SampleVmodel
    }
  ]
})

export default router