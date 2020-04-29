import axios from 'axios'
import Vue from 'vue'
import qs from 'qs'
let url ='https://ybc.kongjiankeji.com/index/'
const that = Vue.prototype;
axios.defaults.withCredentials = true;//解决跨域问题
// axios.defaults.baseURL = url;
axios.defaults.baseURL = '/api';
// axios.defaults.headers.post['Content-Type'] = 'application/json';
Vue.config.productionTip = false
//设置请求超时
axios.defaults.timeout = 5000;
// 请求拦截
/*
axios.interceptors.request.use(
  function (config) {
    // console.log(config)
    config.headers.Authorization = `Bearer${userInfo.token}`;
    return config
    /!*if(config.url == 'sso/login') {
      return config
    } else {
      let userInfo = JSON.parse(localStorage.getItem('userInfo'));
      if (userInfo === null || undefined) {
        that.$toast('您还未登录，请先登录！')
      } else {
        config.headers.Authorization = `Bearer${userInfo.token}`;
        return config
      }
    }*!/
  },
  function (error) {
    console.log(error)
  });
*/

// 添加响应拦截器
/*axios.interceptors.response.use(
  function (response) {
    // console.log(response)
    return response
    // 对响应数据做点什么
    // 加到时器主要是为了 展示Loading效果 项目中应去除
    /!*setTimeout(()=>{
      store.commit('SET_LOADING',false);
    },300)

    return response;
  *!/
  },
  function (error) {
    // 对响应错误做点什么
    // store.commit('SET_LOADING',false);

    /!*if(errore.response) {

      if(error.response.status== 401) {
        // 如果返回401 即没有权限，跳到登录页重新登录
        store.commit('CHANGE_TOKEN',0);

        alert('请重新登录');

        router.replace({
          path: 'login',
          query: {redirect: router.currentRoute.fullPath}
        })

      }
    }
    return Promise.reject(error);*!/
  }
);*/
export function Post (url, params) {
  console.log(url, params)
  return new Promise((resolve, reject) => {
    axios.post(url, qs.stringify(params) )
      .then(response => {
        console.log(response)
        if (response.status === 200 || response.status === 500 || response.status === 501 || response.status === 203) {
          resolve(response.data)
        }else{
        }
      }, err => {
        reject(err)
      })
      .catch((error) => {
        reject(error)
      })
  })
}
export function Get (url, params) {
  qs.stringify(params)
  return new Promise((resolve, reject) => {
    axios.get(url, qs.stringify(params))
      .then(response => {
        console.log(response)
        if (response.status === 200 || response.status === 500 || response.status === 501) {
          resolve(response.data)
        } else if (response.status === 200107) {
        } else{
        }
      }, err => {
        reject(err)
      })
      .catch((error) => {
        reject(error)
        console.log(error)
      })
  })
}
export { url }
