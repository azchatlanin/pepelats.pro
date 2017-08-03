import heroku from './heroku'
import knex from 'knex'

const knexConfig = {
  client: 'pg',
  connection: {
    user: heroku.user,
    password: heroku.password,
    host: heroku.host,
    port: heroku.port,
    database: heroku.database,
    ssl: true,
    max: 100
  },
  pool: {
    min: 2,
    max: 10
  }
}

export default knex(knexConfig)
