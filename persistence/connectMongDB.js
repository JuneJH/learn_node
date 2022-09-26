/**
 * 连接mongodb示例
 */
const {MongoClient} = require("mongodb");
(async ()=>{
    const instance = new MongoClient("mongodb://121.36.51.141:27017",{
        useNewUrlParser: true 
    })
    // Database Name
    const dbName = 'user';
    await instance.connect();
    const db = instance.db(dbName);
    const users = db.collection("users");
    let res = "";
    res = await users.insertOne({
        name:"june",
        age:18,
        sex:0,
        descrtion:"非常的帅"
    });
    console.log("插入成功",res);

    res = await users.findOne();
    console.log("查询成功",res);

    res = await users.updateOne({name:"june"},{$set :{name:'更新june'}});
    console.log("更新成功",res)

    res = await users.deleteOne({name:"june"});
    console.log("删除成功",res)

    instance.close();

})()