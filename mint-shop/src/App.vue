<!--
 * @Author: your name
 * @Date: 2020-07-06 09:07:34
 * @LastEditTime: 2020-07-06 09:25:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mint-shop\src\App.vue
--> 
<template>
  <div id="app">
    <router-view></router-view>
    <FooterGuide></FooterGuide>
  </div>
</template>
    <script>
import FooterGuide from "./components/FooterGuide/FooterGuide.vue";
export default { components: { FooterGuide } };
</script>
<style lang="">
  #app{width: 100%;height:100%;background-color: #f5f5f5;}
</style>