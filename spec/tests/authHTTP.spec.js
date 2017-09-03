import chai from 'chai'
import chaiHttp from 'chai-http'
import server from '../../server'
import model from '../data/authHTTP'

chai.use(chaiHttp)

describe('Проверка модуля auth:', () => {
  it('Нормальный запрос', (done) => {
    chai.request(server).post('/api/auth').send(model[0].req).end((err, res) => {
      expect(err).toBe(null)
      expect(res.body).toEqual(model[0].res)
      done()
    })
  })

  it('Неверная почта', (done) => {
    chai.request(server).post('/api/auth').send(model[1].req).end((err, res) => {
      expect(err.status).toBe(403)
      expect(res.body).toEqual(model[1].res)
      done()
    })
  })

  it('Неверная почта и пароль', (done) => {
    chai.request(server).post('/api/auth').send(model[2].req).end((err, res) => {
      expect(err.status).toBe(403)
      expect(res.body).toEqual(model[2].res)
      done()
    })
  })

  it('Неверный пароль', (done) => {
    chai.request(server).post('/api/auth').send(model[3].req).end((err, res) => {
      expect(err.status).toBe(403)
      expect(res.body).toEqual(model[3].res)
      done()
    })
  })
})
