import express from 'express'
import Debug from 'debug'
import async from 'async'
import isEmpty from 'lodash/isEmpty'
import validator from '../modules/validators'
import user from '../modules/user'

const auth = express.Router()
const debug = Debug('server: route: >> auth')

auth.post('/', (req, res) => {
  const { email, password } = req.body

  const valid = validator.Auth(email, password)
  if (!valid.isValid) {
    debug(valid.errors)
    return res.status(403).json(valid.errors)
  }

  async.series({
    User: (callback) => {
      user.Auth(email, password, callback)
    }
  }, (err, result) => {
    if (err) {
      debug(err)
    }
    if (!isEmpty(result.User.Errors)) {
      return res.status(result.User.code).json(result.User.Errors)
    }
    req.session.userID = result.User.userID
    res.status(200).json(result.User)
  })
})

export default auth
