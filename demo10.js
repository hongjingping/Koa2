const Koa = require('koa');
const app = new Koa();

app.use( async(ctx) => {
  // 插入cookie
  if ( ctx.url === '/index') {
    // 写入
    ctx.cookies.set(
      'name', 'wikiHong', {
        domain: '127.0.0.1',
        path: '/index',
        maxAge: 1000*60*60*24,
        expires: new Date('2018-12-31'),
        httpOnly: false,
        overwrite: false
      }
    );
    ctx.body = 'Cookie is ok, wikiHong';
  } else {
    // 写出
    if ( ctx.cookies.get('name')) {
      ctx.body = ctx.cookies.get('name');
    } else {
      ctx.body = 'hello, cookies is none';
    }
  }
})

app.listen(3000, ()=>{
  console.log('[demo02] server is starting at port 3000')
})