import Vue from 'vue'
import Router from 'vue-router'
const Index = r => require.ensure([], () => r(require('@/pages/index')), 'index')
const Registration = r => require.ensure([], () => r(require('@/pages/registration')), 'registration')
const My = r => require.ensure([], () => r(require('@/pages/my')), 'my')
const accountInformation = r => require.ensure([], () => r(require('@/pages/registration/accountInformation')), 'accountInformation')
const certificationComplete = r => require.ensure([], () => r(require('@/pages/registration/certificationComplete')), 'certificationComplete')
const faceRecognition = r => require.ensure([], () => r(require('@/pages/registration/faceRecognition')), 'faceRecognition')
const realName = r => require.ensure([], () => r(require('@/pages/registration/realName')), 'realName')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      component: Index
    },
    {
      path: '/registration',
      name: '',
      component: Registration,
      children:[
        {
          path: '/',
          name: '实名认证',
          component: realName
        },
        {
          path: '/faceRecognition',
          name: '人脸识别',
          component: faceRecognition
        },
        {
          path: '/accountInformation',
          name: '户口信息',
          component: accountInformation
        },
        {
          path: '/certificationComplete',
          name: '认证完成',
          component: certificationComplete
        }
      ]
    },
    {
      path: '/my',
      name: '个人中心',
      component: My
    }
  ]
})

export { Router }
