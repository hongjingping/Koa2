const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

router.get('/', async(ctx, next) => {
  ctx.body='wikiHong, today is Friday';
})

app.use(router.routes())
   .use(router.allowedMethods());

app.listen(3000, () => {
  console.log('[demo09.js] is starting at port 3000');
})