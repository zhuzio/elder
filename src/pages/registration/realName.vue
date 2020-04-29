<template>
  <div class="real-name-container">
    <p class="reg-title">请拍摄老人的二代身份证</p>
    <div class="reg-id-card" ref="idCard" :style="`height:${idCardHeight}px`">
      <div v-if="!idCardPositiveSrc" class="reg-operation-up">
        <p>添加身份证正面</p>
        <img src="../../assets/images/icon/add.png" alt="">
      </div>
      <div v-else  class="reg-id-card-img">
        <img :src="idCardPositiveSrc" :style="`height:${idCardHeight}px`" alt="">
      </div>
      <input type="file" accept="image/*" multiple="multiple" @change="choseImg($event, 0)">
    </div>
    <div class="reg-id-card" ref="idCard" :style="`height:${idCardHeight}px`">
      <div v-if="!idCardReverseSrc" class="reg-operation-up">
        <p>添加身份证反面</p>
        <img src="../../assets/images/icon/add.png" alt="">
      </div>
      <div v-else  class="reg-id-card-img">
        <img :src="idCardReverseSrc" :style="`height:${idCardHeight}px`" alt="">
      </div>
      <input type="file" accept="image/*" multiple="multiple" @change="choseImg($event, 1)">
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import qs from 'qs'
  export default {
    name: "realName",
    data() {
      return {
        idCardWidth: 0,
        idCardHeight: 0,
        idCardPositiveSrc: '', // 身份证正面照路径
        idCardReverseSrc: '', // 身份证反面照路径
      }
    },
    methods: {
      choseImg(event, idx) {
        let that = this;
        let file = event.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function() {
          let baiduImgBase64 = encodeURIComponent((this.result).split(',')[1])
          switch (parseInt(idx)) {
            case 0:
              that.idCardPositiveSrc = this.result;
              that.api.getAccessToken()
                .then(res => {
                  that.getIdCardInfo(res.result.access_token, baiduImgBase64, 'front')
                })
                .catch(err => {
                  console.log(err)
                });
              break;
            case 1:
              that.idCardReverseSrc = this.result;
              that.api.getAccessToken()
                .then(res => {
                  that.getIdCardInfo(res.result.access_token, baiduImgBase64, 'back')
                })
                .catch(err => {
                  console.log(err)
                });
              break;
            default:
              return false
          }
        };
      },
      // 获取身份证识别信息
      getIdCardInfo(token, img, cardSide) {
        var xhr = new XMLHttpRequest();
        xhr.open('post', `https://aip.baidubce.com/rest/2.0/ocr/v1/idcard?access_token=${token}` );
        xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        xhr.send(`id_card_side=${cardSide}&image=${img}`);
        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4 && xhr.status === 200) {
            console.log(JSON.parse(xhr.responseText));
          }
        };
      }
    },
    mounted() {
      this.idCardHeight = this.$refs.idCard.offsetWidth / 1.58
    },
    created() {}
  }
</script>

<style scoped lang="less">
  @import "../../assets/css/registration";
</style>
