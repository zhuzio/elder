import {Get, Post } from "./http";

export default {
  // 上传身份证
  upIdCard(params) {
    return Post(`api/get_api1`, params)
  },
  // 获取access_token
  getAccessToken() {
    return Get(`api/gettoken`)
  }
}
