const koa = require('koa')
const koaBodyparser = require('koa-bodyparser')
const koaRouter = require('koa-router')

const app = new koa()
const router = new koaRouter()

const { version } = require('./package.json')
const PORT = parseInt(process.env.NODE_PORT) || 3000

router.get('/', async ctx => {
  ctx.body = 'Hello, World!'
})

router.get('/version', async ctx => {
  ctx.body = {
    message: 'CD Version',
    version
  }
})

router.post('/echo', async ctx => {
  if (ctx.request.body.text) {
    ctx.body = 'Your message is: ' + ctx.request.body.text
  } else {
    ctx.body = 'Wrong body provided'
    ctx.status = 400
  }
})

app.use(koaBodyparser())
app.use(router.routes())

module.exports = {
  server: app.listen(PORT, '0.0.0.0')
}
