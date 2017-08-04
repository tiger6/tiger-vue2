import Vue from 'vue'  /* 引用vue文件 */
import Router from 'vue-router' /* 引用vue路由模块，并赋值给变量Router */
import Hello from '@/components/Hello' /* 英文Hello.vue模版，并赋值给变量Hello,这里是“@”相当于“../” */

Vue.use(Router)  /* 使用路由 */

export default new Router({
  routes: [   /* 进行路由配置，规定“/”引入到Hello组件 */
    {
      path: '/',
      name: 'Hello',  /* 这个name用来匹配路由跳转，例如: :to="{name:'hello'}" */
      component: Hello /* 注册Hello组件 */
    }
  ]
})
