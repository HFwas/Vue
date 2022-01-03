<template>
  <div class="type-nav">
    <div class="container">
      <!--      事件的委派｜｜ 事件的委托-->
      <div @mouseleave="leaveShow" @mouseenter="enterShow">
        <h2 class="all">全部商品分类</h2>
        <!--过度动画-->
        <transition name="sort">
          <!--三级联动-->
          <div class="sort" v-show="show">
            <!--录用事件委派+编程式导航实现路由的跳转与传递参数-->
            <div class="all-sort-list2" @click="goSearch">
              <div
                  class="item"
                  v-for="(item, index) in categoryList"
                  :key="item.categoryId"
                  :class="{ cur:currentIndex === index}"
              >
                <!--<h3 @mouseenter="changeIndex(index)" @mouseleave="leaveIndex">-->
                <h3 @mouseenter="changeIndex(index)">
                  <!--<a href="">{{ item.categoryName}}</a>-->
                  <!--声明式导航：是一个组件，会导致卡顿的现象，所以不使用-->
                  <!--<router-link to="/search">{{ item.categoryName}}</router-link>-->
                  <a
                      :data-categoryName="item.categoryName"
                      :data-category1Id="item.categoryId"
                  >
                    {{ item.categoryName}}
                  </a>
                </h3>
                <!--二级，三级分类-->
                <div class="item-list clearfix" :style="{display: currentIndex === index ? 'block' : 'none'}">
                  <div class="subitem" v-for="(item1, index) in item.categoryChild"
                       :key="item1.categoryId">
                    <dl class="fore">
                      <dt>
                        <!--<a href="">{{ item1.categoryName }}</a>-->
                        <!--<router-link to="/search">{{ item2.categoryName}}</router-link>-->
                        <a
                            :data-categoryName="item1.categoryName"
                            :data-category3Id="item1.categoryId"
                        >
                          {{ item1.categoryName }}
                        </a>
                      </dt>
                      <dd>
                        <em v-for="(item2, index) in item1.categoryChild " :key="item2.categoryId">
                          <!--<a href="">{{ item2.categoryName }}</a>-->
                          <!--<router-link to="/search">{{ item2.categoryName}}</router-link>-->
                          <a
                              :data-categoryName="item2.categoryName"
                              :data-category2Id="item2.categoryId"
                          >
                            {{ item2.categoryName }}
                          </a>
                        </em>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>

      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>

    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
// 引入方式：是吧lodash全部功能函数引入
// 最好的引入方式是：按需加载，
import throttle from 'lodash/throttle';
export default {
  name: "TypeNav",
  data(){
    return{
      //存储用户鼠标移上哪一个一级分类
      currentIndex:  -1,
      show: true
    }
  },
  // 组件一挂载完毕，可以像服务器发请求
  mounted() {
    //通知vuex发请求，获取数据，存储与仓库当中
    //this.$store.dispatch('getCategoryList');
    //当组件挂载完毕，让show属性变为false
    //如果不是Home路由组件，将typeNav进行隐藏
    if (this.$route.path != '/home') {
      this.show = false;
    }
  },
  computed:{
    ...mapState({
      // 右侧需要的是一个函数，当使用这个计算属性的时候，右侧函数会立即执行一次，
      //注入一个参数state,其实即为大仓库中的数据
      categoryList:state => state.home.categoryList
    })
  },
  methods:{
    //这是es6的写法
    //changeIndex(index){
    //index:鼠标移上某一个一级分类的元素的索引值
    // 正常情况（用户慢慢的操作）：鼠标进入,每一个一级分类h3，都会出发鼠标进入事件
    // 非正常情况（用户操作很快）：本身全部的一级分类都应该触发鼠标进入事件，但是经过测试，只有部分h3触发了
    // 就是由于用户行为过快，导致浏览器反应不过来了。如果当前回调函数当中有一些大量业务，有可能出现卡死现象
    //  this.currentIndex = index;
    //},

    //需要修改称es5的写法
    // 鼠标进入修改响应式数据currentIndex属性
    // throttle函数别用箭头函数
    //changeIndex:_.throttle(function (index) {
    changeIndex:throttle(function (index) {
      //index:鼠标移上某一个一级分类的元素的索引值
      // 正常情况（用户慢慢的操作）：鼠标进入,每一个一级分类h3，都会出发鼠标进入事件
      // 非正常情况（用户操作很快）：本身全部的一级分类都应该触发鼠标进入事件，但是经过测试，只有部分h3触发了
      // 就是由于用户行为过快，导致浏览器反应不过来了。如果当前回调函数当中有一些大量业务，有可能出现卡死现象
      this.currentIndex = index;
      console.log("触发了")
    }, 50),
    // 一级分类鼠标移出的
    leaveIndex(){
      this.currentIndex = -1;
    },
    enterShow(){
      this.show = true;
    },
    //当鼠标离开的时候，让商品分类列表进行隐藏
    leaveShow(){
      this.currentIndex = -1;
      //判断如果是search路由组件的时候才会执行
      if (this.$route.path != '/home') {
        this.show = false;
      }
    },
    //进行路由跳转的方法
    goSearch(event){
      //最好的解决方案：编程式导航 + 事件委派
      //利用事件委派存在一些问题：1。怎么知道点击的是a标签。2。如何获取参数【1。2。3级分类的产品的名字，id】
      // 存在的一些问题：事件委派：是吧全部的子节点【h3,dt,em】的事件委派给父亲节点
      //存在另外一个问题：即使你能确定点击的a标签，如何区分是一级，二级，三级分类的标签

      //第一个问题：把子节点当中a标签，我加上自定义属性data-categoryName，其余的子节点是没有的
      let element = event.target;
      // 获取到当前触发这个事件的节点【h3,a,dt,d1】,需要带有:data-categoryName这样节点【一定是a标签】
      //节点有一个属性dataset属性，可以获取节点的自定义属性与属性值
      let { categoryname,category1id, category2id, category3id} = element.dataset;
      console.log(element.dataset);
      //如果标签身上拥有categoryName一定是a标签
      if (categoryname) {
        //整理路由跳转的参数
        let location = { name:'search' };
        let query = {categoryName:categoryname};
        //一级分类，二级分类，三级分类的a标签
        if (category1id) {
          query.category1id = category1id;
        } else if (category2id) {
          query.category2id = category2id;
        } else {
          query.category3id = category3id;
        }
        //整理完毕，
        location.query = query;
        //路由跳转
        this.$router.push(location);
      }
    }
  }
}
</script>

<style scoped lang="less">
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            //display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          &:hover {
            .item-list {
              //display: block;
            }
          }
        }
        .cur {
          background-color: skyblue;
        }
      }
    }
    // 过度动画的样式
    //过度动画开始状态（进入）
    .sort-enter{
      height: 0px;
    }
    // 过度动画结束状态（进入）
    .sort-enter-to{
      height: 461px;
    }
    // 定义动画事件，速率
    .sort-enter-active{
      transition: all 0.5s linear;
    }
  }
}
</style>