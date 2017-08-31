<template lang="html">
  <div class="foot-box">
    <footer id="footer">
      <div class="outer">
          <div id="footer-info">
              <div class="footer-left">
                  © 2017 Tigerliu
              </div>
          </div>

          <div class="visit">
                  <span id="busuanzi_container_site_pv" style="display: inline;">
                      <span id="site-visit">用户到访数:
                          <span id="busuanzi_value_site_uv">232353</span>
                      </span>
                  </span>

                  <span>, </span>

                  <span id="busuanzi_container_page_pv" style="display: inline;">
                      <span id="page-visit">本页阅读量:
                          <span id="busuanzi_value_page_pv">8030</span>
                      </span>
                  </span>

          </div>
      </div>
  </footer>
  </div>
</template>
<script>
  export default{
    name:"footDiv",
    data(){
      return{

      }
    },
    props:["list"]
  }
</script>
<style lang="less" scoped>
.foot-box{
    padding: 10px 0;
    margin-top: 10px;
    position: absolute;
    bottom: 0;
    width: 100%;
    font-size: 12px;
  #busuanzi_value_page_pv, #busuanzi_value_site_uv{
    color:#fff;
  }
}
</style>
