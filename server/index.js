import express from 'express'
import bodyParser from 'body-parser'
import path from 'path'
import morgan from 'morgan'
import Debug from 'debug'
import session from 'express-session'
import KnexSessionStore from 'connect-session-knex'
import db from './controllers/config/knex'
import devOptions from './controllers/config/dev.serv.opt'
import history from 'connect-history-api-fallback'
import serveStatic from 'serve-static'
// routes
import auth from './routes/auth'

const SessionStore = KnexSessionStore(session)
const store = new SessionStore({
  knex: db,
  tablename: 'session'
})
const debug = Debug('server:app')
const port = process.env.PORT || 5000
const app = express()

app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(history())
app.use(session({
  secret: 'secret',
  saveUninitialized: true,
  resave: true,
  store: store
}))
app.use(serveStatic(path.join(__dirname, '..', 'dist')))

devOptions(app)

// ROUTES
app.use('/api/auth', auth)

app.listen(port, () => debug('Server listen on port =', port, 'ENV =', process.env.NODE_ENV))

export default app // для тестирования
