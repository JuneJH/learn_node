/**
 * 发布订阅串联异步
 */
const {MongoClient} = require("mongodb");
const {EventEmitter} = require("events");
class SyncPublish{
    constructor(){
        this.EventEmitter = new EventEmitter();
        this.instance = new MongoClient("mongodb://121.36.51.141:27017",{
            useNewUrlParser: true 
        })
        this.instance.connect(err=>{
            if(err){
                throw new Error(err);
            }
            console.log('连接mongo成功');
            this.EventEmitter.emit("connect")
        })
    }

    bind(dbName,collection){
        return this.instance.db(dbName).collection(collection);
    }

    once(key,cb){
        this.EventEmitter.once(key,cb);
    }
}

// TODO 发布订阅串异步执行  promise 生成器 async/awiat

// 并发模拟函数

module.exports = new SyncPublish();