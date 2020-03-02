(async function () {
    const Koa = require('koa');
    const KoaStaticCache = require('koa-static-cache');
    const KoaBodyParser = require('koa-bodyparser');
    const static = require('koa-static');
    const router = require('./routers/main');
    const session = require('koa-session');
    const path = require('path');

    const app = new Koa();
    // app.use(async (ctx,next) => {
    //     ctx.set('Access-Control-Allow-Origin','*');
    //     await next();
    // })
    // app.use(KoaStaticCache('./public', {
    //     prefix:'public',
    //     gzip:true
    // }))
    app.keys = ['some secret hurr'];
    const CONFIG = {
        key: 'koa:sess' /** (string) cookie key (default is koa:sess) */,
        /** (number || 'session') maxAge in ms (default is 1 days) */
        /** 'session' will result in a cookie that expires when session/browser is closed */
        /** Warning: If a session cookie is stolen, this cookie will never expire */
        maxAge: 86400000,
        autoCommit: true /** (boolean) automatically commit headers (default true) */,
        overwrite: true /** (boolean) can overwrite or not (default true) */,
        httpOnly: true /** (boolean) httpOnly or not (default true) */,
        signed: true /** (boolean) signed or not (default true) */,
        rolling: false /** (boolean) Force a session identifier cookie to be set on every response. The expiration is reset to the original maxAge, resetting the expiration countdown. (default is false) */,
        renew: false /** (boolean) renew session when session is nearly expired, so we can always keep user logged in. (default is false)*/,
    };

    //session把所有加密的信息 全部放到服务端，传给客户端是对应的key，同样session也是基于cookies
    app.use(session(CONFIG, app));

    app.use(KoaBodyParser());
    app.use(router.routes());

    app.use(static(path.join(__dirname, './client/dist'), { maxage: 7 * 24 * 60 * 60 * 1000 }));

    app.listen(80);
})();