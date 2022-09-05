#!/usr/bin/env node
const { promisify } = require('util');
const figlet = promisify(require('figlet'));
const clear = require('clear');
const Color = require('colors');
const log = (str) => console.log(str.green);
const {clone} = require('./download')
const spawn = async (...args) => {
    const { spawn } = require('child_process'); return new Promise(resolve => {
        const proc = spawn(...args);
        proc.stdout.pipe(process.stdout);
        proc.stderr.pipe(process.stderr);
        proc.on('close', () => { resolve() })
    })
}
module.exports = async name => {
    // 打印欢迎画面
    clear();
    const data = await figlet('JJCLI  Welcome');
    console.log(data.yellow)
    log('🚀创建项目:' + name) // 从github克隆项目到指定文件夹 
    await clone('github:JuneJH/template#code', name);
    log('开始安装依赖....')
    await spawn('npm', ['i'], { cwd: `./${name}` });
    log(` 
    安装完成：
     To get Start:
      =========================== 
      cd ${name} 
      npm run serve
      ===========================
    `)

}