<template>
  <div id="app">
    <div class="mid-col">
    <!-- <img src="/static/logo.jpg"> -->
    <!-- 加载公共头部信息 -->
    <head-div :msg="msg" :hMsg="headMsg" :sMsg="subMsg"></head-div>

    <!--  引用静态资源文件 -->
    <router-view></router-view>
    <!--  这里是用来展示路由页面内容的，如果想用跳转就用<router-link to='xxx'></router-link> -->
    <!-- 加载公共页脚信息 -->
    <foot-div></foot-div>
    </div>
  </div>
</template>

<script>
import headDiv from '@/components/common/header'
import footDiv from '@/components/common/footer'
export default {
  name: 'app',
  data(){
    return{
      msg: '标题栏标题栏',
      headMsg:"Tiger6",
      subMsg:"副标题副标题副标题副标题"
    }
  },
  components:{
    headDiv,
    footDiv
  }
}
</script>

<style lang="less">
@import './assets/less/base.less';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  // color: #2c3e50;
  /*margin-top: 60px;*/
  position: relative;
  min-height: 100%;
  height: 100%;
  .mid-col{
    position: absolute;
    min-height:100%;
    width: 100%;
  }
}
</style>
