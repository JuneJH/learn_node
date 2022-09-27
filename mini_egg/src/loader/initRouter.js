const {load} = require("./load");
function initRouter(dir,router){
    load(dir,(filename,file)=>{
        // 处理前缀
        const prefix = filename === "index" ? "":`/${filename}`;
        Object.keys(file).forEach(key=>{
            let [method,path] = key.split(" ");
            path = path === "/" ? "":path;
            router[method](prefix + path,file[key]);
            console.log(`注册路由${method} ${prefix + path}成功`)
        })
    });
    return router;
}

module.exports = {
    initRouter
}