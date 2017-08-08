import validators from '../../src/system/validators'

const key = 'reg'

const model = [
  {
    email: 'mail@mail.ru',
    password: 'asdasdasd',
    repassword: 'asdasdasd'
  },
  {
    email: 'mail@mail.ru',
    password: '',
    repassword: 'asdasdasd'
  },
  {
    email: '',
    password: 'asdasdasd',
    repassword: 'asdasdasd'
  },
  {
    email: 'asd==**!!!<>><!=@mail.ru',
    password: 'asdasdasd',
    repassword: 'asdasdasd'
  },
  {
    email: 'asd@mail.ru',
    password: 'asasd',
    repassword: 'asasd'
  },
  {
    email: 'asd@mail.ru',
    password: 'asdasd',
    repassword: 'asd'
  }
]

describe('Проверка модуля validators:', () => {
  it('Все поля верно заполнены', () => {
    expect(validators(model[0]).isValid).toBe(true)
    expect(validators(model[0]).errors).toEqual({})
  })

  it('Не заполнено поле пароль', () => {
    expect(validators(model[1]).isValid).toBe(false)
    expect(validators(model[1]).errors).toEqual({ passwordLength: 'Длина пароля не менее 6 символов', passwordEmpty: 'Поле пароль не заполнено' })
  })

  it('Пустое поле почты', () => {
    expect(validators(model[2]).isValid).toBe(false)
    expect(validators(model[2]).errors).toEqual({ email: 'Не верный формат почты' })
  })

  it('Не верный формат почты', () => {
    expect(validators(model[3]).isValid).toBe(false)
    expect(validators(model[3]).errors).toEqual({ email: 'Не верный формат почты' })
  })

  it('Длина пароля не менее 6 символов', () => {
    expect(validators(model[4], key).isValid).toBe(false)
    expect(validators(model[4], key).errors).toEqual({ passwordLength: 'Длина пароля не менее 6 символов' })
  })

  it('Пароли не совпадают', () => {
    expect(validators(model[5], key).isValid).toBe(false)
    expect(validators(model[5], key).errors).toEqual({ different: 'Пароли не совпадают' })
  })
})

