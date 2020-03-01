const KoaRouter = require('koa-router');
const UserLogic = require('../logic/user');
// const Sequelize = require('sequelize')

// const sequelize = new Sequelize('');

// sequelize.define()


const router = new KoaRouter();

router.get('/', async ctx => {
    ctx.body = '...';
});

router.post('/login', async (ctx, next) => {
    await UserLogic.login.call({}, ctx);
    await next();
});

router.post('/like', async (ctx, next) => {
    await UserLogic.like.call({}, ctx);
    await next();
});

router.get('/login', async (ctx, next) => {
    await UserLogic.login.call({}, ctx);
    await next();
});

// router.get('/login', async (ctx, next) => {
//     ctx.body = '...';
// });

module.exports = router;