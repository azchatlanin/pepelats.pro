import moxios from 'moxios'
import axios from 'axios'
import sinon from 'sinon'

describe('mocking axios requests', function () {
  let onFulfilled
  let onRejected
  describe('across entire suite', function () {
    beforeEach(function () {
      moxios.install()
      onFulfilled = sinon.spy()
      onRejected = sinon.spy()
    })

    afterEach(function () {
      moxios.uninstall()
      onFulfilled = ''
      onRejected = ''
    })

    it('stub response for any matching request URL', function (done) {
      axios.post('/api/test', 'data').then(onFulfilled).catch(onRejected).then((result) => console.log('result = ', result))
      moxios.wait(function () {
        const request = moxios.requests.mostRecent()
        request.respondWith({
          status: 200,
          response: {
            'test': 'OK'
          }
        }).then(() => {
          console.log('JSON.parse(request.config.data) = ', JSON.parse(request.config.data))
          expect(JSON.parse(request.config.data)).to.deep.equal()
          done()
        })
      })
    })
  })
})
