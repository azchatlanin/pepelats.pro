import chai from 'chai'
import chaiHttp from 'chai-http'
import server from '../../server'

chai.use(chaiHttp)

describe('Проверка модуля auth:', () => {
  it('Нормальный запрос', (done) => {
    chai.request(server).post('/api/auth').send({ email: 'book@qwe.qwe', password: 'asdqweqwe' }).end((err, res) => {
      expect(err).toBe(null)
      expect(res.body).toEqual({ Error: {}, reputation: '0', userID: 18, userName: 'Непонятный' })
      done()
    })
  })

  it('Неверная почта', (done) => {
    chai.request(server).post('/api/auth').send({ email: 'bookqwe.qwe', password: 'asdqweqwe' }).end((err, res) => {
      expect(err.status).toBe(403)
      expect(res.body).toEqual({ email: 'Неверный формат почты' })
      done()
    })
  })

  it('Неверная почта и пароль', (done) => {
    chai.request(server).post('/api/auth').send({ email: 'bookqwe.qwe', password: 'qwe' }).end((err, res) => {
      expect(err.status).toBe(403)
      expect(res.body).toEqual({ email: 'Неверный формат почты', passwordLength: 'Длина пароля не менее 6 символов и не более 50' })
      done()
    })
  })

  it('Неверный пароль', (done) => {
    chai.request(server).post('/api/auth').send({ email: 'bookq@we.qwe', password: 'qwe' }).end((err, res) => {
      expect(err.status).toBe(403)
      expect(res.body).toEqual({ passwordLength: 'Длина пароля не менее 6 символов и не более 50' })
      done()
    })
  })
})
