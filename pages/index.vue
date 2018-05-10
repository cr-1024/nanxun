<!-- 首页 -->
<template>
  <div id="app">
    <!-- <img src="./assets/imgs/logo/logo.png"> -->
    <Top :isnow="1"/>
    <Search />
    <Nav />
    <Work />
    <Company />
    <div class="friend">
      <el-tabs  class="friendList">
        <el-tab-pane >
          <span slot="label" :class="{'fontSize':true,'cur':true}">友情链接</span>
          <nuxt-link :to="{name:'index'}" v-for="(list,index) in friend" :key="index" class="f_list">{{list}}</nuxt-link>
        </el-tab-pane>
      </el-tabs>
    </div>
    <ScrollTop />
    <Footer />
    <!-- <div class="footer">
      <div><img src="" alt=""></div>
    </div> -->
  </div>
</template>

<script>
import ScrollTop from '~/components/scrollTop.vue'
import Search from '~/components/Search.vue'
import Nav from '~/components/Nav.vue'
import Top from '~/components/index.vue'
import Work from '~/components/Work.vue'
import Company from '~/components/Company.vue'
import Footer from '~/components/footer.vue'

export default {
  components: {
    Search,
    Nav,
    Work,
    Company,
    Top,
    ScrollTop,
    Footer,
  },
  data(){
    return {
     
      activeName:'first',
      friend:["拉勾网","大鲲","招聘","app下载","拉勾云","中大网校","人人都是产品经理","教师招聘","新疆人才网","研究报告","互联网的一些事","人才招聘","找工作","字典"],
    }
  },
  
  methods:{
    
  },

}
</script>

<style lang='scss'>

@import url('//at.alicdn.com/t/font_631781_4v61w1yz6y74x6r.css');
$nx-color:#0470B8;
$all-padding:0;
$nx-width:76.25rem;


#app{
  min-width:$nx-width; 
  .friend{
    width: 100%;
    .friendList{
      width: 76rem;
      margin: 0 auto;
      .f_list{
        display: inline-block;
        font-size: 0.8rem;
        color: #777;
        padding: 1rem 1rem 4rem 0;
        &:hover{
          color: $nx-color;
          text-decoration: underline;
        }
      }
    }
  }
}


@media screen and (max-with:76.25rem){
  
}
</style>
