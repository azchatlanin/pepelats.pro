import validClient from '../../src/system/validators'
import valid from '../../server/modules/validators'

const key = 'reg'

const modelClient = [
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

const modelServer = [
  {
    email: 'mail@mail.ru',
    password: 'asdasdasd'
  },
  {
    email: 'mail@mail.ru',
    password: ''
  },
  {
    email: '',
    password: 'asdasdasd'
  },
  {
    email: 'asd==**!!!<>><!=@mail.ru',
    password: 'asdasdasd'
  },
  {
    email: 'asd@mail.ru',
    password: 'assd'
  },
  {
    email: 'asd@mail.ru',
    password: 'asdasd'
  }
]

describe('Проверка модуля validators на клиенте:', () => {
  it('Все поля верно заполнены', () => {
    expect(validClient(modelClient[0]).isValid).toBe(true)
    expect(validClient(modelClient[0]).errors).toEqual({})
  })

  it('Не заполнено поле пароль', () => {
    expect(validClient(modelClient[1]).isValid).toBe(false)
    expect(validClient(modelClient[1]).errors).toEqual({ passwordLength: 'Длина пароля не менее 6 символов и не более 50', passwordEmpty: 'Поле пароль не заполнено' })
  })

  it('Пустое поле почты', () => {
    expect(validClient(modelClient[2]).isValid).toBe(false)
    expect(validClient(modelClient[2]).errors).toEqual({ email: 'Неверный формат почты' })
  })

  it('Не верный формат почты', () => {
    expect(validClient(modelClient[3]).isValid).toBe(false)
    expect(validClient(modelClient[3]).errors).toEqual({ email: 'Неверный формат почты' })
  })

  it('Длина пароля не менее 6 символов', () => {
    expect(validClient(modelClient[4], key).isValid).toBe(false)
    expect(validClient(modelClient[4], key).errors).toEqual({ passwordLength: 'Длина пароля не менее 6 символов и не более 50' })
  })

  it('Пароли не совпадают', () => {
    expect(validClient(modelClient[5], key).isValid).toBe(false)
    expect(validClient(modelClient[5], key).errors).toEqual({ different: 'Пароли не совпадают' })
  })
})

describe('Проверка модуля validators на сервере:', () => {
  it('Все поля верно заполнены', () => {
    expect(valid.Auth(modelServer[0].email, modelServer[0].password).isValid).toBe(true)
    expect(valid.Auth(modelServer[0].email, modelServer[0].password).errors).toEqual({})
  })
  it('Не заполнено поле пароль', () => {
    expect(valid.Auth(modelServer[1].email, modelServer[1].password).isValid).toBe(false)
    expect(valid.Auth(modelServer[1].email, modelServer[1].password).errors).toEqual({ passwordLength: 'Длина пароля не менее 6 символов и не более 50', passwordEmpty: 'Поле пароль не заполнено' })
  })

  it('Пустое поле почты', () => {
    expect(valid.Auth(modelServer[2].email, modelServer[2].password).isValid).toBe(false)
    expect(valid.Auth(modelServer[2].email, modelServer[2].password).errors).toEqual({ email: 'Неверный формат почты' })
  })

  it('Не верный формат почты', () => {
    expect(valid.Auth(modelServer[3].email, modelServer[3].password).isValid).toBe(false)
    expect(valid.Auth(modelServer[3].email, modelServer[3].password).errors).toEqual({ email: 'Неверный формат почты' })
  })

  it('Длина пароля не менее 6 символов', () => {
    expect(valid.Auth(modelServer[4].email, modelServer[4].password).isValid).toBe(false)
    expect(valid.Auth(modelServer[4].email, modelServer[4].password).errors).toEqual({ passwordLength: 'Длина пароля не менее 6 символов и не более 50' })
  })
})

