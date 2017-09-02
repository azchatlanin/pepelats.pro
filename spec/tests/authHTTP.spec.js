import chai from 'chai'
import chaiHttp from 'chai-http'
import server from '../../server'

const should = chai.should()
chai.use(chaiHttp)

describe('Проверка модуля:', () => {
  /* beforeEach(function (done) {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000
    setTimeout(function () {
      console.log('test stop beforeEach')
      done()
    }, 2000)
  }) */

  it('post', (done) => {
    chai.request(server).post('/api/auth').send({ email: 'book@qwe.qwe', password: 'asdqweqwe' }).end((err, res) => {
      if (err) return
      console.log('res.body = ', res.body)
      res.should.have.status(201)
      res.body.should.be.a('object')
      res.body.should.have.property('Errors')
      res.body.should.have.property('reputation').equal('0')
      res.body.should.have.property('userID')
      res.body.should.have.property('userName').equal('Непонятный')
      res.body.userName.should.be.a('string')
      res.body.reputation.should.be.a('string')
      res.body.userID.should.be.a('number')
      done()
    })
  })
})
