import Vue from 'vue'
import Router from 'vue-router'

const HelloWorld = () => import('@/components/hello-world')

Vue.use(Router)

//路由
const router =  new Router({
  routes: [
    {
      path: '/',
      component: HelloWorld
    },
    // Not found route
    {
      path: '*',
      redirect: '/'
    }
  ]
})
export default router;

router.beforeEach((to, from, next) => {
  next()
})
