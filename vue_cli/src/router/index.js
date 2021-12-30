// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
//引入组件
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'

//创建并暴露一个路由器
const router = new VueRouter({
	mode: '',
	routes:[
		{
			name:'guanyu',
			path:'/about',
			component:About,
			meta:{
				title:'关于'
			}
		},
		{
			name: 'zhuye',
			path:'/home',
			component:Home,
			meta:{
				title:'主页'
			},
			children:[
				{
					path:'news',
					component:News,
					meta:{isAuth:true, title:'新闻'},
					//独享前置路由守卫
					// beforeEnter:(to, from, next)=>{
					// 	console.log(to, from, next)
					// 	if (to.meta.isAuth) {
					// 		if (localStorage.getItem("hfwas") === 'hfwas') {
					// 			next()
					// 		} else {
					// 			alert("无权展示！！")
					// 		}
					// 	} else {
					// 		next()
					// 	}
					// }
				},
				{
					path:'message',
					component:Message,
					meta:{isAuth:true, title:'消息'},
					children:[
						{
							name:'xiangqing',
							path:'detail',
							component:Detail,
							meta:{isAuth:true, title:'详情'},
							props($route){
								return {
									id:$route.query.id,
									title:$route.query.title,
									a:1,
									b:'hello'
								}
							}

						}
					]
				}
			]
		}
	]
})

// 全局前置路由 == 每次路由切换之前
// router.beforeEach((to, from, next)=>{
// 	console.log("前置路由守卫", to, from, next)
// 	if (to.meta.isAuth) {
// 		if (localStorage.getItem("hfwas") === 'hfwas') {
// 			next()
// 		} else {
// 			alert("无权展示！！")
// 		}
// 	} else {
// 		next()
// 	}
//
// })

// 全局后置路由守卫--初始化的时候被调用，每次路由切换之后被调用
// router.afterEach((to, from)=>{
// 	console.log("后置路由执行")
// 	console.log(to, from);
// 	document.title = to.meta.title || '硅谷';
// })

export default router;
