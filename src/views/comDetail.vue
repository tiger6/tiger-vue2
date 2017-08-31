<template>
  <div class="detail-box">
      <content-div :aId="artId">
          <div slot="link" class="article-title">
              {{artTitle}}
          </div>
          <div slot="content">
            <p>{{conMsg}}</p>
            <comment-detail></comment-detail>
          </div>
      </content-div>
  </div>
</template>
<script>
import contentDiv from '@/components/content'
import commentDetail from '@/components/comment/detail'
export default {
    name:'comDetail',
    data (){
        return{
            conMsg:'sdfsdfxxxx详情页'
        }
    },
    created(){
        this.fetchData();
    },
    methods:{
        fetchData(){
            let paramObj=this.$route.params;
            this.artTitle=paramObj.tit;
            this.conMsg=paramObj.con;
            this.artId=paramObj.id;
        }
    },
    components:{
        contentDiv,
        commentDetail
    }
}
</script>
<style lang="less" scoped>
.detail-box{
    margin-bottom:80px;
}
</style>

