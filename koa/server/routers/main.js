const KoaRouter = require('koa-router');
const UserLogic = require('../logic/user');
// const Sequelize = require('sequelize')

// const sequelize = new Sequelize('');

// sequelize.define()


const router = new KoaRouter();

router.get('/server', async ctx => {
    ctx.body = '...';
});

router.post('/server/login', async (ctx, next) => {
    await UserLogic.login.call({}, ctx);
    await next();
});

router.post('/server/like', async (ctx, next) => {
    await UserLogic.like.call({}, ctx);
    await next();
});

router.get('/server/login', async (ctx, next) => {
    await UserLogic.login.call({}, ctx);
    await next();
});

// router.get('/login', async (ctx, next) => {
//     ctx.body = '...';
// });

module.exports = router;