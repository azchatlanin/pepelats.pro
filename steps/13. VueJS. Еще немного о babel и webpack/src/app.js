import Vue from 'vue'
import VueRouter from 'vue-router'
import app from './app.vue'
import { routes } from './system/routes'

Vue.use(VueRouter)

export const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(app)
})
