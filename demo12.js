const Koa = require('koa');
const path = require('path');
const static = require('koa-static');

const app = new Koa();

const staticPath = './static';

app.use(static(path.join(__dirname, staticPath)));

app.use(async(ctx) => {
  ctx.body = 'hello wikiHong';
})

app.listen(3000, () => {
  console.log('[demo12.js is starting at port 3000]')
})