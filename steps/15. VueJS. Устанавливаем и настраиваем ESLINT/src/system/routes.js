import index from '../pages/index.vue'
import vuejs from '../pages/vuejs.vue'
import auth from '../pages/auth.vue'
import cpp from '../pages/cpp.vue'
import js from '../pages/js.vue'
import linux from '../pages/linux.vue'
import pageNotFound from '../pages/404.vue'

const redirectPath = '/'

export const routes = [
  { path: '/',      component: index },
  { path: '/vuejs', component: vuejs },
  { path: '/auth', component: auth },
  { path: '/cpp', component: cpp },
  { path: '/js', component: js },
  { path: '/linux', component: linux },
  { path: '/*', component: pageNotFound }
]
