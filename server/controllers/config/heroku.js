import url from 'url'
import herokuDev from './heroku.dev'

if (!process.env.NODE_ENV) process.env.NODE_ENV = 'test'

const heroku = {}

if (process.env.NODE_ENV === 'production') {
  const params = url.parse(process.env.DATABASE_URL)
  const auth = params.auth.split(':')
  heroku.user = auth[0]
  heroku.password = auth[1]
  heroku.host = params.hostname
  heroku.port = params.port
  heroku.database = params.pathname.split('/')[1]
}

if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test') {
  heroku.user = herokuDev.user
  heroku.password = herokuDev.password
  heroku.host = herokuDev.host
  heroku.port = herokuDev.port
  heroku.database = herokuDev.database
}

export default heroku
