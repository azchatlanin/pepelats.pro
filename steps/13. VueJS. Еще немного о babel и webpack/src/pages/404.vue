<template>
    <div class="pageNotFound">
    <img src="../assets/img/logo_black.png">
    <div class="output">
      <h3>404 - тра раза</h3>
      <div class="Ku">
        <a @click="showKu()">Ку</a>
      </div>
      <transition name="ku-animation">
        <div class="Ku" v-show="kuShowTwo">
          <a @click="showKu()">Ку</a>
        </div>
      </transition> 
      <transition name="ku-animation">     
        <div class="Ku" v-show="kuShowLast">
          <router-link tag="a" to="/vuejs">Ку</router-link>
        </div> 
      </transition>      
    </div>    
  </div>
</template>

<script>
export default {
  data () {
    return {
      kuShowTwo: false,
      kuShowLast: false
    }
  },
  methods: {
    showKu() {
      if (!this.kuShowTwo) {
        this.kuShowTwo = true
      } else {
        this.kuShowLast = true
      } 
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../assets/style/404'
</style>