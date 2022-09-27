const fs = require("fs");
function load(dir,callback){
    const files = fs.readdirSync(dir);
    files.forEach(filename=>{
        filename = filename.replace(".js","");
        const file = require(`${dir}/${filename}`);
        callback(filename,file);
    })
}

module.exports = {
    load,
}