import Validator from 'validator'
import isEmpty from 'lodash/isEmpty'

export default (model, key = '') => {
  const errors = {}

  if (!Validator.isEmail(model.email)) {
    errors.status = 1
  }
  if (isEmpty(model.password)) {
    errors.status = 2
  }
  if (key === 'reg') {
    if (isEmpty(model.repassword)) {
      errors.status = 3
    }
    if (model.password !== model.repassword) {
      errors.status = 4
    }
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}
