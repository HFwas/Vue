<template>
  <div>
    我是搜索
    <h1>params参数  ==={{$route.params.keyword}} ====={{keyword}}}</h1>
    <h1>query参数  ===={{$route.query.k}} ========{{k}}</h1>
  </div>
</template>

<script>
export default {
  name: "index",
  // 路由组件可以传props参数
  props:['keyword','k']

}
</script>

<style scoped>

</style>