// 改文件是整个项目的的入口文件
// 引入VUE
import Vue from 'vue'
// 引入APP组件，他是所有组件的父组件
import App from './App.vue'
//引入插件
import plugins from "./plugins";

// 关闭VUE的生产提示
Vue.config.productionTip = false

//使用插件
Vue.use(plugins,1,2,3);
// 创建VUE实例对象 --- vm
new Vue({
  el:'#app',
  // 下面这行代码一会解释，完成了这个功能，将APP组件放入容器当中
  render: h => h(App),
})
