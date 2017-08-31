<template>
  <div class="comm-box">
      <div class="container">
          <h3>评论：</h3>
          <ul>
                <comment-post v-for="item in posts" :key="item.id" :posts="item"></comment-post>
          </ul>
          <div id="commentBox" class="comment-info">
              <input type="text" v-model.trim="comment" placeholder="请输入评论内容并提交" @keyup="handleMsg">
              <button @click="postComment">提交评论</button>
              <p class="error-info" v-show="errMsg">请输入评论内容</p>
          </div>
      </div>
  </div>
</template>
<script>
import commentPost from '@/components/comment/post'
export default {
    name:'comment',
    data(){
        return{
            posts: [{
                title: '测试一下。。。',
                votes: 10
            },{
                title: '顶楼上的',
                votes: 20
            },{
                title: '234523',
                votes: 30
            }],
            comment: '',
            errMsg:false
        }
    },
    methods:{
        handleMsg(){
            this.errMsg=false;
        },
        postComment(){
            if(!this.comment){
                this.errMsg=true;
                return false;
            }
            this.posts.push({
                title:this.comment,
                votes:0
            })
            this.errMsg=false;
            this.comment='';
        }
    },
    components:{
        commentPost
    }
}
</script>
<style lang="less" scoped>
.container{
  h3{
    text-align: left;
  }
}
.comment-info{
    padding-top:10px;
    input[type='text']{
        height: 40px;
        border-radius: 10px;
        padding-left: 10px;
    }
    button:extend(.comment-info input[type='text']){
       padding-right:10px;
    }
    .error-info{
        color:#ff5722;
    }
}
</style>

