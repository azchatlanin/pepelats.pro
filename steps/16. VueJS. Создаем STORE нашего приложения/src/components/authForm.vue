<template>
  <div class="login-wrap">
    <input id="tabInput" type="radio" name="tab" class="sign-in" checked><label for="tabInput" class="tab" @click="showForm(1)">Вход</label>
    <input id="tabRegistration" type="radio" name="tab" class="sign-up"><label for="tabRegistration" class="tab" @click="showForm(2)">Регистрация</label>
    <transition name="component-fade">
      <form class="sign-in-form" v-show="showSignInForm">
        <div class="input-group">
          <label for="pass" class="label">Почта</label>
          <input id="pass" type="email" class="input" required>
        </div>
        <div class="input-group">
          <label for="pass" class="label">Пароль</label>
          <input id="pass" type="password" class="input" data-type="password" required>
        </div>          
        <button type="submit">ВОЙТИ</button>
        <div class="hr"></div>
        <div class="footer-link">
          <a href="#forgot">Забыли пароль?</a>
        </div>
      </form>
    </transition>
    <transition name="component-fade">
      <form class="sign-up-form" v-show="showSignUpForm">
        <div class="input-group">
          <label for="pass" class="label">Почта</label>
          <input id="pass" type="email" class="input" required>
        </div>
        <div class="input-group">
          <label for="pass" class="label">Пароль</label>
          <input id="pass" type="password" class="input" data-type="password" required>
        </div>
        <div class="input-group">
          <label for="pass" class="label">Повторить пароль</label>
          <input id="pass" type="password" class="input" data-type="password" required>
        </div>
        <button type="submit">РЕГИСТРАЦИЯ</button>
        <div class="hr"></div>
        <div class="footer-link">
          <label for="tabInput">Уже зарегестрированы?</label>
        </div>
      </form>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showSignInForm: true,
      showSignUpForm: false
    }
  },
  methods: {
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
    }
  }  
}
</script>

<style lang="stylus" scoped>
@import '../assets/style/auth'
</style>

