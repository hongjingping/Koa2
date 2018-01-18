const Koa = require('koa')
const app = new Koa()

app.use( async (ctx) => {
  ctx.body = 'hello, wikiHong'
})

app.listen(3000)
console.log('app is start-quick at port 3000')
