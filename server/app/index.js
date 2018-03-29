"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Koa = require("koa");
const Router = require("koa-router");
const serve = require("koa-static");
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
//# sourceMappingURL=index.js.map