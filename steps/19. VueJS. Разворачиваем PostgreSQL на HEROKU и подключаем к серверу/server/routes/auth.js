import express from 'express'
import Debug from 'debug'

const auth = express.Router()
const debug = Debug('server:auth')

auth.post('/', (req, res) => {
  const { email, password } = req.body
  debug(email, password)
})

export default auth
