// 配置路由的地方
import Vue from "vue";
import VueRouter from "vue-router";

// 使用插件
Vue.use(VueRouter);
//
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import Search from '@/pages/Search';
// 配置路由
export default new VueRouter({
    //路由规则
    routes:[
        {
            path:'/home',
            component:Home
        },
        {
            path:'/search',
            component:Search
        },
        {
            path:'/login',
            component:Login
        },
        {
            path:'/register',
            component:Register
        }
    ]
})