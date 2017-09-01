<template lang="html">  <!-- 默认为html模版 -->
  <div class="head-box">  <!-- 组件模板必须包括一个共同的根元素，因此定义了一个根元素div -->
      <div class="overlay" :class="{fixed:scrolled}">
          <div class="slider-trigger icon iconfont icon-other"></div>
          <h1 class="header-author js-mobile-header"><a href="/">{{hMsg}}的主页</a></h1>
      </div>
      <div class="img-box" :style="headFixed">
        <img src="/static/logo.jpg" alt="logo">
      </div>
    <h1 class="header-author"><a href="/">{{ msg }}</a></h1><!-- 这里是展示数据的  -->
    <p class="header-subtitle">{{sMsg}}</p>
    <nav class="header-menu">
        <ul>
            <li v-for="item in menuList"><router-link :to="item.url">{{item.tit}}</router-link></li>
        <div class="clearfix"></div>
        </ul>
    </nav>
    <nav class="header-nav">
        <div class="social">
             <a v-for="item in linkList" class="iconfont" :class="item.className" target="_blank" :href="item.url"></a>
        </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'headTop',
  data(){   //data必须是一个函数
    return{
      isFixed:false,
      scrolled:false,
      menuList:[
        {url:"/",tit:"主页"},
        {url:"/archives/",tit:"归档"},
        {url:"/tags",tit:"标签"},
        {url:"/404",tit:"公益404"},
      ],
      linkList:[
        {url:"https://github.com/tiger6",name:"github",className:"icon-github"},
        {url:"http://weibo.com/u/1827102445",name:"weibo",className:"icon-weibo"},
        {url:"http://weibo.com/u/1827102445",name:"weibo",className:"icon-rss"},
        {url:"https://segmentfault.com/u/tiger6",name:"segmentfault",className:"icon-iconsf"}
      ]
    }
  },
  methods:{
    handleImg(){
      this.isFixed=!this.isFixed;
    },
    onScroll(){
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      this.scrolled=scrollTop>105;
    }
  },
  computed:{
    headFixed(){
      return this.isFixed?'paddingTop:50px':'';
    }
  },
  mounted(){
    this.$nextTick(()=>{
      window.addEventListener("scroll",this.onScroll)
    })
  },
  props:{
    msg:{
      type:String,
      required:true
    },
    hMsg:String,
    sMsg:String
  }
}
</script>

<style lang='less' scoped>
.head-box{
  background-image: url("/static/bg.jpg");
  background-size:cover;
  background-position: center center;
  .overlay{
      height: 110px;
      position: absolute;
      background: #4d4d4d;
      width: 100%;
      visibility:hidden;
      opacity:0;
      -webkit-transition: all .5s ease;
      transform: translateY(-10px);
      -webkit-transform: translateY(-10px);
      height:auto;
      &.fixed{
        position: fixed;
        height:38px;
        line-height:42px;
        z-index:99;
        visibility:visible;
        opacity:1;
        transform: translateY(0px);
        -webkit-transform: translateY(0px);
         & .header-author{
          position: fixed;
          top: -20px;
          background-color: #444;
          color: #fff;
          a{
            color: #4094c7;
          }
        }
      }
      .slider-trigger{
        position: absolute;
        width: 42px;
        left: 0;
        bottom: 0;
        z-index:101;
      }
      .header-author{
        width:100%;
        transition: .3s;
        -webkit-transition: .3s;
        -moz-transition: .3s;
        -ms-transition: .3s;
        margin: .67em 0;
        font-size: 24px;
    }
  }
  .img-box{
    width:80px;
    text-align: center;
    margin: 0 auto;
    padding-top:20px;
    &.fixed{
      padding-top:50px;
    }
    img{
      border-radius:50%;
      width:100%;
      -webkit-transition: all .2s ease-in;
    }
  }
  .header-author{
    text-align: center;
    margin: .67em 0;
    font-family: Roboto,Roboto,serif;
    font-size: 30px;
    color: #fff;
    -webkit-transition: .3s;
    -moz-transition: .3s;
    -ms-transition: .3s;
    transition: .3s;
  }
  .header-subtitle{
    color:#fff;
    font-size: 14px;
    line-height: 25px;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .header-menu{
      font-weight: 300;
      line-height: 31px;
      cursor: pointer;
      text-transform: uppercase;
      float: none;
      -webkit-box-orient: horizontal;
      -webkit-box-pack: center;
      -webkit-box-align: center;
       ul{
        list-style-type: none;
        padding: 0;
        li{
          display: inline-block;
          margin: 0 10px;
        }
      }
  }
  .header-nav{
    width: 100%;
    position: relative;
    -webkit-transition: -webkit-transform .3s ease-in;
    -moz-transition: -moz-transform .3s ease-in;
    -ms-transition: -ms-transform .3s ease-in;
    transition: transform .3s ease-in;
    .social{
      margin-right: 15px;
      margin-top: 10px;
      text-align: center;
      a{
        border-radius: 50%;
        display: -moz-inline-stack;
        display: inline-block;
        vertical-align: middle;
        zoom: 1;
        margin: 0 8px 15px;
        opacity: 1;
        width: 28px;
        height: 28px;
        -webkit-transition: .3s;
        -moz-transition: .3s;
        -ms-transition: .3s;
        transition: .3s;
        font-size:28px;
        &.icon-github{

        }
        &.icon-iconsf{
          background-color: #009a61;
          font-size: 23px;
        }
      }
    }
  }
}
a {
  text-decoration: none;
  color: #fff;
  outline: 0;
}
@-webkit-keyframes fadeInDown{
0%{opacity:0;
-webkit-transform:translateY(-20px)}
100%{opacity:1;
-webkit-transform:translateY(0)}
}
@-moz-keyframes fadeInDown{
0%{opacity:0;
-moz-transform:translateY(-20px)}
100%{opacity:1;
-moz-transform:translateY(0)}
}
</style>
