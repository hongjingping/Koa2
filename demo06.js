const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

router
  .get('/', (ctx, next) => {
    ctx.body = 'hello, wikiHong';
  })
  .get('/todo', (ctx, next) => {
    ctx.body = 'todo page';
  })

app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(3000, () => {
  console.log('starting at port 3000');
});