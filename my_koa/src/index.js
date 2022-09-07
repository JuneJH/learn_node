const http = require("http");
const context = require("./context");
const request = require("./request");
const response = require("./response");
class MyKoa {

    listen(port, callback) {
        const app = http.createServer((req, res) => {
            const ctx = this.createContext(req,res);
            this.callback && this.callback(ctx);
            ctx.res.end(ctx.body);
        });

        app.listen(port);
        callback && callback();
    }

    use(callback) {
        console.log("注册")
        this.callback = callback;
    }

    createContext (req,res){
        const ctx = Object.create(context);
        ctx.request = Object.create(request);
        ctx.response = Object.create(response);

        ctx.req = ctx.request.req = req;
        ctx.res = ctx.response.res = res;

        return ctx;
    }



}

module.exports = MyKoa;