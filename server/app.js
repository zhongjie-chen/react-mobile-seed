const Koa = require('koa');
const Pug = require('koa-pug');
const Router = require('koa-router');
const config = require('./config');

const app = new Koa();

const pug = new Pug({
  pretty: true,
  locals: {
    title: '默认标题'
  },
  viewPath: './views/'
});

const router = new Router();
router.get('*', (ctx, next) => {
  console.log(11111);
  ctx.render('index', config);
});

pug.use(app);

app.use(router.routes());

app.on('error', (err, ctx) => {
  ctx.render('index', { config });
});

app.listen(3008, () => {
  console.log('server listening port 3008');
});
