import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
// 三级联动组件---全局组件
import TyprNav from '@/pages/Home/TypeNav';
// 第一个参数：全局组件的名字 第二个参数：哪一个组件
Vue.component(TyprNav.name, TyprNav);
// 引入路由
import router from '@/router';
new Vue({
  render: h => h(App),
  // 注册路由：地下的写法，kv一致，
  router
}).$mount('#app')
