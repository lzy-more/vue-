<!--
 * @Author: your name
 * @Date: 2020-07-06 09:15:44
 * @LastEditTime: 2020-07-06 16:08:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mint-shop\src\pages\Msite\Msite.vue
--> 
<template>
  <div>
   <div style="height:200px;">
        <mt-swipe :auto="0">
      <mt-swipe-item>1111111111111</mt-swipe-item>
      <mt-swipe-item>222222222222222</mt-swipe-item>
      <mt-swipe-item>3</mt-swipe-item>
    </mt-swipe>
   </div>
  </div>
</template> 



<script>
import Vue from "vue";
import { Swipe, SwipeItem } from "mint-ui";

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
export default {};
</script> <style></style>