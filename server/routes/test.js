import express from 'express'
import Debug from 'debug'

const test = express.Router()
const debug = Debug('server: route: >> auth')

test.post('/', (req, res) => {
  debug('request')
  res.status(200).json({ test: 'OK' })
})

export default test
