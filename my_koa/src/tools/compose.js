const dely= require("./dely");
function compose(middleware){
    return function(ctx){
        return dispatch(0);
        function dispatch(i){
            const fn = middleware[i];
            if(!fn){
                return Promise.resolve();
            }else{
                return Promise.resolve(fn(ctx,function next(){
                    return dispatch(i + 1);
                }))
            }
        }
    }
    
}
async function fn1(ctx,next){
    console.log("1 start");
    await dely(2000);
    await next();
    console.log("1 end");
}
async function fn2(ctx,next){
    console.log("2 start");
    await next();
    console.log("2 end");
}
async function fn3(ctx,next){
    console.log("3 start");
    await next();
    console.log("3 end");
}



const newFn = compose([fn1,fn2,fn3]);
newFn("123");


module.exports = compose;