import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path:'/',
    redirect:'/home'
    
  },
  {
    path: '/home',
    name: 'home',
    meta:{
      title:'首页'
    },
    component: () => import('../views/home/home.vue')
  },
  {
    path:'/login',
    name:'/login',
    meta:{
      title:'登陆页'
    },
    component:() => import('../views/login/login.vue')
  },
  {
    path:'/proposeRing',
    name:'/proposeRing',
    meta:{
      title:'分类'
    },
    component:() => import ('../views/class/proposeRing/proposeRing.vue')
  },
  {
    path:'/details',
    name:'details',
    meta:{
      title:'详情'
    },
  component:() => import ('../views/details/details.vue')
  },
  {
    path:'/shoppingBag',
    name:'shoppingBag',
    meta:{
      title:'购物袋'
    },
  component:() => import ('../views/shoppingBag/shoppingBag.vue')
  },
  {
    path:'/order',
    name:'order',
    meta:{
      title:'订单'
    },
  component:() => import ('../views/order/order.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

const routerMethods = ['push', 'replace']
routerMethods.forEach(method => {
  const originalCall = VueRouter.prototype[method]
  VueRouter.prototype[method] = function(location, onResolve, onReject) {
    if (onResolve || onReject) {
      return originalCall.call(this, location, onResolve, onReject)
    }
    return originalCall.call(this, location).catch(err => err)
  }
})

router.beforeEach((to, from, next) => {
  document.title = to.matched[0].meta.title
  //console.log(this.$route.path == to.path ? true:false)
  next();
  const token = localStorage.getItem('token')
  if(to.path === 'shoppingBag' && !token){
    next('/login')
  }else{
    next();
  }
  if(to.path === '/details' && !token){
      next('/login')
  }else{
    next();
  }
})

export default router
