<template>
  <div class="home-box">
    <content-div v-for="item in articleList" :key="item.id" :aId="item.id">
      <div slot="link">
          <!-- 路由的使用 -->
          <router-link :to="{name:'ComDetail',params:{id:item.id,tit:item.title,con:item.con}}" class="article-title">{{item.title}}</router-link>
      </div>
      <div slot="content">
        <!-- 路由编程式导航 -->
        <p @click="handleDetail(item)">{{item.con}}</p>
      </div>
    </content-div>
  </div>
</template>

<script>
import contentDiv from '@/components/content'
export default {
   /* 这个name暂时不知道用啥用 */
  name: 'home',
  data () {
      /* 这里是数据，一定记住数据一定要放data中然后用return返回 */
    return {
      articleList:[
        {id:'001',title:'评论功能测试',con:'ceshi测试ceshi测试ceshi测试ceshi测试ceshi测试'},
        {id:'002',title:'文章测试',con:'ceshi2测试ceshi2测试ceshi2测试ceshi2测试ceshi2测试'},
      ]
    }
  },
  methods:{
    handleDetail(item){
      this.$router.push({name:'ComDetail',params:{id:item.id,tit:item.title,con:item.con}});
    }
  },
  components:{
    contentDiv
  }
}
</script>

<!--添加“scoped”属性，仅将CSS限制为该组件 -->
<style lang="less" scoped>
/*scoped的意思是这里的样式只对当前页面有效不会影响其他页面，
还有可以设置lang="scss"就是支持css预编译，也就是支持sass或者less*/
.home-box{
  margin-bottom:80px;
}

</style>
