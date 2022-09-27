module.exports = {
    "get /":async (ctx)=>{
        ctx.body = "hello mini-egg index page"
    },
    "post /":async ctx=>{
        const {body} = ctx.request;
        ctx.body = body;
    }
}