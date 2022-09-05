const fs = require('fs');
const handlebars = require('handlebars');
module.exports = async (orignPath,targetPath,templatePath) => {
    // 获取页面列表 
    const list = fs.readdirSync(orignPath)
        .filter(v => v !== 'Home.vue')
        .map(v => ({ name: v.replace('.vue', '').toLowerCase(), file: v }))
        console.log("list",list)
    // 生成路由定义 
    compile({ list },targetPath,templatePath )
    // 生成菜单

    function compile(meta, filePath, templatePath) {
        if (fs.existsSync(templatePath)) {
            const content = fs.readFileSync(templatePath).toString();
            const result = handlebars.compile(content)(meta);
            fs.writeFileSync(filePath, result);
        }
        console.log((`🚀${filePath} 创建成功`))
    }
}

// jj-cli createRouter './src/views' './src/router.js' './template/router.js.hbs'
// jj-cli createRouter './src/views' './src/App.vue' './template/App.vue.hbs'