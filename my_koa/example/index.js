const MyKoa = require("../src");
const {dely} = require("../src/tools");
const Router = require("../src/middleware/Router");

const app = new MyKoa();
const router = new Router();

router.get("/user",(ctx,next)=>{
    ctx.body = "{name:june,age:18}";
    next();
})
router.get("/user/list",(ctx,next)=>{
    ctx.body = "[{name:june,age:18}]";
    next();
})

app.use(async (ctx,next)=>{   
    ctx.body = "1";
    console.log(" 1 start");
    await dely(2000);
    await next();
    console.log(" 1 end")
    ctx.body += "end!!!!";

})
app.use(async (ctx,next)=>{   
    ctx.body += "2";
    console.log(" 2 start");
    await dely(2000);
    await next();
    console.log(" 2 end");
    ctx.body += "3";

})
app.use(router.routes());

app.listen(3000,()=>{
    console.log("serve start at ",3000);
})