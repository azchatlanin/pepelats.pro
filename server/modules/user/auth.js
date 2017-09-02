import Debug from 'debug'
import bcrypt from 'bcrypt'
import isEmpty from 'lodash/isEmpty'
import db from '../../controllers/config/knex'

const debug = Debug('server: module: >> user:auth')

export default (email, password, callback) => {
  const User = {
    Error: {}
  }

  db.select('reputation', 'userID', 'passwordDigest', 'userNameQWE').from('users').where({ email: email }).asCallback((err, values) => {
    if (err) {
      User.Error.message = 'Ошибка на стороне сервера'
      User.Error.code = 500
      debug(err)
      return callback(null, User)
    }
    if (!isEmpty(values)) {
      if (bcrypt.compareSync(password, values[0].passwordDigest)) {
        User.reputation = values[0].reputation
        User.userID = values[0].userID
        User.userName = values[0].userName
        return callback(null, User)
      } else {
        User.Error.message = 'Пароли не совпадают!'
        User.Error.code = 403
        return callback(null, User)
      }
    } else {
      const passwordDigest = bcrypt.hashSync(password, 10)
      db('users').insert({ passwordDigest: passwordDigest, email: email }).returning('userID').asCallback((err, values) => {
        if (err) {
          User.Error.message = 'Ошибка на стороне сервера'
          User.Error.code = 500
          debug(err)
          return callback(null, User)
        }
        User.reputation = 0
        User.userID = values[0]
        User.userName = 'Непонятный'
        return callback(null, User)
      })
    }
  })
}
