import auth from './auth'

export default {
  Auth (email, password, callback) {
    auth(email, password, callback)
  }
}

