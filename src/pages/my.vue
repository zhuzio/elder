<template>
  <div class="container">
    <div>个人中心</div>
    <my-footer :selected="selected"></my-footer>
  </div>
</template>

<script>
  import myFooter from '@/components/tabbar.vue'
  export default {
    name: "my",
    components: {myFooter},
    data() {
      return {
        selected:"my",
      }
    }
  }
</script>

<style scoped>

</style>
