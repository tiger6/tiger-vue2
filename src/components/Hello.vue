<template>
  <div class="hello">
    <h1>{{ msg }}</h1><!-- 这里是展示数据的  -->
    <h2>Essential Links</h2>
    <ul>
      <li><a href="http://tigerliu.site/" target="_blank">Tiger Blog</a></li>
      <li><a href="https://github.com/tiger6" target="_blank">github</a></li>
      <li><a href="http://weibo.com/u/1827102445" target="_blank">weibo</a></li>
      <li><a href="https://segmentfault.com/u/tiger6" target="_blank">segmentfault</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'hello', /* 这个name暂时不知道用啥用 */
  data () {
    return {
      /* 这里是数据，一定记住数据一定要放data中然后用return返回 */
      msg: 'Welcome to Your'
    }
  }
}
</script>

<!--添加“scoped”属性，仅将CSS限制为该组件 -->
<style scoped>
/*scoped的意思是这里的样式只对当前页面有效不会影响其他页面，
还有可以设置lang="scss"就是支持css预编译，也就是支持sass或者less*/
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
