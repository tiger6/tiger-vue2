<template>
  <div class="article-box">
      <article class="article">
        <div class="article-meta">
            <a href="/" class="article-date">
                <time datetime="2017-08-14T06:53:17.000Z" class="iconfont icon-date">2017-08-22</time>
            </a>
        </div>
        <div class="article-inner">
          <header class="article-header">
              <h1 itemprop="name">
              <slot name="link"></slot>
            </h1>
          </header>
          <div class="article-entry">
              <slot name="content"></slot>
          </div>
          <div class="article-info">
              <p>props值获取：{{aId}}</p>
          </div>
        </div>
    </article>
  </div>
</template>
<script>
export default {
    name: 'article',
    data () {
        return{

        }
    },
    props:["aId"]
}
</script>
<style lang="less" scoped>
.article-box{
    margin: 10px;
    font-size: 14px;
    .article{
        visibility: visible;
        -webkit-transform: translateY(0) scale(1);
        opacity: 1;
        transform: translateY(0) scale(1);
        opacity: 1;
        -webkit-transition: all 0.2s ease-in 0s, -webkit-transform 0s cubic-bezier( 0.6, 0.2, 0.1, 1 ) 0s, opacity 0s cubic-bezier( 0.6, 0.2, 0.1, 1 ) 0s;
        transition: all 0.2s ease-in 0s, transform 0s cubic-bezier( 0.6, 0.2, 0.1, 1 ) 0s, opacity 0s cubic-bezier( 0.6, 0.2, 0.1, 1 ) 0s;
        .article-meta{
            width: auto;
            height: 30px;
            margin-top: -8px;
            padding-right: 10px;
            position: absolute;
            right: 0;
            top: 17px;
            text-align: center;
            z-index: 1;
            .article-date{
                font-size: 12px;
                border-radius: 0;
                color: #666;
                background: 0 0;
                height: auto;
                padding: 0;
                margin: 0 0 0 10px;
                width: 100%;
                text-align: left;
                time{
                    width: auto;
                    float: right;
                    margin-right: 10px;
                    color:#aaa;
                    font-size: 12px;
                    &:before{
                        font-size: 17px;
                        margin-right: 5px;
                        vertical-align: middle;
                    }
                }
            }
        }
        .article-inner{
            position: relative;
            border: 1px solid #2f2f2f;
            margin-bottom: 20px;
            padding-bottom: 20px;
            border-radius: 6px;
            -webkit-box-shadow: 4px 4px 18px rgba(0,0,0,.46);
            box-shadow: 4px 4px 18px rgba(0,0,0,.46);
            .article-header{
                border-left: rgba(63,63,63,0) 5px solid;
                padding: 5px 20px;
                .article-title{
                    color: #999;
                    font-size: 18px;
                    padding-right: 96px;
                    display: block;
                    margin: 0;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    overflow: hidden;
                }
            }
            .article-entry{
                padding: 0 20px;
                line-height:1.8em;
            }
            .article-info{
               padding-top: 10px;
               margin: 0 20px;
               text-align: left;
            }
        }
    }
}
</style>

