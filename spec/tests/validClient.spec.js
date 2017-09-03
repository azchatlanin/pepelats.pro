import valid from '../../src/system/validators'
import model from '../data/auth.valid.Cliend'

const key = 'reg'

describe('Проверка модуля validators на клиенте:', () => {
  it('Все поля верно заполнены', () => {
    expect(valid(model[0]).isValid).toBe(true)
    expect(valid(model[0]).errors).toEqual({})
  })

  it('Не заполнено поле пароль', () => {
    expect(valid(model[1]).isValid).toBe(false)
    expect(valid(model[1]).errors).toEqual({ passwordLength: 'Длина пароля не менее 6 символов и не более 50', passwordEmpty: 'Поле пароль не заполнено' })
  })

  it('Пустое поле почты', () => {
    expect(valid(model[2]).isValid).toBe(false)
    expect(valid(model[2]).errors).toEqual({ email: 'Неверный формат почты' })
  })

  it('Не верный формат почты', () => {
    expect(valid(model[3]).isValid).toBe(false)
    expect(valid(model[3]).errors).toEqual({ email: 'Неверный формат почты' })
  })

  it('Длина пароля не менее 6 символов', () => {
    expect(valid(model[4], key).isValid).toBe(false)
    expect(valid(model[4], key).errors).toEqual({ passwordLength: 'Длина пароля не менее 6 символов и не более 50' })
  })

  it('Пароли не совпадают', () => {
    expect(valid(model[5], key).isValid).toBe(false)
    expect(valid(model[5], key).errors).toEqual({ different: 'Пароли не совпадают' })
  })
})

