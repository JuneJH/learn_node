const mysql = require("mysql");
// 踩坑，mysql8使用加密方式不同，mysql库不支持，所以需要更改加密方式
// alter user 'root'@'%' identified with mysql_native_password by 'root';
// host 为%代表不限制使用链接ip,为localhost即只能自己玩
const dbConfig = {
    host:"localhost",
    user:"root",
    password:"root",
    database:"Test"
}

const connect = mysql.createConnection(dbConfig);

connect.connect(err=>{
    if(err){
        throw new Error(err);
    }else{
        console.log("链接成功！！！！！！！！")
    }
});

const CREATETABLESQL = `CREATE TABLE IF NOT EXISTS users ( id INT NOT NULL AUTO_INCREMENT, name VARCHAR(45) NULL, PRIMARY KEY (id), age INT NOT NULL, sex INT NOT NULL, descrtion VARCHAR(124))`;
const INSERTSQL = `insert into users(name,age,sex,descrtion) value(?)`
const SELECTSQL = `select * from users`;
const DELETESQL = `delete from users where name='testDelete'`

connect.query(CREATETABLESQL,(err,result)=>{
    if(err){
        throw new Error(err);
    }
    console.log("result",result);
})

const testData = ["testDelete",18,1,"测试删除"];
// const testData = ["June",18,1,"非常的帅气"];
connect.query(INSERTSQL,[testData],(err,result)=>{
    if(err){
        throw new Error(err);
    }

    console.log("插入成功",result)
})

connect.query(SELECTSQL,(err,result)=>{
    if(err){
        throw new Error(err);
    }else{
        console.log("查询成功",result)
    }
});

connect.query(DELETESQL,(err,result)=>{
    if(err){
        throw new Error(err);
    }
    console.log("删除成功",result)
})








