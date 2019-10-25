import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    component: Login
  },
  {
    path: '/index',
    component:()=> import('../views/Index'),
    children:[
      {path:'/index/goods', component: ()=>import('../views/index/Goods')},//商品管理
      {path:'/index/goodsadd', component: ()=>import('../views/index/Goodsadd')},//添加商品


      {path:'/index/productadd', component: ()=>import('../views/index/Productadd')},//进货管理
      {path:'/index/productdel', component: ()=>import('../views/index/Productdel')},//库存管理
      {path:'/index/productmore', component: ()=>import('../views/index/Productmore')},//添加库存


      {path:'/index/reducesell', component: ()=>import('../views/index/Reducesell')},//销售列表
      {path:'/index/reduceless', component: ()=>import('../views/index/Reduceless')},//商品出库
      {path:'/index/reducereturn', component: ()=>import('../views/index/Reducereturn')},//商品退货

      
      {path:'/index/statisticssell', component: ()=>import('../views/index/Statisticssell')},//统计管理
      {path:'/index/statisticsadd', component: ()=>import('../views/index/Statisticsadd')},//进货统计


      {path:'/index/account', component: ()=>import('../views/index/Account')},//账号管理
      {path:'/index/accountadd', component: ()=>import('../views/index/Accountadd')},//添加账号
      {path:'/index/accountSetpwd', component: ()=>import('../views/index/AccountSetpwd')},//密码修改


      {path:'/index/member', component: ()=>import('../views/index/Member')},//账号管理
      {path:'/index/memberadd', component: ()=>import('../views/index/Memberadd')},//添加账号
    ]

  }
  // {
    // path: '/about',
    // name: 'about',
    // // route level code-splitting
    // // this generates a separate chunk (about.[hash].js) for this route
    // // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  
  // }
]

const router = new VueRouter({
  // mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
