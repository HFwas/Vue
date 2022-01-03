import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
// 引入路由相关组件
import router from '@/router';
// 引入仓库进行注册
import store from '@/store';
// 三级联动组件---全局组件
//定义全局组件：在入口文件注册一次之后，在任何组件当中都可以使用
import TyprNav from '@/components/TypeNav';
// 第一个参数：全局组件的名字 第二个参数：哪一个组件
Vue.component(TyprNav.name, TyprNav);
// 引入mockserver.js    ---- mock数据
import '@/mock/mockServer.js';
new Vue({
  render: h => h(App),
  // 注册路由：地下的写法，kv一致，
  router,
  //注册仓库：组件实例身上会多一个$store属性
  store
}).$mount('#app')
