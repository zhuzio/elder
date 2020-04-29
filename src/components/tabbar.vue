<template>
  <div class="">
    <mt-tabbar class="old-tab" v-model="selectedName" fixed>
      <mt-tab-item v-for="(tab, index) in tabArr" :key="index" :id="tab.selectName">
        <img v-if="selectedName === tab.selectName" slot="icon" :src="tab.icon_on">
        <img v-else slot="icon" :src="tab.icon">
        <span>{{tab.name}}</span>
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
  export default {
    name: "tabbar",
    props: {
      page: String,
      selected: String,
    },
    data () {
      return {
        selectedName: this.selected,
        tabArr: [
          {
            icon: require('../assets/images/icon/home.png'),
            icon_on: require('../assets/images/icon/home_on.png'),
            name: '首页',
            selectName: 'index'
          },
          {
            icon: require('../assets/images/icon/registration.png'),
            icon_on: require('../assets/images/icon/registration_on.png'),
            name: '登记',
            selectName: 'registration'
          },
          {
            icon: require('../assets/images/icon/my.png'),
            icon_on: require('../assets/images/icon/my_on.png'),
            name: '个人中心',
            selectName: 'my'
          }
        ]
      }
    },
    watch: {
      selectedName: function(val) {
        switch (val) {
          case "index" || "":
            this.$router.replace("/");
            break;
          case "registration":
            this.$router.replace("/registration");
            break;
          case "my":
            this.$router.replace("/my");
            break;
        }
      }
    },
  }
</script>

<style lang="less">
  .old-tab{
    .mint-tab-item {
      &.is-selected{
        background: #fafafa;
        .mint-tab-item-label{
          span{
            color: #F45250;
          }
        }
      }
      .mint-tab-item-label{
        span{
          color: #A0A0A0;
        }
      }
    }
  }

</style>
