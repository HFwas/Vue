<template>
  <li class="item">
    <input type="checkbox" v-model="checked">
    <slot v-bind="{checked}" name="item"></slot>
  </li>
</template>

<script>
export default {
  props: ['item'],
  data() {
    return {
      checked: false,
    }
  }
}
</script>

<style scoped>
  .item {
    color: red;
  }
</style>