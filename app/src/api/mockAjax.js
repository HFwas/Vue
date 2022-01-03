//对于axios进行二次封装
import axios from "axios";
//引入进度条
import nprogress from 'nprogress';
//引入进度条的样式
import 'nprogress/nprogress.css';
// 1.利于哦那个axios对象的方法create,区创建一个axios实例
//2。request就是axios，只不过稍微配置一下
const requests = axios.create({
    //配置对象
    //基础路径。发送请求的时候，路径当中会出现api
    baseURL:'/mock',
    // 代表请求超时的时间5s
    timeout:5000,
});

// 请求拦截器：在发送请求之前，请求拦截器可以检测到，可以在请求发出去之前做一些事情
requests.interceptors.request.use((config)=>{
    // 进度条开始
    nprogress.start();
    // config:配置对象，对象里面有一个属性很重要，headers请求头
    return config;
})
// 响应拦截器，
requests.interceptors.response.use((res)=>{
    // 进度条结束
    nprogress.done();
    // 成功的回调函数：服务器回应数据回来之后，响应拦截器可以拦截到，可以做一些事情
    return res.data;
}, (error)=>{
    console.log(error);
    // 响应失败的回调函数
    return Promise.reject(new Error('false'))
});


//对外暴露
export default requests;