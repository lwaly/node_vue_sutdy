// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/bootstrap.min.css'
import store from './vuex/store'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'

// Vue.use(VueResource)
// Vue.use(VueRouter)

Vue.config.productionTip = false
// 全局导航钩子
// const router = new VueRouter({
//   Router
// })
// router.beforeEach((to, from, next) => {
//   console.log(to)
//   console.log(from)

//   if (to.meta.requireAuth) {
//     console.log(1)
//     // console.log(isEmptyObject(store.state.user)) 
//     if (!isEmptyObject(store.state.user)) {
//       next();
//       console.log(2)
//     }
//     else {
//       console.log(3)
//       next({
//         path: '/login',
//         query: { redirect: to.fullPath }  // 将跳转的路由path作为参数，登录成功后跳转到该路由
//       })
//       console.log(4)
//     }
//     console.log(5)
//   }
//   else {
//     next();
//     console.log(6)
//   }
//   console.log(7)
// })

// function isEmptyObject(obj) {
//   for (var key in obj) {
//     return false;
//   }
//   return true;
// }
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

