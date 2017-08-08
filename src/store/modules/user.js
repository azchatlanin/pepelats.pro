import axios from 'axios'
const state = {
  user: null
}

const mutations = {

}

const actions = {
  auth ({ commit }, { email, password }) {
    axios.post('/api/auth', {
      email, password
    }).then((res) => {
      console.log(res.data)
    }).catch((err) => {
      console.log(err)
    })
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
