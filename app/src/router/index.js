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
// 先把VueRouter圆形对象的push保存一份
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;

// 重写push|replace方法
//第一个参数：告诉原来push方法，你往哪里跳转，（传递那些参数）
VueRouter.prototype.push = function (location, resolve, reject) {
    if (resolve && reject) {
        // call||apply区别
        //相同点：都可以调用函数一次，都可以篡改函数的上下文一次
        //不同点：call与apply传递参数：call传递参数用都好隔开，apply方法执行，传递数组
        originPush.call(this, location, resolve, reject);
    } else {
        originPush.call(this, location, ()=>{}, ()=>{})
    }
};
VueRouter.prototype.replace = function (location,resolve,reject) {
    if (resolve && reject) {
        originReplace.call(this, location, resolve, reject);
    } else {
        originReplace.call(this, location, ()=>{}, ()=>{});
    }
}

// 配置路由
export default new VueRouter({
    //路由规则
    routes:[
        {
            path:'/home',
            component:Home,
            meta:{ show:true }
        },
        {
            name:'search',
            path:'/search/:keyword?',
            component:Search,
            meta:{ show:true },
            // 路由组件可以传props参数吗？可以
            // 只支持params参数
            // props:true

            // 对象写法：额外给路由组件传递一些props
            // props:{a:1, b:2}

            // 函数写法:可以写params参数，query参数传递给路由组件
            props:( $route )=>{ return {
                keyword: $route.params.keyword,
                k:$route.query.k}}
            },
        {
            path:'/login',
            component:Login,
            meta:{ show:false }
        },
        {
            path:'/register',
            component:Register,
            meta:{ show:false }
        }
    ]
})