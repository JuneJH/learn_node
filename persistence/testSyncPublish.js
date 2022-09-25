function init() {
    const mongodbManage = require("./syncPublish");
    mongodbManage.once("connect", async () => {
        const doc = mongodbManage.bind("user", "users");
        res = await doc.find({}).toArray((err,data)=>{
            console.log("查询成功", data);
        });
      
    })
}

init();