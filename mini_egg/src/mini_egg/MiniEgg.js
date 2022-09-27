const Koa  = require("koa");
const Router = require("koa-router");
const {initRouter} = require("../loader/initRouter");
class MiniEgg{

    constructor({routerPath}){
        this.$app = new Koa();
        this.$router = new Router();
        this.$router = initRouter(routerPath,this.$router);
        this.$app.use(this.$router.routes());
    }

    start(port){
        this.$app.listen(port=3000,()=>{
            console.log("server at ",port);
        })
    }


}

module.exports = {
    MiniEgg
}