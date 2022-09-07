const MyKoa = require("../src");

const app = new MyKoa();

app.use((ctx)=>{
    ctx.body = "hello myKoa!!!";
})


app.listen(3000,()=>{
    console.log("serve start at ",3000);
})