import Validator from 'validator'
import isEmpty from 'lodash/isEmpty'

export default (email, password) => {
  const errors = {}

  if (!Validator.isEmail(email)) {
    errors.email = 'Неверный формат почты'
  }
  if (!Validator.isLength(password, { min: 6, max: 50 })) {
    errors.passwordLength = 'Длина пароля не менее 6 символов и не более 50'
  }
  if (isEmpty(password)) {
    errors.passwordEmpty = 'Поле пароль не заполнено'
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}
