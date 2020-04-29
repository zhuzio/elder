<template>
  <div class="face-container">
    <p class="reg-title">请在下方进行人脸识别</p>
    <div class="reg-video" ref="regVideo" :style="`height:${videoHeight}px`">
      <div class="reg-operation-up">
        <p>人脸识别区</p>
        <img src="../../assets/images/icon/camera.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "faceRecognition",
    data() {
      return {
        videoHeight: 0
      }
    },
    methods: {

    },
    mounted() {
      this.videoHeight = this.$refs.regVideo.offsetWidth
    },
    created() {
    }
  }
</script>

<style scoped lang="less">
  @import "../../assets/css/registration";
</style>
