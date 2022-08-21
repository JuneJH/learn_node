const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((request,response)=>{
    const {method,url,headers} = request;

    if(method === "GET" && url === "/"){
        const readStr = fs.createReadStream(path.resolve(__dirname,"./public/index.html"));
        readStr.pipe(response);

    }else if(method === "GET" && url === "/user"){
        response.writeHead(200,{
            "Content-type":"application/json"
        })
        response.end(JSON.stringify({name:"June",age:18,sex:"男"}));

    }else if(method === "GET" && headers.accept.indexOf("image/*")){
        try {
            const readStr = fs.createReadStream(path.resolve(__dirname,"./assets/images"+url));
            readStr.pipe(response);
        } catch (error) {
            response.writeHead(500,{
                "Content-type":"text/palin"
            })
            response.end("500 server error")
        }
    }else {
        response.setHeader("Content-type","text/palin");
        response.statusCode = 404;
        response.end("404 not find!!!")
    }

})


server.listen(80,()=>{
    console.log("server start at http://localhost");
})