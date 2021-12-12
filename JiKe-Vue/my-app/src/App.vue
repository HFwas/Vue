<template>
  <div id="app">hello world, {{msg}}
    <div>
      <input type="text" v-model="info">
      <button @click="hanleClick">输入</button>
        <ToDoItem v-for="item in list" :key="item" :item="item">{{item}}</ToDoItem>
    </div>
  </div>
</template>

<script>
import ToDoItem from './components/ToDoItem.vue'

export default {
  name: 'App',
  data() {
    return {
      msg: 'hello,getttime',
      info: '',
      list: []
    }
  },
  methods: {
    hanleClick(){
      // console.log(this.info)
      this.list.push(this.info)
    }
  },
  components: {
    ToDoItem,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
