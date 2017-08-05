import Validator from 'validator'
import isEmpty from 'lodash/isEmpty'

export default (model, key = '') => {
  let errors = ''

  if (!Validator.isEmail(model.email)) {
    errors = 'Не верный формат почты'
  }
  if (isEmpty(model.password)) {
    errors = 'Поле пароль не заполнено'
  }
  if (key === 'reg') {
    if (isEmpty(model.repassword)) {
      errors = 'Поле re-password не заполнено'
    }
    if (model.password !== model.repassword) {
      errors = 'Пароли не совпадают'
    }
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}
