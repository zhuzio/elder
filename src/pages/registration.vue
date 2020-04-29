<template>
  <div class="container">
    <div class="reg-operation-container">
      <div class="reg-head">
        <div class="reg-list">
          <img class="reg-icon" src="../assets/images/icon/real_name.png" alt="">
          <p class="reg-name">实名认证</p>
          <img v-if="nowStep > 0" class="reg-line" src="../assets/images/icon/line.png" alt="">
        </div>
        <div class="reg-list">
          <img class="reg-icon" src="../assets/images/icon/face.png" alt="">
          <p class="reg-name">人脸识别</p>
          <img v-if="nowStep > 1" class="reg-line" src="../assets/images/icon/line.png" alt="">
        </div>
        <div class="reg-list">
          <img class="reg-icon" src="../assets/images/icon/id_info.png" alt="">
          <p class="reg-name">户口信息</p>
          <img v-if="nowStep > 2" class="reg-line" src="../assets/images/icon/line.png" alt="">
        </div>
        <div class="reg-list">
          <img class="reg-icon" src="../assets/images/icon/over.png" alt="">
          <p class="reg-name">认证完成</p>
        </div>
      </div>
      <div class="reg-center" :style="`width:${boxWidth * 0.89}px`">
        <router-view></router-view>
      </div>
      <div class="reg-button">
        <mt-button type="primary" size="large" @click="regNextPre(0)" v-if="nowStep !== 2">下一步</mt-button>
        <mt-button type="primary" size="large" v-if="nowStep === 2 ">提交</mt-button>
        <mt-button v-if="nowStep !==0 " @click="regNextPre(1)" class="reg-button-pre" plain size="large">上一步</mt-button>
      </div>
    </div>
    <my-footer :selected="selected"></my-footer>
  </div>
</template>

<script>
  import myFooter from '@/components/tabbar.vue'
  import Router from '../router/index'
  export default {
    name: "registration",
    components: {myFooter},
    data() {
      return {
        selected:"registration",
        boxWidth: document.body.clientWidth,
        nowStep: 0, // 当前步骤
      }
    },
    watch: {
      $route(to) {
        this.judgeStep(to.path)
      }
    },
    methods: {
      regNextPre(idx) {
        if (idx) {
          this.$router.go(-1)
        } else {
          let url = this.nowStep ? '/accountInformation' : '/faceRecognition';
          this.$router.push(url)
        }
      },
      judgeStep(name) {
        switch (name) {
          case '/registration':
            this.nowStep = 0;
            break;
          case '/faceRecognition':
            this.nowStep = 1;
            break;
          case '/accountInformation':
            this.nowStep = 2;
            break;
          case '/certificationComplete':
            this.nowStep = 3;
            break;
          default:
            return false;
        }
      },
    },
    mounted() {},
    created() {
      console.log(Router.options)
      this.judgeStep(this.$route.path)
    }
  }
</script>

<style scoped lang="less">
  @import "../assets/css/registration";
</style>
