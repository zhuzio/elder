<template>
  <div class="container">
    <div class="index-head">
      <div class="swiper-container">
        <mt-swipe :auto="8000">
          <mt-swipe-item v-for="(sw, index) in swiper" :key="index"><img :src="sw" alt=""></mt-swipe-item>
        </mt-swipe>
      </div>
      <div class="index-operation" ref="indexOperation">
        <div class="operation-content">
          <div v-for="(op, index) in operationList" :key="index">
            <img :src="op.icon" alt="">
            <p>{{op.name}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="index-others">
      <div class="user-guide">
        <div class="guide-list">
          <div class="guide-title">
            <p class="t1">使用指南</p>
            <img src="../assets/images/icon/mark.png" alt="">
          </div>
          <p>登记/申请操作说明</p>
        </div>
        <div class="guide-list">
          <div class="guide-title">
            <p class="t2">电话咨询</p>
            <img src="../assets/images/icon/tel.png" alt="">
          </div>
          <p>详情咨询/疑问咨询</p>
        </div>
      </div>
    </div>
    <my-footer :selected="selected"></my-footer>
  </div>
</template>

<script>
  import myFooter from '@/components/tabbar.vue'
  export default {
    name: "index",
    components: {myFooter},
    data() {
      return {
        selected:"index",
        swiper: [
          require('../assets/images/banner.png'),
          require('../assets/images/banner2.png'),
          require('../assets/images/banner3.png'),
          require('../assets/images/banner4.png'),
        ],
        operationList: [
          {
            name: '登记老人',
            icon: require('../assets/images/icon/old_man.png'),
            link: '',
            id: 0
          },
          {
            name: '我的老人',
            icon: require('../assets/images/icon/my_homer.png'),
            link: '',
            id: 1
          },
          {
            name: '申请补贴',
            icon: require('../assets/images/icon/apply.png'),
            link: '',
            id: 2
          },
          {
            name: '我的申请',
            icon: require('../assets/images/icon/my_apply.png'),
            link: '',
            id: 3
          }
        ]
      }
    },
    methods: {},
    created() {
    }
  }
</script>
<style lang="less" scoped>
  @import "../assets/css/index";
</style>


