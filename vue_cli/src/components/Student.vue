<template>
  <div>
    <h2>学校名称:{{name}}</h2>
    <h2>地址:{{address}}</h2>
  </div>
</template>

<script>
export default {
  name: "Student",
  data(){
    return {
      name:'VUE',
      address:'背景'
    }
  }
}
</script>