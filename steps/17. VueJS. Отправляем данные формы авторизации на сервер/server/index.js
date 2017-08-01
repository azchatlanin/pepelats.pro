import express from 'express'
import bodyParser from 'body-parser'
import path from 'path'
import Debug from 'debug'
import devOptions from './controllers/config/devOptions'

import auth from './routes/auth'

const debug = Debug('server:app')
const port = process.env.PORT || 5000
const app = express()

app.use(bodyParser.json())
app.use('/dist', express.static('dist'))

devOptions(app)

// ROUTES
app.use('/api/auth', auth)

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'))
})

app.listen(port, () => debug('Server listen on port =', port, 'ENV =', process.env.NODE_ENV))
