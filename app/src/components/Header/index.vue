<template>
  <!-- 头部 -->
  <header class="header">
    <!-- 头部的第一行 -->
    <div class="top">
      <div class="container">
        <div class="loginList">
          <p>尚品汇欢迎您！</p>
          <p>
            <span>请</span>
            <router-link to="/login">登录</router-link>
            <router-link class="register" to="/register">免费注册</router-link>
          </p>
        </div>
        <div class="typeList">
          <a href="###">我的订单</a>
          <a href="###">我的购物车</a>
          <a href="###">我的尚品汇</a>
          <a href="###">尚品汇会员</a>
          <a href="###">企业采购</a>
          <a href="###">关注尚品汇</a>
          <a href="###">合作招商</a>
          <a href="###">商家后台</a>
        </div>
      </div>
    </div>
    <!--头部第二行 搜索区域-->
    <div class="bottom">
      <h1 class="logoArea">
        <router-link class="logo" to="/home">
          <img src="./images/logo.png" alt="">
        </router-link>
      </h1>
      <div class="searchArea">
        <form action="###" class="searchForm">
          <input
              type="text"
              id="autocomplete"
              class="input-error input-xxlarge"
              v-model="keyword"
          />
          <button
              class="sui-btn btn-xlarge btn-danger"
              type="button"
              @click="goSearch"
          >
            搜索
          </button>
        </form>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data(){
    return{
      //响应式数据，用于收集表单元素文本内容
      keyword:''
    }
  },
  methods:{
    // 搜索按钮的回调函数：需要向search路由进行跳转
    goSearch(){
      //第一种：字符串形式
      // this.$router.push("/search/:keyword" + this.keyword + "?k=" + this.keyword.toUpperCase());
      //第二种：模版字符串
      // this.$router.push(`/search/${this.keyword}?k=${this.keyword.toUpperCase()}`);
      //第三种：对象
      // this.$router.push({
      //   name:'search',
      //   // params:{
      //   //   keyword:this.keyword
      //   // },
      //   query:{
      //     k:this.keyword.toUpperCase()
      //   }
      // });

      // 面试题1：路由传递参数（对象写法）path是否可以结合params参数一起使用？
      //答：路由跳转传惨的时候，对象的写法可以是name.path形式，但是需要注意的是，oath这种写法不能与params参数
      // this.$router.push({
      //   name:'search',
      //   params:{
      //     keyword:this.keyword
      //   },
      //   query:{
      //     k:this.keyword.toUpperCase()
      //   }
      // })

      // 2：如何指定param参数可穿可不传？
      //如果路由要求传递params参数，但是你就不传递params参数，发现一件事情，URL会有问题
      //如何指定params参数可以传递，或者不传递
      // this.$router.push({
      //   name:'search',
      //   query:{
      //     k:this.keyword.toUpperCase()
      //   }
      // })

      // 面试题3：params参数可以传递也可以不传递，但是如果传递是空字符串。如何解决
      //使用undefined解决，params参数可以传递，不传递（空的字符串）
      // this.$router.push({
      //   name:'search',
      //   params:{
      //     keyword:''|| undefined
      //   },
      //   query:{
      //     k:this.keyword.toUpperCase()
      //   }
      // })

      //面试题4：路由组件能不能传递props组件数据
      // this.$router.push({
      //   name:'search',
      //   params:{
      //     keyword:this.keyword
      //   },
      //   query:{
      //     k:this.keyword.toUpperCase()
      //   }
      // },(result)=>{
      //   console.log(result)
      // },(error)=>{
      //   console.log(error)
      // });

      //可以的：三种写法:布尔值，对象，函数
      //下面这种写法可以解决当前这个抛出异常错误的问题，但是将来我们还是会用到push|replace方法进行路由跳转，还是会出现此类问题
      // 因此我们需要从"根"解决问题，就是砸门自己重写push|replace方法，push|rplace方法是vuerouter.prototype原型对象提供的
      // 如果路径当中有query参数，也捎带过去
      if (this.$route.query) {
        let loction = this.$router.push({
          name:'search',
          params:{
            keyword:this.keyword || undefined
          }
        });
        loction.query = this.$route.query;
        this.$router.push(loction);
      }
    },
  }
}
</script>

<style scoped lang="less">
.header {
  &>.top {
     background-color: #eaeaea;
     height: 30px;
     line-height: 30px;

    .container {
      width: 1200px;
      margin: 0 auto;
      overflow: hidden;

      .loginList {
        float: left;

        p {
          float: left;
          margin-right: 10px;

          .register {
            border-left: 1px solid #b3aeae;
            padding: 0 5px;
            margin-left: 5px;
          }
        }
      }

      .typeList {
        float: right;

        a {
          padding: 0 10px;

        &+a {
           border-left: 1px solid #b3aeae;
         }
        }

      }

    }
  }

  &>.bottom {
     width: 1200px;
     margin: 0 auto;
     overflow: hidden;

    .logoArea {
      float: left;

      .logo {
        img {
          width: 175px;
          margin: 25px 45px;
        }
      }
    }

  .searchArea {
    float: right;
    margin-top: 35px;

    .searchForm {
      overflow: hidden;

      input {
        box-sizing: border-box;
        width: 490px;
        height: 32px;
        padding: 0px 4px;
        border: 2px solid #ea4a36;
        float: left;

      &:focus {
         outline: none;
       }
      }

      button {
        height: 32px;
        width: 68px;
        background-color: #ea4a36;
        border: none;
        color: #fff;
        float: left;
        cursor: pointer;

      &:focus {
         outline: none;
       }
      }
    }
  }
  }
  }
</style>