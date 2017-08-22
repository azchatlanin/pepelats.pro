import express from 'express'
import Debug from 'debug'
import AuthValid from '../modules/validators'

const auth = express.Router()
const debug = Debug('server:auth')

auth.post('/', (req, res) => {
  const { email, password } = req.body
  debug(email, password)

  if (!AuthValid.isValid) {
    res.status(401).json(AuthValid.errors)
    return
  }
})

export default auth
