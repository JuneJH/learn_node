module.exports = {
    "get /":async ctx=>{
        ctx.body = [{
            name:"june",
            age:18
        }]
    },
    "get /detail": async ctx =>{
        ctx.body = {
            name:"june",
            age:18
        }
    }
}