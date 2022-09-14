const net = require("net");
let socketList = [];
const app = net.createServer((socket)=>{
    console.log("有链接来了。。。。。。");
    socketList.push(socket);
    socket.on("data",data=>{
        console.log("接受数据",data.toString());
        socketList.forEach((socket,i)=>{
            socket.write("收到你的请求=》"+i+"=>"+data.toString())
        })
    });
    socket.on("close",()=>{
        console.log("断开服务")
        socketList = socketList.filter((s)=>s === socket);
    })
});



app.listen(3000,()=>{
    console.log("server start at 3000")
})