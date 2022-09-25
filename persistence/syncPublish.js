const fs = require("fs");
const {EventEmitter} = require("events");
class SyncPublish{
    constructor(){
        this.EventEmitter = new EventEmitter();
    }

    run(key)

    once(key,cb){
        this.EventEmitter.once(key,cb);
    }
}

// TODO 发布订阅串异步执行  promise 生成器 async/awiat

// 并发模拟函数