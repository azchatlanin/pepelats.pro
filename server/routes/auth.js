import express from 'express'
import Debug from 'debug'
import validator from '../modules/validators'
import User from '../modules/user'

const auth = express.Router()
const debug = Debug('server: route: >> auth')

auth.post('/', (req, res) => {
  const { email, password } = req.body

  const valid = validator.Auth(email, password)
  if (!valid.isValid) {
    debug(valid.errors)
    return res.status(403).json(valid.errors)
  }

  const user = new User()
  user.Auth(email, password).then((result, reject) => {
    return res.status(result.statusCode).json(result)
  })
})

export default auth
