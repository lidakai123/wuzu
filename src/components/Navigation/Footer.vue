<template>
  <div>
    <van-tabbar
    v-model="active"
    active-color="#ee0a24"
    inactive-color="#000"
     @change="changeItem">
   
      <van-tabbar-item
        ><van-icon
          class-prefix="iconfont icon-waimai"
          slot="icon"
          size="1.2rem"
        /><span>外卖</span></van-tabbar-item
      >
      <van-tabbar-item
        ><van-icon
          class-prefix="iconfont icon-sousuo"
          slot="icon"
          size="1.2rem"
        /><span>搜索</span></van-tabbar-item
      >
      <van-tabbar-item
        ><van-icon
          class-prefix="iconfont icon-wode"
          slot="icon"
          size="1.2rem"
        /><span>我的</span></van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
// import "vant/lib/index.css";
import "@/assets/fonticon/iconfont.css";
import Vue from "vue";
import { Tabbar, TabbarItem, Icon } from "vant";

Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Icon);
export default {
  data() {
    return {
      active: 0,
      urls:["takeOut","Search",'My']
    };
  },
  created() {
    this.active = this.urls.indexOf(this.$route.path)
  },
  methods: {
    changeItem(index){
      this.$router.push(this.urls[index])
    }
  },
};
</script>
