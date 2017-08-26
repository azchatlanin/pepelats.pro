import express from 'express'
import Debug from 'debug'
import validator from '../modules/validators'

const auth = express.Router()
const debug = Debug('server:auth')

auth.post('/', (req, res) => {
  const { email, password } = req.body

  debug(email, password)
  if (!validator.auth(email, password).isValid) {
    return res.status(403).json(validator.auth(email, password).errors)
  }
})

export default auth
