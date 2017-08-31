<template>
  <div class="post-box">
      <li>
        <div class="p-head">
           <div class="h-img">
             <img src="/static/logo.jpg" alt="head">
           </div>
        </div>
        <div class="p-wrap">
          <div class="w-user">
            <span class="user-name">Tiger</span>
            <span class="user-add">[深圳网友]</span>
          </div>
          <div class="w-bar">
             <i class="up" @click="upvote" :class="{disabled:upvoted}">顶</i>
             <span>票数： {{ votes }}</span>
             <i class="down" @click="downvote" :class="{disabled:downvoted}">踩</i>
          </div>
          <div class="w-con">
            <a>{{ posts.title }}</a>
          </div>
        </div>
     </li>
  </div>
</template>
<script>
export default {
    name:"post",
    data(){
        return{
            upvoted:false,
            downvoted:false
        }
    },
    methods:{
        upvote(){
            this.upvoted=!this.upvoted;
            this.downvoted=false;
        },
        downvote(){
            this.downvoted=!this.downvoted;
            this.upvoted=false;
        }
    },
    computed:{
        votes(){
            if(this.upvoted){
                return this.posts.votes+1;
            }else if(this.downvoted){
                return this.posts.votes-1;
            }else{
                return this.posts.votes;
            }
        }
    },
    props:['posts']
}
</script>
<style lang="less" scoped>
.post-box{
    li{
        padding: 5px 0;
        border-bottom:1px dashed #999;
        .p-head{
          position: relative;
          float: left;
          width:42px;
          .h-img{
            width:42px;
            height:42px;
            padding:7px 0 0;
            overflow: hidden;
            img{
              width:100%;
              height:100%;
              border-radius:50%;
            }
          }
        }
        .p-wrap{
          padding-left:52px;
          text-align: left;
          .w-user{
            height:24px;
            line-height: 24px;
            padding-top: 1px;
            float: left;
          }
          .w-con{
            display: inline-block;
          }
          .w-bar{
             margin-top: 3px;
             text-align: right;
             i{
                margin-right:10px;
                &.down{
                    margin-left:10px;
                }
                &.disabled{
                    color: orange;
                }
             }
          }
        }
        a{
            margin-top:10px;
            display: block;
        }
    }
}
</style>

