import axios from 'axios'

const state = {
  user: null
}

const mutations = {

}

const actions = {
  auth ({ commit }, { email, password, repassword }) {
    if (password === repassword || !repassword) {
      axios.post('/api/auth', {
        email, password
      }).then((res) => {
        console.log(res.data)
      }).catch((err) => {
        console.log(err)
      })
    } else {
      console.log('ERR')
    }
  }
}

const getters = {

}

export default {
  state,
  mutations,
  actions,
  getters
}
