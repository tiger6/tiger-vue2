import Vue from 'vue'  /* 引用vue文件 */
import Router from 'vue-router' /* 引用vue路由模块，并赋值给变量Router */
import Home from '@/views/Home' /* 英文Home.vue模版，并赋值给变量Home,这里是“@”相当于“../” */
import Archives from '@/views/archives'
import Tags from '@/views/tags'
import Page404 from '@/views/404'
import ComDetail from '@/views/comDetail'

Vue.use(Router)  /* 使用路由 */

export default new Router({
  routes: [   /* 进行路由配置，规定“/”引入到Home组件 */
    {
      path: '/',
      name: 'Home',  /* 这个name用来匹配路由跳转，例如: :to="{name:'Home'}" */
      component: Home /* 注册Home组件 */
    },
    {
      path: '/archives',/* 注册Archives组件 */
      name: 'Archives',
      component: Archives
    },
    {
      path: '/tags',/* 注册Tags组件 */
      name: 'Tags',
      component: Tags
    },
    {
      path: '/404',/* 注册404组件 */
      name: 'Page404',
      component: Page404
    },
    {
      path: '/detail/:id',
      name: 'ComDetail',  /* 这个name用来匹配路由跳转，例如: :to="{name:'Home'}" */
      component: ComDetail /* 注册Home组件 */
    },
    {
      path: "*",
      redirect: '/404'
    }
  ]
})
