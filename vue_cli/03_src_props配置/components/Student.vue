<template>
  <div>
    <H1>{{msg}}</H1>
    <h2>学生名称:{{name}}</h2>
    <h2>学生性别:{{sex}}</h2>
    <h2>学生年龄:{{age}}</h2>
    <h2>学生年龄修改:{{myAge}}</h2>

    <button @click="updateAge">尝试修改年龄</button>
  </div>
</template>

<script>
export default {
  name: "Student",
  data(){
    return {
      msg:'学习VUE',
      myAge:this.age
    }
  },
  methods:{
    updateAge(){
      this.myAge++
    }
  },
  // props:['name' ,'sex' ,'age'] // 简单接受

  // 接受的同时对数值进行限制
  /*props: {
    name:String,
    sex:String,
    age:Number
  }*/

  // 接受的同时对数值进行限制+默认值的指定+必要性的限制
  props:{
    name:{
      type:String,
      required:true
    },
    sex:{
      type:String,
      required:true
    },
    age:{
      type:Number,
      default:89
    }
  }
}
</script>