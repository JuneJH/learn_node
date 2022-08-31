#!/usr/bin/env node
const commander = require("commander");
// 注册查询版本
commander.version(require("../../package.json").version);

// 注册初始化
commander.command("init <name>").description("初始化项目").action(require("../lib/init"));


// 获取参数
commander.parse(process.argv);


