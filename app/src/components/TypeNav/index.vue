<template>
  <div class="type-nav">
    <div class="container">
      <!--      时间的委派｜｜ 时间的委托-->
      <div @mouseleave="leaveIndex">
        <h2 class="all">全部商品分类</h2>
        <!--        三级联动-->
        <div class="sort">
          <div class="all-sort-list2">
            <div
                class="item"
                v-for="(item, index) in categoryList"
                :key="item.categoryId"
                :class="{ cur:currentIndex === index}">
              <!--<h3 @mouseenter="changeIndex(index)" @mouseleave="leaveIndex">-->
              <h3 @mouseenter="changeIndex(index)">
                <a href="">{{ item.categoryName}}</a>
              </h3>
              <!--二级，三级分类-->
              <div class="item-list clearfix" :style="{display: currentIndex === index ? 'block' : 'none'}">
                <div class="subitem" v-for="(item1, index) in item.categoryChild"
                     :key="item1.categoryId">
                  <dl class="fore">
                    <dt>
                      <a href="">{{ item1.categoryName }}</a>
                    </dt>
                    <dd>
                      <em v-for="(item2, index) in item1.categoryChild " :key="item2.categoryId">
                        <a href="">{{ item2.categoryName }}</a>
                      </em>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
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
    }
  },
  // 组件一挂载完毕，可以像服务器发请求
  mounted() {
    //通知vuex发请求，获取数据，存储与仓库当中
    this.$store.dispatch('categoryList');
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
  }
}
</style>