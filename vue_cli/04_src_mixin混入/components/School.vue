<template>
  <div>
    <h2 @click="showName">学校名称:{{name}}</h2>
    <h2>学校地址:{{address}}</h2>
  </div>
</template>

<script>
  import {mixin, mixin2} from '../mixin'
  export default {
    name: "School",
    data(){
      return {
        name:'学习VUE',
        address:'男'
      }
    },
    mixins:[mixin, mixin2]
  }
</script>