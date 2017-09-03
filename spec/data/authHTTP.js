export default [
  {
    req: { email: 'book@qwe.qwe', password: 'asdqweqwe' },
    res: { statusCode: 201, userID: 18, reputation: '0', userName: 'Непонятный' }
  },
  {
    req: { email: 'bookqwe.qwe', password: 'asdqweqwe' },
    res: { email: 'Неверный формат почты' }
  },
  {
    req: { email: 'bookqwe.qwe', password: 'qwe' },
    res: { email: 'Неверный формат почты', passwordLength: 'Длина пароля не менее 6 символов и не более 50' }
  },
  {
    req: { email: 'bookq@we.qwe', password: 'qwe' },
    res: { passwordLength: 'Длина пароля не менее 6 символов и не более 50' }
  }
]
