<template>
  <div id="app">hello world, {{msg}}
    <div>
      <input type="text" v-model="info">
      <button @click="hanleClick">输入</button>
        <ToDoItem v-for="item in list" :key="item">
          <template v-slot:item="itemProps">
            <span :style="{fontSize: '20px', color: itemProps.checked ? 'red' : 'blue'}">{{item}}</span>
          </template>
        </ToDoItem>
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
      this.list.push(this.info)
      this.info = ''
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
