#!/usr/bin/env node
const commander = require("commander");
// 注册查询版本
commander.version(require("../../package.json").version);

// 注册初始化
commander.command("init <name>").description("初始化项目").action(require("../lib/init_project"));

// 生成路由
commander.command("createRouter <orignPath> <targetPath> <templatePath>").description("创建路由").action(require("../lib/create_router"));
commander.command("createTemplate <name>").description("创建函数").action(require("../lib/create_template"));

// 获取参数
commander.parse(process.argv);


