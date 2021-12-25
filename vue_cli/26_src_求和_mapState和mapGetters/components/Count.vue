<template>
  <div>
    <h1>当前求和为：{{$store.state.sum}}</h1>
    <h1>当前求和放大十倍为：{{$store.getters.bigSum}}</h1>
    <h1>当前求和放大十倍为：{{$store.getters.bigSum}}</h1>

<!--    <h1>{{hehe}} 欢迎学习{{xuexiao}},,{{kecheng}}</h1>-->
    <h1>{{sum}} 欢迎学习{{subject}},,{{school}}</h1>

    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前求和为奇数再加</button>
    <button @click="incrementWait">等一等再加</button>
  </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
  name:'Count',
  data() {
    return {
      n:1, //用户选择的数字
    }
  },
  computed:{
    // hehe(){
    //   return this.$router.state.sum
    // },
    // xuexiao(){
    //   return this.$router.state.school
    // },
    // kecheng(){
    //   return this.$router.state.subject
    // },

    //借助mapState生成计算属性，从state中读取数据。（对象写法）
    // ...mapState({he:'sum',xuexiao:'school',xueke:'subject'}),

    //借助mapState生成计算属性，从state中读取数据。（数组写法）
    ...mapState(['sum','school','subject']),

    /* ******************************************************************** */

    /* bigSum(){
      return this.$router.getters.bigSum
    }, */

    //借助mapGetters生成计算属性，从getters中读取数据。（对象写法）
    // ...mapGetters({bigSum:'bigSum'})

    //借助mapGetters生成计算属性，从getters中读取数据。（数组写法）
    // ...mapGetters(['bigSum'])
  },
  methods: {
    increment(){
      this.$store.commit('JIA',this.n)
    },
    decrement(){
      this.$store.commit('JIAN',this.n)
    },
    incrementOdd(){
      this.$store.dispatch('jiaOdd',this.n)
    },
    incrementWait(){
      this.$store.dispatch('jiaWait',this.n)
    },
  },
  mounted() {
    console.log('Count',this)
  },
}
</script>

<style lang="css">
button{
  margin-left: 5px;
}
</style>
