const net = require("net");
const client = net.connect(3000,"127.0.0.1");

client.write("hello serve");
client.on('data',data=>{
    console.log("收到回复：",data.toString())
})

setTimeout(()=>{
    client.write("说说话")
},3000)
