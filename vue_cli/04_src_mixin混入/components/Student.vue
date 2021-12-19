<template>
  <div>
    <h2 @click="showName">学生名称:{{name}}</h2>
    <h2>学生性别:{{sex}}</h2>
  </div>
</template>

<script>
import {mixin, mixin2} from '../mixin.js'

export default {

  name: "Student",
  data(){
    return {
      name:'学习VUE',
      sex:'男'
    }
  },
  mixins:[mixin, mixin2]

}
</script>