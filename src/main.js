// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//引入 vuejs的默认值
import Vue from 'vue'
//引入app.vue的默认值
import App from './App'

//设置 false 以阻止Vue在启动时生成生产提示
Vue.config.productionTip = false

// eslint 配置，允许 new 一个实例后不赋值，暂时没有用到
/* eslint-disable no-new */
// 创建一个新的 Vue 实例
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
