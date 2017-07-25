<template>
  <div>
    <top-menu v-show="currentRoute != '/'"></top-menu>
    <router-view></router-view>
  </div>
</template>

<script>
import topMenu from './components/topMenu.vue'
import { router } from './app'

export default {
  data() {
    return {
      currentRoute: router.currentRoute.path
    }
  },
  components: {
    topMenu
  },
  watch: {
    '$route' (to, from) {
      console.log('to.path = ', to.path)
      console.log('from.path = ', from.path)
      this.currentRoute = to.path
    }
  }
}

</script>

<style>

</style>
