const KoaRouter=require('koa-router');
// const Sequelize = require('sequelize')

// const sequelize = new Sequelize('');

// sequelize.define()


const router = new KoaRouter();

router.get('/', async ctx => {
    ctx.body = '...';
});

module.exports = router;