const UserLogic = {};

UserLogic.login = async (ctx) => {
    ctx.session.uid = 1;
    ctx.body = {
        code: 0,
        data: {
            id: 1,
            username: "ly",
        },
    };
};

UserLogic.like = async ctx => {
    // 请求带凭证 cookie
    //   let uid = ctx.cookies.get ('uid');
    let uid = ctx.session.uid;
    if (!uid) {
        return (ctx.body = {
            code: 1,
            data: '你还没有登录',
        });
    }

    ctx.body = {
        code: 0,
        data: 1,
    };
};

module.exports = UserLogic;