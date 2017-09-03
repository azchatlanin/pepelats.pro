import valid from '../../server/modules/validators'
import model from '../data/auth.valid.Server'

describe('Проверка модуля validators на сервере:', () => {
  it('Все поля верно заполнены', () => {
    expect(valid.Auth(model[0].email, model[0].password).isValid).toBe(true)
    expect(valid.Auth(model[0].email, model[0].password).errors).toEqual({})
  })
  it('Не заполнено поле пароль', () => {
    expect(valid.Auth(model[1].email, model[1].password).isValid).toBe(false)
    expect(valid.Auth(model[1].email, model[1].password).errors).toEqual({ passwordLength: 'Длина пароля не менее 6 символов и не более 50', passwordEmpty: 'Поле пароль не заполнено' })
  })

  it('Пустое поле почты', () => {
    expect(valid.Auth(model[2].email, model[2].password).isValid).toBe(false)
    expect(valid.Auth(model[2].email, model[2].password).errors).toEqual({ email: 'Неверный формат почты' })
  })

  it('Не верный формат почты', () => {
    expect(valid.Auth(model[3].email, model[3].password).isValid).toBe(false)
    expect(valid.Auth(model[3].email, model[3].password).errors).toEqual({ email: 'Неверный формат почты' })
  })

  it('Длина пароля не менее 6 символов', () => {
    expect(valid.Auth(model[4].email, model[4].password).isValid).toBe(false)
    expect(valid.Auth(model[4].email, model[4].password).errors).toEqual({ passwordLength: 'Длина пароля не менее 6 символов и не более 50' })
  })
})