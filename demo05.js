const Koa = require('koa');
const app = new Koa();
const fs = require('fs');

// render
function render(page) {
  return new Promise((resolve, reject) => {
    let pageUrl = `./page/${page}`;
    fs.readFile(pageUrl, 'binary', (err, data) => {
     if (err) {
      reject(err);
     } else {
       resolve(data);
     }
    })
  })
}

// router
async function router(url) {
  let page = '404.html';
  switch (url) {
    case '/':
      page = 'index.html';
      break;
    case 'index':
      page = 'index.html';
      break;
    case 'todo':
      page = 'todo.html';
      break;
    case '404':
      page = '404.html';
      break;
    default:
      break;
  }
  let html = render(page);
  console.log(html);
  return html;
}

app.use(async(ctx) => {
  // 获得url传给方法，方法返回给我们路由
  let url = ctx.request.url;
  let html =await router(url)
  ctx.body = html;
});
app.listen(3000);