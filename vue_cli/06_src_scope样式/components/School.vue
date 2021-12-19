<template>
  <div class="scho">
    <h2>学校名称：{{name}}</h2>
    <h2>学校地址：{{address}}</h2>
  </div>
</template>

<script>
export default {
  name:'School',
  data() {
    return {
      name:'VUE',
      address:'北京',
    }
  }
}
</script>

<style scoped>
  .scho{
    background-color: aqua;
  }
</style>