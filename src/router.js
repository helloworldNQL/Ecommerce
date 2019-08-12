import Vue from 'vue'
import Router from 'vue-router'
//首页
import Home from './views/Home.vue'
//登陆
import Login from './views/Login.vue'
//注册
import Reg from './views/Reg.vue'
//购物车
import Cart from './views/Cart.vue'
//商品详情页
import Goods from './views/Goods.vue'
//商品分类页
import Category from './views/Category.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/',
      redirect: { name: 'home' }
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/reg',
      name: 'reg',
      component: Reg
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/goods',
      name: 'goods',
      component: Goods
    },
    {
      path: '/category',
      name: 'category',
      component: Category
    }
  ]
})
