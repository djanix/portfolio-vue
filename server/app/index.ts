import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as serve from 'koa-static';

const app = new Koa();
const router = new Router();

router.get('/ping', ctx => {
  ctx.status = 200;
  ctx.body = 'pong';
});

app
  .use(serve('../client/dist'))
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000);
