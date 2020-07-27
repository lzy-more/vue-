/*
 * @Author: your name
 * @Date: 2020-07-06 09:07:34
 * @LastEditTime: 2020-07-06 09:18:19
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \mint-shop\src\main.js
 */ 
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
