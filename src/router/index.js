import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      component: () => import('@/components/conversation/')
    },
    {
      path: '/conversation',
      name: 'conversation',
      component: () => import('@/components/conversation/')
    }
  ]
})

router.beforeEach((to, from, next) => {
  // ...
  console.log(to)
  if (to.name == 'root')
    next('/conversation')
  next()
})

export default router
