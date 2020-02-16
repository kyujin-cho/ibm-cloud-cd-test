const chai = require('chai')
const { expect } = chai
const chaiHttp = require('chai-http')

const { server } = require('../server')

chai.use(chaiHttp)
describe('basic routes', () => {
  after(() => server.close())
  it('should get Index Page', done => {
    chai
      .request(server)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200)
        expect(res.text).eq('Hello, World!')
        done()
      })
  })
  it('Should return CD Version', done => {
    chai
      .request(server)
      .get('/version')
      .end((err, res) => {
        expect(res).to.have.status(200)
        expect(res.body).to.have.property('message', 'CD Version')
        expect(res.body).to.have.property('version')
        done()
      })
  })
  it('Should echo my body', done => {
    chai
      .request(server)
      .post('/echo')
      .send({ text: 'HelloMessage' })
      .end((err, res) => {
        expect(res).to.have.status(200)
        expect(res.text).eq('Your message is: HelloMessage')
        done()
      })
  })
  it('Should throw error', done => {
    chai
      .request(server)
      .post('/echo')
      .end((err, res) => {
        expect(res).to.have.status(400)
        expect(res.text).eq('Wrong body provided')
        done()
      })
  })
})
