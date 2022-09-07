function dely(time){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve();
        },time)
    })
}

module.exports = dely;