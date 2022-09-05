const { promisify } = require('util');
module.exports.clone = async function (repo, desc) {
    const download = promisify(require('download-git-repo'));
    console.log("下载中..............")
    await download(repo, desc);
    console.log("下载完成！！！！")
}