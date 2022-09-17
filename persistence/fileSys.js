const fs = require("fs");
const readLine = require("readline");


function set(key,val){
    let data = fs.readFileSync("./db.json",{encoding:"utf-8"});
    if(!data){
        data = {};
    }else{
        data = JSON.parse(data);
    }
    data[key] = val;
    const res = fs.writeFileSync("./db.json",JSON.stringify(data));
    console.log(`写入${key}成功`)
}

function get(key){
    let data = fs.readFileSync("./db.json",{encoding:"utf-8"});
    if(data){
        data = JSON.parse(data);
        return data[key];
    }
    return null;
}

const readObj = readLine.createInterface({
    input:process.stdin,
    output:process.stdout,
});

readObj.on("line",(input)=>{
    const [op,key,value] = input.split(" ");
    if(op === "get"){
        console.log(get(key));
    }else if(op === "set"){
        set(key,value);
    }else if(op === "exit"){
        readObj.close();
    }else{
        console.log("完善中")
    }
})

readObj.on("close",()=>{
    console.log("关闭程序");
    process.exit(0);
})