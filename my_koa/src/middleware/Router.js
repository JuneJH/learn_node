class Router {

    routerMap = new Map();

    register(method, path, handler) {
        this.routerMap.set(method + "=>" + path, handler);
    }

    get(path, handle) {
        this.register("get", path, handle);
    }


    routes() {
        const routerMap = this.routerMap;
        return async function (ctx, next) {
            const path = ctx.url;
            const method = ctx.method;
            const target = routerMap.get(method + "=>" + path);

            if (typeof target === "function") {
                target(ctx, next);
                return;
            }

            await next();
        }
    }

}

module.exports = Router;