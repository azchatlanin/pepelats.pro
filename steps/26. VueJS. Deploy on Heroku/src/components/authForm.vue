<template>
  <div>
    <notifications group="auth-notification"
                   position="bottom right"
                   :speed="500">
    </notifications>
    <div class="login-wrap">
      <input id="tabInput" type="radio" name="tab" class="sign-in" checked><label for="tabInput" class="tab" @click="showForm(1)">Вход</label>
      <input id="tabRegistration" type="radio" name="tab" class="sign-up"><label for="tabRegistration" class="tab" @click="showForm(2)">Регистрация</label>
      <transition name="component-fade">
        <form class="sign-in-form" v-show="showSignInForm" @submit.prevent="submit()">
          <div class="input-group">
            <label for="pass" class="label">Почта</label>
            <input id="pass" type="email" class="input" v-model.lazy="model.email">
          </div>
          <div class="input-group">
            <label for="pass" class="label">Пароль</label>
            <input id="pass" type="password" class="input" data-type="password" v-model.lazy="model.password">
          </div>          
          <button type="submit">ВОЙТИ</button>
          <div class="hr"></div>
          <div class="footer-link">
            <a href="#forgot">Забыли пароль?</a>
          </div>
        </form>
      </transition>
      <transition name="component-fade">
        <form class="sign-up-form" v-show="showSignUpForm" @submit.prevent="submit('reg')">
          <div class="input-group">
            <label for="pass" class="label">Почта</label>
            <input id="pass" type="email" class="input" v-model.lazy="model.email">
          </div>
          <div class="input-group">
            <label for="pass" class="label">Пароль</label>
            <input id="pass" type="password" class="input" data-type="password" v-model.lazy="model.password">
          </div>
          <div class="input-group">
            <label for="pass" class="label">Повторить пароль</label>
            <input id="pass" type="password" class="input" data-type="password" v-model.lazy="model.repassword">
          </div>
          <button type="submit">РЕГИСТРАЦИЯ</button>
          <div class="hr"></div>
          <div class="footer-link">
            <label for="tabInput">Уже зарегестрированы?</label>
          </div>
        </form>
      </transition>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import valid from '../system/validators'

export default {
  data() {
    return {
      showSignInForm: true,
      showSignUpForm: false,
      model: {
        email: '',
        password: '',
        repassword: ''
      }
    }
  },
  methods: {
    ...mapActions(['auth']),
    showForm(num) {
      switch (num) {
        case 1:
          this.showSignInForm = true
          this.showSignUpForm = false
          break;
        case 2:
          this.showSignInForm = false
          this.showSignUpForm = true
          break;
      
        default:
          break;
      }
    },
    submit(key) {      
      if (valid(this.model, key).isValid) {
        this.auth(this.model)
      } else {
        let group = 'auth-notification'
        let type = 'error'
        let title = 'Ошибка ввода данных'
        const err = valid(this.model, key).errors
        for (var key in err) {
          let text = err[key]
          this.$notify({ group,title, text, type });
        }             
      }      
    }
  }  
}
</script>

<style lang="stylus" scoped>
@import '../assets/style/auth'
</style>

