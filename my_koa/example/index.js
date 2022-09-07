const MyKoa = require("../src");
const {dely} = require("../src/tools");

const app = new MyKoa();

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


app.listen(3000,()=>{
    console.log("serve start at ",3000);
})