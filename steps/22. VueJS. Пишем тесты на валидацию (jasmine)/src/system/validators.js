import Validator from 'validator'
import isEmpty from 'lodash/isEmpty'

export default (model, key = '') => {
  const errors = {}

  if (!Validator.isEmail(model.email)) {
    errors.email = 'Не верный формат почты'
  }
  if (!Validator.isLength(model.password, { min: 6, max: undefined })) {
    errors.passwordLength = 'Длина пароля не менее 6 символов'
  }
  if (isEmpty(model.password)) {
    errors.passwordEmpty = 'Поле пароль не заполнено'
  }
  if (key === 'reg') {
    if (isEmpty(model.repassword)) {
      errors.repassword = 'Поле re-password не заполнено'
    }
    if (model.password !== model.repassword) {
      errors.different = 'Пароли не совпадают'
    }
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}
