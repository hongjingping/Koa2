const Koa = require('koa');
const app = new Koa();

app.use(async (ctx) => {
  // 处理ctx
  if ( ctx.url === '/' && ctx.method === 'GET') {
    // 显示表单页面
    let html = `
    <h1>wikiHong Koa2 request POST</h1>
    <form method='POST' action='/'>
      <p>userName</p>
      <input name='userName'/><br/>
      <p>age</p>
      <input age='age'/><br/>
      <p>webSite</p>
      <input webSite='webSite'/><br/>
      <button type='submit'>submit</button>
    </form>
    `;
    ctx.body = html;
  } else if ( ctx.url === '/' && ctx.method === 'POST') {
    ctx.body = '接收到post参数';
  } else {
    ctx.body = '<h1>404</h1>';
  }
});

app.listen(3000, ()=>{
  console.log('[demo03] server is starting at port 3000')
})