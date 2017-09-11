import Debug from 'debug'
import bcrypt from 'bcrypt'
import isEmpty from 'lodash/isEmpty'
import db from '../../controllers/config/knex'

const debug = Debug('server: module: >> user')

class User {
  Auth (email, password) {
    const data = {
      statusCode: 201,
      userID: null
    }

    return new Promise((resolve, reject) => {
      db.select('reputation', 'userID', 'passwordDigest', 'userName', 'email').from('users').where({ email: email }).asCallback((err, values) => {
        if (err) {
          data.message = 'Ошибка на стороне сервера'
          data.statusCode = 500
          debug(err)
          resolve(data)
        }

        if (!isEmpty(values)) {
          if (bcrypt.compareSync(password, values[0].passwordDigest)) {
            data.reputation = values[0].reputation
            data.userID = values[0].userID
            data.userName = values[0].userName
          } else {
            data.message = 'Пароли не совпадают!'
            data.statusCode = 403
          }
        } else {
          const passwordDigest = bcrypt.hashSync(password, 10)
          db('users').insert({ passwordDigest: passwordDigest, email: email }).returning('userID').asCallback((err, values) => {
            if (err) {
              data.message = 'Ошибка на стороне сервера'
              data.statusCode = 500
              debug(err)
            } else {
              data.reputation = 0
              data.userID = values[0]
              data.userName = 'Непонятный'
            }
          })
        }
        resolve(data)
      })
    })
  }
}

export default User
