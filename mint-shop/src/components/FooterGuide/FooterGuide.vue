<!--
 * @Author: your name
 * @Date: 2020-07-06 09:15:06
 * @LastEditTime: 2020-07-06 15:49:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mint-shop\src\components\FooterGuide\FooterGuide.vue
--> 
<template>
  <div>
    <mt-tabbar
      v-model="selected"
      @input="goto"
    >
      <mt-tab-item id="1">
        <img slot="icon">
        主页
      </mt-tab-item>
      <mt-tab-item id="2">
        <img slot="icon">
        搜索
      </mt-tab-item>
      <mt-tab-item id="3">
        <img slot="icon">
        订单
      </mt-tab-item>
      <mt-tab-item id="4">
        <img slot="icon">
        我的
      </mt-tab-item>
    </mt-tabbar>

  </div>
</template> <script>
import Vue from "vue";
import { Tabbar, TabItem } from "mint-ui";

Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
export default {
  data() {
    return {
      selected: "1"
    };
  },
  mounted() {
    // this.goto('/order')
  },
  methods: {
    goto() {
      if (this.selected == "1") {
        //    console.log(11111111);
        this.$router.replace("/msite");
      } else if (this.selected == "2") {
        this.$router.replace("/search");
      } else if (this.selected == "3") {
        this.$router.replace("/order");
      } else {
        this.$router.replace("/profile");
      }
    }
  }
};
</script>
 <style>
.mint-navbar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>